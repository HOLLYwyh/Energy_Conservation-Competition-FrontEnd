<template>
  <div>
    <dv-charts :option.sync="option" style="width:420px;height:250px;"/>
  </div>
</template>

<script>
import {getData, getData1, getData2} from '../../data/chart'
export default {
  name: 'BottomRightChart',
  created () {
    // eslint-disable-next-line no-unused-vars
    let timer = setInterval(() => {
      this.d = Math.random() * 1000
      if (this.option.series[0].data[0] !== getData(0)) {
        this.$message({
          message: '计算完成',
          type: 'success'
        })
      }
      this.option.series[0].data[0] = getData(0)
      this.option.series[0].data[1] = getData(1)
      this.option.series[0].data[2] = getData(2)
      this.option.series[0].data[3] = getData(3)
      this.option.series[0].data[4] = getData(4)
      this.option.series[0].data[5] = getData(5)
      this.option.series[0].data[6] = getData(6)
      this.option.series[1].data[0] = getData1(0)
      this.option.series[1].data[1] = getData1(1)
      this.option.series[1].data[2] = getData1(2)
      this.option.series[1].data[3] = getData1(3)
      this.option.series[1].data[4] = getData1(4)
      this.option.series[1].data[5] = getData1(5)
      this.option.series[1].data[6] = getData1(6)
      this.option.series[2].data[0] = getData2(0)
      this.option.series[2].data[1] = getData2(1)
      this.option.series[2].data[2] = getData2(2)
      this.option.series[2].data[3] = getData2(3)
      this.option.series[2].data[4] = getData2(4)
      this.option.series[2].data[5] = getData2(5)
      this.option.series[2].data[6] = getData2(6)
      this.option = {...this.option}
    }, 2500)
  },
  // watch: {
  //   option (newValue, oldValue) {
  //     console.log('你好')
  //   }
  // },
  data () {
    return {
      d: 1000,
      option: {
        legend: {
          top: '10%',
          data: [
            {
              name: '管制容量',
              color: '#00baff'
            },
            {
              name: '航运去程补贴',
              color: '#3de7c9'
            },
            {
              name: '航运返程补贴',
              color: '#f5d94e'
            }
          ],
          textStyle: {
            fill: '#e5e5e5'
          }
        },
        xAxis: {
          data: [
            '威海/盖州', '大连/威海', '青岛/烟台', ' 烟台/黄骅', ' 唐山/营口', ' 唐山/烟台', '天津/沧州'
          ],
          axisLine: {
            style: {
              stroke: '#e5e5e5'
            }
          },
          axisLabel: {
            style: {
              fill: '#e5e5e5',
              rotate: -28, // 文本旋转角度
              margin: 0,
              fontSize: 11
            }
          },
          axisTick: {
            style: {
              fill: '#c71b1b'
            },
            show: false
          }
        },
        yAxis: {
          name: '政府补贴价格',
          data: 'value',
          style: {
            fill: '#e5e5e5',
            fontSize: 11
          },
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#e5e5e5'
            }
          },
          axisLabel: {
            formatter: '{value} ',
            style: {
              fill: '#e5e5e5'
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 1600
        },
        series: [
          {
            name: '管制容量',
            data: [
              1000, 900, 400, 500, 700, 650, 820
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(0, 186, 255, 0.4)'
            }

          },

          {
            name: '航运去程补贴',
            data: [
              789.7, 311.6, 418.5, 551.7, 1532.7, 1354.9, 1260
            ],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            lineStyle: {
              lineDash: [5, 5]
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          },

          {
            data: [
              631.9, 724.6, 1130.2, 586.8, 1052.3, 1225.6, 1120
            ],
            type: 'line',
            name: '航运返程补贴',
            lineArea: {
              show: true,
              gradient: ['rgba(245, 217, 79, 0.8)', 'rgba(245, 217, 79, 0.2)']
            },
            lineStyle: {
              stroke: '#f5d94e'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#f5d94e',
                stroke: 'transparent'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<!--<style lang="less">-->
<!--.top-right-cmp {-->
<!--  position: relative;-->
<!--  padding: 0 50px;-->
<!--  box-sizing: border-box;-->

<!--  .chart-name {-->
<!--    position: absolute;-->
<!--    right: 70px;-->
<!--    text-align: right;-->
<!--    font-size: 20px;-->
<!--    top: 10px;-->
<!--  }-->
<!--}-->
<!--</style>-->
