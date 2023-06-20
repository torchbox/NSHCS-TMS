export default function storage() {
    const formInputs = document.querySelectorAll('[data-form]');
    const saveButton = document.getElementById('save');
    const clearButton = document.getElementById('clear');
    const editButton = document.getElementById('edit');
    const userData = [];

    // Retrieve from localStorage or create new
    const storeLabel = 'NSHCS-TMS-store';
    const store = JSON.parse(localStorage.getItem(storeLabel)) || [];

    // Define input data shape
    class FormInput {
        constructor(id, dataName, type, value) {
            this.id = id;
            this.dataName = dataName;
            this.type = type;
            this.value = value;
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
                element.type,
                element.value,
            );

            userData.push(inputObject);
        });

        return userData;
    }

    // Update local storage with new content
    function saveInitialData(redirect) {
        localStorage.setItem(storeLabel, JSON.stringify(buildData()));

        // Navigate to edit page
        if (redirect) {
            window.location.replace(
                window.location.pathname.replace(/\/[^\/]*$/, '/edit.html'),
            );
        }
    }

    // Populate data in DOM if it already exists in localStorage
    function populateData() {
        if (store) {
            store.forEach((item) => {
                const targetElement = document.querySelector(
                    `[data-form='${item.dataName}']`,
                );

                targetElement.value = item.value;
            });
        }
    }

    function clearData() {
        localStorage.removeItem(storeLabel);

        window.location.replace(
            window.location.pathname.replace(/\/[^\/]*$/, '/index.html'),
        );
    }

    if (saveButton) {
        saveButton.addEventListener('click', () => {
            saveInitialData(true);
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', () => {
            clearData();
        });
    }

    if (editButton) {
        editButton.addEventListener('click', () => {
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
