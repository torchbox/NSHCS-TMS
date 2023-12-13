from .schema import VALIDATION_SCHEMA
import pandera as pa
import pandas as ps


def validate_dfs(dataframes: dict[str, ps.DataFrame]) -> bool:
    validated_data = {}
    validation_success = True
    
    for k, v in dataframes.items():
        if k in VALIDATION_SCHEMA:
            try:    
                validated_data[k] = VALIDATION_SCHEMA[k](v, lazy=True)
            except pa.errors.SchemaErrors as err:
                validation_success = False
                print(f"\n\nCould not validate the table {k}:\n")
                print(err.failure_cases)  # dataframe of schema errors
        else:
            print(f"{k} not checked as it is not present in the validation schema")

    return validation_success
        