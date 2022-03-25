

const displayValorAnterior = document.getElementById('valor-anterior');

const displayValorActual = document.getElementById('valor-actual');

const botonesNumeros = document.querySelectorAll('.numero');

const botonesOperadores = document.querySelectorAll('.operadores');

// const calculadora = new Calculadora();

// console.log(calculadora.sumar(4,5));
// console.log(calculadora.restar(10,6));
// console.log(calculadora.multiplicar(8,7));
// console.log(calculadora.dividir(100,5));
// console.log(calculadora.dividir(4,0));

const display = new Display(displayValorAnterior, displayValorActual);
botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',() =>{
        display.agregarNumero(boton.innerHTML);
    })
}) 