/* Address Form */
const ADDR_FORM = document.getElementById('addressPage')
const FORM_FIRST_NAME =  document.getElementById('firstName')
const ERROR_FIRST_NAME = document.getElementById("errorFirstName")
const FORM_LAST_NAME =  document.getElementById('lastName')
const ERROR_LAST_NAME = document.getElementById("errorLastName")
const FORM_BIRTHDAY =  document.getElementById('birthday')
const FORM_ADDR1 =  document.getElementById('address1')
const ERROR_ADDR = document.getElementById("errorAddress")
const FORM_ADDR2 =  document.getElementById('address2')
const FORM_POSTAL_CODE =  document.getElementById('postalCode')
const ERROR_POST_CODE = document.getElementById("errorPostCode")
const FORM_COUNTRY =  document.getElementById('country')
const FORM_PREFIX_PHONE =  document.getElementById('prefixPhone')
const FORM_PHONE =  document.getElementById('phone')
const ERROR_PHONE = document.getElementById("errorPhone")
const FORM_REGULAR_ADDR =  document.getElementById('regularAddress')
const BTN_ADD_ADDR_FORM =  document.getElementById('regularAddress')

/* User Form */
const USER_FORM = document.getElementById("user-form")                     // const for form
const FORM_USERNAME = document.getElementById("username")                  // const for getting username
const ERROR_USERNAME = document.getElementById("errorUserName")
const FORM_EMAIL = document.getElementById("email")                        // const for getting mail
const ERROR_EMAIL = document.getElementById("errorEmail")
const FORM_PASSWORD = document.getElementById ("password")                 // const for getting password
const ERROR_PASSWORD = document.getElementById("errorPassword")
const FORM_PASSWORD_CHECK = document.getElementById ("confirm-password")   // const for getting checked password
const ERROR_PASSWORD_CHECK = document.getElementById("errorPasswordCheck")
const BTN_ADD_USER_FORM = document.getElementById("btn-next-user")

// All elements here
// dom div sections
const HOME_SECTION = document.getElementById('home-page')
const USER_SECTION = document.getElementById('user-page')
const ADDRESS_SECTION =  document.getElementById('address-page')
const SHIP_SECTION = document.getElementById('shipping-page')
const DETAIL_SECTION = document.getElementById('details-page')

//dom section buttons
const MAIN_ADD_BUTTON = document.getElementById('add-button')
const USER_NEXT_DIV_PAGE= document.getElementById('btn-next-user')
const ADDRESS_NEXT_DIV_PAGE= document.getElementById('btn-next-address')
const SHIP_NEXT_DIV_PAGE= document.getElementById('btn-next-shippiment')
const DETAIL_SUBMIT_ORDER= document.getElementById('submitButton')

// Dom Shippment
const RADIO_SHIP_BUTTON= document.getElementsByName('shipping')
const CHECK_FUNCTION = document.getElementById('checkFunction')

const RADIO_MSG_BUTTON= document.getElementsByName('gift')
var textValue= document.getElementById("gift-text-id")

var wrapperFile= document.getElementById('wrapper-img-id')
var wrapperimg={}


//Dom Modal window 
// Get the modal
const MODAL_CONTENT= document.getElementsByClassName('modal-content')
const MODAL = document.getElementById("myModal");
// Get the <span> element that closes the modal
const SPAN = document.getElementsByClassName("close")[0];

//checkFunction.addEventListener('click', wrapperFileUpload )



// const pruebadessa=document.querySelector("#carruselShopping")
const finalContainer=document.querySelector("#containerShop tbody ")
const detailsProduct=document.querySelector("#detail-title-product")
const detailsPriceProduct=document.querySelectorAll(".detail-price-order")
const detailsPriceShipping=document.querySelector("#detail-order-product")
const detailsPriceTotal=document.querySelector("#detail-priceTotal-order")
const BUTTON_MAIN=document.querySelector("#add-button")
//Prueba

const carruselShopping=document.querySelectorAll("#carruselShopping li")
//carrusel
const imgProduct=document.querySelector("#photo")
const colorProduct=document.querySelector("#colorProduct")
const productName=document.querySelector("#productName")
const priceProduct=document.querySelector("#priceProduct")
