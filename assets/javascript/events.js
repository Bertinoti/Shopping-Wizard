//TODO validate User Page
FORM_USERNAME.addEventListener('blur', (e) => {
validateUserName();
});

FORM_EMAIL.addEventListener('blur', (e) => {
        validateEmail();
});

FORM_PASSWORD.addEventListener('blur', (e) => {
        validatePassword();
});

FORM_PASSWORD_CHECK.addEventListener('blur', (e) => {
        validate2Password();
});

//TODO First name validation //
FORM_FIRST_NAME.addEventListener('blur', (e) => {
        (validateSurName(FORM_FIRST_NAME))
                ? setSuccessFor(FORM_FIRST_NAME, ERROR_USERNAME, 'Valid First name')
                : setErrorFor(FORM_FIRST_NAME, ERROR_USERNAME, 'Invalid First name max length: 20');
});
//TODO Last name validation //
FORM_LAST_NAME.addEventListener('blur', (e) => {
        (validateSurName(FORM_LAST_NAME))
                ? setSuccessFor(FORM_LAST_NAME, ERROR_USERNAME, 'Valid Last name')
                : setErrorFor(FORM_LAST_NAME, ERROR_USERNAME, 'Invalid Last name max length: 20');
});
//TODO Validate Birthday
FORM_BIRTHDAY.addEventListener('blur', (e)=> {
        validateBirth(FORM_BIRTHDAY)
                ? setSuccessFor(FORM_BIRTHDAY,ERROR_BIRTH, 'Valid Birthday')
                : setErrorFor(FORM_BIRTHDAY,ERROR_BIRTH, 'The Birthday need to be before than current day');
})
//TODO Address validation //
FORM_ADDR1.addEventListener('blur', (e) => {
        (validateAddress(FORM_ADDR1))
                ? setSuccessFor(FORM_ADDR1, ERROR_ADDR, 'Valid Addr')
                : setErrorFor(FORM_ADDR1, ERROR_ADDR, 'Invalid address max length: 50');
});
//TODO Postalcode validation //
FORM_POSTAL_CODE.addEventListener('blur', (e) => {
        (validatePostalCode(FORM_POSTAL_CODE))
                ? setSuccessFor(FORM_POSTAL_CODE, ERROR_POST_CODE, 'Valid Postal Code')
                : setErrorFor(FORM_POSTAL_CODE, ERROR_POST_CODE, 'Invalid postal code max length: 5');
});

FORM_COUNTRY.addEventListener('change', (e) => {
        FORM_PREFIX_PHONE.value = PREFIXES_PHONES[FORM_COUNTRY.value];
});
// Phone number validation //
FORM_PHONE.addEventListener('blur', (e) => {
        (validatePhone(FORM_PHONE))
                ? setSuccessFor(FORM_PHONE, ERROR_PHONE, 'Valid Phone')
                : setErrorFor(FORM_PHONE, ERROR_PHONE, 'Invalid postal code max length: 9 and only numbers');
});


// Change divs Events
for(const iterator of MAIN_ADD_BUTTON) {
        iterator.addEventListener('click', function () { changeDiv(0); addCart()})
}


USER_NEXT_DIV_PAGE.addEventListener('click', (e) => {
        /*if (validateFormUser(e)) {
                saveFormUser();
                changeDiv(1);
        }*/
        changeDiv(1);
});

ADDRESS_NEXT_DIV_PAGE.addEventListener('click', (e) => {
        if (isValidateFormAddr(e)) {
                saveFormAddr();
                changeDiv(2);
                deliveryDate();
        }
        //deliveryDate();
        //changeDiv(2);
})
SHIP_NEXT_DIV_PAGE.addEventListener('click', function () {
        changeDiv(3)
        giftMsg()
        showPaintball()
})
DETAIL_SUBMIT_ORDER.addEventListener('click', function () {
        changeDiv(4)
})

//shippiment events
shippingMethod.addEventListener('change', deliveryDate)
isGift.addEventListener('change', displayDivGift)


carruselShopping.forEach(Element => {
        Element.addEventListener("click", (e) => {
                chooseProduct(e)
        })
})

//BUTTON_MAIN.addEventListener("click", addCart);
