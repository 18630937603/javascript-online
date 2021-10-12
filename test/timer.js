
let a = {
    x:10
}

let b = 10

console.time()

for (let i=0;i<1000000;i++){
    b = b + 1
}

console.timeEnd()

console.time()

for (let i=0;i<1000000;i++){
    a.x = a.x+1
}

console.timeEnd()



