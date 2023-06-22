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
    const store = JSON.parse(localStorage.getItem(storeLabel)) || [];

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
    function saveInitialData(redirect) {
        localStorage.setItem(storeLabel, JSON.stringify(buildData()));

        // Navigate to view page once saved
        if (redirect) {
            window.location.replace(
                window.location.pathname.replace(/\/[^\/]*$/, '/view.html'),
            );
        }
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
                saveInitialData(true);
            });
        });
    }

    if (editButton) {
        editButton.forEach((item) => {
            item.addEventListener('click', () => {
                window.location.replace(
                    window.location.pathname.replace(
                        /\/[^\/]*$/,
                        '/index.html',
                    ),
                );
            });
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            populateData();

            window.location.replace(
                window.location.pathname.replace(/\/[^\/]*$/, '/view.html'),
            );
        });
    }

    // Dev helper
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            localStorage.removeItem(storeLabel);

            window.location.replace(
                window.location.pathname.replace(/\/[^\/]*$/, '/index.html'),
            );
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        populateData();
    });
}

storage();
