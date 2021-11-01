//  FIRST NAME AND LAST NAME VERIFICATION  //
function validateSurName (inputValidation) {
    var valueInput = inputValidation.value.trim();
    return (valueInput.length < 20) ? true : false;
}

//  ADDRESS VERIFICATION  //
function validateAdress (inputValidation) {
    var address1Value = inputValidation.value.trim();
    return (address1Value.length < 50) ? true : false;
}

//  POSTAL CODE VERIFICATION  //
function validatePostalCode (inputValidation) {
    var postalCodeValue = inputValidation.value.trim();
    return (postalCodeValue.length < 5) ? true : false;
}

//  PHONE VERIFICATION  //
function validatePhone (inputValidation) {
    var phoneValue = inputValidation.value.trim();
    return (phoneValue.length === 9 && !isNaN(phoneValue)) ? true : false;
}

function isValidateFormAddr() {
    if(validateSurName(FORM_FIRST_NAME)) isValid = false;
    if(validateSurName(FORM_LAST_NAME)) isValid = false;
    if(validateAdress(FORM_ADDR1)) isValid = false;
    if(validatePostalCode(FORM_POSTAL_CODE)) isValid = false;
    if(validatePhone(FORM_PHONE)) isValid = false;

    return isValid;
}
