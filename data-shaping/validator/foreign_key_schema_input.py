from .validation_models import FkCheck

FOREIGN_KEY_SCHEMA: dict[str, list[FkCheck]] = {
    "tblEmployers": [
            {
                'fk': "EMEMP",
                'origin_table': "tlkpTrusts",
                'origin_column': "TSID"
            },
            {
                'fk': "EMSITE",
                'origin_table': "tlkpHospital",
                'origin_column': "HSID"
            },
    ],
    "tblOSFA": [
            {
                'fk': "OSTYPE",
                'origin_table': "tlkpOSFAType",
                'origin_column': "OTID"
            },
            {
                'fk': "OSRSLT",
                'origin_table': "tlkpOSFAResult",
                'origin_column': "RSID"
            }
        ],
    "tblMRP": [
            {
                'fk': "MROTCM",
                'origin_table': "tlkpReviewOutcomes",
                'origin_column': "AOID"
            },
            {
                'fk': "MRREVOTCM",
                'origin_table': "tlkpReviewOutcomes",
                'origin_column': "AOID"
            },
        ],
    "tblARP": [
            {
                'fk': "AROTCM",
                'origin_table': "tlkpReviewOutcomes",
                'origin_column': "AOID"
            },
            {
                'fk': "ARREVOTCM",
                'origin_table': "tlkpReviewOutcomes",
                'origin_column': "AOID"
            },
        ],
    "tblTraineeContacts": [
            {
                'fk': "CNTYPE",
                'origin_table': "tlkpContactType",
                'origin_column': "NTID"
            },
            {
                'fk': "CNCTCT",
                'origin_table': "tlkpContacts",
                'origin_column': "CTID"
            },
        ],
    "tblRegistration": [
            {
                'fk': "RGTITLE",
                'origin_table': "tlkpTitle",
                'origin_column': "TTID"
            },
            {
                'fk': "RGETH",
                'origin_table': "tlkpEthnic",
                'origin_column': "ECID"
            },
            {
                'fk': "RGHCHRT",
                'origin_table': "tlkpHSSTCohort",
                'origin_column': "HCID"
            },
            {
                'fk': "RGDISABL",
                'origin_table': "tlkpDisabilityAnswer",
                'origin_column': "DSID"
            },
            {
                'fk': "RGDISCAT",
                'origin_table': "tlkpDisabilityCategory",
                'origin_column': "DCID"
            },
            {
                'fk': "RGGEN",
                'origin_table': "tlkpGender",
                'origin_column': "GNID"
            },
            {
                'fk': "RGSEOR",
                'origin_table': "tlkpSexor",
                'origin_column': "SOID"
            },
            {
                'fk': "RGREL",
                'origin_table': "tlkpReligion",
                'origin_column': "RLID"
            },
            {
                'fk': "RGNAT",
                'origin_table': "tlkpCountries",
                'origin_column': "CTID"
            },
            {
                'fk': "RGMAR",
                'origin_table': "tlkpMaritalStatus",
                'origin_column': "MRID"
            },
            {
                'fk': "RGEMPR",
                'origin_table': "tlkpEmailPref",
                'origin_column': "ETID"
            },
            {
                'fk': "RGPRGM",
                'origin_table': "tlkpProgramType",
                'origin_column': "PRID"
            },
            {
                'fk': "RGLETB",
                'origin_table': "tlkpLETB",
                'origin_column': "REID"
            },
            {
                'fk': "RGOLDLETB",
                'origin_table': "tlkpLETB",
                'origin_column': "REID"
            },
            {
                'fk': "RGFJTP",
                'origin_table': "tlkpFirstJobType",
                'origin_column': "FJID"
            },
            {
                'fk': "RGFJTRST",
                'origin_table': "tlkpTrusts",
                'origin_column': "TSID"
            },
            {
                'fk': "RGFJBAND",
                'origin_table': "tlkpAFCBand",
                'origin_column': "BDID"
            },
            {
                'fk': "RGFJSAL",
                'origin_table': "tlkpSalary",
                'origin_column': "SRID"
            },
            {
                'fk': "RGFRCNT",
                'origin_table': "tlkpContractType",
                'origin_column': "COID"
            },
            {
                'fk': "RGHEI",
                'origin_table': "tlkpHEI",
                'origin_column': "HEID"
            },
            {
                'fk': "RGHCPATH",
                'origin_table': "tlkpHSSTPathway",
                'origin_column': "PTID"
            },
            {
                'fk': "RGSPEC",
                'origin_table': "tlkpSpecialism",
                'origin_column': "SPID"
            },
            {
                'fk': "RGENTRY",
                'origin_table': "tlkpEntryType",
                'origin_column': "ENID"
            },
            {
                'fk': "RGEXICSN",
                'origin_table': "tlkpSeason",
                'origin_column': "SNID"
            },
            {
                'fk': "RGMScOTCM",
                'origin_table': "tlkpMScOutcome",
                'origin_column': "OCID"
            }
        ],
    "tlkpTrusts": [
        {
    		'fk': "TSICB",
			'origin_table': "tlkpICB",
            'origin_column': "ICID"
    	},
    ],
    "tlkpICB": [
    	{
    		'fk': "ICLETB",
			'origin_table': "tlkpLETB",
            'origin_column': "REID"
    	},
    ],
    "tlkpHospital": [
    	{
    		'fk': "HSTRUST",
			'origin_table': "tlkpTrusts",
            'origin_column': "TSID"
    	},
    	{
    		'fk': "HSLETB",
			'origin_table': "tlkpLETB",
            'origin_column': "REID"
    	},
    ]
}
