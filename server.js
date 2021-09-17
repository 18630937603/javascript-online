const Koa = require('koa');
const app = new Koa();

// 设置允许跨域
const cors = require('koa2-cors')
app.use(cors())

app.use(async ctx =>{
    console.log(ctx.url)
    // ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = 'Hello AJAX';
})

app.listen(8088,()=>{
    console.log('服务已启动，监听端口8088')
})
