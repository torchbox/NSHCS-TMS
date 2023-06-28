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
            type: 'text',
            value: 'Bereavement',
            checked: false,
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
            value: 'Suspend',
        },
        {
            id: 6,
            dataName: 'case-1-date-day',
            type: 'text',
            value: '23',
            checked: false,
        },
        {
            id: 7,
            dataName: 'case-1-date-month',
            type: 'text',
            value: '05',
            checked: false,
        },
        {
            id: 8,
            dataName: 'case-1-date-year',
            type: 'text',
            value: '2022',
            checked: false,
        },
        {
            id: 9,
            dataName: 'case-1-description',
            type: 'textarea',
            value: 'Still experiencing significant difficulty in her training due to a recent bereavement. Expressed feeling emotionally overwhelmed, making it hard for her to concentrate and absorb the training material. We should provide appropriate support and understanding to help Victoria navigate through this challenging time.',
        },
        {
            id: 10,
            dataName: 'case-2-date-day',
            type: 'text',
            value: '29',
            checked: false,
        },
        {
            id: 11,
            dataName: 'case-2-date-month',
            type: 'text',
            value: '05',
            checked: false,
        },
        {
            id: 12,
            dataName: 'case-2-date-year',
            type: 'text',
            value: '2022',
            checked: false,
        },
        {
            id: 13,
            dataName: 'case-2-description',
            type: 'textarea',
            value: 'Has expressed her need for personalised support due to her recent bereavement. Difficulty in maintaining focus, retaining information, and completing assignments. Given her circumstances, it is recommended that we explore additional measures to provide targeted assistance.',
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
