
document.addEventListener('DOMContentLoaded',function(){
    carrito=JSON.parse(localStorage.getItem('carrito'))||null;
    if(carrito.length>0){
    carrito.forEach(prod=>in_car.innerHTML+=` <div class="data---cart pre"><div class="article--container"><div style="background-image: url(${prod.img});" class="presentacion cart img"></div><p>${prod.title}</p></div><span class="cant_cart">${prod.cant}</span><p class="precio_cart">$${prod.price}</p><p class="precio_total">$${prod.price*prod.cant}</p>
    </div>`);
    var total_all=0;
    for (let item of carrito) {
        total_all +=item.cant*item.price;
    }    
    total.innerHTML=`total: $${total_all}`;
}else{
    total.innerHTML=`total: $0`;
}
 
});
var in_car=document.querySelector(".in__cart")|| null;
var total=document.querySelector(".total-all")|| null;

let hidden_form=document.querySelector(".hidden");
hidden_form.addEventListener('click', function(){
let form=document.querySelector(".main--form-container");
    form.classList.add("hidden");
})
    
