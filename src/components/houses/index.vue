<template>
  <div>
    <h4>房屋列表</h4>
    <div class="search-bar">
      <el-input class="search" placeholder="请填写小区ID" icon="search" v-model="search.keywords" :on-icon-click="handleIconClick"></el-input>
      <el-button class="new" type="primary" icon="plus" @click="createAreas">新建楼栋/区域/单元</el-button>
      <el-button class="new" type="primary" icon="plus" @click="createHouse">新建房屋</el-button>
    </div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="area"
          label="区域"
          width="180">
        </el-table-column>
        <el-table-column
          prop="building"
          label="楼号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="cell"
          label="单元号">
        </el-table-column>
        <el-table-column
          prop="house"
          label="房间号">
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      class="pagebar"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
    <create-house></create-house>
    <create-areas></create-areas>
  </div>

</template>
<script>
  import CreateHouse from './CreateHouse'
  import CreateAreas from './CreateAreas'
  export default {
    data () {
      return {
        test: 1,
        search: {
          keywords: ''
        },
        tableData: [
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'},
          {area: 1, building: 'fd-001', cell: '1单元', house: '201'}
        ]
      }
    },
    methods: {
      handleIconClick () {
        console.log(this.search.keywords)
      },
      createHouse () {
        this.$store.dispatch('createHouse')
      },
      createAreas () {
        this.$store.dispatch('createAreas')
      }
    },
    components: {
      CreateAreas,
      CreateHouse
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
      margin-right: 1rem;
    }
  }
  .pagebar{
    float: right;
    margin-top: 1rem;
  }

</style>
