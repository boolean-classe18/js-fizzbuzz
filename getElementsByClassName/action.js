// .getElementById crea un solo elemento
var titolo_var = document.getElementById('titolo');
console.log('Stampa dell\'elemento preso con l\' ID:');
console.log(titolo_var);
console.log('');

// .getElementsByClassName crea un array
var paragrafi = document.getElementsByClassName('element');
console.log('Stampa dell\'array creato con .getElementsByClassName:');
console.log(paragrafi);
console.log('');

// Stampa array "paragrafi"
console.log('Stampa dell\'array \'paragrafi\':');
for (var i = 0; i < paragrafi.length; i++) { // --> i = 0 perché posizione nell'array
  var paragrafo_corrente = paragrafi[i];
  console.log(paragrafo_corrente);
  var numero = i + 1; // --> i + 1 perché posizione scritta con numero "umano"
  // check multipli di 3 e 5 contemporaneamente
  if (numero % 3 === 0 && numero % 5 === 0 ) {
    paragrafo_corrente.innerHTML = 'FizzBuzz';
    // check multipli di 3
  } else if (numero % 3 === 0) {
    paragrafo_corrente.innerHTML = 'Fizz';
    // check multipli di 5
  } else if (numero % 5 === 0) {
    paragrafo_corrente.innerHTML = 'Buzz';
    // se non è multiplo né di 3 né di 5 stampa il numero
  } else {
    paragrafo_corrente.innerHTML = numero;
  }
}
