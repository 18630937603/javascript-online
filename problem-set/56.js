// 合并区间

var merge = function(intervals) {
    intervals.sort((a,b)=>{
        return a[0]-b[0]
    })
    let merged = []
    for(let value of intervals){
        if(!merged.length || merged[merged.length-1][1] < value[0]){
            merged.push(value)
        }else{
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1],value[1])
        }
    }
    return merged
};

console.log(merge([[2,6],[1,3],[8,10],[15,18]]))
