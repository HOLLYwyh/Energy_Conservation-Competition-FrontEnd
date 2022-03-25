<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavBar/>
    <!-- 首页轮播图 -->
    <div style="margin-top: 50px">
      <el-carousel :interval="3000"  style="top: 5px" :height="carouselHeight">
        <el-carousel-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item.picImg"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--科普简介-->
    <div class="post-container" style="margin-top: -80px">
      <div class="wrap">
        <div class="post-box">
          <div class="box-title">
            <el-button type="text" class="category" @click="$router.push({path: 'introduction'})">科普简介</el-button>
          </div>
          <div class="box-body">
            <div style="display: flex;justify-content: center">
              <div class="post">
                <el-card class="card">
                  <img src="@/assets/home/kepu.png" style="width:221px;height:147px" class="company-img" @click="$router.push('/introduction')"/>
                  <div style="margin-top: 30px" @click="$router.push('/introduction')">科普视频</div>
                </el-card>
              </div>
              <div class="post">
                <el-card class="card">
                  <img src="@/assets/home/multimodal_transport1.jpg" class="company-img" @click="handlePolicyClick(0)"/>
                  <div style="margin-top: 30px" @click="handlePolicyClick(0)">什么是多式联运</div>
                </el-card>
              </div>
              <div class="post">
                <el-card  class="card">
                  <img src="@/assets/home/multimodal_transport2.jpg" class="company-img" style="margin-left: -20px" @click="handlePolicyClick(1)"/>
                  <div style="margin-top: 40px" @click="handlePolicyClick(1)">国务院：推进多式联运发展 促进节能减排降碳</div>
                </el-card>
              </div>
<!--              <div class="post">-->
<!--               <el-card class="card">-->
<!--                 <img src="@/assets/home/Carbon_Neutral.jpg" class="company-img" @click="handlePolicyClick(2)"/>-->
<!--                 <div style="margin-top: 30px" @click="handlePolicyClick(2)">什么是碳中和</div>-->
<!--               </el-card>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--相关政策-->
    <div class="post-container">
      <div class="wrap">
        <div class="post-box">
          <div class="box-title">
            <el-button type="text" class="category" @click="$router.push('/policy')">相关政策</el-button>
          </div>
          <div class="box-body">
            <div style="display: flex;justify-content: center">
              <div class="post">
                <el-card class="card">
                  <div class="policy-title" @click="$router.push('/policy')">《“十四五”现代综合交通运输体系发展规划》</div>
                  <div class="policy-content" @click="$router.push('/policy')">大力发展货物多式联运。推进大宗货物和集装箱铁水联运系统建设，扩大铁水联运规模。以长江干线、西江航运干线为重点，提升江海联运组织水平...</div>
                </el-card>
              </div>
              <div class="post">
                <el-card class="card">
                  <div class="policy-title" @click="$router.push('/policy')">《推进多式联运发展优化调整运输结构工作方案（2021—2025 年）》</div>
                  <div class="policy-content" @click="$router.push('/policy')">提升多式联运承载能力和衔接水平,创新多式联运组织模式...</div>
                </el-card>
              </div>
              <div class="post">
                <el-card class="card">
                  <div class="policy-title" @click="$router.push('/policy')">《综合运输服务“十四五”发展规划》</div>
                  <div class="policy-content" @click="$router.push('/policy')">到2025年，“全国123出行交通圈”（都市区1小时通勤、城市群2小时通达、主要城市3小时覆盖）和“全球123快货物流圈”（国内1天送达、周边国家2天送达、全球主要城市3天送达）加快构建...</div>
                </el-card>
              </div>
