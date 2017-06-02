<template>
  <div>
    <h4>门禁列表</h4>
    <div class="search-bar">
      <el-cascader
        :options="search.levelData"
        change-on-select
        class = "levelSelect"
      ></el-cascader>
      <el-button class="search" type="primary" icon="search" @click="searchGuards">查询</el-button>
      <el-button class="create" type="primary" icon="plus" @click="create">添加门禁</el-button>
    </div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="name"
          label="门名称">
        </el-table-column>
        <el-table-column
          prop="type"
          label="门类型">
        </el-table-column>
        <el-table-column
          prop="location"
          label="门位置">
        </el-table-column>
        <el-table-column
          prop="devices"
          label="已关联设备">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
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
    <create-guard></create-guard>
  </div>
</template>
<script>
  import { Message } from 'element-ui'

  import CreateGuard from './CreateGuard.vue'

  export default {
    data () {
      return {
        test: 1,
        search: {
          levelData: [
            {
              value: 'area-1',
              label: '区域1',
              children: [
                {
                  value: 'area-11',
                  label: '楼号1',
                  children: [
                    {
                      value: 'area-12',
                      label: '单元1'
                    },
                    {
                      value: 'area-13',
                      label: '单元2'
                    },
                    {
                      value: 'area-14',
                      label: '单元3',
                      children: [
                        {
                          value: '201-13',
                          label: '201'
                        },
                        {
                          value: '2012-13',
                          label: '203'
                        },
                        {
                          value: '2013-13',
                          label: '202'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 'area-15',
                  label: '楼号12'
                },
                {
                  value: 'area-16',
                  label: '楼号13'
                }
              ]
            },
            {
              value: 'area-21',
              label: '区域2'
            },
            {
              value: 'area-31',
              label: '区域3'
            }
          ]
        },
        tableData: [
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'},
          {name: '张三', type: '1单元', location: 'fdsafdasdas', devices: 'fdsafads', remark: '启用'}
        ]
      }
    },
    methods: {
      searchGuards () {
        Message({
          message: '接口还没准备好！',
          type: 'warning',
          duration: 2000
        })
      },
      create () {
        this.$store.dispatch('createGuard')
      }
    },
    components: {
      CreateGuard
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
      margin: auto 2rem;
    }
    .create{
      float: right;
    }
    .levelSelect{
      width: 50%;
    }
  }

  .pagebar{
    float: right;
    margin-top: 1rem;
  }

</style>
