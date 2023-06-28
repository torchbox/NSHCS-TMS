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
    const storeLabel = 'NSHCS-TMS-store';
    const store = JSON.parse(localStorage.getItem(storeLabel)) || [
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
            value: 'Direct',
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
            value: 'Sheffield Training Hospitals Trust',
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
    function saveInitialData() {
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
        if (store) {
            store.forEach((item) => {
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
                    // Set page title (user's name)
                    if (item.dataName === 'name') {
                        nameHeading.textContent = item.value;
                        targetElement.checked = item.checked;
                    }

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
        }

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
                saveInitialData();
                const label = item.getAttribute('data-save');

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
            localStorage.removeItem(storeLabel);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        populateData();
    });
}

storage();
