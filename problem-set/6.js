// 行数索引的生成器
function* getIndex(len) {
    if(len<=1){
        while (true){
            yield 0
        }
    }
    let i = 0
    let down = true
    while (true){
        yield i
        down? i++ : i--
        if(i===len-1)down = false
        if(i===0)down = true
    }
}

var convert = function(s, numRows) {
    let rows = new Array(numRows).fill(0).map(x=>new Array(0))
    let getter = getIndex(numRows)
    for(let char of s){
        rows[getter.next().value].push(char)
    }
    let res = []
    for(let array of rows){
        res = res.concat(array)
    }
    return res.join("")
};

// 循环写法
// var convert = function(s, numRows) {
//     const ret = new Array(numRows).fill('')
//     const len = s.length
//     let i = 0
//     while(i < len){
//         for(let j = 0; j<numRows && i<len; j++, i++){
//             ret[j] += s[i]
//         }
//         for(let j = numRows-2; j>0 && i<len; j--, i++){
//             ret[j] += s[i]
//         }
//     }
//     return ret.join('')
// };



convert("PAYPALISHIRING",3)
