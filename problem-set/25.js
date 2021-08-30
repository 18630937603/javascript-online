const {SinglyLinkedList} = require('../data-structures/singly-linked-list')

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseKGroup = function(head, k) {
    let dummyHead = new ListNode(null,head)
    let pre = dummyHead
    let current = head
    let tail = head
    let listLen = 1
    while (tail.next){
        tail = tail.next
        listLen++
    }
    for(let i=0;i<Math.floor(listLen/k);i++){
        reversePart(pre,current,k)
        for(let j=0;j<k;j++){
            pre = pre.next
        }
        current = pre.next
    }
    function reversePart(pre,head,k){
        let curr = head
        for(let i=0;i<k-1;i++){
            let next = curr.next
            curr.next = next.next
            next.next = pre.next
            pre.next = next
        }
    }
    return dummyHead.next
};

let a = SinglyLinkedList.prototype.buildList([1,2,3,4,5])

reverseKGroup(a,2)
