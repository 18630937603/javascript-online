// 普通二叉树
class BinaryTree{
    createNode(val, left, right){
        return{
            val:(val === undefined ? null : val),
            left:(left === undefined ? null : left),
            right:(right === undefined ? null : right)
        }
    }
    constructor(...args) {
        if(args.length===0){
            return null
        }else{
            let head = this.createNode(args[0])
            const treeSize = args.length
            let treeNodes = []
            treeNodes.push(head)
            for(let i=1;i<treeSize;i++){
                let node = new TreeNode(args[i])
                treeNodes.push(node)
                let parentIndex = Math.floor((i-1)/2)
                let isLeftChild = ((i-1) % 2) === 0
                if(isLeftChild){
                    treeNodes[parentIndex].left = node
                }else{
                    treeNodes[parentIndex].right = node
                }
            }
            return head
        }
    }
}

module.exports = {BinaryTree}


// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? null : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }
//
// function buildTree(array){
//     let head = new TreeNode(array[0])
//     const treeSize = array.length
//     let treeNodes = []
//     treeNodes.push(head)
//     for(let i=1;i<treeSize;i++){
//         let node = new TreeNode(array[i])
//         treeNodes.push(node)
//         let parentIndex = Math.floor((i-1)/2)
//         let isLeftChild = ((i-1) % 2) === 0
//         if(isLeftChild){
//             treeNodes[parentIndex].left = node
//         }else{
//             treeNodes[parentIndex].right = node
//         }
//     }
//     return head
// }
//
// module.exports = {buildTree}
