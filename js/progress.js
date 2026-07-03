const progress=document.getElementById("progress-bar");

if(progress){

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const value=(window.scrollY/total)*100;

progress.style.width=value+"%";

});

}