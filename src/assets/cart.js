var btnopen=document.querySelector(".cart");
var btnclose=document.querySelector(".close-popup");
var cart=document.querySelector(".cart-container");
var popup=document.querySelector(".cart--popup");
btnopen.addEventListener('click', function(){
    cart.classList.add("active_cart");
    popup.classList.add("active");
});
btnclose.addEventListener('click',function(){
    cart.classList.remove("active_cart");
})