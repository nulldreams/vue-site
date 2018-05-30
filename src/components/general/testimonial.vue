<template>
<div class="testimonial10 spacer" :style="gradientSquad">
  <div class="container">
    <div class="owl-carousel owl-theme text-center testi10">
      <!-- item -->
        <carousel :scrollPerPage="true" :perPageCustom="[[480, 1], [768, 1]]" :per-page="1" :loop="true">
          <slide>
            <div class="item">
              <div class="quote-bg">
                <h3 :class="{ 'font-light': true, 'text-white': !text === 'gray' || text === undefined, 'op-5': text === 'gray' }">WrapKit has given our websites huge national presence.We are #1 on page one in Google search results for
                  every website we’ve built, and rank for more keywords than I ever expected in a very competitive, high-value
                  customer industry. In addition</h3>
              </div>
              <div class="customer-thumb">
                <img src="../../assets/general/images/testimonial/1.jpg" alt="wrapkit" class="circle" />
              </div>
              <h6 class="text-white m-b-0 font-medium" :style="nomeColor">Michael Anderson</h6>
              <span class="text-white" :style="cargoColor">Project client</span>
            </div>
          </slide>
          <!-- item -->
        </carousel>
    </div>
  </div>
</div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  props: {
    cor1: String,
    cor2: String,
    text: String,
    nameC: String,
    cargoC: String
  },
  name: "testimonial",
  components: {
    Carousel,
    Slide
  },
  computed: {
    gradientSquad() {      
      return `background: ${this.cor1};
              background: -webkit-linear-gradient(legacy-direction(to right), ${this.cor1} 0%, ${this.cor2} 100%);
              background: -webkit-gradient(linear, left top, right top, from(${this.cor1}), to(${this.cor2}));
              background: -webkit-linear-gradient(left, ${this.cor1} 0%, ${this.cor2} 100%);
              background: -o-linear-gradient(left, ${this.cor1} 0%, ${this.cor2} 100%);
              background: linear-gradient(to right, ${this.cor1} 0%, ${this.cor2} 100%);`
    },
    nomeColor() {
      if (this.nameC !== undefined) {
        return 'color: #202069 !important;'
      }
    },
    cargoColor() {
      if (this.cargoC !== undefined) {
        return 'color: #E44188 !important;'
      }      
    }
  }
};
</script>
<style>
.VueCarousel-inner {
  justify-content: center;
}
.testi1 .item {
  margin: 20px;
}
</style>

<style>
.testimonial10 .testi10 .quote-bg {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 60px;
  background: url(../../assets/general/images/testimonial/up-quote.png)
      no-repeat top left,
    url(../../assets/general/images/testimonial/down-quote.png) no-repeat bottom
      right;
}

.testimonial10 .testi10 h3 {
  line-height: 40px;
}

.testimonial10 .testi10 .customer-thumb {
  margin: 15px 0;
}
.testimonial10 .testi10 .customer-thumb img {
  width: 60px;
}

@media (max-width: 767px) {
  .testimonial10 .testi10 h3 {
    line-height: 30px;
    font-size: 20px;
  }
}
</style>
