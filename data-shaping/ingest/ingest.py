import pandas as pd
from typing import Dict
from datetime import datetime

def clean_date(excel_date: datetime):
    if not excel_date:
        return None
    # date = excel_date.date()
    return excel_date.date()
    # return pd.to_datetime(excel_date, unit='D', origin='1899-12-30').date
    # return pd.to_datetime(excel_date, unit='D', origin='1899-12-30')
    # return pd.TimedeltaIndex([excel_date], unit='d') + datetime(1899,12,30)

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
        })

    return sheets