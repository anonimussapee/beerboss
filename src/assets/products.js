const stock=[{title:"RASPBERRY WEIZENBOCK",desc:"Cerveza amarga de estilo belga con una combinación compleja de ésteres afrutados y rico talinovogo. La acidez ligera y refrescante continúa con el tema de las frambuesas jugosas.",id:1,price:"3.00",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal1.jpeg"},{title:"DVA BOBRA",desc:"Lager pálida bien equilibrada con un pronunciado sabor a malta.y lúpulo redondeado. Cerveza bebible y refrescante con apenas una notable nota a pan y un bouquet floral-herbáceo en el aroma. Variedad limitada.",id:2,price:"2.50",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal2.jpeg"},{title:"PUMPKIN MEAD",desc:"La calabaza fresca y terrosa se mezcla con canela, clavo y nuez moscada ligeros pero cálidos, equilibrados cuidadosamente con un ligero toque de miel.",id:3,price:"3.00",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal3.jpeg"},{title:"MILK STOUT",desc:"De suaves aroma a grano tostado, a veces con notas a café y/o chocolate. A menudo existe una impresión de dulzor cremoso. La frutosidad puede ser de baja a moderadamente-alta. Diacetilo de bajo a ninguno. Aroma a lúpulo de bajo a ninguno, con notas florales o terrosas.",id:4,price:"3.00",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal4.jpg"},{title:"BAZILIK",desc:"Las bayas más frescas, que solo magchyma conoce, la albahaca verde y negra, la acidez expresiva y los colores tsudouy rouge se convierten en un éxito.",id:5,price:"2.50",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal5.jpeg"},{title:"DOUBLE CHERRY",desc:"Esta edición de nuestra serie Sour Smoothie tiene una cantidad ridícula de cerezas dulces y ácidas (¡100 libras por barril!), vainilla y lactosa, lo que crea una cerveza de trigo agrio con frutas exageradas que es SUPER cherrific.",id:6,price:"3.00",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal6.jpeg"},{title:"MEDOED",desc:"Hidromiel a base de miel con menta, malta y lúpulo. El sabor y el aroma de la bebida son ricos, pero no empalagosos ni pesados. La combinación de miel, menta y lúpulo tonifica y refresca.",id:7,price:"2.50",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal7.jpeg"},{title:"MILK SHAKE APA",desc:"Esta cerveza tiene el dulzor de la lactosa y una espuma espesa, cremosa y lechosa obtenida de pectinas de frutas, color mango y apariencia turbia. Se pueden oler frutas tropicales, principalmente mango y también cítricos como lima, pomelo y naranja. Sabor pleno y equilibrado, dulzor y suave retrogusto amargo. Esta cerveza es fácil de beber y es buena para el verano o incluso para las noches frías de invierno para recordar los días cálidos de la estación y refrescarse.",id:8,price:"3.00",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal8.jpeg"},{title:"RIBEIRÃO LAGER",desc:"Una cerveza que el nombre lo dice todo. Nacida en Ribeirão Preto, nuestra casa, es una lager ligera y refrescante, pero con cara de Colorado, una cervecería que nunca haría más de lo mismo: cerveza clara con naranja, con IBU 20 y 4,5% de graduación alcohólica.",id:9,price:"1.70",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal9.jpeg"},{title:"ORANGE FRESH",desc:"es el primer lanzamiento refrescante de Vintage para la versión 2022... Un mega Imperial Sour con mucha naranja, además de la infusión fría que aporta notas de miel de melocotón, limón y naranja.",id:10,price:"2.50",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal10.jpeg"},{title:"EISENBAHN PILSEN",desc:"¡Dorado, ligero y sabroso! Eisenbahn Pilsen tiene el auténtico sabor de las mejores cervezas, con pura malta de cebada.",id:11,price:"1.70",img:"https://bossb.netlify.app/src/imgs/fondos/artesanal11.jpeg"},];
var where=document.querySelector(".presentaciones--cards-container");
var view=`${ stock.map(prod=>` <article class="card-presentacion">
    <div style="background-image: url(${prod.img});" class="presentacion img" ><span class="precio">${prod.price}$</span></div>
    <div class="presentacion--desc">
        <p>${prod.title}</p>
        <P class="desc">${prod.desc}</P>
        <div class="carrito"><input placeholder="0" type="number" id="cant${prod.id}"> <input type="button" value="añadir al carrito 🛒" id="agregar" onclick="addtocart(${prod.id})"></div>
        
    </div>
</article>`)}`;
where.innerHTML=view;


//creando una variable en la que guardare el class de cartdata para pasarlos a html
var carrito_html=document.querySelector(".cart--data");
function addtocarthtml(product){
//     let view=`${ product.map(prod=>` <article class="card-presentacion">
//     <div style="background-image: url(${prod.img});" class="presentacion img" ></div>
//     <div class="presentacion--desc">
//         <p>${prod.title}</p>
//         <div class="carrito"></div>
        
//     </div>
// </article>`)}`;
let view=`${ product.map(prod=>` <article class="card-presentacion">
<div style="background-image: url(${prod.img});" class="presentacion img" ></div>
<div class="presentacion--desc">
    <p>${prod.title}</p>
</div>
</article>`)}`;
carrito_html.innerHTML =view;
}

//en esta variable obtenemos la cantidad a comprar
var cart_ref=document.querySelector(".cant-cart");
//estoy agregando un array vacio para añadir aqui los productos
let carrito=[];
//esta función agrega los productos 
function addtocart(idd){
    //aqui obtenemos la cantidad de productos a agregar
    var cant=document.querySelector(`#cant${idd}`).value;
    //con esta función mostramos solo en consola los datos obtenidos
    console.log(idd, Number(cant));
    //aqui buscamos el producto que concuerda con el id
    var item=stock.find((prod)=>{return prod.id==idd});
    //agregamos la cantidad del producto al producto que enviaremos despues al carrito
    console.log(item);
    item.cant=cant;
    //aqui enviamos los datos al array vacio carrito
   carrito.push(item);
   //aqui mostramos en consola lo enviado
   console.log(carrito);
   cart_ref.innerHTML =carrito.length;
   addtocarthtml(carrito);
}


function collect_data(){
    localStorage.setItem("carrito",)
}