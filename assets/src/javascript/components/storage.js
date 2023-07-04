export default function storage() {
    const formInputs = document.querySelectorAll('[data-form]');
    const saveButton = document.querySelectorAll('[data-save]');
    const cancelButton = document.querySelector('[data-cancel]');
    const editButton = document.querySelectorAll('[data-edit]');
    const clearButton = document.getElementById('clear');
    const nameHeading = document.querySelector('[data-name-heading]');
    const statusContainer = document.querySelector('[data-status-container');
    const mode = document
        .querySelector('[data-mode]')
        .getAttribute('data-mode');
    const userData = [];
    const detailsStoreLabel = 'detailsStore';
    const progressStoreLabel = 'progressStore';
    const supportStoreLabel = 'supportStore';
    const stores = [
        JSON.parse(localStorage.getItem(detailsStoreLabel)) || [
            {
                id: 0,
                dataName: 'status-active-ft',
                status: 'true',
                type: 'checkbox',
                value: 'Active - FT',
                checked: false,
            },
            {
                id: 1,
                dataName: 'status-parental-leave',
                status: 'true',
                type: 'checkbox',
                value: 'Parental leave',
                checked: false,
            },
            {
                id: 2,
                dataName: 'status-left',
                status: 'true',
                type: 'checkbox',
                value: 'Left',
                checked: false,
            },
            {
                id: 3,
                dataName: 'status-active-pt',
                status: 'true',
                type: 'checkbox',
                value: 'Active - PT',
                checked: false,
            },
            {
                id: 4,
                dataName: 'status-sickness',
                status: 'true',
                type: 'checkbox',
                value: 'Sickness',
                checked: false,
            },
            {
                id: 5,
                dataName: 'status-failed',
                status: 'true',
                type: 'checkbox',
                value: 'Failed',
                checked: false,
            },
            {
                id: 6,
                dataName: 'status-passed',
                status: 'true',
                type: 'checkbox',
                value: 'Passed',
                checked: false,
            },
            {
                id: 7,
                dataName: 'status-defer-suspend',
                status: 'true',
                type: 'checkbox',
                value: 'Defer / Suspend',
                checked: false,
            },
            {
                id: 8,
                dataName: 'status-withdrawn',
                status: 'true',
                type: 'checkbox',
                value: 'Withdrawn',
                checked: false,
            },
            {
                id: 9,
                dataName: 'status-preregistration',
                status: 'true',
                type: 'checkbox',
                value: 'Preregistration',
                checked: false,
            },
            {
                id: 10,
                dataName: 'status-resit',
                status: 'true',
                type: 'checkbox',
                value: 'Resit',
                checked: false,
            },
            {
                id: 11,
                dataName: 'status-deceased',
                status: 'true',
                type: 'checkbox',
                value: 'Deceased',
                checked: false,
            },
            {
                id: 12,
                dataName: 'status-career-break',
                status: 'true',
                type: 'checkbox',
                value: 'Career break',
                checked: false,
            },
            {
                id: 13,
                dataName: 'status-dismissed',
                status: 'true',
                type: 'checkbox',
                value: 'Dismissed',
                checked: false,
            },
            {
                id: 14,
                dataName: 'status-covid19-interruption',
                status: 'true',
                type: 'checkbox',
                value: 'COVID19 interruption',
                checked: false,
            },
            {
                id: 15,
                dataName: 'name',
                type: 'text',
                value: 'Victoria Thomas',
                checked: false,
            },
            {
                id: 16,
                dataName: 'dob-day',
                type: 'text',
                value: '03',
                checked: false,
            },
            {
                id: 17,
                dataName: 'dob-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 18,
                dataName: 'dob-year',
                type: 'text',
                value: '1995',
                checked: false,
            },
            {
                id: 19,
                dataName: 'address-1',
                type: 'text',
                value: '72 Guild Street',
                checked: false,
            },
            {
                id: 20,
                dataName: 'address-2',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 21,
                dataName: 'address-3',
                type: 'text',
                value: 'London',
                checked: false,
            },
            {
                id: 22,
                dataName: 'address-4',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 23,
                dataName: 'address-5',
                type: 'text',
                value: 'SE23 6FH',
                checked: false,
            },
            {
                id: 24,
                dataName: 'work-telephone',
                type: 'text',
                value: '0121 496 0316',
                checked: false,
            },
            {
                id: 25,
                dataName: 'personal-telephone',
                type: 'text',
                value: '07700 900452',
                checked: false,
            },
            {
                id: 26,
                dataName: 'work-email',
                type: 'email',
                value: 'v.thomas@nhsmail.net',
                checked: false,
            },
            {
                id: 27,
                dataName: 'preferred-1',
                preferred: 'true',
                type: 'radio',
                value: 'Yes',
                checked: true,
            },
            {
                id: 28,
                dataName: 'academic-email',
                type: 'email',
                value: 'vthomas4@sheffhallam.ac.uk',
                checked: false,
            },
            {
                id: 29,
                dataName: 'preferred-2',
                preferred: 'true',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 30,
                dataName: 'personal-email',
                preferred: 'true',
                type: 'email',
                value: 'supervikstick@madeupmail.com',
                checked: false,
            },
            {
                id: 31,
                dataName: 'preferred-3',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 32,
                dataName: 'programme',
                type: 'select-one',
                value: 'HSST - Higher Specialist Scientist Training',
            },
            {
                id: 33,
                dataName: 'start-date-1',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 34,
                dataName: 'start-date-2',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 35,
                dataName: 'exit-date-1',
                type: 'text',
                value: '08',
                checked: false,
            },
            {
                id: 36,
                dataName: 'exit-date-2',
                type: 'text',
                value: '2025',
                checked: false,
            },
            {
                id: 37,
                dataName: 'entry-type',
                type: 'select-one',
                value: 'Direct Entry',
            },
            {
                id: 38,
                dataName: 'funding-provider',
                type: 'select-one',
                value: 'Self',
            },
            {
                id: 39,
                dataName: 'specialism',
                type: 'select-one',
                value: 'Gastrointestinal Physiology',
            },
            {
                id: 40,
                dataName: 'hei',
                type: 'select-one',
                value: 'Sheffield Hallam University',
            },
            {
                id: 41,
                dataName: 'training-name',
                type: 'text',
                value: 'Ray Purchase',
                checked: false,
            },
            {
                id: 42,
                dataName: 'contracts-training-from-day',
                type: 'text',
                value: '21',
                checked: false,
            },
            {
                id: 43,
                dataName: 'contracts-training-from-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 44,
                dataName: 'contracts-training-from-year',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 45,
                dataName: 'training-current',
                type: 'checkbox',
                value: 'off',
                checked: false,
            },
            {
                id: 46,
                dataName: 'contracts-training-to-day',
                type: 'text',
                value: '12',
                checked: false,
            },
            {
                id: 47,
                dataName: 'contracts-training-to-month',
                type: 'text',
                value: '03',
                checked: false,
            },
            {
                id: 48,
                dataName: 'contracts-training-to-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 49,
                dataName: 'training-email',
                type: 'email',
                value: 'r.purchase@nhsmail.net',
                checked: false,
            },
            {
                id: 50,
                dataName: 'training-telephone',
                type: 'text',
                value: '0121 496 8754',
                checked: false,
            },
            {
                id: 51,
                dataName: 'training-head-of-department-name',
                type: 'text',
                value: 'Jasmine Morris',
                checked: false,
            },
            {
                id: 52,
                dataName: 'training-head-of-department-from-day',
                type: 'text',
                value: '21',
                checked: false,
            },
            {
                id: 53,
                dataName: 'training-head-of-department-from-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 54,
                dataName: 'training-head-of-department-from-year',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 55,
                dataName: 'current',
                type: 'checkbox',
                value: 'off',
                checked: true,
            },
            {
                id: 56,
                dataName: 'training-head-of-department-to-day',
                type: 'text',
                value: '12',
                checked: false,
            },
            {
                id: 57,
                dataName: 'training-head-of-department-to-month',
                type: 'text',
                value: '03',
                checked: false,
            },
            {
                id: 58,
                dataName: 'training-head-of-department-to-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 59,
                dataName: 'training-head-of-department-email',
                type: 'email',
                value: 'j.morris@nhsmail.net',
                checked: false,
            },
            {
                id: 60,
                dataName: 'training-head-of-department-telephone',
                type: 'text',
                value: '0121 496 6235',
                checked: false,
            },
            {
                id: 61,
                dataName: 'training-trust',
                type: 'select-one',
                value: 'Sheffield Teaching Hospitals NHS Foundation Trust',
            },
            {
                id: 62,
                dataName: 'training-hospital-site',
                type: 'select-one',
                value: 'Sheffield Hallam Hospital',
            },
            {
                id: 63,
                dataName: 'training-from-day',
                type: 'text',
                value: '21',
                checked: false,
            },
            {
                id: 64,
                dataName: 'training-from-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 65,
                dataName: 'training-from-year',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 66,
                dataName: 'training-to-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 67,
                dataName: 'training-to-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 68,
                dataName: 'training-to-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 69,
                dataName: 'qualification-type',
                type: 'select-one',
                value: 'Undergraduate',
            },
            {
                id: 70,
                dataName: 'institution',
                type: 'select-one',
                value: 'Nottingham Trent University',
            },
            {
                id: 71,
                dataName: 'subject',
                type: 'text',
                value: 'History',
                checked: false,
            },
            {
                id: 72,
                dataName: 'mark',
                type: 'select-one',
                value: '1st',
            },
            {
                id: 73,
                dataName: 'year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 74,
                dataName: 'verified-yes',
                type: 'radio',
                value: 'Yes',
                checked: true,
            },
            {
                id: 75,
                dataName: 'verified-no',
                type: 'radio',
                value: 'No',
                checked: false,
            },
        ],
        JSON.parse(localStorage.getItem(progressStoreLabel)) || [
            {
                id: 0,
                dataName: 'expected-completion-day',
                type: 'text',
                value: '10',
                checked: false,
            },
            {
                id: 1,
                dataName: 'expected-completion-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 2,
                dataName: 'expected-completion-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 3,
                dataName: 'eec-reference-number',
                type: 'text',
                value: 'N/A',
                checked: false,
            },
            {
                id: 4,
                dataName: 'hcpc-sign-off-name',
                type: 'text',
                value: 'Gavin Peacock',
                checked: false,
            },
            {
                id: 5,
                dataName: 'hcpc-registration-number-1',
                type: 'text',
                value: '868751',
                checked: false,
            },
            {
                id: 6,
                dataName: 'assessment-date-day',
                type: 'text',
                value: '19',
                checked: false,
            },
            {
                id: 7,
                dataName: 'assessment-date-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 8,
                dataName: 'assessment-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 9,
                dataName: 'assessment-type',
                type: 'text',
                value: 'IACC - First',
                checked: false,
            },
            {
                id: 10,
                dataName: 'assessment-comment',
                type: 'textarea',
                value: '',
            },
            {
                id: 11,
                dataName: 'assessment-result',
                type: 'select-one',
                value: 'Fail',
            },
            {
                id: 12,
                dataName: 'next-assessment-day',
                type: 'text',
                value: '19',
                checked: false,
            },
            {
                id: 13,
                dataName: 'next-assessment-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 14,
                dataName: 'next-assessment-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 15,
                dataName: 'reasonable-adjustments-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 16,
                dataName: 'reasonable-adjustments-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 17,
                dataName: 'qualification-complete-yes',
                type: 'radio',
                value: 'Yes',
                checked: true,
            },
            {
                id: 18,
                dataName: 'qualification-complete-no',
                type: 'radio',
                value: 'No',
                checked: false,
            },
            {
                id: 19,
                dataName: 'award-date-day',
                type: 'text',
                value: '20',
                checked: false,
            },
            {
                id: 20,
                dataName: 'award-date-month',
                type: 'text',
                value: '07',
                checked: false,
            },
            {
                id: 21,
                dataName: 'award-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 22,
                dataName: 'award-outcome',
                type: 'select-one',
                value: 'Merit',
            },
            {
                id: 23,
                dataName: 'extension-given-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 24,
                dataName: 'extension-given-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 25,
                dataName: 'programme-certification-obtained-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 26,
                dataName: 'programme-certification-obtained-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 27,
                dataName: 'certificate-issue-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 28,
                dataName: 'certificate-issue-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 29,
                dataName: 'certificate-issue-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 30,
                dataName: 'consent-to-share-with-ahcs-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 31,
                dataName: 'consent-to-share-with-ahcs-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 32,
                dataName: 'post-training-email-preference',
                type: 'select-one',
                value: 'Option one',
            },
            {
                id: 33,
                dataName: 'hcpc-registration-number-2',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 34,
                dataName: 'hcpc-registration-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 35,
                dataName: 'hcpc-registration-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 36,
                dataName: 'hcpc-registration-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 37,
                dataName: 'certification-method',
                type: 'select-one',
                value: 'Option one',
            },
            {
                id: 38,
                dataName: 'chosen-pathway',
                type: 'select-one',
                value: 'Option one',
            },
            {
                id: 39,
                dataName: 'workplace-portfolio-completion-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 40,
                dataName: 'workplace-portfolio-completion-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 41,
                dataName: 'workplace-portfolio-completion-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 42,
                dataName: 'annual-review-of-progression-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 43,
                dataName: 'annual-review-of-progression-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 44,
                dataName: 'annual-review-of-progression-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 45,
                dataName: 'supervisor-sign-off-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 46,
                dataName: 'supervisor-sign-off-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 47,
                dataName: 'supervisor-sign-off-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 48,
                dataName: 'first-employment-after-training',
                type: 'select-one',
                value: 'Option one',
            },
        ],
        JSON.parse(localStorage.getItem(supportStoreLabel)) || [
            {
                id: 0,
                dataName: 'case-opened-day',
                type: 'text',
                value: '19',
                checked: false,
            },
            {
                id: 1,
                dataName: 'case-opened-month',
                type: 'text',
                value: '05',
                checked: false,
            },
            {
                id: 2,
                dataName: 'case-opened-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 3,
                dataName: 'bereavement-issue',
                type: 'select-one',
                value: 'Bereavement',
            },
            {
                id: 4,
                dataName: 'bereavement-description',
                type: 'textarea',
                value: "Victoria's mother died on 17 May 2022. The sudden loss of her mother has undoubtedly had a profound impact on Victoria's emotional well-being and overall ability to cope. The close relationship she shared with her mother and the circumstances surrounding the loss have created a significant grieving process for Victoria. The emotional distress and feelings of sadness, confusion, and emptiness resulting from her mother's passing have understandably affected her concentration, focus, and ability to engage fully in the training program. ",
            },
            {
                id: 5,
                dataName: 'support-status',
                type: 'select-one',
                value: 'Suspended',
            },
            {
                id: 6,
                dataName: 'support-case-manager',
                type: 'select-one',
                value: 'Katherine Bayley',
            },
            {
                id: 7,
                dataName: 'support-case-manager-email',
                type: 'email',
                value: 'mehwish.khan@nhsmail.net',
                checked: false,
            },
            {
                id: 8,
                dataName: 'case-1-date-day',
                type: 'text',
                value: '23',
                checked: false,
            },
            {
                id: 9,
                dataName: 'case-1-date-month',
                type: 'text',
                value: '05',
                checked: false,
            },
            {
                id: 10,
                dataName: 'case-1-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 11,
                dataName: 'case-1-description',
                type: 'textarea',
                value: 'Still experiencing significant difficulty in her training due to a recent bereavement. Expressed feeling emotionally overwhelmed, making it hard for her to concentrate and absorb the training material. We should provide appropriate support and understanding to help Victoria navigate through this challenging time.',
            },
            {
                id: 12,
                dataName: 'case-2-date-day',
                type: 'text',
                value: '29',
                checked: false,
            },
            {
                id: 13,
                dataName: 'case-2-date-month',
                type: 'text',
                value: '05',
                checked: false,
            },
            {
                id: 14,
                dataName: 'case-2-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 15,
                dataName: 'case-2-description',
                type: 'textarea',
                value: 'Has expressed her need for personalised support due to her recent bereavement. Difficulty in maintaining focus, retaining information, and completing assignments. Given her circumstances, it is recommended that we explore additional measures to provide targeted assistance.',
            },
        ],
    ];

    /* eslint-disable no-useless-escape */

    // Define item shape
    class FormInput {
        constructor(id, dataName, status, preferred, type, value, checked) {
            this.id = id;
            this.dataName = dataName;
            this.status = status;
            this.preferred = preferred;
            this.type = type;
            this.value = value;
            this.checked = checked;
        }
    }

    // Create object from user input
    function buildData() {
        // Scrape all form inputs with data-form="[foo]"
        formInputs.forEach((item, i) => {
            const element = document.querySelector(
                `[data-form='${item.dataset.form}']`,
            );

            const inputObject = new FormInput(
                i,
                element.dataset.form,
                element.dataset.status,
                element.dataset.preferred,
                element.type,
                element.value,
                element.checked,
            );

            userData.push(inputObject);
        });

        return userData;
    }

    // Update local storage with new content
    function saveNewData(label) {
        const storeLabel = `${label}Store`;
        localStorage.setItem(storeLabel, JSON.stringify(buildData()));
    }

    // Hacky function to fix hacky storage of dates
    // Generates a short or long human readable date
    function stringsToDates() {
        // This contains either two or three spans, each containing part of the date
        const element = document.querySelectorAll('[data-date]');

        element.forEach((item) => {
            const dateType = item.childElementCount === 3 ? 'full' : 'reduced';
            const hyphenatedDate = item.textContent.replace(/\s+/g, '-');
            const cleanDate = hyphenatedDate.replace(/(^\-+|\-+$)/gm, '');
            const longDateOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            const shortDateOptions = { year: 'numeric', month: 'long' };

            item.innerHTML = new Date(cleanDate).toLocaleDateString(
                'en-GB',
                dateType === 'full' ? longDateOptions : shortDateOptions,
            );

            // If anything goes wrong, just delete it!
            if (item.innerHTML === 'Invalid Date') {
                item.parentNode.remove();
            }
        });
    }

    // Find any empty nodes and remove the block entirely
    function removeEmptyFields() {
        document.querySelectorAll('[data-form]').forEach((item) => {
            if (item.getAttribute('data-no-hide') === 'true') {
                // console.log(item);
            } else if (item.textContent.length === 0) {
                item.parentNode.remove();
            }
        });
    }

    // Populate data in DOM if it already exists in localStorage
    function populateData() {
        stores.forEach((store) => {
            store.forEach((item) => {
                // Set page title (user's name)
                if (item.dataName === 'name') {
                    nameHeading.textContent = item.value;
                }

                // Build status tags
                if (item.status && item.checked) {
                    const tag = document.createElement('div');
                    tag.textContent = item.value;
                    tag.classList.add('tag', 'tag--green');
                    statusContainer.appendChild(tag);
                }

                const targetElement = document.querySelector(
                    `[data-form='${item.dataName}']`,
                );

                if (targetElement) {
                    if (mode === 'edit') {
                        targetElement.value = item.value;

                        // Special treatment for radio/checkboxes
                        if (item.type === 'radio' || item.type === 'checkbox') {
                            if (item.checked) {
                                targetElement.checked = true;
                            }
                        }
                    } else {
                        targetElement.textContent = item.value;

                        // More special treatment for these fields in view mode
                        if (item.type === 'email' && item.value) {
                            targetElement.innerHTML = `<a href=mailto:${item.value}>${item.value}</a>`;
                        }

                        if (item.type === 'checkbox') {
                            targetElement.textContent = item.checked
                                ? 'Yes'
                                : 'No';
                        }

                        if (item.type === 'radio') {
                            targetElement.textContent = '';
                            if (item.checked) {
                                if (item.preferred) {
                                    targetElement.innerHTML = `<div
                                            class="tag tag--light-blue tag--width-auto"
                                        >Preferred</div>`;
                                } else {
                                    targetElement.textContent = item.value;
                                }
                            }
                        }
                    }
                }
            });
        });

        if (mode === 'view') {
            // Generate nicer-looking dates for UT
            stringsToDates();

            // Strip empties
            removeEmptyFields();
        }
    }

    if (saveButton) {
        saveButton.forEach((item) => {
            item.addEventListener('click', () => {
                const label = item.getAttribute('data-save');
                saveNewData(label);

                // Navigate to view page once saved
                window.location.replace(
                    window.location.pathname.replace(
                        /\/[^\/]*$/,
                        `/${label}-view.html`,
                    ),
                );
            });
        });
    }

    if (editButton) {
        editButton.forEach((item) => {
            item.addEventListener('click', () => {
                const label = item.getAttribute('data-edit');
                window.location.replace(
                    window.location.pathname.replace(
                        /\/[^\/]*$/,
                        `/${label}-edit.html`,
                    ),
                );
            });
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            populateData();
            const label = cancelButton.getAttribute('data-cancel');

            window.location.replace(
                window.location.pathname.replace(
                    /\/[^\/]*$/,
                    `/${label}-view.html`,
                ),
            );
        });
    }

    // Dev helper
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            localStorage.removeItem('detailsStore');
            localStorage.removeItem('progressStore');
            localStorage.removeItem('supportStore');
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        populateData();
    });
}

storage();
