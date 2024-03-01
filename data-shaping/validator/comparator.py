import pandas as pd
from utils.separator import print_separator

def are_table_names_same(new_tables: dict[str, pd.DataFrame], old_tables: dict[pd.DataFrame]) -> bool:
    are_same = True
    for table_name, _ in new_tables.items():
        print("\n🔍 Checking if table: \033[0;36m" + table_name + ":\u001b[37m is in old file.")

        if table_name not in old_tables:
            are_same = False
            print("\t❌ \033[0;31m" + table_name + "\u001b[37m not amongst old tables")
        else:
            print(f'\t✅ Present')

        

    for table_name, _ in old_tables.items():
        print("\n🔍 Checking if table: \033[0;36m" + table_name + ":\u001b[37m is in new file.")
        if table_name not in new_tables:
            are_same = False
            print("\t❌ \033[0;31m" + table_name + "\u001b[37m not amongst new tables")
        else:
            print(f'\t✅ Present')
    
    return are_same


def are_column_names_same(new_tables: dict[str, pd.DataFrame], old_tables: dict[pd.DataFrame]) -> bool:
    are_same = True
    for table_name, table in new_tables.items():
        print("\n🔍 Checking columns in table: \033[0;36m" + table_name + "\u001b[37m")
        if table_name in old_tables:
            new_table_columns_set = set(table.columns.values.tolist())
            old_table_columns_set = set(old_tables[table_name].columns.values.tolist())

            columns_only_present_in_new = list(new_table_columns_set - old_table_columns_set)
            columns_only_present_in_old = list(old_table_columns_set - new_table_columns_set)

            if len(columns_only_present_in_new) > 0:
                print(f"\t❌ For table \033[0;31m{table_name}\u001b[37m, columns not present in the old file: \033[0;33m", ", ".join(columns_only_present_in_new) + " \u001b[37m")
                are_same = False
            
            elif len(columns_only_present_in_old) > 0:
                print(f"\t❌ For table \033[0;31m{table_name}\u001b[37m, columns not present in the new file: \033[0;33m", ", ".join(columns_only_present_in_old) + " \u001b[37m")
                are_same = False

            else:
                print(f'\t✅ Columns match.')

    return are_same


# NB: This function only compares among the same columns and assumes the first column to be an unique ID
def are_reference_table_values_same(new_tables: dict[str, pd.DataFrame], old_tables: dict[pd.DataFrame]) -> bool:
    are_same = True
    for table_name, _ in new_tables.items():
        print("\n🔍 Checking values in table: \033[0;36m" + table_name + "\u001b[37m")
        if table_name in old_tables and table_name in old_tables:
            if new_tables[table_name].equals(old_tables[table_name]):
                print(f'\t✅ Values match.')
                continue
            
            new_table_columns = set(new_tables[table_name].columns.values.tolist())
            old_table_columns = set(old_tables[table_name].columns.values.tolist())

            if len(new_table_columns.symmetric_difference(old_table_columns)) > 0:
                print("\t⛔ Column mismatch among datasets.")

            common_columns = list(new_table_columns.intersection(old_table_columns))
            id_columns = [x for x in common_columns if x.upper().endswith("ID")]
            if len(id_columns) != 1:
                print(f"\t❌ No single ID column identified among common columns {common_columns} - could not compare.")

            id_column_name = id_columns[0]
            overlapping_dataframe_new = new_tables[table_name][common_columns]
            overlapping_dataframe_old = old_tables[table_name][common_columns]

            # Get the ids
            new_ids = overlapping_dataframe_new[id_column_name].values.tolist()
            old_ids = overlapping_dataframe_old[id_column_name].values.tolist()

            # Check ids existing in both
            overlapping_ids = list(set(new_ids).intersection(set(old_ids)))
            changed_ids = []
            added_ids = list(set(new_ids) - set(old_ids))
            removed_ids = list(set(old_ids) - set(new_ids))

            for id in overlapping_ids:
                new_row = overlapping_dataframe_new.loc[overlapping_dataframe_new[id_column_name] == id].iloc[0]
                old_row = overlapping_dataframe_old.loc[overlapping_dataframe_old[id_column_name] == id].iloc[0]
                if not new_row.equals(old_row):
                    changed_ids.append(id)

            if len(changed_ids) > 0:
                are_same = False
                print(f"\t❌ IDs changed: \033[0;33m{changed_ids}\u001b[37m")

            if len(added_ids) > 0:
                are_same = False
                print(f"\t❌ IDs added: \033[0;33m{added_ids}\u001b[37m")

            if len(removed_ids) > 0:
                are_same = False
                print(f"\t❌ IDs removed: \033[0;33m{removed_ids}\u001b[37m")
                
        else:
            print("\t❌ Table not present in the old datasets.")
    
    return are_same


def compare_two_input_files(new_tables: dict[str, pd.DataFrame], old_tables: dict[pd.DataFrame]) -> bool:
    are_same = True
    print_separator("Comparing Reference Table Names")
    are_same = are_table_names_same(new_tables, old_tables) and are_same

    print_separator("Comparing Reference Table Column Names")
    are_same = are_column_names_same(new_tables, old_tables) and are_same

    print_separator("Comparing Reference Table Values")
    are_same = are_reference_table_values_same(new_tables, old_tables) and are_same

    return are_same