
// const form =document.querySelector('#form')
// const username =document.querySelector('#username');
// const email =document.querySelector('#email');
// const password =document.querySelector('#password');
// const cpassword =document.querySelector('#cpassword');



// form.addEventListener('submit',(e)=>{
    
//     if(!validateInputs()){
//         e.preventDefault();
//         storeDetails();
//     }


// })

// function validateInputs(){
//     const usernameVal = username.value.trim()
//     const emailVal = email.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();

//     let success = true;


//     if(usernameVal ===''){
//         success = false;
//         setError(username,'Username is required')
//     }
//     else{
//         setSuccess(username)
//     }

//     if(emailVal ===''){
//         success = false;
//         setError(email,'Email is required')
//     }
//     else if(!validateEmail(emailVal)){
//         success = false;
//         setError(email,'please enter the valid email')
//     }
//     else{
//         setSuccess(email)
//     }

//     if(passwordVal === ''){
//         success = false;
//         setError(password,'password is required')
//     }
//     else if(passwordVal.length<8){
//         success = false;
//         setError(password,'password must be atleast 8 characters long')
//     }
//     else{
//         setSuccess(password)
//     }
//     if(cpasswordVal === ''){
//         success = false;
//         setError(cpassword,'confirm password is required')
//     }
//     else if(cpasswordVal!==passwordVal){
//         success = false;
//         setError(cpassword,'Password dose not match')
//     }
//     else{
//         setSuccess(cpassword)
//     }
//     return success;

// }

// function setError(element,message){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')

// }

// function setSuccess(element){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')

// }

// const validateEmail = (email) =>{
//     return String(email)
//     .toLowerCase()
//     .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
// };

// function storeDetails() {
//     const userDetails = {
//      username: username.value.trim(),
//       email: email.value.trim(),
//         password: password.value.trim(),
//           cpassword:cpassword.value.trim()
//    };
//    // Store data in localStorage
//    localStorage.setItem('userDetails', JSON.stringify(userDetails));

//    // Redirect to the view page
//    window.location.href = 'from_register_view.html';
   
// }





const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    if (validateInputs()) {
        storeDetails();
        // Prevent form from submitting traditionally
        e.preventDefault();
    } else {
        // Prevent form submission if validation fails
        e.preventDefault();
    }
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    let success = true;

    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm password is required');
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }

    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
};

function storeDetails() {
    const userDetails = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        cpassword: cpassword.value.trim()
    };

    // Store data in localStorage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to the view page
    window.location.href = 'form_view.html';
}
