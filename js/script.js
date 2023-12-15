let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

const PRODUCTS = [
  {
    name:"nike Running Shoes",
    description:`Very comnfortable in wearing and available in many sizes. Sole with
    a cushion and no chances of shoe bites.`,
    img:"images/product-img1.jpg",
    price:49.99
  },
  {
    name:"nike jordan",
    description:`Very funky in style and looks dope with any outfit. Comfortable in
    wearing. Becomes an attraction and stands you out and the shoe in
    itself has a different vibe.`,
    img:"images/product-img2.jpg",
    price:150.99
  },
  {
    name:"nike air 2",
    description:`Good pair of shoes for daily wear and has net for the inflow of air.
    It also has a good grip while running and on wet surfaces. Available
    in all sizes.`,
    img:"images/product-img3.jpg",
    price:90.99
  },
  {
    name:"nike basketball basics",
    description:`Engineered for performance, these shoes offer superior support,
    traction, and comfort, elevating your game on the court.`,
    img:"images/product-img4.jpg",
    price:39.99
  },
  {
    name:"nike mids",
    description:`Designed for versatility, these shoes combine ankle support with
    agility, providing stability without compromising movement. With
    sleek style and enhanced comfort, they're a perfect fit for everyday
    wear or active pursuits.`,
    img:"images/product-img5.jpg",
    price:49.99
  },
  {
    name:"swiper-slide slide",
    description:`Embrace style and visibility with these luminous sneakers, designed
    to illuminate your steps with a vibrant glow, ensuring both
    fashion-forward looks and enhanced visibility in low-light
    conditions.`,
    img:"images/product-img6.jpg",
    price:100.99
  }
]
const CART = []

const addToCart = function(event,productID){
  event.preventDefault()
  CART.push(PRODUCTS[--productID]);
  saveCart()
}

const saveCart  = () => {
  localStorage.setItem('cart', JSON.stringify(CART))
}

const displayProducts = () =>{
    const slider = document.querySelector(".swiper-wrapper")
    const proPreview = document.querySelector(".products-preview-container")
    let index = 1;
    for(const product of PRODUCTS){
      slider.innerHTML += `<div class="swiper-slide slide">
      <img src="${product.img}" alt="" />
      <h3>${product.name}</h3>
      <div class="btn" data-product="product-${index}">see details</div>
    </div>`
    proPreview.innerHTML += `<section class="product-preview" data-target="product-${index}">
    <div class="fas fa-times"></div>
    <div class="image">
      <img src="${product.img}" alt="" />
    </div>
    <div class="content">
      <h3>${product.name}</h3>
      <p>
        ${product.description}
      </p>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <span>( 250 )</span>
      </div>
      <div class="price">$${product.price}</div>
      <a href="#" class="btn" onClick="addToCart(event,${index})">Add to cart</a>
    </div>
  </section>`;
  index++;
  }
}
displayProducts()

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
  };
  
  window.onscroll = () =>{
    if(window.innerWidth < 1200){
      menu.classList.remove('fa-times');
      header.classList.remove('active');
      document.body.classList.remove('active');
    };
  };
  
  let productPreviewContainer = document.querySelector('.products-preview-container');
  let prodcutPreview = productPreviewContainer.querySelectorAll('.product-preview');
  
  document.querySelectorAll('.products .slide .btn').forEach(detailBtn =>{
    detailBtn.onclick = () =>{
      productPreviewContainer.classList.add('active');
      let name = detailBtn.getAttribute('data-product');
      prodcutPreview.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
         preview.style.display = 'flex';
        };
      });
    };
  });

  document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close =>{
    close.onclick = () =>{
      productPreviewContainer.classList.remove('active');
      prodcutPreview.forEach(closePreview =>{
        closePreview.style.display = 'none';
      });
    };
  });

  var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
//Form validation
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.contact form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[type="text"]').value.trim();

    if (name === '') {
      alert('Please enter your name.');
      return;
    }

    if (email === '') {
      alert('Please enter your email.');
      return;
    }

    // Basic email validation
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (contact === '') {
      alert('Please enter your contact number.');
      return;
    }

    // Basic phone number validation
    if (!isValidPhoneNumber(contact)) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    // If all validations pass, you can submit the form here
    // form.submit();
    alert('Form submitted successfully!');
  });

});
