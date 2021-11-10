<template>
  <div>
    <div>123</div>
    <button @click="Notification.requestPermission()">请求权限</button>
    <div>{{ con }}</div>
    <button @click="msg">通知</button>
    <button @click="log">查看状态</button>
  </div>
</template>

<script>


export default {
  name: "Home",
  data() {
    return {
      con: ''
    }
  },
  methods: {
    msg() {
      new Notification('新通知',{
        body: '这是一条通知'
      })
    },
    log() {
      this.con = Notification?.permission
    }
  },
  mounted() {

  },
  beforeDestroy() {
  }
}
</script>

<style scoped>

</style>
