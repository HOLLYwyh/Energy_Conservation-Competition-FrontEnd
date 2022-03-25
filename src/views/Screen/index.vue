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
            <div class="title">
              <span class="title-text">多式联运政务数据平台</span>
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
        <span class="text" style="margin-left: 1030px">2022年03月16日 周一 12:00</span>
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">

            <div>
              <dv-border-box-13>
                <TransportChart />
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
              <bottomLeft />
            </dv-border-box-12>
            <dv-border-box-7>
              <PieChartFrame />
            </dv-border-box-7>
            <dv-border-box-12>
              <bottomRightNum />
              <bottomRight />
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
// 适配flex
import '@/common/flexible.js'
export default {
  data () {
    return {
      loading: true
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
