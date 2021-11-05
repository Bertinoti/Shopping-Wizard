//!apagar todo esto 
// cs2Button.addEventListener('click', changePage(1))
// lv1Button.addEventListener('click', changePage(2))

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

//TODO Phone Number validation
FORM_COUNTRY.addEventListener('change', (e) => {
        FORM_PREFIX_PHONE.value = PREFIXES_PHONES[FORM_COUNTRY.value];
});

//todo Phone number validation //
FORM_PHONE.addEventListener('blur', (e) => {
        (validatePhone(FORM_PHONE))
                ? setSuccessFor(FORM_PHONE, ERROR_PHONE, 'Valid Phone')
                : setErrorFor(FORM_PHONE, ERROR_PHONE, 'Invalid postal code max length: 9 and only numbers');
});

//TODO Reset Form user and Address
BTN_RESET_FORM.addEventListener('click', ()=>{
        clearform(USER_FORM)
})

BTN_RESET_FORM2.addEventListener('click', ()=>{
        clearform(ADDR_PAGE)
})

//todo Change divs Events
for(const iterator of MAIN_ADD_BUTTON) {
        iterator.addEventListener('click', function () { changeDiv(0); addCart()})
}

//TODO change div user
USER_NEXT_DIV_PAGE.addEventListener('click', (e) => {
        if (validateFormUser(e)) {
                saveFormUser();
                changeDiv(1);
        }
});

//TODO change div Address
ADDRESS_NEXT_DIV_PAGE.addEventListener('click', (e) => {
        if (isValidateFormAddr(e)) {
                saveFormAddr();
                changeDiv(2);
                deliveryDate();
        }
})

//TODO change div shippiment
SHIP_NEXT_DIV_PAGE.addEventListener('click', function () {
        changeDiv(3)
        giftMsg()
        showPaintball()
})

//todo shippiment events
shippingMethod.addEventListener('change', deliveryDate)
isGift.addEventListener('change', displayDivGift)

//TODO carrusel Shopping
carruselShopping.forEach(Element => {
        Element.addEventListener("mouseover", (e) => {
                chooseProduct(e)
        })
})

//TODO change Products nav
for(let item of navArea.children) {
        item.addEventListener("click", (e) => {
                const productSelected = products.find(product => product.name === e.target.textContent);
                buildListImgsProduct(productSelected);
        })
}
