// let findKthLargest = function (nums, k) {
//     let heapSize = nums.length
//     function maxHeapify(nodeIndex){
//         const leftChildIndex = nodeIndex * 2 + 1;
//         const rightChildIndex = nodeIndex * 2 + 2;
//         let maxIndex = nodeIndex
//         if(leftChildIndex<heapSize){
//             if(nums[leftChildIndex]>nums[maxIndex]){
//                 maxIndex = leftChildIndex
//             }
//         }
//         if(rightChildIndex<heapSize){
//             if(nums[rightChildIndex]>nums[maxIndex]){
//                 maxIndex = rightChildIndex
//             }
//         }
//         if(maxIndex!==nodeIndex){
//             [nums[maxIndex],nums[nodeIndex]] = [nums[nodeIndex],nums[maxIndex]]
//             maxHeapify(maxIndex)
//         }
//     }
//     function buildHeap(){
//         for(let i=Math.floor((heapSize - 1) / 2);i>=0;i--){
//             maxHeapify(i)
//         }
//     }
//     let res = 0
//     function findKthMaxValue(){
//         for(let i=0;i<k;++i){
//             [nums[0],nums[heapSize-1]] = [nums[heapSize-1],nums[0]];
//             res = nums.pop();
//             heapSize--;
//             maxHeapify(0)
//         }
//     }
//     buildHeap();
//     findKthMaxValue();
//     return res;
// };
