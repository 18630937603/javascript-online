async function a(){
    console.log('async func start')

    Promise.resolve('resolved promise').then(value=>{
        console.log('mirco task called,value:',value)
    })
    let res = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('timer start')
            resolve('1')
        },1500)
    }).then(value=>{
        console.log('then called,value:',value)
    })

    console.log('async func end')
    return new Promise((resolve, reject) => {
        console.log('promise for return start')
        resolve('2')
    })
}

setTimeout(()=>{
    console.log('macro task called')
},0)
a().then(value=>{
    console.log('outer then called,value:',value)
});

console.log('sync codes end')






async function A() {
    console.log('hahaha')
    setTimeout(() => {
        console.log('djoiesd')
    })
    console.log('dajodea')
    await C()
    console.log('dwdwd')
}

async function B() {
    await A()
    console.log('A finished')
}

async function C() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('500')
        },500)
    })
}

B()



