var car = {
  brand: 'VW',
  model: 'Gol',
  year: 2013
}

for ( var prop in car ) {
  console.log(prop)
}

var array = [1, 2, 3, 4, 5, null, undefined, function() {}]

for (var it in array ) {
  console.log(it)
}

console.log( 'Door in car? ', 'door' in car)

// ===========================================================

var number = 10

switch (number) {
  case 1:
    console.log('1')
    break;
  case 2:
    console.log('2')
    break;
  case 10:
    console.log('10')
    break;
  default:
    console.log('Dunno man')
}

// ===========================================================

for (var i = 1; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i)
}
console.log("End of 'for'")
