
var levelOrder = function(root) {
    if(!root){return []}
    let queue = []
    queue.push(root)
    let ret = []
    let floor = 0
    while (queue.length){
        let floorSize = queue.length
        let res = []
        for(let i=0;i<floorSize;i++){
            let temp = queue.shift()
            if(temp.val!==null){
                res.push(temp.val)
            }
            if(temp.left!==null){
                queue.push(temp.left)
            }
            if(temp.right!==null){
                queue.push(temp.right)
            }
        }
        if(floor%2===1){
            res.reverse()
        }
        ret.push(res)
        floor++
    }
    return ret
};

//  这题没啥难度
