//  FIRST NAME AND LAST NAME VERIFICATION  //
function validateSurName (inputValidation) {
    var valueInput = inputValidation.value.trim();
    return (valueInput.length < 20) ? true : false;
}

//  ADDRESS VERIFICATION  //
function validateAddress (inputValidation) {
    var address1Value = inputValidation.value.trim();
    return (address1Value.length < 50) ? true : false;
}

//  POSTAL CODE VERIFICATION  //
function validatePostalCode (inputValidation) {
    var postalCodeValue = inputValidation.value.trim();
    return (postalCodeValue.length < 6) ? true : false;
}

//  PHONE VERIFICATION  //
function validatePhone (inputValidation) {
    var phoneValue = inputValidation.value.trim();
    return (phoneValue.length === 9 && !isNaN(phoneValue)) ? true : false;
}

function isValidateFormAddr(e) {
    e.preventDefault();
    let isValid = true;

    if(!validateSurName(FORM_FIRST_NAME)) isValid = false;
    if(!validateSurName(FORM_LAST_NAME)) isValid = false;
    if(!validateAddress(FORM_ADDR1)) isValid = false;
    if(!validatePostalCode(FORM_POSTAL_CODE)) isValid = false;
    if(!validatePhone(FORM_PHONE)) isValid = false;

    return isValid;
}

function saveFormAddr() {
    addrDatas.firstName = FORM_FIRST_NAME.value;
    addrDatas.lastName = FORM_LAST_NAME.value;
    addrDatas.birthday = FORM_BIRTHDAY.value;
    addrDatas.addr = FORM_ADDR1.value  + ' ' + FORM_ADDR2.value;
    addrDatas.postalCode = FORM_POSTAL_CODE.value;
    addrDatas.country = FORM_COUNTRY.value;
    addrDatas.phone = FORM_PHONE.value;
}

function validateUserName () {
    var userNameValue = FORM_USERNAME.value.trim();
    //  USER NAME VERIFICATION  //
    if(userNameValue.length > 4 && userNameValue.length < 21) {
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
    if(emailValue.match(EMAIL_PATTERN) && emailValue.length < 51) {
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
    }else {
        setErrorFor(FORM_PASSWORD_CHECK,ERROR_PASSWORD_CHECK,'Password not matched');
        return false
    }
}

function validateFormUser (e) {
    e.preventDefault()
    let isValid = true;
    if (!validateUserName ()) isValid = false
    if (!validateEmail ()) isValid = false
    if (!validatePassword ()) isValid = false
    if (!validate2Password ()) isValid = false

    return isValid;
}

function saveFormUser() {
    userDatas.username = FORM_USERNAME.value;
    userDatas.email = FORM_EMAIL.value;
    userDatas.password = FORM_PASSWORD.value;
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

/*-----------------------------------------------------------*/
//TODO change divs 
function changeDiv(divNum){
    if (divNum < 4){
        actual= DIV_ARRAY[divNum];
        next= DIV_ARRAY[divNum+1];
        actual.style.display ='none';
        next.style.display='block';
    }else{
        actual= DIV_ARRAY[divNum];
        next= DIV_ARRAY[0];
        actual.style.display ='none';
        next.style.display='block';
    }

}
//TODO choose delivery method
function chooseShippment() {
    shipValue=0;
    for (var i = 0, length = RADIO_SHIP_BUTTON.length; i < length; i++) {
        if (RADIO_SHIP_BUTTON[i].checked) {
            shipValue= RADIO_SHIP_BUTTON[i].value
            Cart.priceShipping= shipValue
            //console.log(Cart.priceShipping)
            break;
        }
    }
    return shipValue;
}

//TODO print date delivery info
function deliveryinfo( min, max) {
    let dateOrder = new Date()
    year= dateOrder.getFullYear()
    month= dateOrder.getMonth()
    day1= dateOrder.getDate()+ min;
    day2= dateOrder.getDate()+ max;

    deliveryDateMsg( day1, day2, month, year)
}

//TODO delivery options and dates info
function deliveryDate(){
    chooseShippment()
    if(shipValue == 19.99){
        deliveryinfo(1, 2)
    }else
    if( shipValue == 9.99){
        deliveryinfo(3, 5)
    }else{
        deliveryinfo(5, 7)
    }
}

//TODO print a menssage to delivery dates
function deliveryDateMsg(d1, d2, month, year){
    if(orderMsgInfo.childElementCount >= 1){
        orderMsgInfo.removeChild(orderMsgInfo.getElementsByTagName('div')[0]);
    }
    deliveryMsg= `Your order will be delivery between ${d1} ${monthArray[month] } ${year} and ${d2} ${monthArray[month]} ${year}`
    divMsg= document.createElement('div');
    divMsg.innerHTML= deliveryMsg;
    orderMsgInfo.appendChild(divMsg)
    Cart.deliveryDate= `${d1} ${monthArray[month] } ${year} to ${d2} ${monthArray[month]} ${year}`
    //console.log(Cart.deliveryDate)
}

//TODO display div gift 
function displayDivGift() {
   if (isGift.checked ){
        giftOn.style.display='block'
    }else{
        giftOn.style.display='none'
    }
}


//TODO  save the gift message
function giftMsg() {
    if (RADIO_MSG_BUTTON[0].checked) {
        Cart.giftMessage=textValue.value
        //console.log(Cart.giftMessage)
    }
}

//TODO save wrapper file image
wrapperFile.onchange = function() {
    var fileList = wrapperFile.files;
    wrapperimg= fileList[0]
    addText= 'Thank You your upload was successfull';
    modalText(addText)
    Cart.wrapperImg= wrapperimg;
    //console.log(Cart.wrapperImg)
}

//TODO modal window
function modalText(text) {
    pOne= document.createElement('p')
    pOne.innerHTML= text
    MODAL_CONTENT[0].appendChild(pOne)
    openModal()
    setTimeout(closeModal, 3000)
}


// When the user clicks on the button, open the modal
//btn.onclick = function() {
//  modal.style.display = "block";
//}

//TODO modal open
function openModal() {
    MODAL.style.display = "block";
}
//TODO modal close
function closeModal() {
    MODAL.style.display = "none";
}

//TODO clicks on <span> (x), close the modal
SPAN.onclick = function() {
    MODAL.style.display = "none";
}

//TODO clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == MODAL) {
        MODAL.style.display = "none";
    }
}

