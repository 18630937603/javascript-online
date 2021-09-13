// 闭包测试

let add = (function () {
    let counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
