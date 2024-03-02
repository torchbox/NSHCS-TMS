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
        "RENTN": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "RELEG": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1]), nullable=True),
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
    # HSSTCohort
    "tlkpHSSTCohort": pa.DataFrameSchema({
        "HCID": pa.Column(int),
        "HCCOHORT": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100))
    }),
    # Specialism
    "tlkpSpecialism": pa.DataFrameSchema({
        "SPID": pa.Column(int),
        "SPSPEC": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "SPABBR": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
        "SPTHEME": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "SPDIV": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "SPASP": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "SPROTv1": pa.Column(str, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "SPROTv2": pa.Column(str, coerce=True, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "SPEXPROT": pa.Column(int, nullable=True, coerce=True),
        "SPEXPSPEC": pa.Column(int, nullable=True, coerce=True),
        "SPCURCODE": pa.Column(str, coerce=True, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=100)),
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
        "CTSTPAC": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "CTSTPDT": pa.Column(date, nullable=True),
        "CTHSTAC": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "CTHSTDT": pa.Column(date, nullable=True),
        "CTETPAC": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "CTETPDT": pa.Column(date, nullable=True),
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
        "TSNHS": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        # Since coerce=True, the validator will first look to convert the column from 1 and zero to bool
        "TSTRUST": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "TSICB": pa.Column("Int64", nullable=True, coerce=True),
    }),
    # ICB
    "tlkpICB": pa.DataFrameSchema({
        "ICID": pa.Column(int),
        # Since coerce=True, the validator will first look to convert the column from 1 and zero to bool
        "ICNAME": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "ICLETB": pa.Column("Int64", nullable=False, coerce=True),
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
        "PSDT": pa.Column(date),
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
        "EMSTDT": pa.Column(date, nullable=True),
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
    # EmployerLocations a bit of a freestyle validation as direct description not present in model
    "tlkpHospital": pa.DataFrameSchema({
        "HSID": pa.Column(int),
        "HSNAME": pa.Column(str),
        "HSTRUST": pa.Column("Int64", coerce=True, nullable=True),
        "HSLETB": pa.Column("Int64", coerce=True, nullable=True),
    }),
    # Trainee and TrainingRecord and PostTraining
    "tblRegistration": pa.DataFrameSchema({
        "RGID": pa.Column(int),
        "RGSCID": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), coerce=True),
        "RGTITLE": pa.Column("Int64", coerce=True, nullable=True),
        "RGSNAME": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGFNAME": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGDOB": pa.Column(date, nullable=True),
        "RGETH": pa.Column("Int64", coerce=True, nullable=True),
        "RGETHO": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=150), nullable=True),
        "RGDISABL": pa.Column("Int64", coerce=True, nullable=True),
        "RGDISCAT": pa.Column("Int64", coerce=True, nullable=True),
        "RGDSDET": pa.Column(str, nullable=True),
        "RGGEN": pa.Column("Int64", coerce=True, nullable=True),
        "RGSEOR": pa.Column("Int64", coerce=True, nullable=True),
        "RGSEORO": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=150), coerce=True, nullable=True),
        "RGREL": pa.Column("Int64", coerce=True, nullable=True),
        "RGRELO": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=150), coerce=True, nullable=True),
        "RGNAT": pa.Column("Int64", coerce=True, nullable=True),
        "RGMAR": pa.Column("Int64", coerce=True, nullable=True),
        "RGADD1": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "RGADD2": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "RGADD3": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "RGPCODE": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=20), coerce=True, nullable=True),
        "RGWKEML": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGWKPHN": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "RGACEML": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGPSEML": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGEMPR": pa.Column("Int64", coerce=True, nullable=True),
        "RGPSPHN": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "RGLETB": pa.Column("Int64", coerce=True, nullable=True),
        "RGOLDLETB": pa.Column("Int64", coerce=True, nullable=True),
        "RGFUND": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGPRGM": pa.Column("Int64", coerce=True, nullable=True),
        "RGHCHRT": pa.Column("Int64", coerce=True, nullable=True),
        "RGSTAT": pa.Column("Int64", coerce=True, nullable=True),
        "RGWTE": pa.Column(float, nullable=True),
        "RGOFID": pa.Column("Int64", coerce=True, nullable=True),
        "RGOLEECREF": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGDEF": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGDEFCM": pa.Column(str, nullable=True),

        # TrainingRecord
        "RGMScCMP": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGMScDT": pa.Column(date, coerce=True, nullable=True),
        "RGMScOTCM": pa.Column("Int64", nullable=True, coerce=True),
        "RGMScEX": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGMScEXDT": pa.Column(date, coerce=True, nullable=True),
        "RGMSCEXDTL": pa.Column(str, nullable=True),
        "RGCERTIS": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGCERTDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCPATH": pa.Column("Int64", coerce=True, nullable=True),
        "RGHCPORT": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCPORTDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCARP": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCARPDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCDCSA": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCDCSADT": pa.Column(date, coerce=True, nullable=True),
        "RGHCDCSB": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCDCSBDT": pa.Column(date, nullable=True),
        "RGHCDCSC1": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCDCSC1DT": pa.Column(date, coerce=True, nullable=True),
        "RGHCDCSC2": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCDCSC2DT": pa.Column(date, coerce=True, nullable=True),
        "RGHCFRC": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCFRCDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCIAPS": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCIAPSDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCPHD": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCPHDDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCCENG": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        # Pandera fails if entire column is empty and we try to coerce it to a date (unsure about other datatypes)
        "RGHCCENGDT": pa.Column(date, nullable=True),
        "RGHCSUP": pa.Column(bool, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RHCSUPDT": pa.Column(date, coerce=True, nullable=True),
        "RGLVDT": pa.Column(date, coerce=True, nullable=True),
        "RGLVRS": pa.Column(str, coerce=True, nullable=True),
        "RGLVCM": pa.Column(str, nullable=True),
        "RGOSRA": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGOSRADTL": pa.Column(str, nullable=True),
        "RGHCPC": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=20), nullable=True),
        "RGHCPCDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCMTH": pa.Column("Int64", coerce=True, nullable=True),
        "RGHCYR": pa.Column("Int64", coerce=True, nullable=True),
        "RGHEMTH": pa.Column("Int64", coerce=True, nullable=True),
        "RGHEYR": pa.Column("Int64", coerce=True, nullable=True),
        "RGSSMTH": pa.Column("Int64", coerce=True, nullable=True),
        "RGCHRT": pa.Column("Int64", coerce=True, nullable=True),
        "RGSEMTH": pa.Column("Int64", coerce=True, nullable=True),
        "RGANEX": pa.Column("Int64", coerce=True, nullable=True),
        "RGHEXCM": pa.Column(date, coerce=True, nullable=True),
        "RGSPEC": pa.Column("Int64", coerce=True, nullable=True),
        "RGENTRY": pa.Column("Int64", coerce=True, nullable=True),
        "RGHEI": pa.Column("Int64", coerce=True, nullable=True),
        "RGOLEXCMDT": pa.Column(date, coerce=True, nullable=True),
        "RGOLCMPDT": pa.Column(date, coerce=True, nullable=True),
        "RGHCREQ": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCSREQ": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGHCNM": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=200), nullable=True),
        "RGHCNUM": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "RGOLEXT": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "RGEXICYR": pa.Column("Int64", coerce=True, nullable=True),
        "RGEXICSN": pa.Column("Int64", coerce=True, nullable=True),

        # Trainee and TrainingRecord and PostTraining
        "RGFJTP": pa.Column("Int64", coerce=True, nullable=True),
        # Nullable in registration as it is only non nullable in the PostTraining model. That model will be populated by non-null fields from here.
        "RGFRJB": pa.Column(str, coerce=True, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "RGFJTRST": pa.Column("Int64", coerce=True, nullable=True),
        "RGFREM": pa.Column(str, coerce=True, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "RGFJBAND": pa.Column("Int64", coerce=True, nullable=True),
        "RGFJSAL": pa.Column("Int64", coerce=True, nullable=True),
        "RGFJOED": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=500), nullable=True),
        "RGFRCNT": pa.Column("Int64", coerce=True, nullable=True),
        "RGFRSTDT": pa.Column(date, nullable=True),
        "RGFRCMT": pa.Column(str, coerce=True, nullable=True),
    }),
    # EmployerLocation only validated on output
}
