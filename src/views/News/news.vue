<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavBar/>
    <!--顶部图片部分-->
    <div style="display:flex;flex-shrink: 0;justify-content:center;margin-top: 100px">
      <img style="float: left;z-index: 100;" src="@/assets/swiper/PolicySimulation.jpg" />
      <div style="display:flex;flex-shrink: 0;z-index: 100;">
        <div class="box-body">
          <div class="box-title">相关新闻</div>
          <div class="box-info">
            自党的“十九大”以来，多式联运的关注度都只增不减，与多式联运、碳中和相关的新闻数量也在不断增加。这些新闻都从不同的角度介绍了多式联运以及相关的信息。
            大力发展货物多式联运。 推进大宗货物和集装箱铁水联运系统建设，扩大铁水联运规模等都可以有效地促进碳中和和扩大多式联运...
          </div>
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
        <div class="right-news-title">其他科普</div>
        <div>
          <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#0">&nbsp;&nbsp;1.《“十四五”现代综合交通运输体系发展规划》</a></div>
          <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#1">&nbsp;&nbsp;2.《推进多式联运发展优化调整运输结构工作方案（2021—2025 年）》</a></div>
          <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#2">&nbsp;&nbsp;3.《综合运输服务“十四五”发展规划》</a></div>
          <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#3">&nbsp;&nbsp;4.《推动交通运输领域新型基础设施建设的指导意见》</a></div>
        </div>
      </div>
    </div>
    <!-- 底部footer -->
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
  name: 'news',
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
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
  line-height: 50px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
  padding: 2px;
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
.content-right-list{
  text-align: center;
  margin-top: 20px;
}
.right-news-title{
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
}
</style>
