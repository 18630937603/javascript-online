import {buildTree,TreeNode} from "./leetcodeTools";

function preOrder(root){
    if(!root){return}
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

