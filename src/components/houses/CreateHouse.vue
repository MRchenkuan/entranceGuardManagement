<template>
  <el-dialog title="创建房屋" :visible.sync="dialogFormVisible">
    <el-form>
      <el-cascader
        :options="levelData"
        class = 'houseNumberForCreate'
      ></el-cascader>
      <i class="el-icon-caret-right"></i>
      <el-input class="houseNumberForCreate" v-model="houseNumberForCreate" placeholder="请填写房号"></el-input>
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
    name: 'create-house',
    data () {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        houseNumberForCreate: '',
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
            value: 'area-21',
            label: '区域2'
          },
          {
            value: 'area-31',
            label: '区域3'
          }
        ]
      }
    },
    created () {
      this.$store.state.houseCreator = this
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
<style>
  .houseNumberForCreate{
    width: 40%;
  }
</style>
