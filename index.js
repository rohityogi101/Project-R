let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    CartItem.classList.remove('active')

}

let CartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    CartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    CartItem.classList.remove('active')
}