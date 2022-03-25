<template>
  <div id="centreRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
       </span>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:6rem;height:4rem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        header: ['航运网能力', '补贴总额', '税收总额'],
        data: [
          ['100%', "<span  class='colorGrass'>6043.02</span>", "<span  class='colorRed'>5683.54</span>"],
          ['120%', "<span  class='colorGrass'>7157.86</span>", "<span  class='colorRed'>5706.98</span>"],
          ['140%', "<span  class='colorGrass'>7663.12</span>", "<span  class='colorRed'>5580.38</span>"],
          ['160%', "<span  class='colorGrass'>7932.39</span>", "<span  class='colorRed'>5385.21</span>"],
          ['180%', "<span  class='colorGrass'>8035.2</span>", "<span  class='colorRed'>5246.6</span>"],
          ['190%', "<span  class='colorGrass'>8345.1</span>", "<span  class='colorRed'>5748.21</span>"],
          ['200%', "<span  class='colorGrass'>8864.72</span>", "<span  class='colorRed'>5867.42</span>"]
          // ["组件8", "fix-7", "<span  class='colorRed'>↓46%</span>"],
          // ["组件9", "dev-2", "<span  class='colorRed'>↓13%</span>"],
          // ["组件10", "dev-9", "<span  class='colorGrass'>↑76%</span>"]
        ],
        rowNum: 5, // 表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', // 表头
        oddRowBGC: '#0f1325', // 奇数行
        evenRowBGC: '#171c33', // 偶数行
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss">
#centreRight1 {
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
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>
