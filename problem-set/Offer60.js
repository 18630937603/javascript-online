"use strict";
// 动态规划



function dicesProbability(n){
    let dp = new Array(6).fill(1 / 6);
    for (let i = 2; i <= n; i++) {
        let tmp = new Array(5 * i + 1).fill(0);
        for (let j = 0; j < dp.length; j++) {
            for (let k = j; k < 6 + j; k++){
                tmp[k] += dp[j] / 6;          //  一开始我用递归写的，还是这种动态规划的方法好，从前向后推省时间
            }
        }
        dp = tmp;
    }
    return dp;
}

console.log(dicesProbability(2))
