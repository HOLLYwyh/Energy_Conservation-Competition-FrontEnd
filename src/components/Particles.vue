<template>
  <div style="position:fixed;top:0;width:100%;">
    <vue-particles color="#4169E1" :particleOpacity="0.5" :particlesNumber="120"  :particleSize="4" linesColor="#C0C0C0" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"/>
  </div>
</template>

<script>
export default {
  name: 'Particles'
}
</script>

<style scoped>

</style>
