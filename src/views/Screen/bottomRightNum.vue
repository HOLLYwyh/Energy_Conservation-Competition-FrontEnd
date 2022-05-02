<template>
  <div id="center">
    <div class="up" style="margin-top: 10px">
      <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        <p class="ml-3 colorBlue fw-b" style="width:3.25rem;margin-left: -20px;margin-top: -5px" >{{item.title}}</p>
        <div>
          <dv-digital-flop :config="item.number" style="width:1.25rem;height:.625rem;margin-left: 40px" />
        </div>
      </div>
    </div>
    </div>

</template>

<script>

import {getNumber} from '../../data/chart'

export default {
  created () {
    // eslint-disable-next-line no-unused-vars
    let timer = setInterval(() => {
      this.titleItem[0].number.number[0] = getNumber(0)
      this.titleItem[1].number.number[0] = getNumber(1)
      this.titleItem[0].number = {...this.titleItem[0].number}
      this.titleItem[1].number = {...this.titleItem[1].number}
      console.log(this.titleItem[1].number.number[0])
    }, 2500)
  },
  data () {
    return {
      titleItem: [
        {
          title: '天津-黄骅税收（元/THU）',
          number: {
            number: [59],
            toFixed: 1,
            content: '{nt}'
          }
        },

        {
          title: '沧州-天津税收（元/THU）',
          number: {
            number: [271],
            toFixed: 1,
            content: '{nt}'
          }
        }

      ],

      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: 'centerRate1',
          tips: 60,
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5'
              }
            }
          }
        },
        {
          id: 'centerRate2',
          tips: 40,
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad'
              }
            }
          }
        }
      ]
    }
  },
  components: {
    // centerChart1,
    // centerChart2
  }
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.2rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 0.875rem;
    }
  }
  .down {
    padding: 0.07rem 0.05rem;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 3.1875rem;
    justify-content: space-between;

    .ranking {
      padding: 0.125rem;
      width: 59%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
</style>
