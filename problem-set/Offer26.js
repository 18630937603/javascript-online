/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!A || !B){return false}
    else{
        let ret = false
        if(A.val === B.val){
            ret = ret || isMatch(A,B)
        }
        if(A.left){
            ret = ret || isSubStructure(A.left,B)
        }
        if(A.right){
            ret = ret || isSubStructure(A.right,B)
        }
        return ret
    }
    function isMatch(A,B){
        if(!A){return false}
        else if(A.val!==B.val){return false}
        else{
            let ret = true
            if(B.left){ret = ret && isMatch(A.left,B.left)}
            if(B.right){ret = ret && isMatch(A.right,B.right)}
            return ret
        }
    }
}

//  这题写起来比较麻烦，倒是不难
