"use strict";
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
// function mirrorTree(root: TreeNode | null): TreeNode | null {
//     if(root===null){return null}
//     function switchChild(node:TreeNode | null):void{
//         if(node===null){
//             return
//         }else{
//             [node.left,node.right] = [node.right,node.left]
//             switchChild(node.left)
//             switchChild(node.right)
//         }
//     }
//     switchChild(root)
//     return root
// }
//# sourceMappingURL=%E5%89%91%E6%8C%87%20Offer%2027.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%95%9C%E5%83%8F.js.map