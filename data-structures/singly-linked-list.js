// 单向链表
class SinglyLinkedList{
    createNode(val) {
        return{
            val:(val===undefined ? null : val),
            next:null
        }
    }
    buildList(...args) {
        if(args.length===0){
            return null
        }else{
            if(Object.prototype.toString.call(args)==='[object Array]' && args.length===1){
                args = args[0]
            }
            let dummyHead = this.createNode()
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

