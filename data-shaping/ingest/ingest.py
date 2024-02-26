import pandas as pd
from typing import Dict, Optional, Union
from datetime import datetime, date

def clean_date(excel_date: datetime):
    if not excel_date:
        return None
    return excel_date.date()

def add_null_date(excel_date: Optional[Union[datetime, date]]):
    if not excel_date or excel_date == 'NULL':
        return date(1900, 1, 2)
    elif isinstance(excel_date, datetime):
        return excel_date.date()
    return excel_date

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
            'RGDOB': clean_date,
            'RGMScDT': clean_date,
            'RGHCDCSBDT': clean_date,
            'RGHCCENGDT': clean_date,
            'RGFRSTDT': clean_date,
            'SLSTDT': add_null_date,
            'PSDT': add_null_date,
        })

    return sheets