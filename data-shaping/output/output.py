import pandas as pd
from typing import Dict
from converter.data_model_mapping import SIMPLE_REFERENCE_MAPPING


def write_spreadsheet(path: str, data_frames: Dict[str, pd.DataFrame]):
    with pd.ExcelWriter(path,
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD') as writer:
        for sheet_name, df in data_frames.items():
            df.to_excel(writer, sheet_name=sheet_name, index=False)


def blank_database(path: str):
    sheets = {}
    for sheet_name, column_names in SIMPLE_REFERENCE_MAPPING.items():
        data = pd.DataFrame(columns=column_names)
        sheets[sheet_name] = data

    write_spreadsheet(path=path, data_frames=sheets)


def transfer_data(path: str, sheets: Dict[str, pd.DataFrame]):
    blank_database(path)

    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:
        for new_sheet_name, column_mappings in SIMPLE_REFERENCE_MAPPING.items():
            data = pd.DataFrame(columns=column_mappings)

            for column_name, mapping in column_mappings.items():
                if "sheet" in mapping and "column" in mapping:
                    old_df_column = sheets[mapping["sheet"]][mapping["column"]]
                    data[column_name] = pd.Series(data=old_df_column)

            data.to_excel(writer, sheet_name=new_sheet_name, index=False)


def transfer_leave_of_absence_record(path, sheets):
    SHEET_NAME = "LeaveOfAbsenceRecord"
    SICK_LEAVE_SHEEt_NAME = "tblSickLeave"
    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:
        loas = pd.DataFrame(
            columns=[
                "id",
                "trainee_id",
                "start_date",
                "end_date",
                "reason",
                "comments",
                "enable_notification",
            ]
        )

        df: pd.DataFrame = sheets[SICK_LEAVE_SHEEt_NAME]

        for i, row in df.iterrows():
            id = row["SLID"]
            trainee_id = row["RGID"]
            start_date = row["SLSTDT"]
            end_date = row["SLRTDT"]
            reason = row["SLRSN"]
            comments = row["SLCMNTS"]
            enable_notification = None

            loa = pd.DataFrame({
                "id": [id],
                "trainee_id": [trainee_id],
                "start_date": [start_date],
                "end_date": [end_date],
                "reason": [reason],
                "comments": [comments],
                "enable_notification": [enable_notification],
            })

            loas = pd.concat([loas, loa])

        loas.to_excel(writer, sheet_name=SHEET_NAME, index=False)

        # TODO: Other records


def transfer_support_record(path, sheets):
    SHEET_NAME = "SupportRecord"
    OLD_SUPPORT_SHEET_NAME = 'tblSupport'
    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:

        ids = []
        trainee_ids = []
        dates = []
        comments = []

        for i, row in sheets[OLD_SUPPORT_SHEET_NAME].iterrows():
            ids.append(row['PSID'])
            trainee_ids.append(row['RGID'])
            dates.append(row['PSDT'])
            comments.append(row['PSDESC'])


        srs = pd.DataFrame(data={"id": ids, "trainee_id": trainee_ids, "date": dates, "comments": comments})

        srs.to_excel(writer, sheet_name=SHEET_NAME, index=False)


def transfer_trainee_contact(path, sheets):
    SHEET_NAME = "TraineeContact"
    OLD_TRAINEE_CONTACT_SHEET_NAME = "tblTraineeContacts"
    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:

        id = []
        trainee = []
        type = []
        contact_id = []
        start_date = []
        end_date = []
        current_contact = []

        for _, row in sheets[OLD_TRAINEE_CONTACT_SHEET_NAME].iterrows():
            id.append(row['CNID'])
            trainee.append(row['RGID'])
            type.append(row['CNTYPE'])
            contact_id.append(row['CNCTCT'])
            start_date.append(row['CNSTDT'])
            end_date.append(row['CNENDT'])
            current_contact.append(row['CNCURTO'])


        tcs = pd.DataFrame(
            data={
                "id": id,
                "trainee_id": trainee,
                "type_id": type,
                "contact_id": contact_id,
                "start_date": start_date,
                "end_date": end_date,
                "current_contact": current_contact,
            }
        )
        tcs.to_excel(writer, sheet_name=SHEET_NAME, index=False)


def transfer_annual_review_progression(path, sheets):
    SHEET_NAME = "AnnualReviewProgression"
    OLD_ARP_SHEET_NAME = "tblARP"
    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:

        ids = []
        training_records = []
        date_of_reviews = []
        outcomes = []
        revised_outcomes = []
        comments = []

        for _, row in sheets[OLD_ARP_SHEET_NAME].iterrows():
            ids.append(row['ARID'])
            training_records.append(row['RGID'])
            date_of_reviews.append(row['ARDT'])
            outcomes.append(row['AROTCM'])
            revised_outcomes.append(row['ARREVOTCM'])
            comments.append(row['ARCMNTS'])


        arps = pd.DataFrame(
            data={
                "id": ids,
                "training_record_id": training_records,
                "date_of_review": date_of_reviews,
                "outcome_id": outcomes,
                "revised_outcome_id": revised_outcomes,
                "comments": comments,
            }
        )
        arps.to_excel(writer, sheet_name=SHEET_NAME, index=False)


def transfer_mid_review_progression(path, sheets):
    SHEET_NAME = "MidReviewProgression"
    OLD_ARP_SHEET_NAME = "tblMRP"
    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:

        ids = []
        training_records = []
        date_of_reviews = []
        outcomes = []
        revised_outcomes = []
        comments = []

        for _, row in sheets[OLD_ARP_SHEET_NAME].iterrows():
            ids.append(row['MRID'])
            training_records.append(row['RGID'])
            date_of_reviews.append(row['MRDT'])
            outcomes.append(row['MROTCM'])
            revised_outcomes.append(row['MRREVOTCM'])
            comments.append(row['MRCMNTS'])


        arps = pd.DataFrame(
            data={
                "id": ids,
                "training_record": training_records,
                "date_of_review": date_of_reviews,
                "outcome": outcomes,
                "revised_outcome": revised_outcomes,
                "comments": comments,
            }
        )
        arps.to_excel(writer, sheet_name=SHEET_NAME, index=False)


def transfer_employment_record(path, sheets):
    SHEET_NAME = "EmploymentRecord"
    OLD_EMPLOYMENT_RECORDS_SHEET = "tblEmployers"
    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:

        ids = []
        trainee_ids = []
        employers = []
        specific_sites = []
        start_dates = []
        finish_dates = []
        comments = []

        for _, row in sheets[OLD_EMPLOYMENT_RECORDS_SHEET].iterrows():
            ids.append(row['EMID'])
            trainee_ids.append(row['RGID'])
            employers.append(row['EMEMP'])
            specific_sites.append(row['EMSITE'])
            start_dates.append(row['EMSTDT'])
            finish_dates.append(row['EMLVDT'])
            comments.append(row['EMCMT'])

        loas = pd.DataFrame(
            data={
                "id": ids,
                "trainee_id": trainee_ids,
                "employer_id": employers,
                "specific_site_id": specific_sites,
                "start_date": start_dates,
                "finish_date": finish_dates,
                "comments": comments,
            }
        )
        loas.to_excel(writer, sheet_name=SHEET_NAME, index=False)


def transfer_exit_assessment_record(path, sheets):
    SHEET_NAME = "ExitAssessmentRecord"
    OLD_ASSESSMENT_RECORDS_SHEETS = 'tblOSFA'
    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:

        ids = []
        training_ids = []
        dates = []
        types = []
        results = []
        comments = []

        for _, row in sheets[OLD_ASSESSMENT_RECORDS_SHEETS].iterrows():
            ids.append(row['OSID'])
            training_ids.append(row['RGID'])
            dates.append(row['OSDT'])
            types.append(row['OSTYPE'])
            results.append(row['OSRSLT'])
            comments.append(row['OSCMNT'])

        ears = pd.DataFrame(
            data={"id": ids, "training_record_id": training_ids, "date": dates, "type_id": types, "outcome_id": results, "comments": comments}
        )
        ears.to_excel(writer, sheet_name=SHEET_NAME, index=False)

def transfer_post_training(path, id, job_sector, description, job, non_nhs_employer, nhs_band, salary, contract_type, start_date, comments):
    SHEET_NAME = "PostTraining"

    pts = pd.DataFrame(
        data= {
            "id": [id],
            "job_sector_id": [job_sector],
            "description": [description],
            "employer_id": [job],
            "non_nhs_employer": [non_nhs_employer],
            "nhs_band_id": [nhs_band],
            "non_nhs_salary_id": [salary],
            "contract_type_id": [contract_type],
            "start_date": [start_date],
            "comments": [comments],
            }
        )

    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:
        pts.to_excel(writer, sheet_name=SHEET_NAME, index=False, startrow=0 if id == None or id == 1 else id, header=id==1)




def transfer_trainees(path, sheets):
    SHEET_NAME = "Trainee"
    OLD_REGISTRATION_SHEET_NAME = "tblRegistration"

    ids = []
    training_records = []
    nshc_trainee_ids = []
    titles = []
    surnames = []
    forenames = []
    date_of_births = []
    ethnicities = []
    ethnicity_others = []
    disability_statuses = []
    disable_categories = []
    disability_details = []
    genders = []
    sexual_orientations = []
    religions = []
    nationalities = []
    marital_statuses = []
    address_line_1s = []
    address_line_2s = []
    address_line_3s = []
    post_codes = []
    work_emails = []
    work_phones = []
    academic_emails = []
    personal_emails = []
    email_preferences = []
    personal_phones = []
    funding_providers = []
    funding_provider_comments = []
    training_programs = []
    cohort_numbers = []
    statuses = []
    whole_time_equivilents = []
    onefile_ids = []
    ecc_references = []
    deferreds = []
    deferral_comments = []
    post_trainings = []


    next_post_training_id = 1
    next_post_training_cnt = 1
    next_training_record_id = 1
    next_training_record_cnt = 1
    next_trainee_statuses_id = 1
    next_trainee_statuses_cnt = 1

    for i, row in  sheets[OLD_REGISTRATION_SHEET_NAME].iterrows():
        ids.append(row['RGID'])
        nshc_trainee_ids.append(row['RGSCID'])
        titles.append(row['RGTITLE'])
        surnames.append(row['RGSNAME'])
        forenames.append(row['RGFNAME'])
        date_of_births.append(row['RGDOB'])
        ethnicities.append(row['RGETH'])
        ethnicity_others.append(row['RGETHO'])
        disability_statuses.append(row['RGDISABL'])
        disable_categories.append(row['RGDISCAT'])
        disability_details.append(row['RGDSDET'])
        genders.append(row['RGGEN'])
        sexual_orientations.append(row['RGSEOR'])
        religions.append(row['RGREL'])
        nationalities.append(row['RGNAT'])
        marital_statuses.append(row['RGMAR'])
        address_line_1s.append(row['RGADD1'])
        address_line_2s.append(row['RGADD2'])
        address_line_3s.append(row['RGADD3'])
        post_codes.append(row['RGPCODE'])
        work_emails.append(row['RGWKEML'])
        work_phones.append(row['RGWKPHN'])
        academic_emails.append(row['RGACEML'])
        personal_emails.append(row['RGPSEML'])
        email_preferences.append(row['RGEMPR'])
        personal_phones.append(row['RGPSPHN'])
        funding_providers.append(row['RGLETB'])
        funding_provider_comments.append(row['RGFUND'])
        training_programs.append(row['RGPRGM'])
        cohort_numbers.append(row['RGHCHRT'])
        statuses.append(row['RGSTAT'])
        whole_time_equivilents.append(row['RGWTE'])
        onefile_ids.append(row['RGOFID'])
        ecc_references.append(row['RGOLEECREF'])
        deferreds.append(row['RGDEF'])
        deferral_comments.append(row['RGDEFCM'])

        print(f'Processing registration: {i}')

        if pd.notna(row['RGFJTP']) or \
            pd.notna(row['RGFRJB']) or \
            pd.notna(row['RGFJTRST']) or \
            pd.notna(row['RGFREM']) or \
            pd.notna(row['RGFJBAND']) or \
            pd.notna(row['RGFJSAL']) or \
            pd.notna(row['RGFRCNT']) or \
            pd.notna(row['RGFRSTDT']) or \
            pd.notna(row['RGFRCMT']):

            next_post_training_id = next_post_training_cnt
            transfer_post_training(
                path=path,
                id=next_post_training_id,
                job_sector=row['RGFJTP'],
                description=row['RGFRJB'],
                job=row['RGFJTRST'],
                non_nhs_employer=row['RGFREM'],
                nhs_band=row['RGFJBAND'],
                salary=row['RGFJSAL'],
                contract_type=row['RGFRCNT'],
                start_date=row['RGFRSTDT'],
                comments=row['RGFRCMT']
            )
            next_post_training_cnt = next_post_training_cnt + 1
        else:
            next_post_training_id = None

        if pd.notna(row['RGMScCMP']) or \
            pd.notna(row['RGMScDT']) or \
            pd.notna(row['RGMScOTCM']) or \
            pd.notna(row['RGMScEX']) or \
            pd.notna(row['RGMScEXDT']) or \
            pd.notna(row['RGMSCEXDTL']) or \
            pd.notna(row['RGCERTIS']) or \
            pd.notna(row['RGCERTDT']) or \
            pd.notna(row['RGHCPATH']) or \
            pd.notna(row['RGHCPORT']) or \
            pd.notna(row['RGHCPORTDT']) or \
            pd.notna(row['RGHCARP']) or \
            pd.notna(row['RGHCARPDT']) or \
            pd.notna(row['RGHCDCSA']) or \
            pd.notna(row['RGHCDCSADT']) or \
            pd.notna(row['RGHCDCSB']) or \
            pd.notna(row['RGHCDCSBDT']) or \
            pd.notna(row['RGHCDCSC1']) or \
            pd.notna(row['RGHCDCSC1DT']) or \
            pd.notna(row['RGHCDCSC2']) or \
            pd.notna(row['RGHCDCSC2DT']) or \
            pd.notna(row['RGHCFRC']) or \
            pd.notna(row['RGHCFRCDT']) or \
            pd.notna(row['RGHCIAPS']) or \
            pd.notna(row['RGHCIAPSDT']) or \
            pd.notna(row['RGHCIAPSDT']) or \
            pd.notna(row['RGHCPHDDT']) or \
            pd.notna(row['RGHCCENG']) or \
            pd.notna(row['RGHCCENGDT']) or \
            pd.notna(row['RGHCSUP']) or \
            pd.notna(row['RHCSUPDT']) or \
            pd.notna(row['RGLVDT']) or \
            pd.notna(row['RGLVRS']) or \
            pd.notna(row['RGLVCM']) or \
            pd.notna(row['RGOSRA']) or \
            pd.notna(row['RGOSRADTL']) or \
            pd.notna(row['RGHCPC']) or \
            pd.notna(row['RGHCPCDT']) or \
            pd.notna(row['RGHEXCM']) or \
            pd.notna(row['RGSPEC']) or \
            pd.notna(row['RGENTRY']) or \
            pd.notna(row['RGHEI']) or \
            pd.notna(row['RGOLEXCMDT']) or \
            pd.notna(row['RGOLCMPDT']) or \
            pd.notna(row['RGHCREQ']) or \
            pd.notna(row['RGHCSREQ']) or \
            pd.notna(row['RGHCNM']) or \
            pd.notna(row['RGHCNUM']) or \
            pd.notna(row['RGAHCS']) or \
            pd.notna(row['RGOLEXT']):

            next_training_record_id = next_training_record_cnt
            transfer_training_record_separate(
                path=path,
                id=next_training_record_id,
                hei_qualification_completed=row['RGMScCMP'],
                hei_qualification_date=row['RGMScDT'],
                hei_qualification_outcome=row['RGMScOTCM'],
                hei_extension=row['RGMScEX'],
                hei_extension_date=row['RGMScEXDT'],
                hei_extension_comments=row['RGMSCEXDTL'],
                program_certification=row['RGCERTIS'],
                program_certification_date=row['RGCERTDT'],
                hsst_pathway=row['RGHCPATH'],
                hsst_portfolio_completed=row['RGHCPORT'],
                hsst_portfolio_completion_date=row['RGHCPORTDT'],
                hsst_arp_completed=row['RGHCARP'],
                hsst_arp_completion_date=row['RGHCARPDT'],
                hsst_d_clin_part_a_completed=row['RGHCDCSA'],
                hsst_d_clin_part_a_completion_date=row['RGHCDCSADT'],
                hsst_d_clin_part_b_completed=row['RGHCDCSB'],
                hsst_d_clin_part_b_completion_date=row['RGHCDCSBDT'],
                hsst_d_clin_part_c1_completed=row['RGHCDCSC1'],
                hsst_d_clin_part_c1_completion_date=row['RGHCDCSC1DT'],
                hsst_d_clin_part_c2_completed=row['RGHCDCSC2'],
                hsst_d_clin_part_c2_completion_date=row['RGHCDCSC2DT'],
                hsst_fcrpath_completed=row['RGHCFRC'],
                hsst_fcrpath_completion_date=row['RGHCFRCDT'],
                hsst_iaps_completed=row['RGHCIAPS'],
                hsst_iaps_completion_date=row['RGHCIAPSDT'],
                hsst_phd_completed=row['RGHCIAPSDT'],
                hsst_phd_completion_date=row['RGHCPHDDT'],
                hsst_ceng_completed=row['RGHCCENG'],
                hsst_ceng_completion_date=row['RGHCCENGDT'],
                hsst_portfolio_signed=row['RGHCSUP'],
                hsst_portfolio_signed_date=row['RHCSUPDT'],
                program_leaving_date=row['RGLVDT'],
                program_leaving_reason=row['RGLVRS'],
                program_leaving_comments=row['RGLVCM'],
                reasonable_adjustments=row['RGOSRA'],
                reasonable_adjustments_comments=row['RGOSRADTL'],
                hpcp_registration=row['RGHCPC'],
                hpcp_registration_date=row['RGHCPCDT'],
                hsst_start_month=row['RGHCMTH'],
                hsst_start_year=row['RGHCYR'],
                hsst_expected_completion_month=row['RGHEMTH'],
                hsst_expected_completion_year=row['RGHEYR'],
                stp_start_month=row['RGSSMTH'],
                stp_start_year=row['RGCHRT'],
                stp_expected_completion_month=row['RGSEMTH'],
                stp_expected_completion_year=row['RGANEX'],
                hsst_expected_exit=row['RGHEXCM'],
                specalism=row['RGSPEC'],
                recruitment_method=row['RGENTRY'],
                hei_awards=row['RGHEI'],
                portfolio_expected_completion_date=row['RGOLEXCMDT'],
                portfolio_actual_completion_date=row['RGOLCMPDT'],
                hcpc_signoff_required=row['RGHCREQ'],
                hcpc_counter_signoff_required=row['RGHCSREQ'],
                hcpc_signoff_name=row['RGHCNM'],
                hcpc_signoff_number=row['RGHCNUM'],
                ahcs_registration=row['RGAHCS'],
                portfolio_extended=row['RGOLEXT']
                )

            next_training_record_cnt = next_training_record_cnt + 1
        else:
            next_training_record_id = None

        if pd.notna(row['RGSTAT']):
            next_trainee_statuses_id = next_trainee_statuses_cnt
            transfer_trainee_statuses(
                path=path,
                id=next_trainee_statuses_id,
                trainee_id=[row['RGID']],
                status_id=[row['RGSTAT']]
            )
            next_trainee_statuses_cnt = next_trainee_statuses_cnt + 1
        else:
            next_trainee_statuses_id = None

        training_records.append(next_training_record_id)
        post_trainings.append(next_post_training_id)

    ts =  pd.DataFrame(
        data= {
            "id": ids,
            "training_record_id": training_records,
            "nshc_trainee_id": nshc_trainee_ids,
            "title_id": titles,
            "surname": surnames,
            "forename": forenames,
            "date_of_birth": date_of_births,
            "ethnicity_id": ethnicities,
            "ethnicity_other": ethnicity_others,
            "disability_status": disability_statuses,
            "disable_category_id": disable_categories,
            "disability_details": disability_details,
            "gender_id": genders,
            "sexual_orientation_id": sexual_orientations,
            "religion_id": religions,
            "nationality_id": nationalities,
            "marital_status_id": marital_statuses,
            "address_line_1": address_line_1s,
            "address_line_2": address_line_2s,
            "address_line_3": address_line_3s,
            "post_code": post_codes,
            "work_email": work_emails,
            "work_phone": work_phones,
            "academic_email": academic_emails,
            "personal_email": personal_emails,
            "email_preference_id": email_preferences,
            "personal_phone": personal_phones,
            "funding_provider_id": funding_providers,
            "funding_provider_comments": funding_provider_comments,
            "training_program_id": training_programs,
            "cohort_number": cohort_numbers,
            "status": statuses,
            "whole_time_equivilent": whole_time_equivilents,
            "onefile_id": onefile_ids,
            "ecc_reference": ecc_references,
            "deferred": deferreds,
            "deferral_comments": deferral_comments,
            "post_training_id": post_trainings,
        }
    )

    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:
        ts.to_excel(writer, sheet_name=SHEET_NAME, index=False)


def transfer_training_record_separate(path, id, hei_qualification_completed, hei_qualification_date, hei_qualification_outcome, hei_extension, hei_extension_date, hei_extension_comments, program_certification, program_certification_date, hsst_pathway, hsst_portfolio_completed, hsst_portfolio_completion_date, hsst_arp_completed, hsst_arp_completion_date, hsst_d_clin_part_a_completed, hsst_d_clin_part_a_completion_date, hsst_d_clin_part_b_completed, hsst_d_clin_part_b_completion_date, hsst_d_clin_part_c1_completed, hsst_d_clin_part_c1_completion_date, hsst_d_clin_part_c2_completed, hsst_d_clin_part_c2_completion_date, hsst_fcrpath_completed, hsst_fcrpath_completion_date, hsst_iaps_completed, hsst_iaps_completion_date, hsst_phd_completed, hsst_phd_completion_date, hsst_ceng_completed, hsst_ceng_completion_date, hsst_portfolio_signed, hsst_portfolio_signed_date, program_leaving_date, program_leaving_reason, program_leaving_comments, reasonable_adjustments, reasonable_adjustments_comments, hpcp_registration, hpcp_registration_date, hsst_expected_exit, specalism, recruitment_method, hei_awards, portfolio_expected_completion_date, portfolio_actual_completion_date, hcpc_signoff_required, hcpc_counter_signoff_required, hcpc_signoff_name, hcpc_signoff_number, ahcs_registration, portfolio_extended, hsst_start_month, hsst_start_year, hsst_expected_completion_month, hsst_expected_completion_year, stp_start_month, stp_start_year, stp_expected_completion_month, stp_expected_completion_year):
    SHEET_NAME = "TrainingRecord"
    pts = pd.DataFrame(
        data= {
                "id": id,
                "hei_qualification_comp": hei_qualification_completed,
                "hei_qualification_date": hei_qualification_date,
                "hei_qualification_outcome_id": hei_qualification_outcome,
                "hei_awarding_institution_id": hei_awards,
                "hei_extension": hei_extension,
                "hei_extension_date": hei_extension_date,
                "hei_extension_comments": hei_extension_comments,
                "program_certification": program_certification,
                "program_certification_date": program_certification_date,
                "program_leaving_date": program_leaving_date,
                "program_leaving_reason": program_leaving_reason,
                "program_leaving_comments": program_leaving_comments,
                "hsst_pathway_id": hsst_pathway,
                "hsst_portfolio_comp": hsst_portfolio_completed,
                "hsst_portfolio_comp_date": hsst_portfolio_completion_date,
                "hsst_expected_exit_date": hsst_expected_exit,
                "hsst_arp_comp": hsst_arp_completed,
                "hsst_arp_comp_date": hsst_arp_completion_date,
                "hsst_dclin_part_a_comp": hsst_d_clin_part_a_completed,
                "hsst_dclin_part_a_comp_date": hsst_d_clin_part_a_completion_date,
                "hsst_dclin_part_b_comp": hsst_d_clin_part_b_completed,
                "hsst_dclin_part_b_comp_date": hsst_d_clin_part_b_completion_date,
                "hsst_dclin_part_c1_comp": hsst_d_clin_part_c1_completed,
                "hsst_dclin_part_c1_comp_date": hsst_d_clin_part_c1_completion_date,
                "hsst_dclin_part_c2_comp": hsst_d_clin_part_c2_completed,
                "hsst_dclin_part_c2_comp_date": hsst_d_clin_part_c2_completion_date,
                "hsst_fcrpath_comp": hsst_fcrpath_completed,
                "hsst_fcrpath_comp_date": hsst_fcrpath_completion_date,
                "hsst_iaps_comp": hsst_iaps_completed,
                "hsst_iaps_comp_date": hsst_iaps_completion_date,
                "hsst_phd_comp": hsst_phd_completed,
                "hsst_phd_comp_date": hsst_phd_completion_date,
                "hsst_ceng_comp": hsst_ceng_completed,
                "hsst_ceng_comp_date": hsst_ceng_completion_date,
                "hsst_portfolio_signed": hsst_portfolio_signed,
                "hsst_portfolio_signed_date": hsst_portfolio_signed_date,
                "hsst_start_month": [hsst_start_month],
                "hsst_start_year": [hsst_start_year],
                "hsst_expected_comp_month": [hsst_expected_completion_month],
                "hsst_expected_comp_year": [hsst_expected_completion_year],
                "reasonable_adjustments": reasonable_adjustments,
                "reasonable_adj_comments": reasonable_adjustments_comments,
                "stp_start_month": [stp_start_month],
                "stp_start_year": [stp_start_year],
                "stp_expected_comp_month": [stp_expected_completion_month],
                "stp_expected_comp_year": [stp_expected_completion_year],
                "specialism_id": specalism,
                "recruitment_method_id": recruitment_method,
                "portf_expected_comp_date": portfolio_expected_completion_date,
                "portf_actual_comp_date": portfolio_actual_completion_date,
                "hcpc_registration": hpcp_registration,
                "hcpc_registration_date": hpcp_registration_date,
                "hcpc_signoff_required": hcpc_signoff_required,
                "hcpc_counter_signoff_require": hcpc_counter_signoff_required,
                "hcpc_signoff_name": hcpc_signoff_name,
                "hcpc_signoff_number": hcpc_signoff_number,
                "ahcs_registration": ahcs_registration,
                "portfolio_extended": portfolio_extended
            }
        )

    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:
        pts.to_excel(writer, sheet_name=SHEET_NAME, index=False, startrow=0 if id == None or id == 1 else id, header=id==1)


def transfer_trainee_statuses(path, id, trainee_id, status_id):
    SHEET_NAME = "TraineeStatuses"
    pts = pd.DataFrame(
        data= {
                "id": id,
                "trainee_id": trainee_id,
                "trainee_status_id": status_id,
            }
        )

    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:
        pts.to_excel(writer, sheet_name=SHEET_NAME, index=False, startrow=0 if id == None or id == 1 else id, header=id==1)


def transfer_locations(path, sheets):
    LOCATION_SHEET_NAME = "EmployerLocation"
    LOCATION_OLD_ASSESSMENT_RECORDS_SHEETS = 'tlkpHospital'
    LOOKUP_SHEET_NAME = "EmployerLocations"

    with pd.ExcelWriter(
        path, mode="a", engine="openpyxl", if_sheet_exists="overlay",
                      date_format='YYYY-MM-DD',
                      datetime_format='YYYY-MM-DD'
    ) as writer:

        ids = []
        titles = []

        lookup_ids = []
        location_ids = []
        employer_ids = []
        next_lookup_cnt = 1
        next_lookup_id = 1

        for _, row in sheets[LOCATION_OLD_ASSESSMENT_RECORDS_SHEETS].iterrows():
            ids.append(row['HSID'])
            titles.append(row['HSNAME'])


            if pd.notna(row['HSTRUST']):
                next_lookup_id = next_lookup_cnt
                lookup_ids.append(next_lookup_id)
                location_ids.append(row['HSID'])
                employer_ids.append(row['HSTRUST'])
                next_lookup_cnt = next_lookup_cnt + 1
            else:
                next_lookup_id = None


        employer_locations = pd.DataFrame(
            data={"id": ids, "title": titles}
        )
        employer_locations_lookup = pd.DataFrame(
            data={"id": lookup_ids, "location_id": location_ids, "employer_id": employer_ids}
        )
        employer_locations.to_excel(writer, sheet_name=LOCATION_SHEET_NAME, index=False)
        employer_locations_lookup.to_excel(writer, sheet_name=LOOKUP_SHEET_NAME, index=False)
