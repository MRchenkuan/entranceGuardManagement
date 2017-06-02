<template>
  <div class="frame">
    <header-bar></header-bar>
    <div class="box">
      <router-link class="btn btn-default btn-lg" :to="'/'+$store.getters.communityId+'/houses'">房屋管理</router-link>
      <router-link class="btn btn-default btn-lg" :to="'/'+$store.getters.communityId+'/owners'">住户管理</router-link>
      <router-link class="btn btn-default btn-lg" :to="'/'+$store.getters.communityId+'/guards'">门禁管理</router-link>
    </div>
  </div>
</template>

<script>
  import HeaderBar from './HeaderBar.vue'
  export default{
    data () {
      return {
        test: 1
      }
    },
    components: {
      HeaderBar
    }
  }
</script>

<style scoped>
  .frame{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100%;
  }
  .box{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-self: flex-start;

  }
  .btn{
    padding: .5rem 1rem;
    border-radius: .2rem;
  }
  .btn.btn-default{
    color:#fff;
    background: cadetblue;
  }
  .btn.btn-lg{
    padding: 1rem 2rem;
  }

  .btn{
    min-width: 10rem;
    margin: 1rem;
  }
  .title{
    color:cadetblue;
  }
</style>
