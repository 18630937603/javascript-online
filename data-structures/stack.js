// 栈
class Stack{
    _items;
    constructor() {
        this._items = []
    }
    push(element){
        this._items.push(element)
    }
    pop(){
        return this._items.pop()
    }
    peek(){
        return this._items[this._items.length-1]
    }
    isEmpty(){
        return this._items.length===0
    }
    clear(){
        this._items = []
    }
    size(){
        return this._items.length
    }
}

module.exports = {Stack}
