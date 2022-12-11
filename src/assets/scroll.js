window.addEventListener('scroll',function(){
  let header=document.querySelector(".header--nav");
  let main=this.document.querySelector(".main--title-container");
  header.classList.toggle("header_fixed",this.window.scrollY>0); 
  main.classList.toggle("main--space",this.window.scrollY>0);
});
