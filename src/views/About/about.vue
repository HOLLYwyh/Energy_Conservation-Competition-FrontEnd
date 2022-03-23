<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavBar/>
    <!--顶部图片部分-->
    <div style="display:flex;flex-shrink: 0;justify-content:center;margin-top: 100px">
      <img style="float: left;z-index: 100;" src="@/assets/swiper/PolicySimulation.jpg" />
      <div style="display:flex;flex-shrink: 0;z-index: 100;">
        <div class="box-body">
          <div class="box-title">关于我们</div>
          <div class="box-info">这是一段介绍资料</div>
        </div>
      </div>
    </div>
    <!--具体内容-->
    <div style="display: flex;justify-content:center">
      <!--内容介绍-->
      <div class="content-left-body">
      </div>
      <!--右边导航-->
      <div class="content-right-body">
      </div>
    </div>
    <!-- 底部导航栏 -->
    <Footer/>
    <!--返回顶部-->
    <BackTop/>
    <!--粒子效果-->
    <Particles />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BackTop from '../../components/BackTop'
import Particles from '../../components/Particles'
export default {
  name: 'about',
  components: {Footer, NavBar, BackTop, Particles},
  created () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
/*头部*/
.box-body{
  display: block;
  padding: 1px 0;
  height: 337px;
  width: 800px;
  background-color: whitesmoke;
}
.box-title{
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
}
.box-info{
  margin-top: 20px;
}
/*左侧正文*/
.content-left-body{
  z-index: 100;
  margin-top: 50px;
  padding: 1px 0;
  height: 1000px;
  width: 1000px;
  background-color: snow;
}
/*右侧正文*/
.content-right-body{
  z-index: 100;
  margin-top: 50px;
  margin-left: 35px;
  padding: 1px 0;
  height: 500px;
  width: 300px;
  background-color: aliceblue;
}
</style>
