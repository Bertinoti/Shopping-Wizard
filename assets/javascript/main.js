function chooseProduct(e){
    const targetCart = e.target.parentNode.parentNode;
    imgProduct.src= targetCart.querySelector('img').src
    colorProduct.textContent=targetCart.querySelector('h4').textContent
    productName.textContent=targetCart.querySelector('p').textContent
    // priceProduct.textContent=targetCart.querySelector('.precio').textContent
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