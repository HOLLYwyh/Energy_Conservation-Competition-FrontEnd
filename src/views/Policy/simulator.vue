<template>
  <div>
    <!--顶部导航栏-->
    <NavBar/>
    <!--底部导航栏-->
<!--    <Footer/>-->
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
  name: 'Simulator',
  components: { Footer, NavBar, BackTop, Particles }
}
</script>

<style scoped>

</style>
