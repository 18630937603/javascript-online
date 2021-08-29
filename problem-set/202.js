var isHappy = function(n) {
    if(n===1){return true}
    let fast = nextNum(n)
    let slow = n
    while (fast!==slow){
        if(fast===1){
            return true
        }else{
            fast = nextNum(nextNum(fast))    // 快慢指针法寻找循环
            slow = nextNum(slow)
        }
    }
    function nextNum(n){
        let s = String(n)
        let temp = 0
        for(let char of s){
            temp += Math.pow(parseInt(char),2)
        }
        return temp
    }
    return false
};
// 这个题只分两种情况，不是1的一定会循环

console.log(isHappy(19))
