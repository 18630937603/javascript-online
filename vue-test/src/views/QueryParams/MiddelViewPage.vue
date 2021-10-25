<template>
  <div>
    I'm middle
    <button @click="jumpToInner">jump</button>
  </div>
</template>

<script>

export default {
  name: "MiddleViewPage",
  methods: {
    jumpToInner() {
      this.$router.push({
        name: 'Inner',
        query: Object.assign(this.$route.query,{
          paramByMiddle1: '123',
          paramByMiddle2: '456',
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
