var validateStackSequences = function(pushed, popped) {
    let stack = []
    // 如果stack不能取出当前pop需要的元素，则压栈
    // 若栈为空，则返回false
    // 若能取出，则取出，current++
    // 若current === popped.length,则返回true
    let current = 0
    while(current<popped.length){
        if(!stack.length || stack[stack.length-1]!==popped[current]){
            if(!pushed.length){return false}
            else{stack.push(pushed.shift())}
        }else{
            stack.pop()
            current++
        }
    }
    return true
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
