import {buildTree} from "./leetcodeTools.js";

var pathSum = function(root, target) {
    let res = []
    let path = []
    function recursive(root,tar){
        if(!root){return}
        path.push(root.val)
        tar -= root.val
        if(tar===0 && !root.left && !root.right){
            res.push(JSON.parse(JSON.stringify(path)))
        }
        recursive(root.left,tar)
        recursive(root.right,tar)
        path.pop()
    }
    recursive(root,target)
    return res
};

let head = buildTree([0,1,1])
console.log(pathSum(head,1))
