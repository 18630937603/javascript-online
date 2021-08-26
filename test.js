let A ={ a: 2, b: 1, c: 2, d: 1, e: 1, f: 2 }



let s = "abaccdeff"

let B = Array.from(s).entries()

for(let [a,b] of B){
    console.log(a,b)
}

