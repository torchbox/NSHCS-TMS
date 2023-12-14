import pandas as pd
from typing import Dict
from datetime import datetime

def clean_date(excel_date: datetime):
    if not excel_date:
        return None
    return excel_date.date()

def read_spreadsheet(path: str) -> Dict[str, pd.DataFrame]:
    xls = pd.ExcelFile(path)
    sheet_names = xls.sheet_names
    
    sheets = {}
    for sheet_name in sheet_names:
        sheets[sheet_name] = pd.read_excel(xls, sheet_name=sheet_name,
        converters={
            'CNENDT': clean_date,
            'CNSTDT': clean_date,
            'EMSTDT': clean_date,
            'EMLVDT': clean_date,
            'OSDT': clean_date,
        })

    return sheets