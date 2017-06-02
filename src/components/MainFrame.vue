<template>
  <div class="frame">
    <div class="box">
      <el-menu default-active="2" class="el-menu-vertical-demo nav" theme="dark" router>
        <p style="color: #fff;margin:0;padding:1rem;afont-weight: 900;border-bottom: 1px solid #0e1d33"><i class="el-icon-share"></i> 中南海小区</p>
        <el-menu-item index="houses" replaced>房屋管理</el-menu-item>
        <el-menu-item index="owners" replaced>住户管理</el-menu-item>
        <el-menu-item index="guards" replaced>门禁管理</el-menu-item>
      </el-menu>
      </el-col>
    </div>
    <router-view class="content"></router-view>
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

<style lang="scss" rel="stylesheet/scss" scoped>
  .frame{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-content: flex-start;
    .box{
      flex: 1;
      display: flex;
      font-weight: 500;
      justify-content: space-around;
      flex-wrap: wrap;
      align-content: flex-start;
      .nav{
        width: 100%;
      }
    }
    .content{
      flex:5;
      padding: 1rem;
    }
    .header{
      flex-basis: 100%;
    }
  }

  .title{
    color:cadetblue;
  }
  .text-left{
    float: left;
  }

  hr{
    margin-top:7px;
    *margin: 0;
    border: 0;
    color: #fff;
    background-color: #fff;
    height: 1px
  }
</style>
