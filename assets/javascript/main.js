
//TODO  USER NAME VERIFICATION  //
function validateUserName() {
    var userNameValue = FORM_USERNAME.value.trim();
    if (userNameValue.length > 4 && userNameValue.length < 21) {
        setSuccessFor(FORM_USERNAME, ERROR_USERNAME, 'Valid Username');
        return true
    } else {
        setErrorFor(FORM_USERNAME, ERROR_USERNAME, 'Invalid Username');
        return false
    }
}

//TODO Email validation //
function validateEmail() {
    // EMAIL VERIFICATION //
    const EMAIL_PATTERN = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    var emailValue = FORM_EMAIL.value.trim();
    if (emailValue.match(EMAIL_PATTERN) && emailValue.length < 51) {
        setSuccessFor(FORM_EMAIL, ERROR_EMAIL, 'Valid Email');
        return true
    } else {
        setErrorFor(FORM_EMAIL, ERROR_EMAIL, 'Invalid Email');
        return false
    }
}

//TODO Password validation //
function validatePassword() {
    // PASSWORD VERIFICATION //
    const PASSWORD_PATTERN = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var passwordValue = FORM_PASSWORD.value.trim();
    if (passwordValue.match(PASSWORD_PATTERN)) {
        setSuccessFor(FORM_PASSWORD, ERROR_PASSWORD, 'Valid Password');
        return true
    } else {
        setErrorFor(FORM_PASSWORD, ERROR_PASSWORD, 'Invalid Password');
        return false
    }
}

//TODO 2nd password validation //
function validate2Password() {
    // PASSWORD CHECK //
    var passwordValue = FORM_PASSWORD.value.trim();
    var password2Value = FORM_PASSWORD_CHECK.value.trim();
    if (password2Value.match(passwordValue)) {
        setSuccessFor(FORM_PASSWORD_CHECK, ERROR_PASSWORD_CHECK, 'Password matched');
        return true
    } else {
        setErrorFor(FORM_PASSWORD_CHECK, ERROR_PASSWORD_CHECK, 'Password not matched');
        return false
    }
}

//TODO 2nd form page validation //
function validateFormUser(e) {
    e.preventDefault()
    let isValid = true;
    if (!validateUserName()) isValid = false
    if (!validateEmail()) isValid = false
    if (!validatePassword()) isValid = false
    if (!validate2Password()) isValid = false
    return isValid;
}

//TODO Storing user info //
function saveFormUser() {
    userDatas.username = FORM_USERNAME.value;
    userDatas.email = FORM_EMAIL.value;
    userDatas.password = FORM_PASSWORD.value;
}

//TODO Function created for error on validation //
function setErrorFor(input, p, message) {
    input.classList.remove("success")
    input.classList.add("error")
    p.innerHTML = message
}

//TODO Function created for success on validation //
function setSuccessFor(input, p, message) {
    input.classList.remove("error")
    input.classList.add("success")
    p.innerHTML = message
}

//TODO Function to clearform //
function clearform(dom) {
    dom.reset()
}


//TODO  FIRST NAME AND LAST NAME VERIFICATION  //
function validateSurName(inputValidation) {
    var valueInput = inputValidation.value.trim();
    return (valueInput.length < 20) ? true : false;
}

//TODO  ADDRESS VERIFICATION  //
function validateAddress(inputValidation) {
    var address1Value = inputValidation.value.trim();
    return (address1Value.length < 50 && address1Value.length > 10) ? true : false;
}

//TODO  POSTAL CODE VERIFICATION  //
function validatePostalCode(inputValidation) {
    var postalCodeValue = inputValidation.value.trim();
    return (postalCodeValue.length < 6) ? true : false;
}

//TODO  PHONE VERIFICATION  //
function validatePhone(inputValidation) {
    var phoneValue = inputValidation.value.trim();
    return (phoneValue.length === 9 && !isNaN(phoneValue)) ? true : false;
}

