<template>
  <div>
    <button @click="jump">跳转</button>
  </div>
</template>

<script>

export default {
  name: "Home",
  setup() {
    function jump() {
      this.$router.push({
        name:'Father'
      })
    }

    return {
      jump
    }
  }
}
</script>

<style scoped>

</style>
