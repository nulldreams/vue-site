<template>
  <div class="testimonial1 spacer bg-light">
    <div class="testi1">
      <no-ssr>        
        <carousel :perPage="4" :perPageCustom="[[480, 2], [768, 3]]">
          <slide>
            <div class="item">
              <div class="card card-shadow">
                <div class="card-body">
                  <div class="thumb bg-success-gradiant">
                    <img src="../../assets/general/images/testimonial/1.jpg" alt="wrapkit" class="thumb-img circle" /> Michelle Anderson</div>
                  <h5 class="font-light">You can relay on our amazing features list and also our customer services will be great experience. You can
                    relay on our amazing features.</h5>
                  <span class="devider"></span>
                  <h6>Managing Director, Theme Designer</h6>
                </div>
              </div>
            </div>
          </slide>
          <slide>
          <div class="item">
            <div class="card card-shadow">
              <div class="card-body">
                <div class="thumb bg-success-gradiant">
                  <img src="../../assets/general/images/testimonial/1.jpg" alt="wrapkit" class="thumb-img circle" /> Michelle Anderson</div>
                <h5 class="font-light">You can relay on our amazing features list and also our customer services will be great experience. You can
                  relay on our amazing features.</h5>
                <span class="devider"></span>
                <h6>Managing Director, Theme Designer</h6>
              </div>
            </div>
          </div>
        </slide>
          <slide>
          <div class="item">
            <div class="card card-shadow">
              <div class="card-body">
                <div class="thumb bg-success-gradiant">
                  <img src="../../assets/general/images/testimonial/1.jpg" alt="wrapkit" class="thumb-img circle" /> Michelle Anderson</div>
                <h5 class="font-light">You can relay on our amazing features list and also our customer services will be great experience. You can
                  relay on our amazing features.</h5>
                <span class="devider"></span>
                <h6>Managing Director, Theme Designer</h6>
              </div>
            </div>
          </div>
        </slide>
          <slide>
          <div class="item">
            <div class="card card-shadow">
              <div class="card-body">
                <div class="thumb bg-success-gradiant">
                  <img src="../../assets/general/images/testimonial/1.jpg" alt="wrapkit" class="thumb-img circle" /> Michelle Anderson</div>
                <h5 class="font-light">You can relay on our amazing features list and also our customer services will be great experience. You can
                  relay on our amazing features.</h5>
                <span class="devider"></span>
                <h6>Managing Director, Theme Designer</h6>
              </div>
            </div>
          </div>
        </slide>
          <slide>
          <div class="item">
            <div class="card card-shadow">
              <div class="card-body">
                <div class="thumb bg-success-gradiant">
                  <img src="../../assets/general/images/testimonial/1.jpg" alt="wrapkit" class="thumb-img circle" /> Michelle Anderson</div>
                <h5 class="font-light">You can relay on our amazing features list and also our customer services will be great experience. You can
                  relay on our amazing features.</h5>
                <span class="devider"></span>
                <h6>Managing Director, Theme Designer</h6>
              </div>
            </div>
          </div>
        </slide>
        </carousel>
      </no-ssr>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
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
  @import "../../assets/css/testimonials1-10.css";
</style>
