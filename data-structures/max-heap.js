// 最大堆
class MaxHeap {
    _item;
    constructor(array) {
        this._item = []
        if(Object.prototype.toString.call(array)==='[object Array]'){
            this._item = array
            this.buildMaxHeap()
        }
    }
    buildMaxHeap(){
        for(let i=Math.floor((this._item.length - 1) / 2);i>=0;i--){
            this.maxHeapify(i)
        }
    }

    push() {
    }

    pop() {
    }

    peek() {
    }

    size() {
    }

    isEmpty() {
    }

    maxHeapify(index){
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        let maxIndex = index
        if(leftChildIndex<this._item.length){
            if(this._item[leftChildIndex]>this._item[maxIndex]){
                maxIndex = leftChildIndex
            }
        }
        if(rightChildIndex<this._item.length){
            if(this._item[rightChildIndex]>this._item[maxIndex]){
                maxIndex = rightChildIndex
            }
        }
        if(maxIndex!==index){
            [this._item[maxIndex],this._item[index]] = [this._item[index],this._item[maxIndex]]
            this.maxHeapify(maxIndex)
        }
    }
}


module.exports = {MaxHeap}
