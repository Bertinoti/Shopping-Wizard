
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
    modalContent[0].appendChild(pOne)
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
    if (event.target == modal) {
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
