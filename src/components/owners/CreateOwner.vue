<template>
  <el-dialog title="创建住户" :visible.sync="dialogFormVisible">

    <el-form>
      <el-cascader class="inputele levelData"
        :options="levelData" placeholder="请选择房屋"
        change-on-select
      ></el-cascader>

      <el-input class="inputele" v-model="phone" type="number" placeholder="住户手机号" ></el-input>

      <el-input class="inputele" v-model="name" placeholder="住户姓名" ></el-input>

      <el-select class="inputele" v-model="type" placeholder="请选择住户类别" >
        <el-option
          v-for="item in typeList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-radio-group class="inputele" v-model="gender">
        <el-radio :label="3">绅士</el-radio>
        <el-radio :label="6">女士</el-radio>
      </el-radio-group>
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
        gender: '',
        type: '',
        phone: '',
        name: '',
        typeList: [
          {value: '1', label: '租户'},
          {value: '2', label: '业主'},
          {value: '3', label: '家人'},
          {value: '4', label: '朋友'}
        ],
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
                        value: 'area-15',
                        label: '201'
                      },
                      {
                        value: 'area-19',
                        label: '202'
                      },
                      {
                        value: 'area-17',
                        label: '203'
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
      }
    },
    created () {
      this.$store.state.ownerCreator = this
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
    width: 45%;
    box-sizing: border-box;
    &.levelData{
      width: 90%;
    }
  }
</style>
