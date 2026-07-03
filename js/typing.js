const typing = document.getElementById("typing");

if (typing) {

const words=[
"AI Developer",
"Software Engineer",
"Full Stack Developer",
"Python Developer"
];

let word=0;
let letter=0;
let deleting=false;

function type(){

const current=words[word];

typing.textContent=current.substring(0,letter);

if(!deleting){

letter++;

if(letter>current.length){

deleting=true;

setTimeout(type,1000);

return;

}

}else{

letter--;

if(letter===0){

deleting=false;

word=(word+1)%words.length;

}

}

setTimeout(type,deleting?60:120);

}

type();

}