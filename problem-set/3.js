/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const slidingWindow = new Set();
    let len = 0
    let windowLeft = 0
    let windowRight = 0
    let maxLength = 0
    while (windowRight < s.length){
        if(!slidingWindow.has(s[windowRight])){
            slidingWindow.add(s[windowRight]);
            windowRight++
            len++
            maxLength = Math.max(maxLength,len)
        }else{
            slidingWindow.delete(s[windowLeft]);
            windowLeft++
            len--
        }
    }
    return maxLength
};
