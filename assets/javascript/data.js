// All data variables here //
const DIV_ARRAY= [HOME_SECTION, USER_SECTION, ADDRESS_SECTION, SHIP_SECTION, DETAIL_SECTION]
// Shopping char object //
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

const userDatas = {
    username: null,
    email: null,
    password: null
};
// User object address //
const addrDatas = {
    firstName: null,
    lastName: null,
    birthday: null,
    addr: null,
    postalCode: null,
    country: null,
    phone: null
}

const monthArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var wrapperimg={}
const PREFIXES_PHONES = {
    andorra: '+376',
    spain: '+34',
    france: '+33',
    deutschland: '+49',
    greece: '+30'
};

const products = [
    {
        name: 'CS2 Pro',
        color: ['BLACK/GOLD', 'BLACK/WHITE', 'RED/GOLD', 'BLUE/GOLD'],
        price: '1699€',
        imgs: ['assets/img/cs2pro/fotos numero.jpg', 'assets/img/cs2pro/fotonumero2.jpg', 'assets/img/cs2pro/fotonumero3.jpg', 'assets/img/cs2pro/fotonumero4.jpg'],
        imgSelected:'assets/img/cs2pro/fotos numero.jpg'
    },
    {
        name: 'L1.6',
        color: ['BLACK', 'BLACK/GREY', 'FIRE/OPAL', 'SILVER/RED'],
        price: '1369.95€',
        imgs: ['assets/img/LV1.6/black.jpg', 'assets/img/LV1.6/blackgrey.jpg', 'assets/img/LV1.6/fireopal.jpg', 'assets/img/LV1.6/silvered.jpg'],
        imgSelected:'assets/img/LV1.6/black.jpg'
    }
]
