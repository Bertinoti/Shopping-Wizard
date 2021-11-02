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
            //console.log(RADIO_SHIP_BUTTON[i].value);
            console.log(shipValue);
            break;
        }
    }
    return shipValue;
}

function deliveryDate(){
    chooseShippment()
    console.log(shipValue)
    if(shipValue == 19.99){
        deliveryinfo(1, 2)
    }else
    if( shipValue == 9.99){
        deliveryinfo(3, 5)
    }else{
        deliveryinfo(5, 7)
    }
}

//TODO print date delivery info
testButton= document.getElementById('testButton')
testButton.addEventListener('click', deliveryDate)

function deliveryinfo( min, max) {
    let dateOrder = new Date()
    year= dateOrder.getFullYear()
    month= dateOrder.getMonth()
    day1= dateOrder.getDate()+ min;
    day2= dateOrder.getDate()+ max;
    hour= dateOrder.getHours()

    monthArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    //console.log(dateOrder  )
    //console.log(day, month, year)
    //console.log(dateOrder.setDate(2) , month, year)

    console.log(`Your order will be delivery between ${day1} ${monthArray[month] } ${year} and ${day2} ${monthArray[month]} ${year}`);

}

//TODO  save the gift message
function giftMsg() {
    let giftMenssage=''
    if (RADIO_MSG_BUTTON[0].checked) {
        giftMenssage= textValue.value
        console.log(giftMenssage)
    }
}

//TODO save wrapper file image
wrapperFile.onchange = function() {
    var fileList = wrapperFile.files;
    wrapperimg= fileList[0]
    addText= 'Thank You your upload was successfull';
    modalText(addText)
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
// window.onload= function(){
//     timeSection()
// }

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
