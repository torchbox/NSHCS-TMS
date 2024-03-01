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

def drop_if_not_a_number(value):
    if type(value) == int or type(value) == float:
        return value
    return None

def clean_date_nans(value):
    if pd.isna(value):
        return None
    return value

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
            'RGCERTDT': clean_date,
            'SLSTDT': add_null_date,
            'PSDT': add_null_date,
            'RGHEMTH': drop_if_not_a_number,
            'RGHCPATH': drop_if_not_a_number,
            'RGMScOTCM': drop_if_not_a_number,
            'RGNAT': drop_if_not_a_number,
            'hei_qualification_date': clean_date_nans,
            'hei_extension_date': clean_date_nans,
            'program_certification_date': clean_date_nans,
            'hsst_portfolio_comp_date': clean_date_nans,
            'hsst_expected_exit_date': clean_date_nans,
            'hsst_arp_comp_date': clean_date_nans,
            'hsst_dclin_part_a_comp_date': clean_date_nans,
            'hsst_dclin_part_b_comp_date': clean_date_nans,
            'hsst_dclin_part_c1_comp_date': clean_date_nans,
            'hsst_dclin_part_c2_comp_date': clean_date_nans,
            'hsst_fcrpath_comp_date': clean_date_nans,
            'hsst_iaps_comp_date': clean_date_nans,
            'hsst_phd_comp_date': clean_date_nans,
            'hsst_ceng_comp_date': clean_date_nans,
            'hsst_portfolio_signed_date': clean_date_nans,
            'program_leaving_date': clean_date_nans,
            'portf_expected_comp_date': clean_date_nans,
            'portf_actual_comp_date': clean_date_nans,
            'hcpc_registration_date': clean_date_nans
        })

    return sheets