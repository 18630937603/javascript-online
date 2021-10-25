// 对象中键值对顺序的区别

let objA = {
    a: 20,
    b: 30
}

let objB = {
    b: 20 ,
    a: 30
}


console.log(JSON.stringify(objA)===JSON.stringify(objB))

console.log(Object.keys(objA)===Object.keys(objB));
