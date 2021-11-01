FORM_FIRST_NAME.addEventListener('focus', (e) => {
        (validateSurName(FORM_FIRST_NAME))
                ? setSuccessFor(FORM_FIRST_NAME,ERROR_USERNAME,'Valid First name')
                : setErrorFor(FORM_FIRST_NAME,ERROR_USERNAME,'Invalid First name');
});

FORM_LAST_NAME.addEventListener('focus', (e) => {
        (validateSurName(FORM_LAST_NAME))
                ? setSuccessFor(FORM_LAST_NAME,ERROR_USERNAME,'Valid First name')
                : setErrorFor(FORM_LAST_NAME,ERROR_USERNAME,'Invalid First name');
});

FORM_ADDR1.addEventListener('focus', (e) => {
        (validateAdress1(FORM_ADDR1))
                ? setSuccessFor(FORM_LAST_NAME,ERROR_USERNAME,'Valid First name')
                : setErrorFor(FORM_LAST_NAME,ERROR_USERNAME,'Invalid First name');
});

FORM_POSTAL_CODE.addEventListener('focus', (e) => {
        (validatePostalCode(FORM_POSTAL_CODE))
                ? setSuccessFor(FORM_LAST_NAME,ERROR_USERNAME,'Valid First name')
                : setErrorFor(FORM_LAST_NAME,ERROR_USERNAME,'Invalid First name');
});

FORM_PHONE.addEventListener('focus', (e) => {
        (validatePhone(FORM_PHONE))
                ? setSuccessFor(FORM_PHONE,ERROR_USERNAME,'Valid First name')
                : setErrorFor(FORM_PHONE,ERROR_USERNAME,'Invalid First name');
});

BTN_ADD_ADDR_FORM.addEventListener('click', (e) => {
        e.preventDefault();
});
