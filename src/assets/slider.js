//variable del menu
var burger_menu_slider=document.querySelector(".menu--burger-slider");
//accion al hacer click del boton burger menu
document.querySelector(".menu_burger").addEventListener("click", function (){
burger_menu_slider.classList.add("visible");
});
//accion al hacer click el boton close menu
document.querySelector(".burger--close ").addEventListener("click", function(){
burger_menu_slider.classList.remove("visible");
});