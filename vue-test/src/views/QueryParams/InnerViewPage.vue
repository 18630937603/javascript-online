<template>
  <div>
    I'm inner
    <button @click="jumpToFather">jump</button>
  </div>
</template>

<script>
export default {
  name: "InnerViewPage",
  methods: {
    jumpToFather() {
      this.$router.push({
        name: 'Father',
        query: Object.assign(this.$route.query,{
          paramByInner1: '123',
          paramByInner2: '456',
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
