// // 等价
// let pattern = new RegExp('\\w+','g');
// // let pattern = /\w+/g
//
// /*
// 修饰符i：不区分大小写
// g：全文搜索（匹配多个）
//  */
//
// let str = "hello world"
//
// let res = str.match(pattern)
//
// console.log(res)

// let s = "2021-09-01~2021-09-02"
//
// console.log(s.replace(/\d{4}-0*/g,'').replace(/0*/g,''))
//

let hms = "23:58:59"

// let hm = hms.replace(/:\d\d/,'')
let hm = hms.replace(/(?<=:\d\d):\d\d/,'')

console.log(hm)


