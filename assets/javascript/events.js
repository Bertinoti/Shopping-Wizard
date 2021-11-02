carruselShopping.forEach( Element => {
    Element.addEventListener("click", (e) => {
        chooseProduct(e)
    })
})

BUTTON_MAIN.addEventListener("click", addCart)