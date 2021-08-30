// 双向链表

class DoublyLinkedList{
    createNode(val) {
        return{
            val:(val===undefined ? null : val),
            pre:null,
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
            let dummyHead = this.createNode();
            let tail = dummyHead
            for(let val of args){
                let temp = this.createNode(val);
                temp.pre = tail
                tail.next = temp
                tail = tail.next
            }
            tail.next = dummyHead.next
            dummyHead.next.pre = tail
            return dummyHead.next
        }
    }
    createEmptyListByLength(length){
        let i = new Array(length).fill(null)
        return this.buildList(i)
    }
}

module.exports = {DoublyLinkedList}
