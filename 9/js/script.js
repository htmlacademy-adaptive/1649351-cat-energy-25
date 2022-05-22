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

// let imgControlScrollbar = document.querySelector('.image-control__scrollbar');
// let imgBefore = document.querySelector('.demo__image-before');
// let imgAfter = document.querySelector('.demo__image-after');

// imgControlScrollbar.addEventListener('click', function () {
//   if (imgBefore.classList.contains('demo__image--show')) {
//     imgBefore.classList.removeClass('demo__image--show');
//     imgAfter.classList.add('demo__image--show');
//   } else {
//     imgBefore.classList.addClass('demo__image--show');
//     imgAfter.classList.adremoveClass('demo__image--show');
//   }
// });

$( document ).ready(function() {

  // image-control

  $(".image-control__scrollbar").on("click", function() {

    $(this).toggleClass('image-control__scrollbar--active');

    if ($('.demo__image-before').hasClass('demo__image--show')) {
      $('.demo__image-before').removeClass('demo__image--show');
      $('.demo__image-after').addClass('demo__image--show');
    } else {
      $('.demo__image-before').addClass('demo__image--show');
      $('.demo__image-after').removeClass('demo__image--show');
    }
  });


  // -------------- Слайдер до | после

  function imageComparison(selector) {

    let comparison = $(selector)
        .addClass('image-comparison')
        .prepend('<div class="image-comparison__before"></div>')
        .append('<div>БЫЛО</div>')
        .append('<button class="image-comparison__slider"></button>')
        .append('<div>СТАЛО</div>');

    let images = comparison
        .find('img')
        .addClass('image-comparison__image')
        .css('max-width', comparison.width());

    let before = comparison
        .find('.image-comparison__before')
        .append(images.eq(0));

    comparison
        .find('.image-comparison__slider')
        .on('dragstart', () => false) // отмена станд. drug&drop
        .on('mousedown', function(e) {
            let slider = $(this);
            let doc = $(document).on('mousemove', (e) => {
                let offset = e.pageX - comparison.position().left;
                let width = comparison.width();

                // установим границы, чтобы ползунок не выходил
                if (offset < 0) offset = 0;
                if (offset > width) offset = width;

                slider.css('left', offset + 'px');
                before.css('width', offset + 'px');
            });

            doc.on('mouseup', () => doc.off('mousemove'));
        });
};

imageComparison('#image-comparison');

});


// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//           center: [55.751574, 37.573856],
//           zoom: 9
//       }, {
//           searchControlProvider: 'yandex#search'
//       }),

//       // Создаём макет содержимого.
//       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//       ),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: 'HTML Academy',
//       }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: 'default#image',
//           // Своё изображение иконки метки.
//           iconImageHref: './img/icons/map-pin.svg',
//           // Размеры метки.
//           iconImageSize: [30, 42],
//           // Смещение левого верхнего угла иконки относительно
//           iconImageOffset: [-5, -38]
//       })

//   myMap.geoObjects
//       .add(myPlacemark);
// });



