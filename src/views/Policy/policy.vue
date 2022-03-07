<template>
  <div>
    <!--顶部导航栏-->
    <NavBar/>
    <!--底部导航栏-->
    <Footer/>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
export default {
  name: 'Policy',
  components: { Footer, NavBar }
}
</script>

<style scoped>

</style>
