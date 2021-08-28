// this指针的绑定

let a = function (){
    console.log(this)
}

class B{
    constructor() {
        console.log(this)
    }
    getThis(){
        console.log(this)
    }
}

let c = {
    fn:function (){
        console.log(this)
    }
}

a()
let b = new B()
b.getThis()
c.fn()
