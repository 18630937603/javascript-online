function* getIndex(len) {
    if(len<=1){
        while (true){
            yield 0
        }
    }
    let i = 0
    let down = true
    while (true){
        yield i
        down? i++ : i--
        if(i===len-1)down = false
        if(i===0)down = true
    }
}

let getter = getIndex(1)

console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
console.log(getter.next().value)
