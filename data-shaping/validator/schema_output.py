import pandera as pa
from datetime import date

VALIDATION_SCHEMA_OUTPUT = {
    # tlkpStatus
    "TraineeStatus": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "order": pa.Column(int),
    }),
    # tlkpEmailPref
    "EmailPreference": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # tlkpProgramType
    "TrainingProgram": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # tlkpSalary
    "Salary": pa.DataFrameSchema({
        "id": pa.Column(int),
        "value": pa.Column(str),
    }),
    # lkpFirstJobType,
    "JobSector": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    }),
    # tlkpAFCBand
    "NHSBand": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # tlkpContractType
    "ContractType": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # tlkpTitle
    "Title": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=25)),
    }),
    # tlkpGender
    "Gender": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # tlkpEthnic
    "Ethnicity": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # tlkpDisabilityCategory
    "DisabilityCategory": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
    }),
    # tlkpDisabilityAnswer
    "DisabilityStatus": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
    }),
    # tlkpReligion
    "Religion": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
    }),
    # tlkpSexor
    "SexualOrientation": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
    }),
    # tlkpCountries
    "Nationality": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
    }),
    # tlkpMaritalStatus
    "MaritalStatus": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
    }),
    # tlkpLETB
    "FundingProvider": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
        "abbreviation": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
        "country": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "is_legacy": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1])),
    }),
    # tlkpHEI
    "HEIAwardingInstitution": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # tlkpMScOutcome
    "HEIOutcome": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=20)),
    }),
    # tlkpHSSTPathway
    "HSSTPathway": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "code": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    }),
    # tlkpHSSTCohort
    "HsstCohort": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # tlkpSpecialism
    "Specialism": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "abbreviation": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
        "theme": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "division": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "specialty_within_asp": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "required_spec_rot_cur_v1": pa.Column(str, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "required_spec_rot_cur_v2": pa.Column(str, coerce=True, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=100)),
        "expected_rotation_modules": pa.Column(int, nullable=True),
        "expected_specialist_modules": pa.Column(int, nullable=True),
        "curriculum_library_code": pa.Column(str, coerce=True, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # tlkpEntryType
    "RecruitmentMethod": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # tlkpContacts
    "Contact": pa.DataFrameSchema({
        "id": pa.Column(int),
        "forename": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "surname": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "email": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=150), nullable=True),
        "phone": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True, coerce=True),
        "onefile_username": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "onefile_id": pa.Column("Int64", nullable=True, coerce=True),
        "stp_accredited_officer": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "next_stp_accreditation_date": pa.Column(date, nullable=True),
        "hsst_accredited_officer": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "next_hsst_accreditation_date": pa.Column(date, nullable=True),
        "etp_accredited_officer": pa.Column(bool, coerce=True, nullable=True, checks=pa.Check.isin(allowed_values=[0, 1])),
        "next_etp_accreditation_date": pa.Column(date, nullable=True),
    }),
    # tlkpContactType
    "ContactType": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100)),
    }),
    # tlkpOSFAType
    "AssessmentType": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
    }),
    # tlkpReviewOutcomes
    "Outcome": pa.DataFrameSchema({
        "id": pa.Column(int),
        "program_id": pa.Column(int),
        "outcome_code": pa.Column(int),
        "outcome_code_display": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=10), coerce=True, nullable=True),
        "short_description": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255), nullable=True),
        "long_description": pa.Column(str),
    }),
    # tlkpOSFAResult
    "ExitAssessmentOutcome": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str),
    }),
    # tlkpTrusts
    "Employer": pa.DataFrameSchema({
        "id": pa.Column(int),
        "is_nhs": pa.Column(bool, coerce=True, checks=pa.Check.isin(allowed_values=[0, 1])), # Since coerce=True, the validator will first look to convert the column from 1 and zero to bool
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255)),
        "icb_id": pa.Column("Int64", coerce=True, nullable=True),
    }),
    # tlkpSeason
    "Season": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50)),
    }),
    # tblSickLeave
    "SickLeave": pa.DataFrameSchema({
        "id": pa.Column(int),
        "trainee_id": pa.Column(int),
        "start_date": pa.Column(date, coerce=True, nullable=True),
        "end_date": pa.Column(date, nullable=True, coerce=True),
        "reason": pa.Column(str, nullable=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tblCareerBreak
    "CareerBreak": pa.DataFrameSchema({
        "id": pa.Column(int),
        "trainee_id": pa.Column(int),
        "start_date": pa.Column(date, coerce=True, nullable=True),
        "end_date": pa.Column(date, nullable=True, coerce=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tblMatPatLeave
    "MatPatLeave": pa.DataFrameSchema({
        "id": pa.Column(int),
        "trainee_id": pa.Column(int),
        "start_date": pa.Column(date, coerce=True, nullable=True),
        "end_date": pa.Column(date, nullable=True, coerce=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tblSupport
    "SupportRecord": pa.DataFrameSchema({
        "id": pa.Column(int),
        "trainee_id": pa.Column(int),
        "open_date": pa.Column(date, coerce=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tblTraineeContacts
    "TraineeContact": pa.DataFrameSchema({
        "id": pa.Column(int),
        "trainee_id": pa.Column("Int64", coerce=True),
        "type_id": pa.Column("Int64", nullable=True, coerce=True),
        "contact_id": pa.Column("Int64", nullable=True, coerce=True),
        "start_date": pa.Column(date, nullable=True, coerce=True),
        "end_date": pa.Column(date, nullable=True, coerce=True),
        "current_contact": pa.Column(bool, coerce=True),
    }),
    # tblARP and tblMRP
    "AnnualReviewProgression": pa.DataFrameSchema({
        "id": pa.Column(int),
        "training_record_id": pa.Column(int),
        "date_of_review": pa.Column(date, nullable=True, coerce=True),
        "outcome_id": pa.Column(int),
        "revised_outcome_id": pa.Column("Int64", nullable=True, coerce=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tblARP and tblMRP
    "MidReviewProgression": pa.DataFrameSchema({
        "id": pa.Column(int),
        "training_record_id": pa.Column(int),
        "date_of_review": pa.Column(date, nullable=True, coerce=True),
        "outcome_id": pa.Column(int),
        "revised_outcome_id": pa.Column("Int64", nullable=True, coerce=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tblEmployers
    "EmploymentRecord": pa.DataFrameSchema({
        "id": pa.Column("Int64", coerce=True),
        "trainee_id": pa.Column("Int64", coerce=True),
        "employer_id": pa.Column("Int64", coerce=True),
        "specific_site_id": pa.Column("Int64", coerce=True, nullable=True),
        "start_date": pa.Column(date, coerce=True, nullable=True),
        "finish_date": pa.Column(date, coerce=True, nullable=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tblOSFA
    "ExitAssessmentRecord": pa.DataFrameSchema({
        "id": pa.Column("Int64", coerce=True),
        "training_record_id": pa.Column("Int64", coerce=True),
        "date": pa.Column(date, nullable=True, coerce=True),
        "type_id": pa.Column("Int64", coerce=True, nullable=True),
        "outcome_id": pa.Column("Int64", coerce=True, nullable=True),
        "comments": pa.Column(str, nullable=True),
    }),
    # tlkpICB
    "ICB": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255), coerce=True),
        "funding_provider_id": pa.Column("Int64", coerce=True, nullable=False),
    }),
    # "EmployerLocations": pa.DataFrameSchema({
    #     "id": pa.Column(int),
    #     "employer_id": pa.Column("Int64", coerce=True),
    #     "location_id": pa.Column("Int64", coerce=True),
    # }),
    # tlkpHospital
    "EmployerLocation": pa.DataFrameSchema({
        "id": pa.Column(int),
        "title": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=255), coerce=True),
        "employer_id": pa.Column("Int64", coerce=True, nullable=True),
        "funding_provider_id": pa.Column("Int64", coerce=True, nullable=True),
    }),
    # tblRegistration
    "Trainee": pa.DataFrameSchema({
        "id": pa.Column(int),
        "training_record_id": pa.Column(int, nullable=True),
        "nshc_trainee_id": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=50), coerce=True),
        "title_id": pa.Column("Int64", coerce=True, nullable=True),
        "surname": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "forename": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "date_of_birth": pa.Column(date, coerce=True, nullable=True),
        "pronouns": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True, coerce=True),
        "ethnicity_id": pa.Column("Int64", coerce=True, nullable=True),
        "ethnicity_other": pa.Column(str, coerce=True, checks=pa.Check.str_length(min_value=0, max_value=150), nullable=True),
        "disability_status_id": pa.Column("Int64", coerce=True, nullable=True),
        "disability_category_id": pa.Column("Int64", coerce=True, nullable=True),
        "disability_details": pa.Column(str, nullable=True),
        "gender_id": pa.Column("Int64", coerce=True, nullable=True),
        "sexual_orientation_id": pa.Column("Int64", coerce=True, nullable=True),
        "religion_id": pa.Column("Int64", coerce=True, nullable=True),
        "nationality_id": pa.Column("Int64", coerce=True, nullable=True),
        "marital_status_id": pa.Column("Int64", coerce=True, nullable=True),
        "address_line_1": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "address_line_2": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "address_line_3": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "post_code": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=20), coerce=True, nullable=True),
        "work_email": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "work_phone": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "academic_email": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "personal_email": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "email_preference_id": pa.Column("Int64", coerce=True, nullable=True),
        "personal_phone": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "funding_provider_id": pa.Column("Int64", coerce=True, nullable=True),
        "legacy_funding_provider_id": pa.Column("Int64", coerce=True, nullable=True),
        "funding_provider_comments": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), coerce=True, nullable=True),
        "training_program_id": pa.Column("Int64", coerce=True, nullable=True),
        "cohort_number": pa.Column("Int64", coerce=True, nullable=True),
        "whole_time_equivalent": pa.Column(float, nullable=True),
        "onefile_id": pa.Column("Int64", coerce=True, nullable=True),
        "ecc_reference": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "deferred": pa.Column(bool, coerce=True, nullable=True),
        "deferral_comments": pa.Column(str, nullable=True),
        "post_training_id": pa.Column("Int64", coerce=True, nullable=True),
    }),
    # TrainingRecord
    "TrainingRecord": pa.DataFrameSchema({
        "id": pa.Column(int),
        "hei_qualification_comp": pa.Column(bool, coerce=True, nullable=True),
        "hei_qualification_date": pa.Column(date, coerce=True, nullable=True),
        "hei_qualification_outcome_id": pa.Column("Int64", coerce=True, nullable=True),
        "hei_awarding_institution_id": pa.Column("Int64", coerce=True, nullable=True),
        "hei_extension": pa.Column(bool, coerce=True),
        "hei_extension_date": pa.Column(date, coerce=True, nullable=True),
        "hei_extension_comments": pa.Column(str, coerce=True, nullable=True),
        "program_certification": pa.Column(bool, coerce=True, nullable=True),
        "program_certification_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_cohort_id": pa.Column("Int64", coerce=True, nullable=True),
        "hsst_pathway_id": pa.Column("Int64", coerce=True, nullable=True),
        "hsst_portfolio_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_portfolio_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_expected_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_arp_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_arp_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_dclin_part_a_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_dclin_part_a_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_dclin_part_b_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_dclin_part_b_comp_date": pa.Column(date, nullable=True),
        "hsst_dclin_part_c1_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_dclin_part_c1_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_dclin_part_c2_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_dclin_part_c2_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_fcrpath_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_fcrpath_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_iaps_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_iaps_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_phd_comp": pa.Column(bool, coerce=True, nullable=True),
        "hsst_phd_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_ceng_comp": pa.Column(bool, coerce=True, nullable=True),
        # Pandera fails if entire column is empty and we try to coerce it to a date (unsure about other datatypes)
        "hsst_ceng_comp_date": pa.Column(date, nullable=True),
        "hsst_portfolio_signed": pa.Column(bool, coerce=True, nullable=True),
        "hsst_portfolio_signed_date": pa.Column(date, coerce=True, nullable=True),

        "program_leaving_date": pa.Column(date, coerce=True, nullable=True),
        "program_leaving_reason": pa.Column(str, coerce=True, nullable=True),
        "program_leaving_comments": pa.Column(str, coerce=True, nullable=True),
        "reasonable_adjustments": pa.Column(bool, coerce=True, nullable=True),
        "reasonable_adj_comments": pa.Column(str, coerce=True, nullable=True),
        "hcpc_registration": pa.Column(str, coerce=True, checks=pa.Check.str_length(min_value=0, max_value=20), nullable=True),
        "portf_expected_comp_date": pa.Column(date, coerce=True, nullable=True),
        "hsst_start_month": pa.Column("Int64", coerce=True, nullable=True),
        "hsst_start_year": pa.Column("Int64", coerce=True, nullable=True),
        "hsst_expected_exit_month": pa.Column("Int64", coerce=True, nullable=True),
        "hsst_expected_exit_year": pa.Column("Int64", coerce=True, nullable=True),
        "stp_start_month": pa.Column("Int64", coerce=True, nullable=True),
        "stp_start_year": pa.Column("Int64", coerce=True, nullable=True),
        "stp_expected_comp_month": pa.Column("Int64", coerce=True, nullable=True),
        "stp_expected_comp_year": pa.Column("Int64", coerce=True, nullable=True),
        "portf_actual_comp_date": pa.Column(date, coerce=True, nullable=True),
        "specialism_id": pa.Column("Int64", coerce=True, nullable=True),
        "recruitment_method_id": pa.Column("Int64", coerce=True, nullable=True),
        "hcpc_registration_date": pa.Column(date, coerce=True, nullable=True),
        "hcpc_signoff_required": pa.Column(bool, coerce=True, nullable=True),
        "hcpc_counter_signoff_require": pa.Column(bool, coerce=True, nullable=True),
        "hcpc_signoff_name": pa.Column(str, coerce=True, checks=pa.Check.str_length(min_value=0, max_value=200), nullable=True),
        "hcpc_signoff_number": pa.Column(str, coerce=True, checks=pa.Check.str_length(min_value=0, max_value=50), nullable=True),
        "portfolio_extended": pa.Column(str, coerce=True, nullable=True, checks=pa.Check.str_length(min_value=0, max_value=2000)),
        "next_exit_assess_year": pa.Column("Int64", coerce=True, nullable=True),
        "next_exit_assess_season_id": pa.Column("Int64", coerce=True, nullable=True),
        "ahcs_registration": pa.Column("Int64", coerce=True, nullable=True),
    }),
    # tblRegistration
    "PostTraining": pa.DataFrameSchema({
        "id": pa.Column("Int64", coerce=True),
        "job_sector_id": pa.Column("Int64", coerce=True, nullable=True),
        "description": pa.Column(str, coerce=True, checks=pa.Check.str_length(min_value=0, max_value=255), nullable=True),
        "employer_id": pa.Column("Int64", coerce=True, nullable=True),
        "non_nhs_employer": pa.Column(str, coerce=True, checks=pa.Check.str_length(min_value=0, max_value=100), nullable=True),
        "nhs_band_id": pa.Column("Int64", coerce=True, nullable=True),
        "non_nhs_salary_id": pa.Column("Int64", coerce=True, nullable=True),
        "other_educational_pursuits": pa.Column(str, checks=pa.Check.str_length(min_value=0, max_value=500), coerce=True, nullable=True),
        "contract_type_id": pa.Column("Int64", coerce=True, nullable=True),
        "start_date": pa.Column(date, coerce=True, nullable=True),
        "comments": pa.Column(str, coerce=True, nullable=True),
    }),
    "TraineeStatuses": pa.DataFrameSchema({
        "id": pa.Column("Int64", coerce=True),
        "trainee_id": pa.Column("Int64", coerce=True),
        "trainee_status_id": pa.Column("Int64", coerce=True),
    }),
}
