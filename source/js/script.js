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


// COMPARISON

let comparisonScrollbar = document.querySelector('.comparison__control-scrollbar');
let comparisonToggle = document.querySelector('.comparison__control-toggle');
let comparisonBtn = document.getElementsByClassName('.comparison__control-btn');

let comparisonBefore = document.querySelector('.comparison__image--before');
let comparisonAfter = document.querySelector('.comparison__image--after');

function showСomparison() {
  console.log('click');
  if (comparisonAfter.style.display == 'none') {
    comparisonBefore.style.display = 'none';
    comparisonAfter.style.display = 'block';
    comparisonScrollbar.classList.add('comparison__control-scrollbar--active');
  } else {
    comparisonBefore.style.display = 'block';
    comparisonAfter.style.display = 'none';
    comparisonScrollbar.classList.remove('comparison__control-scrollbar--active');
  }
}

comparisonToggle.addEventListener('click', function () {
  showСomparison();
});
comparisonBtn.addEventListener('click', function () {
  showСomparison();
});
