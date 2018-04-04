var arr = [1, 2, 3 ,4 ,5]

console.log(arr.concat([6, 7, 8,]))
console.log(arr)

// Concatena dois itens de array sem alterar o array original

//----------------------------------------------------------

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

// unshift adiciona um item ao inicio, enquanto o shift retira um item do inicio

//----------------------------------------------------------

console.log(arr.slice(1))

console.log(arr.slice(-3))

console.log(arr.splice(3)) // remove todos os elementos à partir do elemento na terceira posição

console.log(arr)

console.log(arr.splice(3,0,4,5))

console.log(arr)

console.log(arr.splice(1, 2))

console.log(arr.splice(1, 0, 'a', 'b', 'c', 'd' ,'e'))

console.log(arr)

console.log(arr.splice(1,5,2,3))

console.log(arr)

//----------------------------------------------------------
var sum = 0

arr.forEach(function( item, index, array ) {
  console.log( item, index, array )
  sum+= item;
})

console.log(sum)

//----------------------------------------------------------

var every = arr.every(function(item) {
  return item < 6
})

console.log(every)

//----------------------------------------------------------

var some = arr.some(function(item) {
  return item % 2 === 0
})

console.log(some)

//----------------------------------------------------------

var map = arr.map(function (item, index, array) {
  return { index: index, item: item } 
})

console.log(map)

//----------------------------------------------------------

var filter = arr.filter(function(item, index, array) {
  return item > 2
})

console.log(filter)
