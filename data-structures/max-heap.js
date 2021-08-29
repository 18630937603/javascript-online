// 最大堆
class MaxHeap {
    constructor(array) {
        this._container = []
        if(Object.prototype.toString.call(array)==='[object Array]'){
            this._container = array
            this.buildMaxHeap()
        }
    }
    buildMaxHeap(){
        for(let i=Math.floor((this._container.length - 1) / 2);i>=0;i--){
            this._maxHeapifyDown(i)
        }
    }

    push(ele) {
        this._container.push(ele)
        this._maxHeapifyUp(this._container.length-1)
    }

    pop() {
        if(this.isEmpty()){}
        else{
            [this._container[0],this._container[this._container.length-1]] = [this._container[this._container.length-1],this._container[0]]
            let temp = this._container.pop()
            this._maxHeapifyDown(0)
            return temp
        }
    }

    peek() {
        return this._container[0]
    }

    size() {
        return this._container.length
    }

    isEmpty() {
        return this._container.length===0
    }

    _maxHeapifyDown(index){
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        let maxIndex = index
        if(leftChildIndex<this._container.length){
            if(this._container[leftChildIndex]>this._container[maxIndex]){
                maxIndex = leftChildIndex
            }
        }
        if(rightChildIndex<this._container.length){
            if(this._container[rightChildIndex]>this._container[maxIndex]){
                maxIndex = rightChildIndex
            }
        }
        if(maxIndex!==index){
            [this._container[maxIndex],this._container[index]] = [this._container[index],this._container[maxIndex]]
            this._maxHeapifyDown(maxIndex)
        }
    }

    _maxHeapifyUp(index){
        let par = Math.floor((index-1)/2)
        if(par >= 0){
            if(this._container[par] < this._container[index]){
                [this._container[par],this._container[index]] = [this._container[index],this._container[par]]
                this._maxHeapifyUp(par)
            }
        }
    }
}


module.exports = {MaxHeap}
