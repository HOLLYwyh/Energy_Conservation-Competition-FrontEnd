<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavBar/>
    <!-- 首页轮播图 -->
    <div>
      <el-carousel :interval="4000" type="card" style="top: 20px">
        <el-carousel-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item.picImg"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--底部栏-->
    <Footer/>
  </div>
</template>

<script>
import { swiperList } from '../../assets/data/swiper'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default {
  name: 'Home',
  components: {Footer, NavBar},
  data () {
    return {
      swiperList: swiperList // 轮播图列表
    }
  }
}
</script>

<style scoped>
</style>
