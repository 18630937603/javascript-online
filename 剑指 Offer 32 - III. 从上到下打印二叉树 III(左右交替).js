import {buildTree} from './leetcodeTools.mjs'

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

let tree = buildTree([0,2,4,1,null,3,-1,5,1,null,6,null,8])

console.log(levelOrder(tree))

console.log('success')
