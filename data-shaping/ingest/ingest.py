import pandas as pd
from typing import Dict

def read_spreadsheet(path: str) -> Dict[str, pd.DataFrame]:
    xls = pd.ExcelFile(path)
    sheet_names = xls.sheet_names
    
    sheets = {}
    for sheet_name in sheet_names:
        sheets[sheet_name] = pd.read_excel(xls, sheet_name=sheet_name)

    return sheets