//TODO Validation for whole user form //
function isValidateFormAddr(e) {
    e.preventDefault();
    let isValid = true;

    if (!validateSurName(FORM_FIRST_NAME)) isValid = false;
    if (!validateSurName(FORM_LAST_NAME)) isValid = false;
    if (!validateAddress(FORM_ADDR1)) isValid = false;
    if (!validatePostalCode(FORM_POSTAL_CODE)) isValid = false;
    if (!validatePhone(FORM_PHONE)) isValid = false;

    return isValid;
}
//TODO Form values //
function saveFormAddr() {
    addrDatas.firstName = FORM_FIRST_NAME.value;
    addrDatas.lastName = FORM_LAST_NAME.value;
    addrDatas.birthday = FORM_BIRTHDAY.value;
    addrDatas.addr = FORM_ADDR1.value + ' ' + FORM_ADDR2.value;
    addrDatas.postalCode = FORM_POSTAL_CODE.value;
    addrDatas.country = FORM_COUNTRY.value;
    addrDatas.phone = FORM_PHONE.value;
}



//TODO  FIRST NAME AND LAST NAME VERIFICATION  //
function validateSurName(inputValidation) {
    var valueInput = inputValidation.value.trim();
    return (valueInput.length < 20) ? true : false;
}

//TODO  ADDRESS VERIFICATION  //
function validateAddress(inputValidation) {
    var address1Value = inputValidation.value.trim();
    return (address1Value.length < 50) ? true : false;
}

//TODO  POSTAL CODE VERIFICATION  //
function validatePostalCode(inputValidation) {
    var postalCodeValue = inputValidation.value.trim();
    return (postalCodeValue.length < 6) ? true : false;
}

//TODO  PHONE VERIFICATION  //
function validatePhone(inputValidation) {
    var phoneValue = inputValidation.value.trim();
    return (phoneValue.length === 9 && !isNaN(phoneValue)) ? true : false;
}


//TODO Birthday VERIFICATION
function validateBirth(inputValidation) {
    let today = new Date().toISOString().slice(0, 10)
    var birthday = inputValidation.value;
    return birthday < today
}

//TODO 1st form page validation //
function isValidateFormAddr(e) {
    e.preventDefault();
    let isValid = true;

    if (!validateSurName(FORM_FIRST_NAME)) isValid = false;
    if (!validateSurName(FORM_LAST_NAME)) isValid = false;
    if (!validateAddress(FORM_ADDR1)) isValid = false;
    if (!validatePostalCode(FORM_POSTAL_CODE)) isValid = false;
    if (!validatePhone(FORM_PHONE)) isValid = false;

    return isValid;
}

//TODO 2nd form page validation //
function saveFormAddr() {
    addrDatas.firstName = FORM_FIRST_NAME.value;
    addrDatas.lastName = FORM_LAST_NAME.value;
    addrDatas.birthday = FORM_BIRTHDAY.value;
    addrDatas.addr = FORM_ADDR1.value + ' ' + FORM_ADDR2.value;
    addrDatas.postalCode = FORM_POSTAL_CODE.value;
    addrDatas.country = FORM_COUNTRY.value;
    addrDatas.phone = FORM_PHONE.value;
}

//TODO change divs 
function changeDiv(divNum) {
    if (divNum < 4) {
        actual = DIV_ARRAY[divNum];
        next = DIV_ARRAY[divNum + 1];
        actual.style.display = 'none';
        next.style.display = 'block';
    } else {
        actual = DIV_ARRAY[divNum];
        next = DIV_ARRAY[0];
        actual.style.display = 'none';
        next.style.display = 'block';
    }

}
//TODO choose delivery method
function chooseShippment() {
    shipValue = 0;
    for (var i = 0, length = RADIO_SHIP_BUTTON.length; i < length; i++) {
        if (RADIO_SHIP_BUTTON[i].checked) {
            shipValue = RADIO_SHIP_BUTTON[i].value
            Cart.priceShipping = shipValue
            break;
        }
    }
    return shipValue;
}

//TODO print date delivery info
function deliveryinfo(min, max) {
    let dateOrder = new Date()
    year = dateOrder.getFullYear()
    month = dateOrder.getMonth()
    day1 = dateOrder.getDate() + min;
    day2 = dateOrder.getDate() + max;

    deliveryDateMsg(day1, day2, month, year)
}

//TODO delivery options and dates info
function deliveryDate() {
    chooseShippment()
    if (shipValue == 19.99) {
        deliveryinfo(1, 2)
    } else
        if (shipValue == 9.99) {
            deliveryinfo(3, 5)
        } else {
            deliveryinfo(5, 7)
        }
}

//TODO display div gift 
function displayDivGift() {
    if (isGift.checked) {
        giftOn.style.display = 'block'
    } else {
        giftOn.style.display = 'none'
    }
}

