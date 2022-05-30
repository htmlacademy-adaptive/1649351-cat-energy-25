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
let comparisonBtnBefore = document.querySelector('.comparison__control-btn--before');
let comparisonBtnAfter = document.querySelector('.comparison__control-btn--after');

let comparisonBefore = document.querySelector('.comparison__image--before');
let comparisonAfter = document.querySelector('.comparison__image--after');

function showСomparison(flag) {
  if (flag == 'after') {
    comparisonBefore.style.display = 'none';
    comparisonAfter.style.display = 'block';
    comparisonScrollbar.classList.add('comparison__control-scrollbar--active');

  } else if (flag == 'before') {
    comparisonBefore.style.display = 'block';
    comparisonAfter.style.display = 'none';
    comparisonScrollbar.classList.remove('comparison__control-scrollbar--active');
  }
}

comparisonBtnBefore.addEventListener('click', function () {
  showСomparison('before');
});

comparisonBtnAfter.addEventListener('click', function () {
  showСomparison('after');
});
