<template>
  <div class="wrapper">
    <div class="footer">版权所有@多式联运-节能减排小组 联系方式：1053790247@qq.com</div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.wrapper{
  position:absolute;
  width:100%;
  min-height:10%;
  left: 0;
}
:root{
  --footer-height: 50px;
  }
  .footer {
    z-index: 1000;
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    line-height: var(--footer-height);
    background-color: forestgreen;
    color: #fff;
    height: 25px;
  }
</style>
