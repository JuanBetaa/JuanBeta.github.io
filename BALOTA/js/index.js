var resultado = [];

function Aleatorio() {

let slc5 = document.querySelector(".seleccion5");
let slc6 = document.querySelector(".seleccion6");

let seleccion5 = parseInt(slc5.value);
let seleccion6 = parseInt(slc6.value);

let aleatory = Math.floor(Math.random() * 10);
let aleatory1 = Math.floor(Math.random() * 10);
let aleatory2 = Math.floor(Math.random() * 10);
let aleatory3 = Math.floor(Math.random() * 10);
let aleatory4 = Math.floor(Math.random() * 10);
let aleatory5 = Math.floor(Math.random() * 10);

    setTimeout(() => {
        document.querySelector(".balota-1").textContent = `${aleatory}`;
    }, 1000);
    setTimeout(() => {
        document.querySelector(".balota-2").textContent = `${aleatory1}`;
    }, 2000);
    setTimeout(() => {
        document.querySelector(".balota-3").textContent = `${aleatory2}`;
    }, 3000);
    setTimeout(() => {
        document.querySelector(".balota-4").textContent = `${aleatory3}`;
    }, 4000);
    setTimeout(() => {
        document.querySelector(".balota-5").textContent = `${aleatory4}`;
    }, 5000);
    setTimeout(() => {
        document.querySelector(".balota-6").textContent = `${aleatory5}`;
    }, 6000);

    setTimeout(() => {
        if (seleccion5 == aleatory4 && seleccion6 == aleatory5) {
        Swal.fire(" FELICIDADES HOY ES TU DIA DE SUERTE ")
    }
    else (
        Swal.fire(" PERDISTE"+" EL RESULTADO FUE "+aleatory4+aleatory5)         
    )
    }, 7000);
    


}
