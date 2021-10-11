// 手动实现Promise.allSettled(iterable)

// 不能直接同步判断promise的状态，只能通过回调来判断

// let promises = [
//     Promise.resolve('123'),
//     new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('234')
//         },500)
//     }),
//     Promise.reject('345'),
//     new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject('456')
//         },500)
//     })
// ]
//
// function allSettled (iterable) {
//     for(let promise of iterable){
//         promise.then(value=>{
//             console.log("Fulfilled,reason:",value)
//         },reason=>{
//             console.log("Rejected,reason:",reason)
//         })
//     }
// }

// allSettled(promises)


// Promise的链式调用
new Promise((resolve,reject)=>{
    resolve('12345')
}).then(res=>{
    console.log(res)
    return new Promise((res,rej)=>{
        res('23456')
    })
}).then(res=>{
    console.log(res)
})
