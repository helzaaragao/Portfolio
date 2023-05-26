console.log("funcionando");

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    document.getElementsByClassName('mobile-menu')[0].classList.toggle("responsive"); 
}

let darkmode = document.querySelector(".darkmode"); 

darkmode.addEventListener('onclick', darkMode());

function darkMode(){ 
    document.getElementsByClassName("darkmode")[0].classList.toggle("darkact");
    document.getElementsByName("body")[0].classList.toggle("darkact");
}

// adicionar o evento onclick com a função que vamos criar 


