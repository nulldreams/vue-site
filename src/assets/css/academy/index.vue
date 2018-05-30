<template>
  <section class="">
    <!-- <preLoader></preLoader> -->
    <menuTop/>
    <homePage></homePage>
    <footerPage></footerPage>
  </section>
</template>

<style>
@import "~/assets/general/node_modules/aos/dist/aos.css";
@import "~/assets/general/node_modules/bootstrap-touch-slider/bootstrap-touch-slider.css";
@import "~/assets/general/node_modules/owl.carousel/dist/assets/owl.theme.green.css";

@import "~/assets/css/yourstyle.css";
@import "~/assets/css/style.css";
@import "~/assets/css/icons.css";
</style>

<script>
import menuTop from "@/components/menuTop";
import preLoader from "@/components/preLoader";
import homePage from "@/components/homePage";
import footerPage from '@/components/general/footer.vue'

if (process.browser) {
  // require('~/assets/general/node_modules/jquery/dist/jquery.min.js')
  // require('~/assets/general/node_modules/popper/dist/popper.min.js')
  // require('~/assets/general/node_modules/bootstrap/dist/js/bootstrap.min.js')
// require("~/assets/general/node_modules/aos/dist/aos.js");
require("~/assets/js/custom.min.js");
require("~/assets/js/jquery.counterup.min.js");
require("~/assets/js/jquery.waypoints.min.js");
require("~/assets/js/executables.js");
}

export default {
  transition: "fade",
  components: {
    menuTop,
    preLoader,
    homePage,
    footerPage
  }
};
</script>