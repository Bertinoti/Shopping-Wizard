//! All data variables here //
//TODO div change Array
const DIV_ARRAY= [HOME_SECTION, USER_SECTION, ADDRESS_SECTION, SHIP_SECTION, DETAIL_SECTION]

//TODO Month name Array
const monthArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//TODO Shopping char object
const Cart= {
    img:null,
    color:null,
    nameProduct: null,
    priceProduct:null,
    priceShipping:null,
    deliveryDate: null,
    giftMessage:null,
    wrapperImg:null
}

//TODO User data
const userDatas = {
    username: null,
    email: null,
    password: null
};

//TODO User object address //
const addrDatas = {
    firstName: null,
    lastName: null,
    birthday: null,
    addr: null,
    postalCode: null,
    country: null,
    phone: null
}

//var wrapperimg={}

//TODO Prefix Number and Country 
const PREFIXES_PHONES = {
    andorra: '+376',
    spain: '+34',
    france: '+33',
    deutschland: '+49',
    greece: '+30'
};

//TODO Products Objects  
const products = [
    {
        name: 'CS2',
        color: ['BLACK/GOLD', 'BLACK/WHITE', 'RED/GOLD', 'BLUE/GOLD'],
        price: 1699,
        imgs: ['assets/img/cs2pro/fotos numero.jpg', 'assets/img/cs2pro/fotonumero2.jpg', 'assets/img/cs2pro/fotonumero3.jpg', 'assets/img/cs2pro/fotonumero4.jpg'],
        colorSelected: 'BLACK/GOLD',
        imgSelected: 'assets/img/cs2pro/fotos numero.jpg'
    },
    {
        name: 'LV1.6',
        color: ['BLACK', 'BLACK/GREY', 'FIRE/OPAL', 'SILVER/RED'],
        price: 1369.95,
        imgs: ['assets/img/LV1.6/black.jpg', 'assets/img/LV1.6/blackgrey.jpg', 'assets/img/LV1.6/fireopal.jpg', 'assets/img/LV1.6/silvered.jpg'],
        colorSelected: 'BLACK',
        imgSelected: 'assets/img/LV1.6/black.jpg'
    }
]
