const Burger = document.getElementById('burger');
const popOut = document.getElementById('popOut');

Burger.addEventListener('click', ()=>{
    popOut.classList.toggle('active');
})