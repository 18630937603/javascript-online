<template>
  <div class="component-container">
    <div class="father red big-font">
      123
      <div class="child">456</div>
    </div>
    <div class="uncle">789</div>
  </div>
</template>

<script>
export default {
  name: "LessAndSelector"
}
</script>

<style scoped lang="less">


.component-container{
  .red {
    background: red;
    &.big-font {
      font-weight: 700;
      font-size: 100px;
    }
  }
}




</style>
