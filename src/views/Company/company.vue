<template>
  <div>
    <!--顶部导航栏-->
    <NavBar/>
    <!--顶部图片部分-->
    <div style="display:flex;flex-shrink: 0;justify-content:center;margin-top: 100px">
      <img style="float: left;z-index: 100;height: 339px;width: 509px" src="@/assets/swiper/qiye.png" />
      <div style="display:flex;flex-shrink: 0;z-index: 100;">
        <div class="box-body">
          <div class="box-title">企业联合</div>
          <div class="box-info">由于大力支持多式联运的政策越来越多，也有越来越多的企业选择加入减碳计划，通过多式联运为节能减排献出自己的一份力量。
            中集多试联运发展有限公司、上海文景信息科技有限公司、中通物流股份有限公司、中航捷运国际物流有限公司等运输公司都相继参加了政府的减碳计划，
          为节能减碳贡献出自己的一份力。</div>
        </div>
      </div>
    </div>
    <!--具体内容-->
    <div style="display: flex;justify-content:center">
      <!--内容介绍-->
      <div class="content-left-body">
        <div>
          <el-card v-for="(item , index) in list"  v-bind:key="index" class="card" :id="index">
            <div style="display: flex;justify-content: center">
                <img :src= "item.img" style="height: 70px;width: 150px;margin-top: 60px"/>
                <div>
                  <div class="company-title">{{item.title}}</div>
                  <div class="company-content">{{item.content}}</div>
                </div>
<!--                <img :src="item.certifyImg" style="height: 100px;width: 100px"/>-->
            </div>
            <el-button type="text" class="button" @click="toCompanyDetail(item.id)">查看详情</el-button>
          </el-card>
        </div>
      </div>
      <!--右边导航-->
      <div class="content-right-body">
        <div class="rank-title">企业减碳榜</div>
        <div>
          <div class="content-right-list"><a style="text-decoration: none" href="#0">1. 中集多试联运发展有限公司</a></div>
          <div class="content-right-list"><a style="text-decoration: none" href="#1">2. 上海文景信息科技有限公司</a></div>
          <div class="content-right-list"><a style="text-decoration: none" href="#2">3. 中通物流股份有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
          <div class="content-right-list"><a style="text-decoration: none" href="#3">4. 中航捷运国际物流有限公司</a></div>
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
  name: 'Company',
  components: { Footer, NavBar, BackTop, Particles },
  data () {
    return {
      list: [
        {
          id: 0,
          title: '中集多式联运发展有限公司',
          img: require('@/assets/rank/CIMC.png'),
          content: '中集多式联运发展有限公司于2016年3月29日在深圳市市场监督管理局登记成立。法定代表人黄田化，公司经营范围包括国内、国际货运代理及供应链管理；物流装备及相关配件的购销等。',
          certifyImg: require('@/assets/rank/certified.jpg')
        },
        {
          id: 1,
          title: '上海文景信息科技有限公司',
          img: require('@/assets/rank/winjoinit.png'),
          content: '上海文景信息科技有限公司于2012年08月08日在浦东新区市场监管局登记成立。法定代表人陈月华，公司经营范围包括计算机软硬件（除计算机信息系统安全专用产品）等。',
          certifyImg: require('@/assets/rank/certified.jpg')
        },
        {
          id: 2,
          title: '中海通物流股份有限公司',
          img: require('@/assets/rank/SinOcean.png'),
          content: '深圳市中海通物流股份有限公司于1999年02月05日在深圳市市场监督管理局南山局登记成立。法定代表人花亮，公司经营范围包括国内水路货运代理；运输咨询服务。货物装卸等。',
          certifyImg: require('@/assets/rank/certified.jpg')
        },
        {
          id: 3,
          title: '中航捷运国际物流有限公司',
          img: require('@/assets/rank/supertrans_1.png'),
          content: '青岛中航捷运国际物流有限公司于2015年12月02日成立。法定代表人冯会真，公司经营范围包括：国际货运代理，代理报关，报检，仓储服务（不含危险品），货物装卸服务，物流信息咨询，货物及技术进出口（法律、行政法规禁止的项目除外，法律、行政法规限制的项目取得许可后方可经营）等。',
          certifyImg: require('@/assets/rank/certified.jpg')
        }]
    }
  },
  methods: {
    toCompanyDetail (id) {
      this.$router.push(`/company/detail?id=${id}`)
    }
  },
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
  margin-top: 5px;
  padding: 1px 0;
  height: 1300px;
  width: 1000px;
  /*background-color: snow;*/
}
/*左侧内容*/
.card{
  height: 250px;
  margin-top: 40px;
  filter: drop-shadow(8px 8px 10px seashell);
}
.rank-title{
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
}
.company-title{
  margin-top: 10px;
  text-align: center;
  font-size: 24px;
}
.company-content{
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  text-justify: inter-ideograph;
  text-indent: 2em;
}
.button {
  padding: 0;
  margin-top: 20px;
  text-align: center;
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
  margin-top: 50px;
}
</style>
