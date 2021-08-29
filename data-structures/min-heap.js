// 最小堆
class MinHeap {
    constructor(...args) {
        this._container = args
        this.buildMinHeap()
    }
    buildMinHeap(){
        for(let i=Math.floor((this._container.length - 1) / 2);i>=0;i--){
            this._MinHeapifyDown(i)
        }
    }

    push(ele) {
        this._container.push(ele)
        this._MinHeapifyUp(this._container.length-1)
    }

    pop() {
        if(this.isEmpty()){}
        else{
            [this._container[0],this._container[this._container.length-1]] = [this._container[this._container.length-1],this._container[0]]
            let temp = this._container.pop()
            this._MinHeapifyDown(0)
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

    _MinHeapifyDown(index){
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        let minIndex = index
        if(leftChildIndex<this._container.length){
            if(this._container[leftChildIndex]<this._container[minIndex]){
                minIndex = leftChildIndex
            }
        }
        if(rightChildIndex<this._container.length){
            if(this._container[rightChildIndex]<this._container[minIndex]){
                minIndex = rightChildIndex
            }
        }
        if(minIndex!==index){
            [this._container[minIndex],this._container[index]] = [this._container[index],this._container[minIndex]]
            this._MinHeapifyDown(minIndex)
        }
    }

    _MinHeapifyUp(index){
        let par = Math.floor((index-1)/2)
        if(par >= 0){
            if(this._container[par] > this._container[index]){
                [this._container[par],this._container[index]] = [this._container[index],this._container[par]]
                this._MinHeapifyUp(par)
            }
        }
    }
}


module.exports = {MinHeap}
