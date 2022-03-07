<template>
  <!--顶部导航-->
  <div>
    <div class = "nav">
      <ul class="nav-content">
        <li class="icon iconfont " style="color: silver;margin-top: -8px"></li>
        <li class="words">多式联运</li>
        <li v-for="(item , index) in items"  @click="click(item)" v-bind:key="index">
          <a :href="item.href" :class="item.id">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      items: [{
        name: '首页'
      }, {
        name: '科普简介'
      }, {
        name: '政策模拟'
      }, {
        name: '企业联合'
      }]
    }
  },
  methods: {
    click (item) {
      if (item.name === '首页') {
        this.$router.push({path: '/'})
      } else if (item.name === '科普简介') {
        this.$router.push({path: 'introduction'})
      } else if (item.name === '政策模拟') {
        this.$router.push({path: 'policy'})
      } else if (item.name === '企业联合') {
        this.$router.push({path: 'company'})
      }
    }
  }
}
</script>

<style scoped>
.nav{width:103.5%;height: 50px;background: forestgreen; margin-top: -60px;margin-left: -8px;margin-right: -8px;position: fixed;z-index: 1000;}
.nav .nav-content{width: 1200px;margin:0 auto;height: 50px;}
.nav .nav-content > li{width: 100px;height: 50px;display: block;float: left;}
.nav .nav-content li a{width: 100px;height: 50px;display: block;font-size: 18px;line-height: 50px;color: #fff;font-weight: bold;}
.nav .nav-content ul{position: absolute;left: 0;top: 50px;z-index: 99;width: 100%;}
.nav .nav-content li a:hover{background: darkgreen;color: #fff; }
.words{text-shadow: 0 0 5px black,0 0 10px greenyellow,0 0 15px #8ef1ef,0 0 20px #ffffff;font-size: 25px;font-weight: bold;color: white;margin-top: 8px;padding-right: 150px}
</style>
