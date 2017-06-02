<template>
  <el-dialog title="添加门禁" :visible.sync="dialogFormVisible">

    <el-form>
      <el-cascader class="inputele levelData"
        :options="levelData" placeholder="选择门禁区域"
      ></el-cascader>
      <el-input class="name" v-model="name" placeholder="请填写门名称"></el-input>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请填写门禁备注"
        v-model="remark">
      </el-input>

    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="doSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { Message } from 'element-ui'

  export default {
    name: 'create-guard',
    data () {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        remark: '',
        name: '',
        levelData: [
          {
            value: 'area-1',
            label: '单元门',
            children: [
              {
                value: 'a1',
                label: '区域1'
              },
              {
                value: 'a3',
                label: '区域2',
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
                        label: '单元3'
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
                value: 'a2',
                label: '区域3'
              }
            ]
          },
          {
            value: 'area-21',
            label: '小区前大门'
          },
          {
            value: 'area-31',
            label: '小区后大门'
          }
        ]
      }
    },
    created () {
      this.$store.state.guardCreator = this
    },
    methods: {
      open () {
        this.dialogTableVisible = true
        this.dialogFormVisible = true
      },
      close () {
        this.dialogTableVisible = false
        this.dialogFormVisible = false
      },
      doSubmit () {
        Message({
          message: '接口还没准备好！',
          type: 'warning',
          duration: 2000
        })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .inputele{
    margin: 1rem auto;
    box-sizing: border-box;
    &.levelData{
      width: 100%;
    }
  }
  .name{
    margin: 0 auto 1rem;
  }
</style>