<!--              <div class="post">-->
<!--                <el-card class="card">-->
<!--                  <div class="policy-title" @click="$router.push('/policy')">《推动交通运输领域新型基础设施建设的指导意见》</div>-->
<!--                  <div class="policy-content" @click="$router.push('/policy')">智慧枢纽。推进综合客运枢纽智能化升级，推动旅客联程运输服务设施建设，鼓励建设智能联程导航、自助行李直挂、票务服务、安检互认、标识引导...</div>-->
<!--                </el-card>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--企业联合-->
    <div class="post-container">
      <div class="wrap">
        <div class="post-box">
          <div class="box-title">
            <el-button type="text" class="category" @click="$router.push('/company')">企业联合</el-button>
          </div>
          <div class="box-body">
            <div style="display:flex;justify-content: center;">
              <div class="post1">
                <el-card style="height: 250px;width: 250px;">
                  <img src="@/assets/home/CIMC.png" class="company-img" style="margin-top: 20px;margin-left: 50px"/>
                  <div style="margin-top: 40px">中集多式联运发展有限公司</div>
                  <el-button type="text" class="company-button" @click="toCompanyDetail(0)">查看详情</el-button>
                </el-card>
              </div>
              <div class="post1">
                <el-card class="card">
                  <img src="@/assets/home/winjoinit.png" class="company-img" style="margin-top: 20px;margin-left: 20px"/>
                  <div style="margin-top: 35px">上海文景信息科技有限公司</div>
                  <el-button type="text" class="company-button" @click="toCompanyDetail(1)">查看详情</el-button>
                </el-card>
              </div>
              <div class="post1">
                <el-card class="card">
                  <img src="@/assets/home/SinOcean.png" class="company-img" style="margin-top: 20px;margin-left: 20px"/>
                  <div style="margin-top: 40px">中海通物流股份有限公司</div>
                  <el-button type="text" class="company-button" @click="toCompanyDetail(2)">查看详情</el-button>
                </el-card>
              </div>
              <div class="post1">
                <el-card class="card">
                  <img src="@/assets/home/supertrans.png" class="company-img" style="margin-top: -17px;margin-left: 10px"/>
                  <div style="margin-top: -5px">中航捷运国际物流有限公司</div>
                  <el-button type="text" class="company-button" @click="toCompanyDetail(3)">查看详情</el-button>
                </el-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部栏-->
    <Footer/>
    <!--返回顶部-->
    <BackTop/>
    <!--粒子效果-->
    <Particles />
  </div>
</template>

<script>
import { swiperList } from '../../assets/data/swiper'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BackTop from '../../components/BackTop'
import Particles from '../../components/Particles'

export default {
  name: 'Home',
  components: {Footer, NavBar, BackTop, Particles},
  props: {
    carouselHeight: {
      type: String,
      default: '800px'
    }
  },
  data () {
    return {
      swiperList: swiperList // 轮播图列表
    }
  },
  methods: {
    toCompanyDetail (id) {
      this.$router.push(`/company/detail?id=${id}`)
    },
    handlePolicyClick (id) {
      if (id === 0) {
        window.open('https://baike.baidu.com/item/%E5%A4%9A%E5%BC%8F%E8%81%94%E8%BF%90/3342240?fr=aladdin', '_blank')
      } else if (id === 1) {
        window.open('https://news.bjx.com.cn/html/20220112/1198940.shtml', '_blank')
      } else if (id === 2) {
        window.open('https://baike.baidu.com/item/%E7%A2%B3%E4%B8%AD%E5%92%8C/1019566', '_blank')
      }
    }
  }
}
</script>

<style scoped>
.post-container{
  margin-top: 80px;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
}
.wrap{
  z-index: 100;
  width:90%
}
.post-box{
  display:block;
  background-color: #fff;
}
.box-title{
  height: 0.2rem;
  background-image: linear-gradient(to right, #0071ae , #5db143);
  margin:0;
}
.category{
  float:left;
  display: inline-block;
  position: relative;
  background-color: #0071ae;
  color: white;
  transition: color 0.2s;
  padding: .4rem 2rem 0.5rem
}

.box-body{
  padding: 1px 0;
  height: 300px;
  background-color: whitesmoke;
}

.post{
  display: inline-block;
  vertical-align: top;

  width: 20rem;
  flex-shrink: 0;
  margin-top: 30px;
}
.post1{
  display: inline-block;
  vertical-align: top;

  width: 17rem;
  flex-shrink: 0;
  margin-top: 30px;
}
.card{
  height: 250px;
  width: 250px;
}
/*企业联合*/
.company-img{
  display: flex;
  flex-direction: column;
}
.company-button{
  margin-top: 30px;
}
.policy-title{
  font-size: 18px;
  font-weight: bolder;
}
.policy-content{
  margin-top: 20px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
}
</style>
