function TreeNode(val, left, right){
    this.val = (val===undefined ? null : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// 也可以，但WebStorm中不高亮显示
// class TreeNode{
//     constructor(val, left, right) {
//         this.val = (val===undefined ? null : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

function buildTree(array){
    let head = new TreeNode(array[0])
    const treeSize = array.length
    let treeNodes = []
    treeNodes.push(head)
    for(let i=1;i<treeSize;i++){
        let node = new TreeNode(array[i])
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

function ListNode(val, next) {
   this.val = (val===undefined ? null : val)
   this.next = (next===undefined ? null : next)
}

function buildList(){

}


export {TreeNode,buildTree,ListNode,buildList}

