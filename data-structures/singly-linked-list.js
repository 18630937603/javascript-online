// 单向链表
class SinglyLinkedList{
    createNode(val, next) {
        return{
            val:(val===undefined ? null : val),
            next:(next===undefined ? null : next)
        }
    }
    constructor(...args) {
        if(args.length===0){
            return null
        }else{
            let dummyHead = this.createNode(-1)
            let curr = dummyHead
            for(let val of args){
                curr.next = this.createNode(parseInt(val))
                curr = curr.next
            }
            return dummyHead.next
        }
    }
}

module.exports = {SinglyLinkedList}



// function ListNode(val, next) {
//     this.val = (val===undefined ? null : val)
//     this.next = (next===undefined ? null : next)
// }
//
// function buildList(array){
//     let dummyHead = new ListNode(-1)
//     let curr = dummyHead
//     for(let val of array){
//         curr.next = new ListNode(parseInt(val))
//         curr = curr.next
//     }
//     return dummyHead.next
// }
//
// module.exports = {buildList}

