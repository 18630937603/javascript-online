// function promise(fn) {
//     var value = null,
//         callbacks = [];  //callbacks为数组，因为可能同时有很多个回调
//
//     this.then = function (onFulfilled) {
//         callbacks.push(onFulfilled);
//         return this;
//     };
//
//     function resolve(value) {
//         setTimeout(function () {
//             callbacks.forEach(function (callback) {
//                 callback(value);
//             });
//         }, 0)
//     }
//
//     fn(resolve);
// }
//
//
// function test() {
//     return new promise(function(resolve) {
//         console.log('1');
//         resolve();
//     })
// }
//
// test().then(function(resolve) {
//     console.log('2');
// }).then(function(resolve) {
//     console.log('3');
// });

let p = new Promise(()=>{})

console.log(p)
