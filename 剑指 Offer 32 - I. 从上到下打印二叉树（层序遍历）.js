var levelOrder = function(root) {
    let queue = []
    queue.push(root)
    let res = []
    while(queue.length){
        let temp = queue.shift()
        if(temp===null || temp.val===null){}
        else{
            res.push(temp.val)
            queue.push(temp.left)
            queue.push(temp.right)
        }
    }
    return res
};

// 这题没啥难度
