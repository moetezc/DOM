let carts = document.querySelectorAll('.add-cart');

let products= [
    {
        name:"Marshal T'shirt",
        tag:"whiteTshirt",
        price:35,
        inCart:0,
    },
    {
        name:"Pitbull T'shirt",
        tag:"greyshirt",
        price:50,
        inCart:0,
    },
    {
        name:"Black Power T'shirt",
        tag:"greyTshirt",
        price:40,
        inCart:0,
    },
    {
        name:"Black&White T'shirt",
        tag:"blackTshirt",
        price:30,
        inCart:0,
    }
];

for (let i=0; i < carts.length; i++){
carts[i].addEventListener('click',() =>{
   cartNumbers(products[i]);
})
}
function onloadcartnumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent= productNumbers;
    }
    
}

function cartNumbers(product){
    console.log("the product is",product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent= productNumbers + 1;

    }else{
        localStorage.setItem("cartNumbers",1);
        document.querySelector('.cart span').textContent= 1;

    }
setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);
    if (cartItems != null){
        if (cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart =1;
        cartItems ={
            [product.tag]: product
        }
    }
    localStorage.setItem("productsinCart",JSON.stringify(cartItems));
}
onloadcartnumbers();