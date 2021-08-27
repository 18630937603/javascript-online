
function closure(arg1,arg2){
    let boundVar = 10
    return function(){
        return boundVar+10+arg1+arg2
    }
}

let a = closure(5,8)
console.log(a())
