/** 1143. 最长公共子序列
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/*
动态规划：
边界条件：dp[0][~],dp[~][0] = 0
转移方程：dp[i][j] = dp[i-1][j-1] + 1 (text1[i-1]===text2[j-1])
        dp[i][j] = max(dp[i-1][j],dp[i][j-1])   (text1[i-1]!==text2[j-1])
 */

var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length + 1,n = text2.length + 1
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(text1[i-1]===text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[m-1][n-1]
};

console.log(longestCommonSubsequence('abcde', 'acde'));
