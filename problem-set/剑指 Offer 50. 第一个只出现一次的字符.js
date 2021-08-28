/**
 * @param {string} s
 * @return {string}
 */
const _ = require('loadsh')

var firstUniqChar = function(s) {
    const frequency = _.countBy(s);   //  lodash的一个api，如果输入字符串，可以返回每个字符出现的次数的对象
    console.log(frequency)
    for (const char of s) {
        if (frequency[char] === 1) {
            return char;
        }
    }
    return ' ';
};

console.log(firstUniqChar("abaccdeff"));


