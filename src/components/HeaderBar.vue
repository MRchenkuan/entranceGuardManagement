<template>
  <div class="header">
    <span class="title">中南海小区</span>
  </div>
</template>
<script>
  export default {
    name: 'header-bar',
    data () {
      return {
        test: 1
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .header{
    width: 100%;
    height: 3rem;
    background: #5ca3e8;
    color:#fff;
    display: flex;
    span{
      font-size: 1.5rem;
      line-height: 3rem;
      height: 3rem;
      margin-left: 3rem;
    }
  }
</style>
