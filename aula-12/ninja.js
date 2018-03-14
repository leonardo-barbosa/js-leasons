var obj = {
  prop1: 'prop1',
  prop2: 'prop2'
}

console.log(obj)

var obj2 = {
  prop1: 'prop1',
  prop2: 'prop2'
}

/* obj.prop1 = 'propriedade'

  console.log(obj)

  delete obj.prop1

*/

console.log(obj === obj2)

var objCopy = obj

console.log(obj === objCopy)

objCopy.prop1 = 'Olar meus amigos'

console.log( objCopy )
console.log( obj )

// --------------------------------
// Herança

var objeto = new Object()

console.log(objeto)

var objeto2 = Object.create(obj)
objeto2.prototype

console.log(objeto2)

obj.prop1 = 'Sup man, how you doing?'
console.log(obj.prop1)

console.log(objeto2.prop1)

// --------------------------------

obj.x = 1
obj.y = 2

obj2 = {}
obj2 = Object.create(obj)
obj2.prototype

console.log(obj2.x)

obj2.x = 1
for (var prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(prop)
  }
}

console.log(obj.hasOwnProperty('x'))
console.log(obj2.hasOwnProperty('x')) // valida se o objeto realmente possuí essa propriedade, retornando false caso seja somente herdado
console.log(obj2.x)


// --------------------------------

console.log(Object.keys(obj2))

console.log(obj.isPrototypeOf(obj2))

var obj3 = Object.create(obj)

obj3.prototype

console.log(obj.isPrototypeOf(obj3))

console.log(JSON.stringify(obj2))

// --------------------------------

var arr = []

arr[0] = 5
arr[1] = 2
arr[2] = 10
arr[12] = 20

console.log(arr)

arr.push('olar') // adiciona na última posição

console.log(arr)

arr.pop() // remove o último

console.log(arr)
// --------------------------------

var arr2 = ['arroz', 'nhoque', 'lasanha']

console.log(arr2)

console.log(arr2.join( ', ' ))

console.log(arr2.reverse())

console.log(arr2.sort())
