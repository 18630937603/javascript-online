/** 1109. 航班预订统计 差分数组
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let differential = new Array(n).fill(0)
    for(let i of bookings){
        const first = i[0] - 1
        const last = i[1] - 1
        const val = i[2]
        differential[first] += val
        if(last+1<=differential.length-1){
            differential[last+1] -= val
        }
    }
    let res = []
    let temp = 0
    for(let i=0;i<differential.length;i++){
        temp += differential[i]
        res.push(temp)
    }
    return res
};
