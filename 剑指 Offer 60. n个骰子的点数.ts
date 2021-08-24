// 动态规划



function dicesProbability(n: number): number[] {
    let dp: number[] = new Array(6).fill(1 / 6);
    for (let i = 2; i <= n; i++) {
        let tmp = new Array(5 * i + 1).fill(0);
        for (let j = 0; j < dp.length; j++) {
            for (let k = j; k < 6 + j; k++){
                tmp[k] += dp[j] / 6;
            }
        }
        dp = tmp;
    }
    return dp;
}

console.log(dicesProbability(2))
