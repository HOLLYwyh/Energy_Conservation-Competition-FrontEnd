<template>
  <div id="centreLeft1">
    <div>
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2" style="  font-size: 13px;" >航运容量占比</span>
        </div>
      </div>
      <div class="d-flex jc-center" style="margin-top: 40px">
        <PieChart/>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from '@/views/Screen/PieChart'
export default {
  data () {
    return {}
  },
  components: {
    PieChart
  },
  mounted () {},
  methods: {}
}
</script>

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
}
</style>
