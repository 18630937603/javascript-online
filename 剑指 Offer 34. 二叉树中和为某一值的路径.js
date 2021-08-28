
var pathSum = function(root, target) {
    let res = []
    let path = []
    function recursive(root,tar){
        if(!root){return}
        path.push(root.val)
        tar -= root.val
        if(tar===0 && !root.left && !root.right){
            res.push(JSON.parse(JSON.stringify(path)))   //  复制数组要深拷贝
        }
        recursive(root.left,tar)
        recursive(root.right,tar)
        path.pop()    //  回溯法的精髓
    }
    recursive(root,target)
    return res
};



