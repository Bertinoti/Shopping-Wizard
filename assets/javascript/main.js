var isValid = true

function validateUserName () {
    var userNameValue = FORM_USERNAME.value.trim();

    //  USER NAME VERIFICATION  //
    if(userNameValue.length > 5 && userNameValue.length < 20) {
        setSuccessFor(FORM_USERNAME,ERROR_USERNAME,'Valid Username');
        return true
    } else {
        
        setErrorFor(FORM_USERNAME,ERROR_USERNAME,'Invalid Username');
        return false
    }
}

function validateEmail () {
    // EMAIL VERIFICATION //
    const EMAIL_PATTERN = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    var emailValue = FORM_EMAIL.value.trim();
    if(emailValue.match(EMAIL_PATTERN) && emailValue.length < 50) {
        setSuccessFor(FORM_EMAIL,ERROR_EMAIL,'Valid Email');
         return true
    } else {
        
        setErrorFor(FORM_EMAIL,ERROR_EMAIL,'Invalid Email');
        return false
    }
    }

function validatePassword(){
    // PASSWORD VERIFICATION //
    const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
    var passwordValue = FORM_PASSWORD.value.trim();
    if(passwordValue.match(PASSWORD_PATTERN)){
        setSuccessFor(FORM_PASSWORD,ERROR_PASSWORD,'Valid Password');
        return true
   } else {
       
       setErrorFor(FORM_PASSWORD,ERROR_PASSWORD,'Invalid Password');
       return false
    }
}

function validate2Password (){
    // PASSWORD CHECK //
    var passwordValue = FORM_PASSWORD.value.trim();
    var password2Value = FORM_PASSWORD_CHECK.value.trim();
    if(password2Value.match(passwordValue)) {
        setSuccessFor(FORM_PASSWORD_CHECK,ERROR_PASSWORD_CHECK,'Password matched');
        return true
   } else {
       
       setErrorFor(FORM_PASSWORD_CHECK,ERROR_PASSWORD_CHECK,'Password not matched');
       return false
    }
}

function validateFormUser (e) {
    e.preventDefault()
    if (!validateUserName ()) isValid = false
    if (!validateEmail ()) isValid = false
    if (!validatePassword ()) isValid = false
    if (!validate2Password ()) isValid = false

    if (isValid)
    console.log('validado');
}

function setErrorFor(input, p ,message) {
    input.classList.remove("success")
    input.classList.add("error")
    p.innerHTML = message
}

function setSuccessFor(input, p, message) {
    input.classList.remove("error")
    input.classList.add("success")
    p.innerHTML = message
}
