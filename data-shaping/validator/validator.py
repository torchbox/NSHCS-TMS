from .schema import VALIDATION_SCHEMA
import pandera as pa
import pandas as pd

# Remove the limit when printing rows to be able to see all validation issues
# pd.set_option('display.max_rows', None)


def validate_dfs(dataframes: dict[str, pd.DataFrame]) -> bool:
    validated_data = {}
    validation_success = True

    for k, v in dataframes.items():
        if k in VALIDATION_SCHEMA:
            try:    
                validated_data[k] = VALIDATION_SCHEMA[k](v, lazy=True)
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

    return validation_success
        