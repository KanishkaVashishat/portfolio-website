const themeBtn = document.getElementById("theme-btn");

if(themeBtn){

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light");
themeBtn.textContent="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");
themeBtn.textContent="☀️";

}else{

localStorage.setItem("theme","dark");
themeBtn.textContent="🌙";

}

});

}