<template>
  <div>
    I'm father
    <button @click="jumpToMiddle">jump</button>
  </div>
</template>

<script>
export default {
  name: "FatherViewPage",
  methods: {
    jumpToMiddle() {
      this.$router.push({
        name: 'Middle',
        query: Object.assign(this.$route.query,{
          paramByFather1: '123',
          paramByFather2: '456',
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
