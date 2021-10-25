function Person(name){
    this.name = name
    this.myFunc = ()=>{
        console.log('Function called by',this)
    }
    this.myFunc2 = function(){
        this.myFunc()
        console.log('Function2 called by',this)
    }
}


let xm = new Person('xiaoming')

xm.myFunc()
xm.myFunc2()


function New(Constructor,...args){
    let obj = Object.create(null);
    Object.setPrototypeOf(obj,Constructor.prototype) // 必须这么写，不然原型链向上查找有问题
    let result = Constructor.apply(obj,args);
    return result instanceof Object ? result : obj
}

let xh = New(Person,'xiaohong')
xh.myFunc()
xh.myFunc2()

