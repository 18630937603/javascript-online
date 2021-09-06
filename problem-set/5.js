/**
 * @param {string} s
 * @return {string}
 */
// 动态规划法
var longestPalindrome = function(s) {
    let dp = new Array(s.length).fill(false).map(x=>new Array(s.length).fill(false));
    for(let i=0;i<s.length;++i){
        dp[i][i] = true
    }
    let maxLen = 1
    let begin = 0
    for(let L=2;L<=s.length;L++){
        for(let i=0;i<s.length;i++){
            let j = L + i - 1;
            if(j >= s.length){
                break
            }
            if(s[i]!==s[j]){
                dp[i][j] = false
            }else{
                if(j-i<3){
                    dp[i][j] = true
                }else{
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if(dp[i][j] && j-i+1 > maxLen){
                maxLen = j-i+1
                begin = i
            }
        }
    }
    return s.substr(begin,maxLen)
};




