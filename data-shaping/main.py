import os
from argparse import ArgumentParser

from ingest.ingest import read_spreadsheet
from output.output import transfer_data, transfer_sick_leaves, transfer_support_record, transfer_trainee_contact, transfer_annual_review_progression, \
    transfer_employment_record, transfer_exit_assessment_record, transfer_trainees, transfer_mid_review_progression, transfer_career_breaks, transfer_mat_pat_leaves
from validator.schema import VALIDATION_SCHEMA
from validator.schema_output import VALIDATION_SCHEMA_OUTPUT
from validator.foreign_key_schema_output import FOREIGN_KEY_SCHEMA as FOREIGN_KEY_SCHEMA_OUTPUT
from validator.foreign_key_schema_input import FOREIGN_KEY_SCHEMA as FOREIGN_KEY_SCHEMA_INPUT
from validator.validator import validate_dfs, validate_foreign_keys
from validator.comparator import compare_two_input_files
from utils.separator import print_separator

parser = ArgumentParser()
parser.add_argument('--ignore-errors', dest='ignore_errors', action='store_true', default=False, help='Ignore the validation errors and continue the execution of the script.')
parser.add_argument('--rows', dest='rows', action='store', default=None, help='Specify the number of rows in the Registration table to process.')
parser.add_argument('--show-all-indices', dest='show_all_indices', action='store_true', default=False, help='Show all indices of fk columns that are not present in the fk (reference) table.')
parser.add_argument('--compare-reference-tables', dest='ref_tables_filename', action='store', default=None, help='Specify the name of the old reference tables file to compare with, including the extension. The file is expected to be in the data/old_model/ folder and if not present, an error will be thrown.')
args = parser.parse_args()

INPUT_DATA_TABLES_PATH = 'data/old_model/Data_Tables.xlsx'
INPUT_REFERENCE_TABLES_PATH = 'data/old_model/Reference_Tables.xlsx'

OUTPUT_DATABASE_PATH = './data/new_model/Database.xlsx'

data_tables = read_spreadsheet(INPUT_DATA_TABLES_PATH)
reference_tables = read_spreadsheet(INPUT_REFERENCE_TABLES_PATH)

comparison_successful = True

# If flag passed, read and compare the old reference tables
if args.ref_tables_filename:
    OLD_REFERENCE_TABLES_PATH = f'data/old_model/{args.ref_tables_filename}'
    old_reference_tables = read_spreadsheet(OLD_REFERENCE_TABLES_PATH)
    comparison_successful = compare_two_input_files(new_tables=reference_tables, old_tables=old_reference_tables)



print_separator("Shape Validation")
shape_validation_success = validate_dfs(reference_tables | data_tables, VALIDATION_SCHEMA)

print_separator("Foreign Key Validation")
fk_validation_success = validate_foreign_keys(data_tables | reference_tables, FOREIGN_KEY_SCHEMA_INPUT, show_all_indices=args.show_all_indices)

if (not (shape_validation_success and fk_validation_success and comparison_successful)) and not args.ignore_errors:
    print_separator("Input Validation Failed")
    print("Schema validation: " + ("Passed ✅" if shape_validation_success else "Failed ❌"))
    print("Foreign keys validation: " + ("Passed ✅" if fk_validation_success else "Failed ❌"))
    if args.ref_tables_filename:
        print("Comparison: " + ("Passed ✅" if comparison_successful else "Failed ❌"))

    exit()

if os.path.exists(OUTPUT_DATABASE_PATH):
    os.remove(OUTPUT_DATABASE_PATH)

print_separator("Transferring Data")
sheets = {**reference_tables, **data_tables}
transfer_data(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_sick_leaves(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_career_breaks(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_mat_pat_leaves(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_sick_leaves(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_support_record(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_trainee_contact(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_annual_review_progression(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_mid_review_progression(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_employment_record(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_exit_assessment_record(path=OUTPUT_DATABASE_PATH, sheets=sheets)
# transfer_locations(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_trainees(path=OUTPUT_DATABASE_PATH, sheets=sheets, rows=int(args.rows) if args.rows is not None else None)

output_tables = read_spreadsheet(OUTPUT_DATABASE_PATH)

print_separator("Shape Validation")
output_validation_success = validate_dfs(output_tables, VALIDATION_SCHEMA_OUTPUT, check_all_tables_in_dataframes=True)

print_separator("Foreign Key Validation")
fk_validation_success = validate_foreign_keys(output_tables, FOREIGN_KEY_SCHEMA_OUTPUT, show_all_indices=args.show_all_indices)

print_separator("Output Validation " + ("Passed" if output_validation_success and fk_validation_success else "Failed"))
print("Schema validation: " + ("Passed ✅" if shape_validation_success else "Failed ❌"))
print("Foreign keys validation: " + ("Passed ✅" if fk_validation_success else "Failed ❌"))
