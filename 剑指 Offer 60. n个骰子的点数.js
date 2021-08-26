"use strict";
// // 动态规划
//
//
//
// function dicesProbability(n: number): number[] {
//     let dp: number[] = new Array(6).fill(1 / 6);
//     for (let i = 2; i <= n; i++) {
//         let tmp = new Array(5 * i + 1).fill(0);
//         for (let j = 0; j < dp.length; j++) {
//             for (let k = j; k < 6 + j; k++){
//                 tmp[k] += dp[j] / 6;
//             }
//         }
//         dp = tmp;
//     }
//     return dp;
// }
//
// console.log(dicesProbability(2))
//# sourceMappingURL=%E5%89%91%E6%8C%87%20Offer%2060.%20n%E4%B8%AA%E9%AA%B0%E5%AD%90%E7%9A%84%E7%82%B9%E6%95%B0.js.map