// nav bar
var nav=document.getElementById("navbar");
function togglebtn(){
    nav.classList.toggle("active");
}

// pop up register
var reg=document.getElementById("reg");
var pop=document.getElementById("pop");
var close=document.getElementById("close");
var over=document.getElementById("over");

reg.onclick=function(event){
    event.preventDefault();
    pop.classList.add("show");
    over.classList.add("over");
    nav.classList.remove("active");
}

close.onclick=function(event){
    event.preventDefault();
    pop.classList.remove("show");
    over.classList.remove("over");
}
// register success full msg
var ok =document.getElementById("ok")
var msg =document.getElementById("msg")

ok.onclick=function(event){
    event.preventDefault();
    msg.innerHTML="Successfully Registered";
    pop.classList.remove("show");
    over.classList.remove("over");
    
    setTimeout(()=>{
        msg.innerHTML=""
    },3000);
}
