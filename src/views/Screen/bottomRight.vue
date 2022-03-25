<template>
  <div id="bottomRight">
      <div>
      <BottomRightChart/>
    </div>
  </div>
</template>

<script>
import BottomRightChart from '@/views/Screen/BottomRightChart'
export default {
  data () {
    return {}
  },
  components: {
    BottomRightChart
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss">
#bottomRight {
  padding: 0.2rem 0.2rem 0;
  height: 6.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
}
</style>
