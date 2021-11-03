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
        (validateAddress(FORM_ADDR1))
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

// Change divs Events
MAIN_ADD_BUTTON.addEventListener('click', function () { changeDiv(0)} )
USER_NEXT_DIV_PAGE.addEventListener('click', function() { changeDiv(1)})
ADDRESS_NEXT_DIV_PAGE.addEventListener('click', function() {
        changeDiv(2)
        deliveryDate()})
SHIP_NEXT_DIV_PAGE.addEventListener('click', function() {
        changeDiv(3)
        giftMsg()})
DETAIL_SUBMIT_ORDER.addEventListener('click', function () {changeDiv(4)})

//shippiment events
shippingMethod.addEventListener('change', deliveryDate)




carruselShopping.forEach( Element => {
    Element.addEventListener("click", (e) => {
        chooseProduct(e)
    })
})

BUTTON_MAIN.addEventListener("click", addCart)


// solo para probar 
