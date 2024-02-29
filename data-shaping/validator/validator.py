import pandera as pa
import pandas as pd
from .validation_models import FkCheck

# Remove the limit when printing rows to be able to see all validation issues
# pd.set_option('display.max_rows', None)


def validate_dfs(dataframes: dict[str, pd.DataFrame], schema: dict[str, pa.DataFrameSchema], check_all_tables_in_dataframes = False) -> bool:
    validated_data = {}
    validation_success = True

    for k, v in dataframes.items():
        if k in schema:
            try:    
                validated_data[k] = schema[k](v, lazy=True)
                print(f"✅ Validated table \u001b[32m{k}\u001b[37m")
            except pa.errors.SchemaErrors as err:
                validation_success = False
                print(f"❌ Could not validate table \u001b[31m{k}\u001b[37m:")
                print("Schema errors and failure cases:")
                print(err.failure_cases)  # dataframe of schema errors
                # Uncomment if the rows are needed for inspec tion
                # print("\nDataFrame object that failed validation:")
                # print(err.data)  # dataframe of schema errors
                print("")
        else:
            print(f"⚠️ \u001b[33m {k}\u001b[0m not checked as it is not present in the validation schema")

    for k, v in schema.items():
        if k not in dataframes and check_all_tables_in_dataframes:
            print(f"❌ Could not validate table \u001b[31m{k}\u001b[37m as it is not present in the dataframe.")
            

    return validation_success
        


def validate_foreign_keys(tables: dict[str, pd.DataFrame], schema: dict[str, FkCheck], show_all_indices = False) -> bool:
    validation_success = True

    # For each table to check get all the checks
    for fk_table_name, fk_checks in schema.items():
        # Only process the checks for which the table exists
        if fk_table_name not in tables:
            print(f"\n❌ Could not validate table \u001b[31m{fk_table_name}\u001b[37m as it is not present in the dataframes.")
            continue

        # Perform all the specified checks for the table
        for fk_check in fk_checks:
            fk_column_name = fk_check["fk"]
            origin_table_name = fk_check["origin_table"]
            origin_column_name = fk_check["origin_column"]
            print_current_check(fk_table_name, fk_column_name, origin_table_name, origin_column_name)
            
            # Only check the fk checks for which both the corresponding fk table and column exists
            if origin_table_name in tables and origin_column_name in tables[origin_table_name].columns:
                # Get the foreign key values
                fk_values = [v for v in tables[fk_table_name][fk_column_name].values if is_fk_value_valid(v)]
                # Extract the fk column values
                origin_values = tables[origin_table_name][origin_column_name].values

                # For all fk values standardise them and store if not present
                absent_values = []
                for fk in fk_values:
                    clean_fk = standardise_value(fk)
                    if clean_fk not in absent_values and clean_fk not in origin_values:
                        absent_values.append(clean_fk)
                
                # Check if there are any absent values and report accordingly
                if len(absent_values) == 0:
                    print_check_passed(fk_table_name, fk_column_name, origin_table_name, origin_column_name)
                else:
                    validation_success = False
                    for absent_value in absent_values:
                        occurrence_indices = find_indexes_for_value(tables[fk_table_name], fk_column_name, absent_value)
                        print_indices_for_missing_value(missing_value=absent_value, occurrence_indices=occurrence_indices, show_all_indices=show_all_indices)
            
            else:
                print(f"\n❌ Could not validate column \u001b[31m{origin_column_name}\u001b[37m in table \u001b[31m{origin_table_name}\u001b[37m as it is not present in the origin table.")
                pass
        
    return validation_success


# Make sure the value is a proper foreign key
def is_fk_value_valid(value):
    return value is not None and not pd.isna(value) and not pd.isnull(value)


# Clean out the NaN, NA, None, and convert floats to ints
def standardise_value(value):
    if is_fk_value_valid(value) and isinstance(value, float):
        return int(value) 
    else:
        return value


# Find the indexes where the values appear
def find_indexes_for_value(table: pd.DataFrame, column_name: str, value: any) -> list[int]:
    return table.index[table[column_name]==value].tolist()


def print_check_passed(fk_table_name, fk_column_name, origin_table_name, origin_column_name):
    print(f'\t✅ All elements of \u001b[32m{fk_table_name}.{fk_column_name}\u001b[37m are in \u001b[32m{origin_table_name}.{origin_column_name}\u001b[37m foreign key column.')


def print_indices_for_missing_value(missing_value: any, occurrence_indices: list[int], show_all_indices):
    if len(occurrence_indices) < 10 or show_all_indices:
        print(f"\t❌ \033[0;31m{missing_value}\u001b[37m at indices \033[0;33m{occurrence_indices} \u001b[37m")
    else:    
        print(f"\t❌ \033[0;31m{missing_value}\u001b[37m at indices \033[0;33m[{occurrence_indices[0]}, {occurrence_indices[1]}, {occurrence_indices[2]} ... {occurrence_indices[-3]}, {occurrence_indices[-2]}, {occurrence_indices[-1]}]\u001b[37m")


def print_current_check(fk_table_name, fk_column_name, origin_table_name, origin_column_name):
    print("\n🔍 Table: \033[0;36m" + fk_table_name + "." + fk_column_name + '\u001b[37m - Origin Table: \033[0;36m' + origin_table_name + '.' + origin_column_name + "\u001b[37m")