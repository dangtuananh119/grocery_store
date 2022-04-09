var menuBtn = document.getElementById('header__menu-btn');
var searchBtn = document.getElementById('header__search-btn');
var cartBtn = document.getElementById('header__cart-btn');
var userBtn = document.getElementById('header__user-btn');

var menuForm = document.querySelector('.header__nav');
var searchForm = document.querySelector('.header__search-form');
var cartForm = document.querySelector('.header__cart-form');
var loginForm = document.querySelector('.header__login-form');

menuBtn.addEventListener('click', function() {
    menuForm.classList.toggle('active')
    searchForm.classList.remove('active');
    cartForm.classList.remove('active');
    loginForm.classList.remove('active');
});

searchBtn.addEventListener('click', function() {
    searchForm.classList.toggle('active');
    cartForm.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active')
});

cartBtn.addEventListener('click', function() {
    cartForm.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active')
});

userBtn.addEventListener('click', function() {
    loginForm.classList.toggle('active');
    cartForm.classList.remove('active');
    searchForm.classList.remove('active');
    menuForm.classList.remove('active')
});
