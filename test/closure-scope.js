function outerFunc(i){
    let value = 0;
    let nothing = 1;
    return function middleFunc(){
        value += i
        console.log(value)
        let message = `Value is now ${value}`
        return function innerFunc(){
            console.log(message)
        }
    }
}

// 1 2 3 Value is now 1
let a = outerFunc(1);
let b = a();
a();
a();
b();

// // 1 2 3 Value is now 2
// let a = outerFunc(1);
// let b = a();
// b = a();
// a();
// b();

// // 1 2 3 Value is now 2
// let a = outerFunc(1);
// a();
// let b = a();
// a();
// b();

// 结论：当有变量引用了一个闭包时，闭包函数会将当前引用到的外部变量和其值保存在作用域链中
// 如果没有变量引用这个闭包，那么它就被垃圾回收了
