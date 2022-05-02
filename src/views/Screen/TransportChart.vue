<template>
  <div id="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">

          <div class="rc1-chart-container" style="display: grid;grid-template-rows:  40% 60%">

            <div>
              <el-dialog title="环境参数设置" :visible.sync="dialogVisible" width="30%">
                <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
                  <el-form-item>
                    <span slot="label" style="margin-left: -10px">
                      <span style="font-size: 12px;margin-left: 16px">决策目标</span>
                    </span>
                    <el-select v-model="simpleValue" placeholder="请选择" style="margin-left: -20px">
                      <el-option  v-for="item in simpleOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <span slot="label" style="margin-left: -10px">
                      <span style="font-size: 12px;margin-left: 16px">政策约束</span>
                    </span>
                    <el-checkbox-group v-model="checkedOptions">
                      <el-checkbox v-for="city in multiOptions" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="small" type="primary" style="margin-left: -55px">上传OD矩阵/参数列表</el-button>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleInput">确 定</el-button>
              </el-dialog>
            </div>
            <!--修改部分-->
            <div style="margin-top: -65px">
              <div style="font-size: 16px;color: white;">数据输入模块</div>
              <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition" style="margin-top: 20px">
                <el-form-item>
                  <span slot="label" style="margin-left: -10px">
                    <span style="color: whitesmoke;font-size: 12px;margin-left: 16px">目标减排率</span>
                  </span>
                  <el-select v-model="selectValue" placeholder="请选择" style="margin-left: -20px">
                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <el-form ref="form" :model="form" :inline="true" label-width="80px" :label-position="labelPosition">
                <el-form-item style="margin-top: -30px;margin-left: -30px">
                  <span slot="label">
                    <span style="color: whitesmoke;font-size: 12px;">最小补贴</span>
                  </span>
                  <el-input style="width: 120px;height: 10px" v-model="form.minAllowance">
                    <i slot="suffix" style="font-style: normal;color: #000000;font-weight: bold;line-height: 45px;">元</i>
                  </el-input>
                </el-form-item>
                <el-form-item style="margin-top: -30px;margin-left: -20px">
                  <span slot="label">
                    <span style="color: whitesmoke;font-size: 12px">最大补贴</span>
                  </span>
                  <el-input style="width: 120px;height: 10px" v-model="form.maxAllowance">
                    <i slot="suffix" style="font-style: normal;color: #000000;font-weight: bold;line-height: 45px;">元</i>
                  </el-input>
                </el-form-item>
              </el-form>
              <el-form ref="form" :model="form" :inline="true" label-width="80px" :label-position="labelPosition">
                <el-form-item style="margin-top: -30px;margin-left: -30px">
                  <span slot="label">
                    <span style="color: whitesmoke;font-size: 12px">最小税收</span>
                  </span>
                  <el-input style="width: 120px;height: 10px" v-model="form.minRevenue">
                    <i slot="suffix" style="font-style: normal;color: #000000;font-weight: bold;line-height: 45px;">元</i>
                  </el-input>
                </el-form-item>
                <el-form-item style="margin-top: -30px;margin-left: -20px">
                  <span slot="label">
                    <span style="color: whitesmoke;font-size: 12px">最大税收</span>
                  </span>
                  <el-input style="width: 120px;height: 10px" v-model="form.maxRevenue" :rows="10">
                    <i slot="suffix" style="font-style: normal;color: #000000;font-weight: bold;line-height: 45px;">元</i>
                  </el-input>
                </el-form-item>
              </el-form>
              <el-form ref="form" :model="form" label-width="100px" :label-position="labelPosition" :inline="true">
                <el-form-item style="margin-top: -30px;margin-left: -30px">
                  <span slot="label">
                    <span style="color: whitesmoke;font-size: 12px">预算</span>
                  </span>
                  <el-input style="width: 220px" v-model="form.budget">
                    <i slot="suffix" style="font-style: normal;color: #000000;font-weight: bold;line-height: 45px;">元</i>
                  </el-input>
                </el-form-item>
              </el-form>
              <el-form ref="form" :model="form" label-width="100px" :inline="true" :label-position="labelPosition">
                <el-form-item style="margin-top: -30px;margin-left: -30px">
                  <span slot="label" style="margin-left: -5px">
                    <span style="color: whitesmoke;font-size: 12px">最大运价涨幅</span>
                  </span>
                  <el-input style="width: 220px" v-model="form.increase">
                    <i slot="suffix" style="font-style: normal;color: #000000;font-weight: bold;line-height: 45px;">%</i>
                  </el-input>
                </el-form-item>
              </el-form>
              <div style="margin-top: -15px;margin-left: -10px">
                <el-button style="margin-top: 10px;margin-left: 20px;font-weight: bold" type="success" @click="dialogVisible = true">环境参数设置</el-button>
                <el-button style="background-color: cornflowerblue;color: whitesmoke;font-weight: bold" @click="handleResult" v-loading.fullscreen.lock="fullscreenLoading">政策模拟</el-button>
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- 4个主要的数据 -->

    </div>
  </div>
</template>

<script>
const m = ['运输网络扩容政策', '补贴政策', '航线网络设计政策', '收费政策']
export default {
  data () {
    return {
      fullscreenLoading: false,
      config2: {
        data: [37],
        shape: 'roundRect'
      },
      config3: {
        data: [9.2],
        shape: 'roundRect'
      },
      options: [{
        value: '10%',
        label: '10%'
      }, {
        value: '20%',
        label: '20%'
      }, {
        value: '30%',
        label: '30%'
      }],
      form: {
        minAllowance: '',
        maxAllowance: '',
        minRevenue: '',
        maxRevenue: '',
        budget: '',
        increase: ''
      },
      selectValue: '',
      labelPosition: 'right',
      simpleOptions: [{
        value: 'Maximal profit',
        label: '班轮公司收益最大'
      }, {
        value: 'Minimum total',
        label: '区域碳排放总量最小'
      }, {
        value: 'Minimum cost',
        label: '区域综合运输成本最小'
      }],
      dialogVisible: false,
      simpleValue: '',
      checkedOptions: [],
      multiOptions: m,
      fileList: [],
      output: true
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleInput () {
      this.dialogVisible = false
      this.output = true
    },
    handleResult () {
      if (this.output) {
        // this.$forceUpdate()
        this.$emit('change', 'test')
        // this.fullscreenLoading = true
        // setTimeout(() => {
        //   this.fullscreenLoading = false
        // }, 1000)
        // this.$router.push('/temp')
      }
    }
  }
}
</script>
<style scoped>
.el-form-item >>> .el-input__inner {
  height: 25px;
}
</style>
<style lang="scss">
#centreLeft1 {
  padding: 0.2rem;
  height: 5.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }

  .bottom-data {
    .item-box {
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      // 金币
      .coin {
        position: absolute;
        left: 0.1rem;
        top: 0.2125rem;
        font-size: 0.25rem;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
    }
  }
}
</style>
