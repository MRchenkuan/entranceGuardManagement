<template>
  <div>
    <h4>住户列表</h4>
    <div class="search-bar">
      <el-input class="search" placeholder="请填写小区ID" icon="search" v-model="search.keywords" :on-icon-click="handleIconClick"></el-input>
      <el-button class="new" type="primary" icon="plus" @click="createOwner">新建住户</el-button>
    </div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="adress"
          label="住址">
        </el-table-column>
        <el-table-column
          prop="identifyStatus"
          label="认证状态">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          label="操作">
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      class="pagebar"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
    <create-owner></create-owner>
  </div>
</template>
<script>
  import CreateOwner from './CreateOwner.vue'

  export default {
    data () {
      return {
        test: 1,
        search: {
          keywords: ''
        },
        tableData: [
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'},
          {name: '张三', gender: 'fd-001', phone: '1单元', type: '201', adress: 'fdsafdasdas', identifyStatus: 'fdsafads', status: '启用'}
        ]
      }
    },
    methods: {
      handleIconClick () {
        console.log(this.search.keywords)
      },
      createOwner () {
        this.$store.dispatch('createOwner')
      }
    },
    components: {
      CreateOwner
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  h4{
    text-align: left;
  }
  .search-bar{
    text-align: left;
    margin-bottom: 1rem;
    .search{
      width: 20%;
    }
    .new{
      float: right;
    }
  }

  .pagebar{
    float: right;
    margin-top: 1rem;
  }

</style>
