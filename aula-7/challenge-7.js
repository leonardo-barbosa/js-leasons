var arr = [true, null, 1, { rengar: 'quebrado' }, 'Leonardo']

function addItem(item) {
  arr.push(item)
  return (arr)
}

addItem(['Murilo', 52.41, function(x,y) { return x/y } ])
console.log(arr)

console.log('O segundo elemento do segundo array é ' + arr[5][1])

console.log('O primeiro array tem ' + arr.length + ' itens.')

var i = 10;
var pares = []
var impares = []

while (i <= 20) {
  if( i % 2 == 0) {
    pares.push(i) 
  }
  i++
}
console.log( 'Números pares entre 10 e 20: ' + pares )

var i = 10;
while (i <= 20) {
  if( i % 2 == 1) {
    impares.push(i)
  }
  i++
}
console.log( 'Números impares entre 10 e 20: ' + impares )


var p = []
var imp = []

for(i = 100; i <= 120; i++) {
  if (i % 2 == 0) {
    p.push(i)
  }
}
console.log( 'Números pares entre 100 e 120: ' + p )

for(i = 100; i <= 125; i++) {
  if (i % 2 == 1) {
    imp.push(i)
  }
}
console.log( 'Números pares entre 100 e 120: ' + imp )
