<template>
  <div id="index">
<!--    <img src="../../assets/screen/pageBg.png" style="padding: 0.2rem 0.2rem 0 0.2rem;background-size: contain;background-position: center center;">-->
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title" style="margin-top: 20px">
              <span style="font-size: 30px">多式联运政务数据平台</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">

            <div>
              <dv-border-box-13>
                <TransportChart @change="update($event)"/>
              </dv-border-box-13>
            </div>
            <!-- 中间 -->
            <div>
             <CenterGraph />
            </div>
            <!-- 中间 -->
            <div>
              <dv-border-box-13>
                <TableChart />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-12>
              <bottomLeft message="hello"/>
            </dv-border-box-12>
            <dv-border-box-7>
              <PieChartFrame />
            </dv-border-box-7>
            <dv-border-box-12>
              <bottomRightNum />
              <bottomRight v-if="refresh"/>
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import PieChartFrame from './PieChartFrame'
import TransportChart from './TransportChart'
import TableChart from './TableChart'
import bottomLeft from './bottomLeft'
import bottomRight from './bottomRight'
import CenterGraph from './CenterGraph'
import bottomRightNum from './bottomRightNum'
import {setData, setData1, setData2, setNumber} from '../../data/chart'
// 适配flex
import '@/common/flexible.js'
export default {
  data () {
    return {
      loading: true,
      refresh: true
    }
  },
  components: {
    TransportChart,
    bottomRightNum,
    PieChartFrame,
    TableChart,
    bottomLeft,
    bottomRight,
    CenterGraph
  },
  mounted () {
    this.cancelLoading()
  },
  methods: {
    cancelLoading () {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    async update (value) {
      for (let i = 0; i < 7; i++) {
        setData(i, Math.random() * 1600)
        setData1(i, Math.random() * 1600)
        setData2(i, Math.random() * 1600)
      }
      for (let i = 0; i < 2; i++) {
        setNumber(i, Math.random() * 300)
      }
    }
  },
  destroyed () {
    location.reload()
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/index.scss';
@import "../../assets/scss/style.scss";
</style>
