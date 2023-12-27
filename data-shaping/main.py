from ingest.ingest import read_spreadsheet 
from output.output import transfer_data, transfer_leave_of_absence_record, transfer_support_record, transfer_trainee_contact, transfer_annual_review_progression, transfer_employment_record, transfer_exit_assessment_record, transfer_trainees, transfer_mid_review_progression, transfer_locations
from validator.validator import validate_dfs
import os
import sys
from argparse import ArgumentParser

parser = ArgumentParser()
parser.add_argument('--ignore-errors', dest='ignore_errors', action='store_true', default=False, help='Ignore the validation errors and continue the execution of the script.')  
args = parser.parse_args()

INPUT_DATA_TABLES_PATH = 'data/old_model/SampleData_DataTables.xlsx'
INPUT_REFERENCE_TABLES_PATH = 'data/old_model/SampleData_ReferenceTables.xlsx'

OUTPUT_DATABASE_PATH = './data/new_model/Database.xlsx'

data_tables = read_spreadsheet(INPUT_DATA_TABLES_PATH)
reference_tables = read_spreadsheet(INPUT_REFERENCE_TABLES_PATH)

reference_tables_validation_success = validate_dfs(reference_tables)
data_tables_validation_success = validate_dfs(data_tables)

if (not (reference_tables_validation_success and data_tables_validation_success)) and not args.ignore_errors:
    exit()

if os.path.exists(OUTPUT_DATABASE_PATH):
    os.remove(OUTPUT_DATABASE_PATH)

sheets = {**reference_tables, **data_tables}
transfer_data(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_leave_of_absence_record(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_support_record(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_trainee_contact(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_annual_review_progression(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_mid_review_progression(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_employment_record(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_exit_assessment_record(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_trainees(path=OUTPUT_DATABASE_PATH, sheets=sheets)
transfer_locations(path=OUTPUT_DATABASE_PATH, sheets=sheets)
