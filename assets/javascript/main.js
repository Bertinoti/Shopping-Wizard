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
    }else {
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

function chooseShippment() {
    SHIP_VALUE=0;
    for (var i = 0, length = RADIO_SHIP_BUTTON.length; i < length; i++) {
        if (RADIO_SHIP_BUTTON[i].checked) {
            shipValue= RADIO_SHIP_BUTTON[i].value
            console.log(RADIO_SHIP_BUTTON[i].value);
            console.log(SHIP_VALUE);
            break;
        }
    }
    return SHIP_VALUE;
}

function giftMsg() {
    let giftMenssage=''
    if (RADIO_MSG_BUTTON[0].checked) {
        giftMenssage= textValue.value
        console.log(giftMenssage)
    }
}

wrapperFile.onchange = function() {
    var fileList = wrapperFile.files;
    wrapperimg= fileList[0]
    addText= 'Thank You your upload was successfull';
    modalText(addText)
}

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

function openModal() {
    MODAL.style.display = "block";
}
function closeModal() {
    MODAL.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
SPAN.onclick = function() {
    MODAL.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == MODAL) {
        MODAL.style.display = "none";
    }
}

// window.onload= function(){
//     timeSection()
// }

function clearAllSection() {

    alert('all section are clear')
}

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

function chooseProduct(e){
    const targetCart = e.target.parentNode.parentNode;
    imgProduct.src= targetCart.querySelector('img').src
    colorProduct.textContent=targetCart.querySelector('h4').textContent
    productName.textContent=targetCart.querySelector('p').textContent
    // priceProduct.textContent=targetCart.querySelector('.precio').textContent
    console.log(imgProduct.src)
}

function addCart(collect){
    console.log(collect);
    Cart.img = imgProduct.src
    Cart.color = colorProduct.textContent
    // Cart.priceProduct = priceProduct.textContent
    console.log(Cart)
}

function showPaintball(){
        detailsProduct.innerHTML=Cart.img
        detailsPriceProduct.innerHTML=Cart.priceProduct
        detailsPriceShipping.innerHTML=Cart.priceShipping
        detailsPriceTotal.innerHTML=Cart.priceProduct + Cart.priceShipping
}
// solo para probar 
