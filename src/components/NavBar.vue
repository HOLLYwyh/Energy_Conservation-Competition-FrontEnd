<template>
  <!--顶部导航-->
  <div>
    <img style="width:100%;height: 65px;top:0;left:0;position:absolute;z-index: 1000;" src="@/assets/navBar/background.png">
    <div >
      <img style="position: absolute;left: 10%;width: 659px;height: 157px;top:-50px;z-index: 2000;" src="@/assets/navBar/words10.png" @click="$router.push('/')"/>
<!--      <img style="position: absolute;height: 65px;left: 10%;top:0;z-index: 2000;" src="@/assets/navBar/words.png" @click="$router.push('/')"/>-->
        <div class = "nav" style="z-index: 1000;">
          <ul class="nav-content" style="justify-content: right">
            <li class="icon iconfont " style="color: silver;margin-top: -8px"></li>
            <li v-for="(item , index) in items"  @click="click(item)" v-bind:key="index" style="margin-top: 5px;">
              <a :href="item.href" :class="item.id" >{{item.name}}</a>
            </li>
          </ul>
        </div>
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
        name: '相关政策'
      }, {
        name: '企业联合'
      }, {
        name: '数据平台'
      }],
      lastItem: ''
    }
  },
  methods: {
    click (item) {
      if (item.name === '首页') {
        this.$router.push({path: '/'})
      } else if (item.name === '科普简介') {
        this.$router.push({path: 'introduction'})
      } else if (item.name === '相关政策') {
        this.$router.push({path: 'policy'})
      } else if (item.name === '企业联合') {
        this.$router.push({path: 'company'})
      } else if (item.name === '数据平台') {
        this.$router.push({path: '/screen'})
      }
    }
  }
}
</script>

<style scoped>
.nav{min-width:800px;height: 65px;top: 0;margin-left: 45%;position: absolute;z-index: 1000;}
.nav .nav-content{margin:0 auto;height: 65px;z-index: 1000;}
.nav .nav-content > li{width: 100px;height: 65px;display: block;float: left;z-index: 1000;}
.nav .nav-content li a{width: 100px;height: 65px;display: block;font-size: 18px;line-height: 50px;color: #fff;font-weight: bold;z-index: 1000;}
.nav .nav-content ul{position: absolute;left: 0;top: 65px;z-index: 1000;}
.nav .nav-content li a:hover{background:forestgreen;color: #fff; z-index: 1000;margin-top: -5px}
</style>
