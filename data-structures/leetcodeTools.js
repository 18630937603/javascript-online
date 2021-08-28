// 刷题工具，实现了一些基本的数据结构

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

function buildList(array){
    let dummyHead = new ListNode(-1)
    let curr = dummyHead
    for(let val of array){
        curr.next = new ListNode(parseInt(val))
        curr = curr.next
    }
    return dummyHead.next
}

class Stack{
    constructor() {
        this._items = []
    }
    push(element){
        this._items.push(element)
    }
    pop(){
        return this._items.pop()
    }
    peek(){
        return this._items[this._items.length-1]
    }
    isEmpty(){
        return this._items.length===0
    }
    clear(){
        this._items = []
    }
    size(){
        return this._items.length
    }
}




// export {TreeNode,buildTree,ListNode,buildList}    // ES6
module.exports = {
    TreeNode,
    buildTree,
    ListNode,
    buildList,
    Stack
}

