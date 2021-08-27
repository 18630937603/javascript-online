"use strict";
/*
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。



示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.

 */

class MinStack {
    allValue
    minValue
    constructor() {}
    push(x){
        this.allValue.push(x)
        if(this.minValue.length===0){
            this.minValue.push(x)
        }else{
            if(x<=this.minValue[this.minValue.length-1]){
                this.minValue.push(x)
            }
        }
    }

    pop(){
        if(!(this.allValue.length===0)){
            if(this.minValue[this.minValue.length-1]===this.allValue.pop()){
                this.minValue.pop()
            }
        }
    }

    top(){
        return this.allValue[this.allValue.length-1]
    }

    min(){
        return this.minValue[this.minValue.length-1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
