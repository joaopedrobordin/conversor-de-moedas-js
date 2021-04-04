let valorEmDolar = parseFloat(prompt("qual o valor em dolar"));
console.log( typeof valorEmDolar);

let valorEmDolarNumero = parseFloat(valorEmDolar)
console.log(typeof valorEmDolarNumero);
// float = número decimal -> 12.99
// int = número inteiro -> 12

document.querySelector("container").innerHTML(valorEmDolarNumero);

let valorEmReal = valorEmDolarNumero * 5.77;

let valorEmRealFixado = valorEmReal.toFixed(2);

document.querySelector("container").innerHTML(valorEmRealFixado);
