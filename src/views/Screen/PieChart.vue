<template>
  <div class="right-chart-2">
    <div class="rc1-chart-container" style="display: grid;grid-template-columns:  40% 60%">
      <div>
      <dv-active-ring-chart class="ccmc-middle" :config="config" style="width:180px;height:200px;" />
      </div>
<!--      <dv-charts class="right" :option="option" style="width:350px;height:200px;" />-->
<!--      <LabelTag :config="labelConfig" />-->
      <div>
      <dv-capsule-chart :config="config2" style="width:240px;height:230px" />
      </div>
    </div>

    </div>

</template>

<script>

export default {
  name: 'RightChart2',
  components: {
  },
  data () {
    return {
      config2: {

        data: [
          {
            name: '大连- 威海',
            value: 1315
          },
          {
            name: '青岛-烟台',
            value: 415
          },
          {
            name: '黄骅-秦皇岛',
            value: 90
          },
          {
            name: '威海-天津',
            value: 317
          },
          {
            name: '秦皇岛-营口',
            value: 317
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
      },
      config: {
        data: [
          {
            name: '大连- 威海',
            value: 1315
          },
          {
            name: '青岛-烟台',
            value: 415
          },
          {
            name: '黄骅-秦皇岛',
            value: 90
          },
          {
            name: '威海-天津',
            value: 317
          },
          {
            name: '秦皇岛-营口',
            value: 317
          }
        ],
        digitalFlopStyle: {
          fontSize: 16
        },
        showOriginValue: true,
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        lineWidth: 20,
        radius: '65%',
        activeRadius: '75%'
      }

    }
  }

  // data1 () {
  //   return {
  //     option: {
  //       series: [
  //         {
  //           hoverAnimation:true, //鼠标悬浮是否有区域弹出动画，false:无  true:有
  //           avoidLabelOverlap: false,
  //           label: {
  //             normal: {
  //               show: false,
  //               position: 'center'
  //             },
  //             emphasis: {
  //               show: true,
  //               textStyle: {
  //                 fontSize: '30',
  //                 fontWeight: 'bold'
  //               }
  //             }
  //           },
  //           type: 'pie',
  //           data: [
  //             { name: '大连- 威海', value: 93 },
  //             { name: '青岛-烟台', value: 66 },
  //             { name: '黄骅-秦皇岛', value: 52 },
  //             { name: '威海-天津', value: 34 },
  //             { name: '秦皇岛-营口', value: 22 }
  //           ],
  //           radius: ['45%', '65%'],
  //           insideLabel: {
  //             show: false
  //           },
  //           outsideLabel: {
  //             labelLineEndLength: 10,
  //             formatter: '{percent}%\n{name}',
  //             style: {
  //               fontSize: 14,
  //               fill: '#fff'
  //             }
  //           }
  //         }
  //       ],
  //       color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  //       radius: '65%',
  //       activeRadius: '70%',
  //
  //     },
  //     labelConfig: {
  //       data: ['大连- 威海', '青岛-烟台', '黄骅-秦皇岛', '威海-天津','秦皇岛-营口']
  //     }
  //   }
  // }
}
</script>

<!--<style lang="less">-->
<!--.right-chart-2 {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->

<!--  .rc1-header {-->
<!--    font-size: 24px;-->
<!--    font-weight: bold;-->
<!--    height: 30px;-->
<!--    line-height: 30px;-->
<!--  }-->

<!--  .rc1-chart-container {-->
<!--    flex: 1;-->
<!--    display: flex;-->
<!--  }-->

<!--  .left {-->
<!--    width: 30%;-->
<!--    font-size: 16px;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->

<!--    .number {-->
<!--      font-size: 34px;-->
<!--      color: #096dd9;-->
<!--      font-weight: bold;-->
<!--      margin-bottom: 30px;-->
<!--    }-->
<!--  }-->

<!--  .right {-->
<!--    flex: 1;-->
<!--    padding-bottom: 20px;-->
<!--    padding-right: 20px;-->
<!--    box-sizing: border-box;-->
<!--  }-->
<!--}-->
<!--</style>-->
