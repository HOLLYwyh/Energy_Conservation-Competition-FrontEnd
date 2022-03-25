<template>
  <div>
    <div id="bottomLeftChart" style="width:6.3rem;height:5.3rem;"></div>
  </div>
</template>

<script>
import echartMixins from '@/utils/resizeMixins'
export default {
  data () {
    return {
      chart: null
    }
  },
  mixins: [echartMixins],
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById('bottomLeftChart'))
      //  ----------------------------------------------------------------
      let category = [
        '100%',
        '120%',
        '140%',
        '160%',
        '180%'
      ]
      let rateData = [
        50.63,
        51.34,
        51.25,
        49.44,
        48.67
      ]
      let barData = [
        433.96,
        514.31,
        601.80,
        714.04,
        816.88
      ]
      let lineData = [
        878.93,
        1056.84,
        1234.56,
        1412.17,
        1591.45
      ]

      let option = {
        title: {
          text: '',
          x: 'center',
          y: 0,
          textStyle: {
            color: '#de4d4d',
            fontSize: 16,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.1)',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#7B7DDC'
            }
          }
        },
        legend: {
          data: ['陆路', '陆路+水网', '减碳率'],
          textStyle: {
            color: '#B4B4B4'
          },
          top: '0%'
        },
        grid: {
          x: '11%',
          width: '78%',
          y: '14%'
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#B4B4B4'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [

          {
            max: 1600,
            interval: 400,
            name: '碳排量',
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: '#B4B4B4'
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            name: '减碳率',
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: '#B4B4B4'
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '减碳率',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#F02FC2'
              }
            },
            data: rateData
          },

          {
            name: '陆路+水网',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#956FD4' },
                  { offset: 1, color: '#3EACE5' }
                ])
              }
            },
            data: barData
          },

          {
            name: '陆路',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(156,107,211,0.8)' },
                  { offset: 0.2, color: 'rgba(156,107,211,0.5)' },
                  { offset: 1, color: 'rgba(156,107,211,0.2)' }
                ])
              }
            },
            z: -12,

            data: lineData
          }
        ]
      }
      this.chart.setOption(option)
    }
  },
  destroyed () {
    window.onresize = null
  }
}
</script>

<style lang="scss" scoped>
</style>
