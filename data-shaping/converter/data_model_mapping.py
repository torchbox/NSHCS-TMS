SIMPLE_REFERENCE_MAPPING = {
    "TraineeStatus": {
        "id": {"sheet": "tlkpStatus", "column": "STID"},
        "title": {"sheet": "tlkpStatus", "column": "STSTAT"},
        "order": {"sheet": "tlkpStatus", "column": "STORDER"},
    },
    "EmailPreference": {
        "id": {"sheet": "tlkpEmailPref", "column": "ETID"},
        "title": {"sheet": "tlkpEmailPref", "column": "ETPREF"},
    },
    "TrainingProgram": {
        "id": {"sheet": "tlkpProgramType", "column": "PRID"},
        "title": {"sheet": "tlkpProgramType", "column": "PRPRGM"},
    },
    "Salary": {
        "id": {"sheet": "tlkpSalary", "column": "SRID"},
        "value": {"sheet": "tlkpSalary", "column": "SRSALARY"},
    },
    "JobSector": {
        "id": {"sheet": "tlkpFirstJobType", "column": "FJID"},
        "title": {"sheet": "tlkpFirstJobType", "column": "FJTYPE"},
    },
    "NHSBand": {
        "id": {"sheet": "tlkpAFCBand", "column": "BDID"},
        "title": {"sheet": "tlkpAFCBand", "column": "BDBAND"},
    },
    "ContractType": {
        "id": {"sheet": "tlkpContractType", "column": "COID"},
        "title": {"sheet": "tlkpContractType", "column": "COTYPE"},
    },
    "Title": {
        "id": {"sheet": "tlkpTitle", "column": "TTID"},
        "title": {"sheet": "tlkpTitle", "column": "TTTITLE"},
    },
    "Gender": {
        "id": {"sheet": "tlkpGender", "column": "GNID"},
        "title": {"sheet": "tlkpGender", "column": "GNGNDR"},
    },
    "Ethnicity": {
        "id": {"sheet": "tlkpEthnic", "column": "ECID"},
        "title": {"sheet": "tlkpEthnic", "column": "ECDESC"},
    },
    "DisabilityCategory": {
        "id": {"sheet": "tlkpDisabilityCategory", "column": "DCID"},
        "title": {"sheet": "tlkpDisabilityCategory", "column": "DCDESC"},
    },
    "DisabilityStatus": {
        "id": {"sheet": "tlkpDisabilityAnswer", "column": "DSID"},
        "title": {"sheet": "tlkpDisabilityAnswer", "column": "DSDESC"},
    },
    "Religion": {
        "id": {"sheet": "tlkpReligion", "column": "RLID"},
        "title": {"sheet": "tlkpReligion", "column": "RLREL"},
    },
    "SexualOrientation": {
        "id": {"sheet": "tlkpSexor", "column": "SOID"},
        "title": {"sheet": "tlkpSexor", "column": "SODESC"},
    },
    "Nationality": {
        "id": {"sheet": "tlkpCountries", "column": "CTID"},
        "title": {"sheet": "tlkpCountries", "column": "CTCNTR"},
    },
    "MaritalStatus": {
        "id": {"sheet": "tlkpMaritalStatus", "column": "MRID"},
        "title": {"sheet": "tlkpMaritalStatus", "column": "MRDESC"},
    },
    "FundingProvider": {
        "id": {"sheet": "tlkpLETB", "column": "REID"},
        "title": {"sheet": "tlkpLETB", "column": "RELETB"},
        "abbreviation": {"sheet": "tlkpLETB", "column": "REABBR"},
        "country": {"sheet": "tlkpLETB", "column": "RENTN"},
        "is_legacy": {"sheet": "tlkpLETB", "column": "RELEG"},
    },
    "HEIAwardingInstitution": {
        "id": {"sheet": "tlkpHEI", "column": "HEID"},
        "title": {"sheet": "tlkpHEI", "column": "HENM"},
    },
    "HEIOutcome": {
        "id": {"sheet": "tlkpMScOutcome", "column": "OCID"},
        "title": {"sheet": "tlkpMScOutcome", "column": "OCOTCM"},
    },
    "HSSTPathway": {
        "id": {"sheet": "tlkpHSSTPathway", "column": "PTID"},
        "title": {"sheet": "tlkpHSSTPathway", "column": "PTDESC"},
        "code": {"sheet": "tlkpHSSTPathway", "column": "PTCODE"},
    },
    "Specialism": {
        "id": {"sheet": "tlkpSpecialism", "column": "SPID"},
        "title": {"sheet": "tlkpSpecialism", "column": "SPSPEC"},
    },
    "RecruitmentMethod": {
        "id": {"sheet": "tlkpEntryType", "column": "ENID"},
        "title": {"sheet": "tlkpEntryType", "column": "ENENTR"},
    },
    "Contact": {
        "id": {"sheet": "tlkpContacts", "column": "CTID"},
        "forename": {"sheet": "tlkpContacts", "column": "CTFNAME"},
        "surname": {"sheet": "tlkpContacts", "column": "CTSNAME"},
        "email": {"sheet": "tlkpContacts", "column": "CTEML"},
        "phone": {"sheet": "tlkpContacts", "column": "CTPHONE"},
        "onefile_username": {"sheet": "tlkpContacts", "column": "CTOFUN"},
        "onefile_id": {"sheet": "tlkpContacts", "column": "CTOFUID"},
    },
    "ContactType": {
        "id": {"sheet": "tlkpContactType", "column": "NTID"},
        "title": {"sheet": "tlkpContactType", "column": "NTTYPE"},
    },
    "AssessmentType": {
        "id": {"sheet": "tlkpOSFAType", "column": "OTID"},
        "title": {"sheet": "tlkpOSFAType", "column": "OTTYPE"},
    },
    "Outcome": {
        "id": {"sheet": "tlkpReviewOutcomes", "column": "AOID"},
        "program_id": {"sheet": "tlkpReviewOutcomes", "column": "AOPRGM"},
        "outcome_code": {"sheet": "tlkpReviewOutcomes", "column": "AOCODE"},
        "outcome_code_display": {"sheet": "tlkpReviewOutcomes", "column": "AOOTCODE"},
        "short_description": {"sheet": "tlkpReviewOutcomes", "column": "AOSTM"},
        "long_description": {"sheet": "tlkpReviewOutcomes", "column": "AODESC"},
    },
    "ExitAssessmentOutcome": {
        "id": {"sheet": "tlkpOSFAResult", "column": "RSID"},
        "title": {"sheet": "tlkpOSFAResult", "column": "RSLT"},
    },
    "Employer": {
        "id": {"sheet": "tlkpTrusts", "column": "TSID"},
        "is_nhs": {"sheet": "tlkpTrusts", "column": "TSNHS"},
        "title": {"sheet": "tlkpTrusts", "column": "TSTRUST"},
        "icb_id": {"sheet": "tlkpTrusts", "column": "TSICB"},
    },
    "EmployerLocation": {
        "id": {"sheet": "tlkpHospital", "column": "HSID"},
        "title": {"sheet": "tlkpHospital", "column": "HSNAME"},
        "employer_id": {"sheet": "tlkpHospital", "column": "HSTRUST"},
        "funding_provider_id": {"sheet": "tlkpHospital", "column": "HSLETB"},
    },
    "ICB": {
        "id": {"sheet": "tlkpICB", "column": "ICID"},
        "title": {"sheet": "tlkpICB", "column": "ICNAME"},
        "funding_provider_id": {"sheet": "tlkpICB", "column": "ICLETB"},
    },
    "Season": {
        "id": {"sheet": "tlkpSeason", "column": "SNID"},
        "title": {"sheet": "tlkpSeason", "column": "SNSSN"},
    }

}
