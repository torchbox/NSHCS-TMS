# NSHCS-TMS
National School of Healthcare Science Trainee Management System 

## To run the data shaping script
1. Copy the existing data into `NSHCS-TMS/data-shaping/data/old_model` as `SampleData_DataTables.xlsx` and `SampleData_ReferenceTables.xlsx`
2. Install a virtual environemnt `python3 -m venv .venv`
3. Activate the virtual environmnet `source .venv/bin/activate`
4. `cd data-shaping`
5. Install the requirements from the `pip install -r requirements`
6. Run `python3 main.py`
7. If you want to see additional options, run `python3 main.py --help`