console.log("funcionando");

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    document.getElementsByClassName('mobile-menu')[0].classList.toggle("responsive"); 
}

let darkmode = document.querySelector("object"); 
let body = document.querySelector("body"); 

darkmode.addEventListener('click', darkMode);

function darkMode(){ 
    darkmode.classList.toggle("darkact");
    body.classList.toggle("darkact");
}

// adicionar o evento onclick com a função que vamos criar 

// adicionar svg no lugar dos fonts awesone para durar mais


