let CART = [];
let total = 0;

const showCart = function(event){
    console.log({CART})
    let cartContainer = document.querySelector(".productList");
    console.log(cartContainer);
    for(const product of CART){
        total += product.price;
        console.log(total);
        console.log(product);
        cartContainer.innerHTML += ` <div class="item">
        <div class="image">
          <img src="${product.img}" alt="" />
        </div>
        <div class="description">
        ${product.name}
        </div>
        <div class="price">
          ${product.price}
        </div>
    </div>`
    }
    let totalPriceHolder = document.querySelector('.total-price')
    totalPriceHolder.innerHTML = `$${total.toFixed(2)}`
}

const getCart = function(){
    let items = localStorage.getItem('cart');
    if(items){
        items = JSON.parse(items);
        CART = items
    }
    else{
        CART = []
    }
    showCart()
}
getCart()
