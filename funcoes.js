let valorEmDolarTexto = parseFloat(prompt("qual o valor em dolar que voce quer converter ? "));
console.log( typeof valorEmDolarTexto);

let valorEmDolarNumero = parseFloat(valorEmDolarTexto);
console.log(typeof valorEmDolarNumero);
// float = número decimal -> 12.99
// int = número inteiro -> 12

document.querySelector(".resp").innerHTML = valorEmDolarNumero;

let valorEmReal = valorEmDolarNumero * 5.77;

let valorEmRealFixado = valorEmReal.toFixed(2);

document.querySelector(".resp").innerHTML = valorEmRealFixado;