//TODO start time do section close
//window.onload= function(){
  //  timeSection()
//}

//TODO clear all forms
function clearAllSection() {
    alert('all section are clear')
}

//TODO when time finish clear forms and go to main page
//TODO display the time remain to user 
function timeSection() {
    setTimeout(function(){
        clearAllSection()
        changeDiv(4)
    }, 12*1000)
    cont= 10
    setInterval(() => {
        console.log(`remain ${cont} seconds to finish your section`)
        cont-=2;
    }, 2*1000);
}

/*--------------------------------------------------------------------------*/
function chooseProduct(e){
    const targetCart = e.target.parentNode.parentNode;
    imgProduct.setAttribute('src', targetCart.querySelector('img').src)
    colorProduct.textContent=targetCart.querySelector('h4').textContent
    productName.textContent=targetCart.querySelector('p').textContent
    priceProduct.textContent=targetCart.querySelector('.precio').textContent
}

function addCart(collect){
    //console.log(collect);
    Cart.img = imgProduct.src
    Cart.color = colorProduct.textContent
    Cart.nameProduct=productName.textContent
    Cart.priceProduct = priceProduct.textContent
    console.log(Cart)
}

function showPaintball(){
        detailsImgProduct.setAttribute('src', Cart.img);
        detailsNameProduct.innerHTML=Cart.nameProduct;
        detailsColorProduct.innerHTML=Cart.color
        detailsPriceProduct.innerHTML=Cart.priceProduct
        detailsPriceShipping.forEach( element => {
            element.textContent = Cart.priceShipping;
        });
        detailsOrderShipping.innerHTML = Cart.deliveryDate;
        detailsPriceTotal.innerHTML=parseFloat(Cart.priceProduct) + parseFloat(Cart.priceShipping);
}

testButton= document.getElementById('testButton')
//testButton.addEventListener('click', console)

