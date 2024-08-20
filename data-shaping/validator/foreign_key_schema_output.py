from .validation_models import FkCheck

FOREIGN_KEY_SCHEMA: dict[str, list[FkCheck]] = {
    "EmploymentRecord": [
            {
                'fk': "employer_id",
                'origin_table': "Employer",
                'origin_column': "id"
            },
            {
                'fk': "specific_site_id",
                'origin_table': "EmployerLocation",
                'origin_column': "id"
            },
    ],
    "ExitAssessmentRecord": [
            {
                'fk': "type_id",
                'origin_table': "AssessmentType",
                'origin_column': "id"
            },
            {
                'fk': "outcome_id",
                'origin_table': "ExitAssessmentOutcome",
                'origin_column': "id"
            }
        ],
    "PostTraining": [
            {
                'fk': "job_sector_id",
                'origin_table': "JobSector",
                'origin_column': "id"
            },
            {
                'fk': "employer_id",
                'origin_table': "Employer",
                'origin_column': "id"
            },
            {
                'fk': "nhs_band_id",
                'origin_table': "NHSBand",
                'origin_column': "id"
            },
            {
                'fk': "non_nhs_salary_id",
                'origin_table': "Salary",
                'origin_column': "id"
            },
            {
                'fk': "contract_type_id",
                'origin_table': "ContractType",
                'origin_column': "id"
            },
        ],
    "MidReviewProgression": [
            {
                'fk': "outcome_id",
                'origin_table': "Outcome",
                'origin_column': "id"
            },
            {
                'fk': "revised_outcome_id",
                'origin_table': "Outcome",
                'origin_column': "id"
            },
        ],
    "AnnualReviewProgression": [
            {
                'fk': "outcome_id",
                'origin_table': "Outcome",
                'origin_column': "id"
            },
            {
                'fk': "revised_outcome_id",
                'origin_table': "Outcome",
                'origin_column': "id"
            },
        ],
    "TraineeContact": [
            {
                'fk': "type_id",
                'origin_table': "ContactType",
                'origin_column': "id"
            },
    ],
    "Trainee": [
            {
                'fk': "title_id",
                'origin_table': "Title",
                'origin_column': "id"
            },
            {
                'fk': "ethnicity_id",
                'origin_table': "Ethnicity",
                'origin_column': "id"
            },
            {
                'fk': "disability_status_id",
                'origin_table': "DisabilityStatus",
                'origin_column': "id"
            },
            {
                'fk': "disability_category_id",
                'origin_table': "DisabilityCategory",
                'origin_column': "id"
            },
            {
                'fk': "gender_id",
                'origin_table': "Gender",
                'origin_column': "id"
            },
            {
                'fk': "sexual_orientation_id",
                'origin_table': "SexualOrientation",
                'origin_column': "id"
            },
            {
                'fk': "religion_id",
                'origin_table': "Religion",
                'origin_column': "id"
            },
            {
                'fk': "nationality_id",
                'origin_table': "Nationality",
                'origin_column': "id"
            },
            {
                'fk': "marital_status_id",
                'origin_table': "MaritalStatus",
                'origin_column': "id"
            },
            {
                'fk': "email_preference_id",
                'origin_table': "EmailPreference",
                'origin_column': "id"
            },
            {
                'fk': "training_program_id",
                'origin_table': "TrainingProgram",
                'origin_column': "id"
            },
            {
                'fk': "funding_provider_id",
                'origin_table': "FundingProvider",
                'origin_column': "id"
            },
            {
                'fk': "legacy_funding_provider_id",
                'origin_table': "FundingProvider",
                'origin_column': "id"
            },
        ],
    "TrainingRecord": [
            {
                'fk': "hei_qualification_outcome_id",
                'origin_table': "HEIOutcome",
                'origin_column': "id"
            },
            {
                'fk': "hei_awarding_institution_id",
                'origin_table': "HEIAwardingInstitution",
                'origin_column': "id"
            },
            {
                'fk': "hsst_pathway_id",
                'origin_table': "HSSTPathway",
                'origin_column': "id"
            },
            {
                'fk': "hsst_cohort_id",
                'origin_table': "HsstCohort",
                'origin_column': "id"
            },
            {
                'fk': "specialism_id",
                'origin_table': "Specialism",
                'origin_column': "id"
            },
            {
                'fk': "recruitment_method_id",
                'origin_table': "RecruitmentMethod",
                'origin_column': "id"
            },
            {
                'fk': "next_exit_assess_season_id",
                'origin_table': "Season",
                'origin_column': "id"
            },
        ]
}
