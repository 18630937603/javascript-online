<template>
  <div>
    <div :style="`width:${size2};height:${size2};background-color:red`">div1</div>
    <div :style="`width:${size};height:${size};background-color:green`">div2</div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      sizeValue: document.documentElement.clientWidth / 3,
    }
  },
  computed: {
    size() {
      return this.sizeValue + 'px'
    },
    size2() {
      return 3*Math.pow(this.sizeValue,Math.log2(1.5)) + 'px'
    }
  },
  mounted() {
    window.addEventListener('resize',e => {
      this.sizeValue = document.documentElement.clientWidth / 3
    })
  }
}
</script>

<style scoped>
#text {
  color: red;
}
</style>
