const {MinHeap} = require('../data-structures/min-heap')


var minMeetingRooms = function(intervals) {
    intervals.sort(function(a,b){
        return a[0]-b[0]
    })
    let heap = new MinHeap(intervals[0][1])
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0] >= heap.peek()){   //  房间空闲的情况
            heap.pop()
            heap.push(intervals[i][1])
        }else{
            heap.push(intervals[i][1])
        }
    }
    return heap.size()
};

console.log(minMeetingRooms([[7,10],[2,4]]))
