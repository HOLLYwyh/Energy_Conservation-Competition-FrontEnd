<template>
  <div id="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <div class="rc1-chart-container" style="display: grid;grid-template-rows:  40% 60%">
            <div style="display: grid;grid-template-columns:  40% 40%">
            <div style="margin-top: 20px;">
              <p class="ml-3 colorBlue fw-b" style="margin-left:10px;width:3.25rem;font-size: 18px" >总减排率</p>
              <dv-water-level-pond :config="config2" style="margin-top:10px;width:120px;height:60px;margin-left: 50px" />
            </div>
              <div style="margin-top: 20px;">
                <p class="ml-3 colorBlue fw-b" style="margin-left:10px;width:3.25rem;font-size: 18px" >运价涨幅</p>
                <dv-water-level-pond :config="config3" style="margin-top:10px;width:120px;height:60px;margin-left: 50px" />
              </div>
            </div>
              <div class="d-flex jc-center">
                <dv-conical-column-chart :config="config" style="margin-left:-90px;margin-top:8px;width:300px;height:140px;" />

            </div>

          </div>

        </div>
      </div>

      <!-- 4个主要的数据 -->

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config2: {
        data: [37],
        shape: 'roundRect'
      },
      config3: {
        data: [9.2],
        shape: 'roundRect'
      },
      config: {
        data: [
          {
            name: '黄华',
            value: 1050
          },
          {
            name: '沧州',
            value: 900
          },
          {
            name: '天津',
            value: 400
          },
          {
            name: '威海',
            value: 850
          },
          {
            name: '大连',
            value: 450
          }

        ],
        img: [
          require('@/assets/screen/3.png'),
          require('@/assets/screen/1.png'),
          require('@/assets/screen/2.png'),
          require('@/assets/screen/2.png'),
          require('@/assets/screen/2.png')
        ],
        showValue: true
      }
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {

  }
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

  .bottom-data {
    .item-box {
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      // 金币
      .coin {
        position: absolute;
        left: 0.1rem;
        top: 0.2125rem;
        font-size: 0.25rem;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
    }
  }
}
</style>
