// /*
//
// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
//
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//
//     1
//    / \
//   2   2
//    \   \
//    3    3
//
//  */
//
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }
//
// function isSymmetric(root: TreeNode | null): boolean {
//     function isMirror(leftNode:TreeNode|null,rightNode:TreeNode|null):boolean{
//         if(!leftNode && !rightNode){return true}
//         else if(leftNode && rightNode){
//             return leftNode.val===rightNode.val && isMirror(leftNode.left,rightNode.right) && isMirror(leftNode.right,rightNode.left)
//         }else{return false}
//     }
//     if(!root){return true}
//     else {return isMirror(root.left,root.right)}
// }
//