//TODO print a menssage to delivery dates
function deliveryDateMsg(d1, d2, month, year) {
    if (orderMsgInfo.childElementCount >= 1) {
        orderMsgInfo.removeChild(orderMsgInfo.getElementsByTagName('div')[0]);
    }
    deliveryMsg = `Your order will be delivery between ${d1} ${monthArray[month]} ${year} and ${d2} ${monthArray[month]} ${year}`
    divMsg = document.createElement('div');
    divMsg.innerHTML = deliveryMsg;
    orderMsgInfo.appendChild(divMsg)
    Cart.deliveryDate = `${d1} ${monthArray[month]} ${year} to ${d2} ${monthArray[month]} ${year}`
    //console.log(Cart.deliveryDate)
}

//TODO  save the gift message
function giftMsg() {
    if (RADIO_MSG_BUTTON[0].checked) {
        Cart.giftMessage = textValue.value
        //console.log(Cart.giftMessage)
    }
}

//TODO save wrapper file image
wrapperFile.onchange = function () {
    var fileList = wrapperFile.files;
    wrapperimg = fileList[0]
    addText = 'Thank You your upload was successfull';
    modalText(addText)
    Cart.wrapperImg = wrapperimg;
    //console.log(Cart.wrapperImg)
}

//! mudar este button
DETAIL_SUBMIT_ORDER.onclick = function () {
    addText = 'Thank you for your purchase'
    modalText(addText)
    clearAllSection()
    changeDiv(4)
    console.log(Cart)
    console.log(userDatas)
    console.log(addrDatas)
    clearTimeout(sectionTimer)
    clearInterval(setMenssage)
    //setTimeout(location.reload(), 3000)
    ;
}

//TODO modal window
function modalText(text) {
    pOne = document.createElement('p')
    pOne.innerHTML = text
    MODAL_CONTENT[0].appendChild(pOne)
    openModal()
    setTimeout(closeModal, 3000)
}

//TODO modal open
function openModal() {
    MODAL.style.display = "block";
}
//TODO modal close
function closeModal() {
    MODAL.style.display = "none";
    MODAL_CONTENT[0].removeChild(MODAL_CONTENT[0].getElementsByTagName('p')[0])
}

//TODO clicks on <span> (x), close the modal
SPAN.onclick = function () {
    MODAL.style.display = "none";
}

//TODO clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == MODAL) {
        MODAL.style.display = "none";
    }
}

//TODO start time do section close
window.onload = function () {
    timeSection()
}

//TODO clear all forms
function clearAllSection() {
    clearform(USER_FORM)
    clearform(ADDR_PAGE)

}

//TODO when time finish clear forms and go to main page
//TODO display the time remain to user 
function timeSection() {
    sectionTimer= setTimeout(function () {
        clearAllSection()
        changeDiv(4)
        location.reload();
    }, 5 * 60 * 1000)
    cont = 4
    setMenssage= setInterval(() => {
        let remainMsg = `Remain ${cont} Minutes to finish your section`
        modalText(remainMsg)
        cont -= 1;
    }, 60 * 1000);
}

/*--------------------------------------------------------------------------*/
//TODO
function chooseProduct(e) {
    const targetCart = e.target.parentNode.parentNode;
    imgProduct.setAttribute('src', targetCart.querySelector('img').src)
    colorProduct.textContent = targetCart.querySelector('h4').textContent
    productName.textContent = targetCart.querySelector('p').textContent
    priceProduct.textContent = targetCart.querySelector('.precio').textContent
}

//TODO
function addCart(collect) {
    //console.log(collect);
    Cart.img = imgProduct.src
    Cart.color = colorProduct.textContent
    Cart.nameProduct = productName.textContent
    Cart.priceProduct = priceProduct.textContent
}

//TODO
function showPaintball() {
    detailsImgProduct.setAttribute('src', Cart.img);
    detailsNameProduct.innerHTML = Cart.nameProduct;
    detailsColorProduct.innerHTML = Cart.color
    detailsPriceProduct.innerHTML = Cart.priceProduct
    detailsPriceShipping.forEach(element => {
        element.textContent = Cart.priceShipping;
    });
    detailsOrderShipping.innerHTML = Cart.deliveryDate;
    detailsPriceTotal.innerHTML = parseFloat(Cart.priceProduct) + parseFloat(Cart.priceShipping);
}

// testButton= document.getElementById('testButton')
// testButton.addEventListener('click', ()=> {
//     validateBirth(FORM_BIRTHDAY)
// });
