$( document ).ready(function() {

  // nav open|close
  $(".nav__toggle").on("click", function() {
    $(this).toggleClass('nav__toggle--active');
    $('.nav__list').toggleClass('nav__list--show');
  });


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
