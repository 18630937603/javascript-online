"use strict";
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Number.MAX_VALUE;
    let maxprofit = 0;
    for (const price of prices) {
        maxprofit = Math.max(price - minprice, maxprofit);
        minprice = Math.min(price, minprice);
    }
    return maxprofit;
};

// 这题做了两遍了，没啥难度
