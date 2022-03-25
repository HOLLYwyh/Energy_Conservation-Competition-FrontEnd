<template>
  <div>
    <!--顶部导航栏-->
    <NavBar/>
    <!--顶部图片部分-->
    <div style="display:flex;flex-shrink: 0;justify-content:center;margin-top: 100px">
      <img style="float: left;z-index: 100;width: 509px;height: 339px" src="@/assets/swiper/kepu.png" />
      <div style="display:flex;flex-shrink: 0;z-index: 100;">
        <div class="box-body">
          <div class="box-title">科普简介</div>
          <div class="box-info">多式联运（intermodality）：由两种及其以上的交通工具相互衔接、转运而共同完成的运输过程统称为复合运输，我国习惯上称之为多式联运。《联合国国际货物多式联运公约》对国际多式联运所下的定义是：按照国际多式联运合同，以至少两种不同的运输方式，由多式联运经营人把货物从一国境内接管地点运至另一国境内指定交付地点的货物运输。而中国海商法对于国内多式联运的规定是，必须有种方式是海运。</div>
        </div>
      </div>
    </div>
    <!--具体内容-->
    <div style="display: flex;justify-content:center">
      <!--内容介绍-->
      <div class="content-left-body">
        <div class="content-left-title">参考视频</div>
        <div style="display: flex;justify-content: center">
          <div class="video">
            <div>这里是一段视频</div>
          </div>
        </div>
        <div class="content-left-introduction">这是一段视频简介</div>
      </div>
      <!--右边导航-->
      <div class="content-right-body">
        <div class="popular-science-title">其他科普</div>
        <div>
          <div class="content-right-list"><a style="text-decoration: none" href="https://baike.baidu.com/item/%E5%A4%9A%E5%BC%8F%E8%81%94%E8%BF%90/3342240?fr=aladdin" target="_blank">1. 什么是多式联运</a></div>
          <div class="content-right-list"><a style="text-decoration: none" href="https://news.bjx.com.cn/html/20220112/1198940.shtml" target="_blank">2. 国务院：推进多式联运发展 促进节能减排降碳</a></div>
          <div class="content-right-list"><a style="text-decoration: none" href="https://baike.baidu.com/item/%E7%A2%B3%E4%B8%AD%E5%92%8C/1019566" target="_blank">3. 什么是碳中和</a></div>
        </div>
      </div>
    </div>
    <!--底部导航栏-->
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
  name: 'Introduction',
  components: { Footer, NavBar, BackTop, Particles },
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
    font-family: Arial,serif;
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
  .content-left-title{
    margin-top: 40px;
    font-size: 24px;
    font-weight: bolder;
    font-family: SimSun-ExtB,serif;
    text-align: center;
  }
  .video{
    margin-top: 50px;
    height: 500px;
    width: 700px;
    background-color: white;
  }
  .content-left-introduction{
    margin-top: 70px;
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
  .popular-science-title{
    margin-top: 20px;
    text-align: center;
    font-size: 32px;
    font-weight: bolder;
  }
  .content-right-list{
    text-align: justify;
    text-justify: inter-ideograph;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
  }
</style>
