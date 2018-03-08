var name = new String("Leonardo");
var number = new Number(15);
var boo = new Boolean(true);

console.log(name)
console.log(number)
console.log(boo)

// =================================

var num = String('132');

console.log(num)

// ================================

function sum (num1, num2) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } 
  return "Passe somente números para a função!"
}

console.log( sum('JS', 2))

// ===============================

function subtract (num1, num2) {
  if( typeof num1 === 'object' || typeof num2 === 'object' ) {
    return 'Não utilize valores null!'
  }
  return num1 - num2
}

console.log(subtract (null, 1))
console.log(subtract (10, 5))
