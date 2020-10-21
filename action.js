/* ASSIGNMENT
Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
al posto dei multipli di 3, deve stampare "Fizz"
al posto dei multipli di 5, deve stampare "Buzz"
al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz".
*/

// Initialization of variables
var minimum_number = 1;
var maximum_number = 100;
var number = minimum_number;

// ************* SOLUTION NUMBER 1 - WHILE LOOP *************
console.log('************ SOLUTION NUMBER 1 - WHILE LOOP *************');
// Generating numbers ranging from "minimum_number" to "maximum_number"
while (number <= maximum_number) {
  // Check multiples of 3 & 5
  if (!(number % 3) && !(number % 5)) { // --> number % 3 === 0 && number % 5 === 0
    console.log('FizzBuzz');
    document.getElementById('result').innerHTML += "<li> FizzBuzz </li>";
    // check multiples of 3 (only)
  } else if (!(number % 3)) {
    console.log('Fizz');
    document.getElementById('result').innerHTML += "<li> Fizz </li>";
    // check multiples of 5 (only)
  } else if (!(number % 5)) {
    console.log('Buzz');
    document.getElementById('result').innerHTML += "<li> Buzz </li>";
    // if it is not multiple of 3 and 5 print "number"
  } else {
    console.log(number);
    document.getElementById('result').innerHTML += "<li>" + number + "</li>";
    // document.getElementById('result').innerHTML += `<li> ${number} </li>`;
  }
  number++;
}

// ************* SOLUTION NUMBER 2 - FOR LOOP *************
console.log('************ SOLUTION NUMBER 2 - FOR LOOP *************');
// Generating numbers ranging from "minimum_number" to "maximum_number"
for (var i = minimum_number; i <= maximum_number; i++) {
  // Check multiples of 3 & 5
  if (!(i % 15)) { // --> number % 15 === 0
    console.log('FizzBuzz');
    // check multiples of 3 (only)
  } else if (!(i % 3)) {
    console.log('Fizz');
    // check multiples of 5 (only)
  } else if (!(i % 5)) {
    console.log('Buzz');
    // if it is not multiple of 3 and 5 print "number"
  } else {
    console.log(i);
  }
}

// ************* PRINT OUTPUT IN HTML *************

/*
// Per stampare entrambi "test" e "test 2"
document.getElementById('result').innerHTML = "<li> test </li>";
document.getElementById('result').innerHTML += "<li> test 2 </li>";

// Usare += è come scrivere questo:
document.getElementById('result').innerHTML = document.getElementById('result').innerHTML + "<li> test 2 </li>";
*/
