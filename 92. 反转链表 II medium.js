// // 头插法
//
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
//
// /**
//  * @param {ListNode} head
//  * @param {number} left
//  * @param {number} right
//  * @return {ListNode}
//  */
// var reverseBetween = function(head, left, right) {
//     let dummyNode = new ListNode(-1,head)
//     let pre = dummyNode
//     for(let i=0;i<left-1;i++){
//         pre = pre.next
//     }
//     let curr = pre.next
//     let next = curr.next
//     for(let i=0;i<right-left;i++){
//         curr.next = next.next
//         next.next = pre.next
//         pre.next = next
//         next = curr.next
//     }
//     return dummyNode.next
// };
