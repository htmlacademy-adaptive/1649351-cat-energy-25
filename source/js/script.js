// NAVIGATION

let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});


// CATALOG

// let catalogMoreBtn = document.querySelector('.catalog-more__button');
// let products = document.getElementsByClassName('catalog__item');
// products = Array.from(products);
// console.log(products.slice(0, 2));
// console.log(products);

// allProducts = products.splice(2);
// console.log(products); // первые 2 элемента
// console.log(allProducts); // остальные

// let catalog = document.querySelector('.catalog__list');
// catalog.innerHTML = products;
// catalog.innerHTML = products;

// catalogMoreBtn.addEventListener('click', function () {
//   console.log('click');
// });






// IMAGE-CONTROLE

let imgControlScrollbar = document.querySelector('.image-control__scrollbar');
let imgBefore = document.querySelector('.demo__image-before');
let imgAfter = document.querySelector('.demo__image-after');

imgControlScrollbar.addEventListener('click', function () {
  if (imgBefore.classList.contains('demo__image--show')) {
    imgBefore.classList.removeClass('demo__image--show');
    imgAfter.classList.add('demo__image--show');
  } else {
    imgBefore.classList.addClass('demo__image--show');
    imgAfter.classList.adremoveClass('demo__image--show');
  }
});



$( document ).ready(function() {

  // image-control

  // $(".image-control__scrollbar").on("click", function() {

  //   $(this).toggleClass('image-control__scrollbar--active');

  //   if ($('.demo__image-before').hasClass('demo__image--show')) {
  //     $('.demo__image-before').removeClass('demo__image--show');
  //     $('.demo__image-after').addClass('demo__image--show');
  //   } else {
  //     $('.demo__image-before').addClass('demo__image--show');
  //     $('.demo__image-after').removeClass('demo__image--show');
  //   }
  // });

});
