"use strict";
//
class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function mirrorTree(root){
    if(root===null){return null}
    function switchChild(node){
        if(node===null){
        }else{
            [node.left,node.right] = [node.right,node.left]
            switchChild(node.left)
            switchChild(node.right)
        }
    }
    switchChild(root)
    return root
}
//  这题没啥难度
