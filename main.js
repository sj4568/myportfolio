var nav=document.querySelector(".nav");
var btn=document.querySelector(".btn");
var box=document.querySelector("#box");
var posii=scrollY;
var n=0;
var text =document.querySelector("#text");
var serial =document.querySelector(".serial");
var s2=document.querySelector(".serial2");
var s3=document.querySelector(".serial3")
var one =document.querySelector("#one");
var nam =document.querySelector("#nam");
var email =document.querySelector("#email");
var mas =document.querySelector("#mas");
var ani =document.querySelector(".anim");
var namS =document.querySelector("#namS");
var emS =document.querySelector("#emS");
var txS =document.querySelector("#txS");
window.onscroll=() => {
    nav.classList.toggle("sticky", scrollY>0);
    n+=1;
};
btn.onclick=()=>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");


};
var fun= setInterval(anim,3000);
function anim(){
    n+=1;
    if(n%2==0){
        text.innerHTML="Web Designer";
    }
    else{  
        text.innerHTML="Web Devolper";

    }
}
box.onclick=()=>{
    box.classList.toggle("ac");
    serial.classList.toggle("tr");
    s2.classList.toggle("ac");
    s3.classList.toggle("ac");
    
}
ani.onclick=()=>{
    var na=nam.value;
    var em=email.value;
    var ma=mas.value;
    if (na.length>0 && em.length>0 && ma.length>0) {
        ani.classList.remove("ac");

        
    }
    else{
        ani.classList.add("ac");
    }
    if (na.length<1) {
        namS.innerHTML="This feild Cannot be empty";

        
    }else{
        namS.innerHTML="";


    }
    if (em.length<1) {
        emS.innerHTML="This feild Cannot be empty";

        
    }else{
        emS.innerHTML="";

    }
    if (ma.length<1) {
      txS.innerHTML="This feild Cannot be empty";

        
    }else{
        txS.innerHTML="";


    }


}