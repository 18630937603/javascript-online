// function* getIndex(len) {
//     if(len<=1){
//         while (true){
//             yield 0
//         }
//     }
//     let i = 0
//     let down = true
//     while (true){
//         yield i
//         down? i++ : i--
//         if(i===len-1)down = false
//         if(i===0)down = true
//     }
// }
//
// let getter = getIndex(1)
//
// console.log(getter.next().value)
// console.log(getter.next().value)
// console.log(getter.next().value)
// console.log(getter.next().value)

function* foo() {
    yield yield yield 5
}
const result = foo() // foo {<suspended>}
// console.log(result.next(1));  // {value: 1, done: false}
// console.log(result.next(2));  // {value: 2, done: false}
// console.log(result.next(3));  // {value: 3, done: true}
// console.log(result.next());  //{value: undefined, done: true}

console.log(result.next());  // {value: 1, done: false}
console.log(result.next());  // {value: 2, done: false}
console.log(result.next());  // {value: 3, done: true}
console.log(result.next());  //{value: undefined, done: true}

