/* User Form */
const USER_FORM = document.getElementById("user-form")
const FORM_USERNAME = document.getElementById("username")
const ERROR_USERNAME = document.getElementById("errorUserName")
const FORM_EMAIL = document.getElementById("email")
const ERROR_EMAIL = document.getElementById("errorEmail")
const FORM_PASSWORD = document.getElementById ("password")
const ERROR_PASSWORD = document.getElementById("errorPassword")
const FORM_PASSWORD_CHECK = document.getElementById ("confirm-password")
const ERROR_PASSWORD_CHECK = document.getElementById("errorPasswordCheck")
const BTN_ADD_USER_FORM = document.getElementById("btn-next-user")

/* Address Form */
const ADDR_FORM = document.getElementById('addressPage')
const FORM_FIRST_NAME =  document.getElementById('firstName')
const ERROR_FIRST_NAME = document.getElementById("errorFirstName")
const FORM_LAST_NAME =  document.getElementById('lastName')
const ERROR_LAST_NAME = document.getElementById("errorLastName")
const FORM_BIRTHDAY =  document.getElementById('birthday')
const ERROR_BIRTH = document.getElementById("errorBirthday")
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
const BTN_RESET_FORM2 = document.getElementById("clear-all-address")
const ADDR_PAGE = document.getElementById('addr-form')

/* User Form */
const USER_FORM = document.getElementById("user-form")
const FORM_USERNAME = document.getElementById("username")
const ERROR_USERNAME = document.getElementById("errorUserName")
const FORM_EMAIL = document.getElementById("email")
const ERROR_EMAIL = document.getElementById("errorEmail")
const FORM_PASSWORD = document.getElementById ("password")
const ERROR_PASSWORD = document.getElementById("errorPassword")
const FORM_PASSWORD_CHECK = document.getElementById ("confirm-password")
const ERROR_PASSWORD_CHECK = document.getElementById("errorPasswordCheck")
const BTN_ADD_USER_FORM = document.getElementById("btn-next-user")
const BTN_RESET_FORM = document.getElementById("clear-all-user")


// All elements here
// dom div sections
const HOME_SECTION = document.getElementById('home-page')
const USER_SECTION = document.getElementById('user-page')
const ADDRESS_SECTION =  document.getElementById('address-page')
const SHIP_SECTION = document.getElementById('shipping-page')
const DETAIL_SECTION = document.getElementById('details-page')

//dom section buttons
const MAIN_ADD_BUTTON = document.getElementsByClassName('add-button')
const USER_NEXT_DIV_PAGE= document.getElementById('btn-next-user')
const ADDRESS_NEXT_DIV_PAGE= document.getElementById('btn-next-address')
const SHIP_NEXT_DIV_PAGE= document.getElementById('btn-next-shippiment')
const DETAIL_SUBMIT_ORDER= document.getElementById('submitButton')

// Dom Shippment
const RADIO_SHIP_BUTTON= document.getElementsByName('shipping')
const CHECK_FUNCTION = document.getElementById('checkFunction')
const orderMsgInfo= document.getElementById('orderInfo')
const shippingMethod= document.getElementById('shipping-method')

const RADIO_MSG_BUTTON= document.getElementsByName('gift')
const isGift= document.getElementById('isGift')
const giftOn= document.getElementById('onGift')
var textValue= document.getElementById("gift-text-id")
var wrapperFile= document.getElementById('wrapper-img-id')

//var submitLastButton=document.getElementById("submitButton")



//Dom Modal window
const MODAL_CONTENT= document.getElementsByClassName('modal-content')
const MODAL = document.getElementById("myModal");
const SPAN = document.getElementsByClassName("close")[0];

// checkFunction.addEventListener('click', changeDiv(3) )



// const pruebadessa=document.querySelector("#carruselShopping")
const detailsImgProduct=document.getElementById("detail-img-product")
const detailsNameProduct=document.querySelector("#detail-title-product")
const detailsColorProduct=document.querySelector("#detail-color-product")
const detailsPriceProduct=document.querySelector("#detail-price-product")
const detailsPriceShipping=document.querySelectorAll(".detail-price-shipping")
const detailsOrderShipping=document.querySelector("#detail-order-shipping")
const detailsPriceTotal=document.querySelector("#detail-priceTotal-product")

const carruselShopping=document.querySelectorAll("#carruselShopping li")
//carrusel
const imgProduct=document.querySelector("#photo img")
const colorProduct=document.querySelector("#colorProduct")
const productName=document.querySelector("#productName")
const priceProduct=document.querySelector("#priceProduct")
//newnconst
const productNameSelected=document.querySelector("#productNameselected")

