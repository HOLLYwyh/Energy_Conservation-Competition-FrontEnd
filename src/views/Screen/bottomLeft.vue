<template>
  <div id="bottomLeft">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8;" >
          <icon name="chart-bar" ></icon>
        </span>
        <div style="margin-top: 15px">
          <bottomLeftChart />
        </div>
      </div>

  </div>
</template>

<script>
import bottomLeftChart from '@/views/Screen/bottomLeftChart'
export default {
  props: ['message'],
  data () {
    return {}
  },
  components: {
    bottomLeftChart
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss">
#bottomLeft {
  padding: 0.2rem 0.2rem;
  height: 0.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .text {
    color: #c3cbde;
  }

}
</style>
