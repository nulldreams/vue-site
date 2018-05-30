<template>
  <div>
    <navbar/>
    <vue-scroll-top />
    <router-view title=""/>
    <footer-comp/>
  </div>
</template>

<script>
import navbar from "@/components/general/navbar";
import footerComp from "@/components/general/footer";

if (process.browser) {
  require("./assets/js/custom.min.js");
  require("./assets/js/jquery.counterup.min.js");
  require("./assets/js/jquery.waypoints.min.js");
  require("./assets/js/executables.js");
}

export default {
  name: 'App',
  components: {
    navbar,
    footerComp
  }
}
</script>

<style>
@import "./assets/css/aos/dist/aos.css";
@import "./assets/css/bootstrap-touch-slider/bootstrap-touch-slider.css";
@import "./assets/css/owl.carousel/dist/assets/owl.theme.green.css";

@import "./assets/css/yourstyle.css";
@import "./assets/css/style.css";
@import "./assets/icones/icomoon/style.css";
</style>
