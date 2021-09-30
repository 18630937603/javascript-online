// 闭包实现

class MyObject{
    constructor() {
        let privateVariable = 10;
        function privateFunction(){
            return false
        }
        this.publicMethod = function (){
            console.log(privateVariable);
            console.log(privateFunction());
        }
    }
}


let obj = new MyObject();
// obj.privateVariable
obj.publicMethod()

