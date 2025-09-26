const submitBtn = document.getElementById('Submit-btn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    clearErrors();

    const fname = document.getElementById('first-name').value.trim();
    const lname = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let hobbiesContainer = document.querySelector('.hobbies-input');

    let hobbies = hobbie(hobbiesContainer);

    let isValid = true;

    if (fname === "") {
        isValid = false;
        showError('fname-error', "Please enter first name*");
    }
    if (lname === "") {
        isValid = false;
        showError('lname-error', "Please enter last name*");
    }

    if (email === "") {
        isValid = false;
        showError('email-error', "Email is required*");
    } else if (!validateEmail(email)) {
        isValid = false;
        showError('email-error', "Invalid email format*");
    }

    if (phone === "") {
        isValid = false;
        showError('phone-error', "Phone number is required*");
    } else if (!/^\d{10}$/.test(phone)) {
        isValid = false;
        showError('phone-error', "Phone number must be 10 digits*");
    }

    if (!isValid) {
        return;
    }

    alert("Form submitted successfully!");

    let data = {
        firstname: fname,
        lastname: lname,
        email: email,
        phone: phone,
        hobbies: hobbies,
    }

    console.log(data);
});

function showError(id, message) {
    const errorEl = document.getElementById(id);
    if (errorEl) {
        errorEl.style.display = 'block';
        errorEl.style.color = 'red';
        errorEl.innerText = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('[id$="-error"]');
    errorElements.forEach(el => {
        el.style.display = 'none';
        el.innerText = '';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function hobbie(hobbiesContainer) {
    const hobbies = [];
    if (!hobbiesContainer) {
        return hobbies;
    }
    const inputs = hobbiesContainer.querySelectorAll('input[type="checkbox"][name="hobbies"]');

    inputs.forEach((checkbox) => {
        if (checkbox.checked) {
            hobbies.push(checkbox.value);
            console.log(checkbox.value);
        } else {
            showError('hobbies-error', "Please select hobbies*")
        }
    });

    return hobbies;
};
