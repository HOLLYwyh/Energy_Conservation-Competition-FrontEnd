<template>
  <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
</template>

<script>
export default {
  name: 'CenterGrapg',
  data () {
    return {
      config: {
        duration: [1, 2],
        flylineColor: '#ffe6ac',
        points: [
          {
            name: '唐山',
            coordinate: [0.55, 0.40]
          },
          {
            name: '保定',
            coordinate: [0.36, 0.45]
          },
          {
            name: '石家庄',
            coordinate: [0.34, 0.56]
          },
          {
            name: '邯郸',
            coordinate: [0.34, 0.72]
          },
          {
            name: '聊城',
            coordinate: [0.42, 0.73]
          },
          {
            name: '济宁',
            coordinate: [0.48, 0.73]
          },
          {
            name: '北京',
            coordinate: [0.44, 0.36]
          },
          {
            name: '张家口',
            coordinate: [0.35, 0.31]
          },
          {
            name: '秦皇岛',
            coordinate: [0.59, 0.35],
            halo: {
              radius: 90,
              show: true,
              color: '#ace8b0'
            },
            icon: {
              src: require('@/assets/screen/center3.png'),
              width: 10,
              height: 10
            }
          },
          {
            name: '葫芦岛',
            coordinate: [0.65, 0.31]
          },
          {
            name: '锦州',
            coordinate: [0.70, 0.26]
          },
          {
            name: '天津',
            coordinate: [0.50, 0.45]
          },
          {
            name: '黄骅',
            coordinate: [0.50, 0.54],
            halo: {
              radius: 80,
              show: true,
              color: '#ace8b0'
            },
            icon: {
              src: require('@/assets/screen/center3.png'),
              width: 10,
              height: 10
            }
          },
          {
            name: '沧州',
            coordinate: [0.45, 0.56]
          },
          {
            name: '东营',
            coordinate: [0.55, 0.60]
          },
          {
            name: '日照',
            coordinate: [0.66, 0.73]

          },
          {
            name: '青岛',
            halo: {
              radius: 67,
              show: true,
              color: '#ace8b0'
            },
            coordinate: [0.72, 0.70],
            icon: {
              src: require('@/assets/screen/center3.png'),
              width: 10,
              height: 10
            }
          },
          {
            name: '烟台',
            coordinate: [0.67, 0.64],
            icon: {
              src: require('@/assets/screen/center3.png'),
              width: 10,
              height: 10
            }
          },
          {
            name: '潍坊',
            coordinate: [0.60, 0.70]
          },
          {
            name: '威海',
            coordinate: [0.76, 0.66],
            icon: {
              src: require('@/assets/screen/center3.png'),
              width: 10,
              height: 10
            }
          },

          {
            name: '大连',
            coordinate: [0.71, 0.49],

            icon: {
              src: require('@/assets/screen/center3.png'),
              width: 10,
              height: 10
            }
          },
          {
            name: '营口',
            coordinate: [0.77, 0.35],
            icon: {
              src: require('@/assets/screen/center3.png'),
              width: 10,
              height: 10
            },
            halo: {
              radius: 80,
              show: true,
              color: '#ace8b0'
            }

          },
          {
            name: '沈阳',
            coordinate: [0.82, 0.18]
          },
          {
            name: '丹东',
            coordinate: [0.88, 0.34]
          }

        ],
        lines: [
          {
            source: '邯郸',
            target: '黄骅'
          },
          {
            source: '济宁',
            target: '黄骅'
          },
          {
            source: '聊城',
            target: '黄骅'
          },
          {
            source: '石家庄',
            target: '黄骅'
          },
          {
            source: '天津',
            target: '秦皇岛'
          },
          {
            source: '保定',
            target: '黄骅'
          },
          {
            source: '沧州',
            target: '黄骅'
          },
          {
            source: '唐山',
            target: '秦皇岛'
          },
          {
            source: '北京',
            target: '秦皇岛'
          },
          {
            source: '张家口',
            target: '秦皇岛'
          },
          {
            source: '葫芦岛',
            target: '秦皇岛'
          },
          {
            source: '东营',
            target: '烟台'
          },
          {
            source: '潍坊',
            target: '烟台'
          },
          {
            source: '日照',
            target: '威海'
          },
          {
            source: '日照',
            target: '青岛'
          },

          {
            source: '沈阳',
            target: '大连'
          },
          {
            source: '丹东',
            target: '大连'
          },
          {
            source: '锦州',
            target: '营口'
          },
          {
            source: '丹东',
            target: '营口'
          }

        ],
        icon: {
          show: true,
          src: require('@/assets/screen/centerpoint.png'),
          width: 10,
          height: 10
        },
        text: {
          show: true,
          fontSize: 10
        },
        bgImgSrc: require('@/assets/screen/center.png')

      }
    }
  }
}
</script>

<style scoped>

</style>
