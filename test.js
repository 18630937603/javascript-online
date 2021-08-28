var canAttendMeetings = function(intervals) {
    intervals.sort(function(a,b){
        return a[0]-b[0]
    })
    for(let i=0;i<intervals.length;i++){
        if(intervals[i-1] && intervals[i][0] < intervals[i-1][1]){
            return false
        }
    }
    return true
};
