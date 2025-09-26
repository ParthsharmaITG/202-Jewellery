

const submitBtn = document.getElementById('Submit-btn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const fname = document.getElementById('first-name').value;
    const lname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    // const msg = document.getElementById('message').value;
    const hobbiesContainer = document.getElementsByClassName('hobbies-input');

    let hobbies = [];

    let isValid = true;

    if (fname === "") {
        isValid = false;
        showError('fname-error', "Please enter first name*")
    }

    if (lname === "") {
        isValid = false;
        showError('lname-error', "Please enter first name*")
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

    if (isValid) {
        alert("Form submitted successfully!");
    }
    let data = {
        firstname: fname,
        lastname: lname,
        email: email,
        phone: phone,
        hobbies: hobbies
    }
    console.log(data);


})

function showError(id, message) {
    const errorEl = document.getElementById(id);
    errorEl.style.display = 'block';
    errorEl.style.color = 'red';
    errorEl.innerText = message;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function hobbie(){
    let input = hobbiesContainer.getElementsByTagName('input');

    Array.from(input).forEach((ele)=>{
        if(ele.checked == true){
            hobbies.push(ele.name)
        }
    })
}

let firstsection = document.querySelectorAll(".options");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');  
    } else {
      entry.target.classList.remove('show'); 
    }
  });
});

observer.observe(firstsection);
