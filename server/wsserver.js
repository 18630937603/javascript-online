const Koa = require('koa');
const websockify = require('koa-websocket')
const app = websockify(new Koa());
const route = require('koa-route')
const router = require('koa-router')();

const PORT = 3000;

router.all('/websocket/todolist',ctx=>{
    ctx.websocket.send("连接成功");
    console.log("连接建立了")
    ctx.websocket.on('message',message=>{
        ctx.websocket.send("客户端你也好，你已经连接到了todolist服务")
        console.log('客户端说：',message)
    })
    ctx.websocket.on('close',()=>{
        ctx.websocket.send("客户端你滚吧")
        console.log("连接关闭了")
    })
})

router.all('/websocket/todolist2',ctx=>{
    ctx.websocket.send("连接成功");
    console.log("连接建立了")
    ctx.websocket.on('message',message=>{
        ctx.websocket.send("客户端你也好，你已经连接到了todolist2服务")
        console.log('客户端说：',message)
    })
    ctx.websocket.on('close',()=>{
        ctx.websocket.send("客户端你滚吧")
        console.log("连接关闭了")
    })
})

app.use(router.routes()).use(router.allowedMethods())

// app.ws.use(route.all('/websocket/todolist',function (ctx){
//
//     ctx.websocket.send("连接成功");
//     console.log("连接建立了")
//     ctx.websocket.on('message',message=>{
//         ctx.websocket.send("客户端你也好，你已经连接到了todolist服务")
//         console.log('客户端说：',message)
//         // console.log(next)
//     })
//     ctx.websocket.on('close',()=>{
//         ctx.websocket.send("客户端你滚吧")
//         console.log("连接关闭了")
//     })
//     // return next(ctx)
// }))
//
// app.ws.use(route.all('/websocket/todolist2',function (ctx){
//
//     ctx.websocket.send("连接成功");
//     console.log("连接建立了")
//     ctx.websocket.on('message',message=>{
//         ctx.websocket.send("客户端你也好，你已经连接到了todolist2服务")
//         console.log('客户端说：',message)
//         // console.log(next)
//     })
//     ctx.websocket.on('close',()=>{
//         ctx.websocket.send("客户端你滚吧")
//         console.log("连接关闭了")
//     })
//     // return next(ctx)
// }))

// app.ws.use((ctx, next) => {
//
//     // ctx.websocket.on('open',message=>{
//     //     ctx.websocket.send("连接成功");
//     //     console.log("连接建立了")
//     // })
//     ctx.websocket.send("连接成功");
//     console.log("连接建立了")
//
//     ctx.websocket.on('message',message=>{
//         console.log('客户端说：',message)
//         ctx.websocket.send("客户端你也好")
//     })
//     ctx.websocket.on('close',()=>{
//         console.log("连接关闭了")
//     })
//     return next(ctx)
// })



app.listen(PORT, () => {
    console.log("服务器已启动，地址：localhost:" + PORT);
});
