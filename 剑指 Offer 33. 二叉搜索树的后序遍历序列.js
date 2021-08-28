var verifyPostorder = function (postorder) {
    let stack = []
    let parent = Infinity
    for (let i = postorder.length - 1; i >= 0; i--) {
        let cur = postorder[i]
        while (stack.length && stack[stack.length - 1] > cur) {   //  这里出栈的
            parent = stack.pop()
        }
        if (cur > parent) {   //  这里太妙了，parent其实就代表当前的父节点，压进来的所有节点都是它右边的节点，必须比他大，因为它左边的节点刚刚已经出栈了
            return false
        }
        stack.push(cur)
    }
    return true
};

verifyPostorder([7, 4, 6, 5])
