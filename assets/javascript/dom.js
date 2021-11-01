// All elements here
// dom div sections
const homeSection = document.getElementById('home-page')
const userSection = document.getElementById('user-page')
const adressSection =  document.getElementById('address-page')
const shipSection = document.getElementById('shipping-page')
const detailSection = document.getElementById('details-page')

//dom section buttons
const mainAddButton = document.getElementById('add-button')
const userNextDivPage= document.getElementById('btn-next-user')
const addressNextDivPage= document.getElementById('btn-next-address')
const shipNextDivPage= document.getElementById('btn-next-shippiment')
const detailsubmitOrder= document.getElementById('submitButton')

divArray= [homeSection, userSection, adressSection, shipSection, detailSection]

function changeDiv(divNum){
    if (divNum < 4){
        actual= divArray[divNum];
        next= divArray[divNum+1];
        actual.style.display ='none';
        next.style.display='block';
    }else{
        actual= divArray[divNum];
        next= divArray[0];
        actual.style.display ='none';
        next.style.display='block';
    }

}

const radioShipButton= document.getElementsByName('shipping')
const checkFunction = document.getElementById('checkFunction')
//checkFunction.addEventListener('click', wrapperFileUpload )

function chooseShippment() {
    shipValue=0
    for (var i = 0, length = radioShipButton.length; i < length; i++) {
        if (radioShipButton[i].checked) {
            shipValue= radioShipButton[i].value
            console.log(radioShipButton[i].value);
            console.log(shipValue);
            break;
        }
    }
    return shipValue;
}

const radioMsgButton= document.getElementsByName('gift')
const textValue= document.getElementById("gift-text-id")

function giftMsg() {
    giftMenssage=''
    if (radioMsgButton[0].checked) {
        giftMsg = textValue.value
        console.log(giftMsg)
    }
}

const wrapperFile= document.getElementById('wrapper-img-id')
var wrapperimg={}

wrapperFile.onchange = function() {
    var fileList = wrapperFile.files;
    wrapperimg= fileList[0]
    addText= 'Thank You your upload was successfull';
    modalText(addText)
}

const modalContent= document.getElementsByClassName('modal-content')
function modalText(text) {
    pOne= document.createElement('p')
    pOne.innerHTML= text
    modalContent[0].appendChild(pOne)
    openModal()
    setTimeout(closeModal, 3000)
}

//setTimeout(openModal, 5000)
//setTimeout(closeModal, 8000)
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function() {
//  modal.style.display = "block";
//}

function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload= function(){
    timeSection()
}

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

