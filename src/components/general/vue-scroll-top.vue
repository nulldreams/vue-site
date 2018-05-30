<template>
  <div class="vue-scroll">
    <div class="botao float hide" @click="goTop()">
      <div class="display-6"><i class="icon-up-arrow"></i></div>
    </div>    
  </div>
</template>

<script>
export default {
  created () {
    $(document).scroll(function() {
      var y = $(this).scrollTop()
      if (y > 800) {
        $('.botao').fadeIn()
        $('.botao').removeClass('hide')
      } else {
        $('.botao').fadeOut()
      }
    })
  },
  methods: {
    goTop () {
      $(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
      })
    }
  }
}  
</script>

<style>
.vue-scroll .float:hover {
  transform: translateY(-10px);
  transition: 800ms;
}

.vue-scroll .botao {
  position: fixed;

  height: 80px;
  width: 80px;
  

  border-radius: 25em;

  /* background: linear-gradient(to right, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 100%) 0% 0% / cover; */
  background: #fff;

  z-index: 99;
  right: 0;
  bottom: 0;
  margin: 50px;

  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
  
  text-align: center;
  line-height: 80px;
}
.vue-scroll .botao i {
  color: #777;
  /* width: 100%;
  height: auto;
  text-align: center; */
}
.vue-scroll .botao:hover {
  cursor: pointer;
}

@media (max-width: 900px) {
  .vue-scroll .botao {
      position: fixed;
      height: 60px;
      width: 60px;
      border-radius: 25em;
      /* background: linear-gradient(to right, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 100%) 0% 0% / cover; */
      background: #fff;
      z-index: 99;
      right: 0;
      bottom: 0;
      margin: 30px;
      -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
      box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
      text-align: center;
      line-height: 60px;
  }
  .vue-scroll .display-6 {
    font-size: 30px;
  }
}
</style>

