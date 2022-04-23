$( document ).ready(function() {
  console.log('ready!');

  $(".nav__btn").on("click", function() {
    $('.nav__list').toggleClass('nav__list--show');
  });
});
