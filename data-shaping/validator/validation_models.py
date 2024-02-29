from typing import TypedDict

class FkCheck(TypedDict):
    fk: str
    origin_table: str
    origin_column: str