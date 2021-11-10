// this指针的绑定

// let a = function (){
//     console.log(this)
// }
//
// class B{
//     constructor() {
//         console.log(this)
//     }
//     getThis(){
//         console.log(this)
//     }
// }
//
// let c = {
//     fn:function (){
//         console.log(this)
//     }
// }
//
// a()
// let b = new B()
// b.getThis()
// c.fn()

// 总结：普通函数，如果作为对象的方法调用，this指向该对象。作为构造函数用new来调用，this指向新的实例对象。除此之外都指向window
// 箭头函数，this指向词法作用域的外层
