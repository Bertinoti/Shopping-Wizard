FORM_USERNAME.addEventListener('focus', (e) => {
        validateUserName();
});

FORM_EMAIL.addEventListener('focus', (e) => {
        validateEmail();
});

FORM_PASSWORD.addEventListener('focus', (e) => {
        validatePassword();
});

FORM_PASSWORD_CHECK.addEventListener('focus', (e) => {
        validate2Password();
});

BTN_ADD_USER_FORM.addEventListener('click', (e) => {
        validateFormUser(e);
});