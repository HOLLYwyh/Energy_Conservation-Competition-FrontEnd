<template>
  <div>
    <!--顶部导航栏-->
    <NavBar/>
    <!-- 返回按钮 -->
    <div>
      <el-button class="button" icon="el-icon-back" @click="goBack"/>
    </div>
    <!--顶部图片部分-->
    <div style="display:flex;flex-shrink: 0;justify-content:center;margin-top: 100px">
      <img style="float: left;z-index: 100;" :src=this.detail.img />
      <div style="display:flex;flex-shrink: 0;z-index: 100;">
        <div class="box-body">
          <div class="box-title">{{this.detail.name}}</div>
          <div class="box-info">{{this.detail.introduction}}</div>
        </div>
      </div>
    </div>
    <!--正文内容-->
    <div style="display: flex;justify-content: center">
      <div class="content-body">
        <div>
          <div v-for="(item, index) in this.detail.policies" :key="index">
            <div>
              <div class="text-title">{{item.title}}</div>
              <div class="text-content">{{item.content}}</div>
            </div>
          </div>
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
import {getCompanyDetail} from '../../data/company'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BackTop from '../../components/BackTop'
import Particles from '../../components/Particles'

export default {
  name: 'CompanyDetail',
  components: {NavBar, Footer, BackTop, Particles},
  data () {
    return {
      id: 1,
      detail: []
    }
  },
  created () {
    // name: '',
    // introduction: '',
    // img: '',
    // policies: []
    this.id = this.$route.query.id
    this.detail = getCompanyDetail(this.id)
    window.scrollTo(0, 0)
  },
  methods: {
    goBack () {
      this.$router.push('/company')
    }
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
  margin-top: 40px;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
}
.box-info{
  margin-top: 70px;
}
.button{
  top: 100px;
  left: 40px;
  position: absolute;
  z-index: 1000;
  font-size: 40px;
  color: #5db143;
  border-radius: 50%;
}
/*正文部分*/
.content-body{
  z-index: 100;
  margin-top: 50px;
  padding: 1px 0;
  height: 700px;
  width: 1000px;
  background-color: snow;
}
.text-title{
  margin-top: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bolder;
  font-family: SimSun-ExtB,serif;
}
.text-content{
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 50px;
  line-height: 50px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
  padding: 2px;
  font-family: Arial,serif;
}
</style>
