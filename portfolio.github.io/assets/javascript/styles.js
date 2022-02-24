const home = document.querySelector('.header__home') 
const about = document.querySelector('.header__about')
const portfolio = document.querySelector('.header__portfolio')
const contact = document.querySelector('.header__contact')
const c_home = document.querySelector('.content__home')
const c_about = document.querySelector('.content__about')
const c_portfolio = document.querySelector('.content__portfolio')
const c_contact = document.querySelector('.content__contact')
window.onload = function(){
    openHome();
}
function openHome(){
    home.style.display = 'flex';
    about.style.display = 'none';
    portfolio.style.display = 'none';
    contact.style.display = 'none';
    c_home.style.display = 'block';
    c_about.style.display = 'none';
    c_portfolio.style.display = 'none';
    c_contact.style.display = 'none';
}
function openAbout(){
    home.style.display = 'none';
    about.style.display = 'flex';
    portfolio.style.display = 'none';
    contact.style.display = 'none';
}
function openPortfolio(){
    home.style.display = 'none';
    about.style.display = 'none';
    portfolio.style.display = 'flex';
    contact.style.display = 'none';
    c_home.style.display = 'none';
    c_about.style.display = 'none';
    c_portfolio.style.display = 'flex';
    c_contact.style.display = 'none';
}
function openContact(){
    home.style.display = 'none';
    about.style.display = 'none';
    portfolio.style.display = 'none';
    contact.style.display = 'flex';
}