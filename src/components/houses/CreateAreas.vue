<template>
  <el-dialog title="新建楼栋/区域/单元" :visible.sync="dialogFormVisible">
    <el-form>
      <el-cascader
        change-on-select
        :options="levelData"
        class='houseNumberForCreate'
        v-model='selectedOptions'
        @change = 'levelDataChange'
      ></el-cascader>
      <i class="el-icon-caret-right"></i>
      <el-input class="houseNumberForCreate" v-model="houseNumberForCreate" :placeholder="placeholder"></el-input>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="doSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {Message} from 'element-ui'

  export default {
    name: 'create-Areas',
    data () {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        houseNumberForCreate: '',
        levelData: [
          {
            value: 'area-0',
            label: '全部区域',
            children: [
              {
                value: 'area-1',
                label: '区域1',
                children: [
                  {
                    value: 'area-11',
                    label: '楼号1'
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
        ],
        selectedOptions: [],
        placeholder: '请填写区域号'
      }
    },
    created () {
      this.$store.state.areasCreator = this
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
      },
      levelDataChange (data) {
      }
    },
    watch: {
      'selectedOptions.length': function (val) {
        if (val === 1 || val === 0) this.placeholder = '请填写区域号'
        if (val === 2) this.placeholder = '请填写楼栋号'
        if (val === 3) this.placeholder = '请填写单元号'
      }
    }
  }
</script>
<style scoped>
  .houseNumberForCreate {
    width: 40%;
  }
</style>
