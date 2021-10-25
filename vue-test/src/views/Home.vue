<template>
  <div>
    <div>Home:Hello</div>
    <button @click="establishConnection">connect to todolist</button>
    <button @click="establishConnection2">connect to todolist2</button>
    <button @click="sendMessage">sendmsg</button>
    <button @click="sendMessage2">sendmsg2</button>
  </div>
</template>

<script>


export default {
  name: "Home",
  data() {
    return {
      ws: {},
      ws2: {}
    }
  },
  methods: {
    establishConnection() {
      if(!sessionStorage.getItem('user')){
        sessionStorage.setItem('user','18630937603')
      }
      try{
        this.ws = new WebSocket("ws://localhost:3000/websocket/todolist")
        this.ws.onopen = function () {
          console.log('已请求建立连接，等待服务器响应')
        }
        this.ws.onmessage = function (msg) {
          console.log("服务端说:" + msg.data);
        };
        this.ws.onclose = function () {
          console.log("关闭连接");
        };
      }catch (e){
        console.log('连接建立失败')
        console.log(e)
      }
    },
    establishConnection2() {
      if(!sessionStorage.getItem('user')){
        sessionStorage.setItem('user','18630937603')
      }
      try{
        this.ws2 = new WebSocket("ws://localhost:3000/websocket/todolist2")
        this.ws2.onopen = function () {
          console.log('已请求建立连接，等待服务器响应')
        }
        this.ws2.onmessage = function (msg) {
          console.log("服务端说:" + msg.data);
        };
        this.ws2.onclose = function () {
          console.log("关闭连接");
        };
      }catch (e){
        console.log('连接建立失败')
        console.log(e)
      }
    },
    sendMessage() {
      this.ws.send('服务端你好，我是：18630937603')
    },
    sendMessage2() {
      this.ws2.send('服务端你好，我是：18630937603')
    }
  }
}
</script>

<style scoped>

</style>
