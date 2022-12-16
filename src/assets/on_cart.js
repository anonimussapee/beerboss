
document.addEventListener('DOMContentLoaded',function(){
    carrito=JSON.parse(localStorage.getItem('carrito'))||null;
    carrito.forEach(prod=>in_car.innerHTML+=` <div class="data---cart pre"><div style="background-image: url(${prod.img});" class="presentacion cart img"></div><span class="cant_cart">${prod.cant}</span><p class="precio_cart">$${prod.price}</p><p class="precio_total">$${prod.price*prod.cant}</p>
    </div>`);

});
var in_car=document.querySelector(".in__cart")|| null;