import pandera as pa
from datetime import date

VALIDATION_SCHEMA = {
    # TraineeStatus
    "tlkpStatus": pa.DataFrameSchema({
        "STID": pa.Column(int),
        "STSTAT": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "STORDER": pa.Column(int)
        # TODO: is_support is missing
    }),
    # EmailPreference
    "tlkpEmailPref": pa.DataFrameSchema({
        "ETID": pa.Column(int),
        "ETPREF": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # TrainingProgram
    "tlkpProgramType": pa.DataFrameSchema({
        "PRID": pa.Column(int),
        "PRPRGM": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # Salary
    "tlkpSalary": pa.DataFrameSchema({
        "SRID": pa.Column(int),
        "SRSALARY": pa.Column(str),
    }),
    # JobSector
    "tlkpFirstJobType": pa.DataFrameSchema({
        "FJID": pa.Column(int),
        "FJTYPE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    }),
    # NHSBand
    "tlkpAFCBand": pa.DataFrameSchema({
        "BDID": pa.Column(int),
        "BDBAND": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # ContractType
    "tlkpContractType": pa.DataFrameSchema({
        "COID": pa.Column(int),
        "COTYPE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # Title
    "tlkpTitle": pa.DataFrameSchema({
        "TTID": pa.Column(int),
        "TTTITLE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # Gender
    "tlkpGender": pa.DataFrameSchema({
        "GNID": pa.Column(int),
        "GNGNDR": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # Ethnicity
    "tlkpEthnic": pa.DataFrameSchema({
        "ECID": pa.Column(int),
        "ECDESC": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # DisabilityCategory
    "tlkpDisabilityCategory": pa.DataFrameSchema({
        "DCID": pa.Column(int),
        "DCDESC": pa.Column(str),
    }),
    # DisabilityStatus
    "tlkpDisabilityAnswer": pa.DataFrameSchema({
        "DSID": pa.Column(int),
        "DSDESC": pa.Column(str),
    }),
    # Religion
    "tlkpReligion": pa.DataFrameSchema({
        "RLID": pa.Column(int),
        "RLREL": pa.Column(str),
    }),
    # SexualOrientation
    "tlkpSexor": pa.DataFrameSchema({
        "SOID": pa.Column(int),
        "SODESC": pa.Column(str),
    }),
    # Nationality
    "tlkpCountries": pa.DataFrameSchema({
        "CTID": pa.Column(int),
        "CTCNTR": pa.Column(str),
    }),
    # MaritalStatus
    "tlkpMaritalStatus": pa.DataFrameSchema({
        "MRID": pa.Column(int),
        "MRDESC": pa.Column(str),
    }),
    # FundingProvider
    "tlkpLETB": pa.DataFrameSchema({
        "REID": pa.Column(int),
        "RELETB": pa.Column(str),
        "REABBR": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    }),
    # HEIAwardingInstitution
    "tlkpHEI": pa.DataFrameSchema({
        "HEID": pa.Column(int),
        "HENM": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # HEIOutcome
    "tlkpMScOutcome": pa.DataFrameSchema({
        "OCID": pa.Column(int),
        "OCOTCM": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=20)),
    }),
    # HSSTPathway
    "tlkpHSSTPathway": pa.DataFrameSchema({
        "PTID": pa.Column(int),
        "PTDESC": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "PTCODE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    }),
    # Specialism
    "tlkpSpecialism": pa.DataFrameSchema({
        "SPID": pa.Column(int),
        "SPSPEC": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # RecruitmentMethod
    "tlkpEntryType": pa.DataFrameSchema({
        "ENID": pa.Column(int),
        "ENENTR": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # Contact
    "tlkpContacts": pa.DataFrameSchema({
        "CTID": pa.Column(int),
        "CTFNAME": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "CTSNAME": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "CTEML": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=150), nullable=True),
        "CTPHONE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True, coerce=True),
        "CTOFUN": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "CTOFUID": pa.Column("Int64", nullable=True, coerce=True),
    }),
    # ContactType
    "tlkpContactType": pa.DataFrameSchema({
        "NTID": pa.Column(int),
        "NTTYPE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # AssessmentType
    "tlkpOSFAType": pa.DataFrameSchema({
        "OTID": pa.Column(int),
        "OTTYPE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # Outcome
    "tlkpReviewOutcomes": pa.DataFrameSchema({
        "AOID": pa.Column(int),
        "AOPRGM": pa.Column(int),
        "AOCODE": pa.Column(int),
        "AOOTCODE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=10), coerce=True, nullable=True),
        "AOSTM": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255), nullable=True),
        "AODESC": pa.Column(str),
    }),
    # ExitAssessmentOutcome
    "tlkpOSFAResult": pa.DataFrameSchema({
        "RSID": pa.Column(int),
        "RSLT": pa.Column(str),
    }),
    # Employer
    "tlkpTrusts": pa.DataFrameSchema({
        "TSID": pa.Column(int),
        "TSNHS": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1])), # Since coerce=True, the validator will first look to convert the column from 1 and zero to bool
        "TSTRUST": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # Season
    "tlkpSeason": pa.DataFrameSchema({
        "SNID": pa.Column(int),
        "SNSSN": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    }),
    # LeaveOfAbsenceRecord
    "tblSickLeave": pa.DataFrameSchema({
        "SLID": pa.Column(int),
        "RGID": pa.Column(int),
        "SLSTDT": pa.Column(date, coerce=True),
        "SLRTDT": pa.Column(date, nullable=True, coerce=True),
        "SLRSN": pa.Column(str, nullable=True),
        "SLCMNTS": pa.Column(str, nullable=True),
    }),
    # SupportRecord
    "tblSupport": pa.DataFrameSchema({
        "PSID": pa.Column(int),
        "RGID": pa.Column(int),
        "PSDT": pa.Column(date, coerce=True),
        "PSDESC": pa.Column(str, nullable=True),
    }),
    # TraineeContact
    "tblTraineeContacts": pa.DataFrameSchema({
        "CNID": pa.Column(int),
        "RGID": pa.Column("Int64", coerce=True),
        "CNTYPE": pa.Column("Int64", nullable=True, coerce=True),
        "CNCTCT": pa.Column("Int64", nullable=True, coerce=True),
        "CNSTDT": pa.Column(date, nullable=True, coerce=True),
        "CNENDT": pa.Column(date, nullable=True, coerce=True),
        "CNCURTO": pa.Column(bool, coerce=True),
    }),
    # AnnualReviewProgression
    "tblARP": pa.DataFrameSchema({
        "ARID": pa.Column(int),
        "RGID": pa.Column(int),
        "ARDT": pa.Column(date, nullable=True, coerce=True),
        "AROTCM": pa.Column(int),
        "ARREVOTCM": pa.Column("Int64", nullable=True, coerce=True),
        "ARCMNTS": pa.Column(str, nullable=True),
    }),
    # MidReviewProgression
    "tblMRP": pa.DataFrameSchema({
        "MRID": pa.Column(int),
        "RGID": pa.Column(int),
        "MRDT": pa.Column(date, nullable=True, coerce=True),
        "MROTCM": pa.Column("Int64", coerce=True),
        "MRREVOTCM": pa.Column("Int64", nullable=True, coerce=True),
        "MRCMNTS": pa.Column(str, nullable=True),
    }),
    # EmploymentRecord
    "tblEmployers": pa.DataFrameSchema({
        "EMID": pa.Column("Int64", coerce=True),
        "RGID": pa.Column("Int64", coerce=True),
        "EMEMP": pa.Column("Int64", coerce=True),
        "EMSITE": pa.Column("Int64", coerce=True, nullable=True),
        "EMSTDT": pa.Column(date),
        "EMLVDT": pa.Column(date, nullable=True),
        "EMCMT": pa.Column(str, nullable=True),
    }),
    # ExitAssessmentRecord
    "tblOSFA": pa.DataFrameSchema({
        "OSID": pa.Column("Int64", coerce=True),
        "RGID": pa.Column("Int64", coerce=True),
        "OSDT": pa.Column(date, nullable=True),
        "OSTYPE": pa.Column("Int64", coerce=True, nullable=True),
        "OSRSLT": pa.Column("Int64", coerce=True, nullable=True),
        "OSCMNT": pa.Column(str, nullable=True),
    }),
    # # Trainee
    # "tblRegistration": pa.DataFrameSchema({
    #     "SNID": pa.Column(int),
    #     "SNSSN": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    # }),
    # # EmployerLocation
    # "tlkpHospital": pa.DataFrameSchema({
    #     "SNID": pa.Column(int),
    #     "SNSSN": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    # })
}