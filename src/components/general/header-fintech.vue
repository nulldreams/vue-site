<template>
  <div class="header-fintech">
    <section class="header-squad">
      <div id="banner1" class="banner spacer bg-info" :style="style">
          <div class="container">
              <div class="row">
                  <div class="col-md-8 col-lg-6 align-self-center" data-aos="fade-right" data-aos-duration="1500">
                      <h1 class="m-0 p-b-20 text-white">{{titulo}} <span class="gotham-bold">{{squad}}</span></h1>
                      <p class="text-white">{{subtitulo}}</p>
                      <div class="botoes">
                          <a class="btn btn-white btn-rounded btn-md btn-arrow text-blue" :style="styleColor" data-animation="animated fadeInLeft" href="#" v-scroll-to="scroll"> <span>CONHEÇA <i class="ti-arrow-down"></i></span> </a>
                          <a class="btn btn-white-inverse btn-rounded btn-md btn-arrow m-l-20" :style="styleBg" data-animation="animated fadeInLeft" href="#" v-scroll-to="'#formulario'"> <span>FALE COM A GENTE <i class="ti-arrow-down"></i></span> </a>
                      </div>
                  </div>
                  <div class="col-md-4 col-lg-6 align-self-center ml-auto imagem-direita" data-aos="fade-left" data-aos-duration="1500">
                    <img :src="imagem" alt="" class="img-fluid img-mobile" />
                  </div>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import lottie from '../../lottie.vue'
// if (process.browser) {
//   require('../../assets/efeito/')
// }

export default {
  props: {
    titulo: String,
    squad: String,
    subtitulo: String,
    imagem: '',
    cor: String,
    fundo: String,
    defaultOptions: Object,
    scroll: String
  },
  data() {
    return {
      // defaultOptions: {animationData: animationData},
      animationSpeed: 1
    }
  },
  computed: {
    style() {
      if (this.fundo === 'dfe') {
        let cor1 = '#00d2ff'
        let cor2 = '#3a7bd5'
        return `background: ${cor1};
              background: -webkit-linear-gradient(legacy-direction(to right), ${cor1} 0%, ${cor2} 100%);
              background: -webkit-gradient(linear, left top, right top, from(${cor1}), to(${cor2}));
              background: -webkit-linear-gradient(left, ${cor1} 0%, ${this.cor2} 100%);
              background: -o-linear-gradient(left, ${cor1} 0%, ${cor2} 100%);
              background: linear-gradient(to right, ${cor1} 0%, ${cor2} 100%);
              background-size: cover;
              background-repeat: no-repeat;
              min-height: 90vh;
              position: relative;
              margin-bottom: 10%;`
      }
      return `background: url('${ this.fundo }'); 
              background-size: cover;
              min-height: 80vh;
              position: relative;
              margin-bottom: 10%;`;
    },
    styleColor() {
      return `color: ${this.cor} !important;`
    },
    styleBg() {
      return `background: rgba(0, 0, 0, 0);`
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    }
  },
  components: {
    lottie
  }
};
</script>


<style>
.header-fintech #banner1 {
  /* padding-top: 300px; */
  /* padding-bottom: 200px; */
  background-size: cover;
  display: flex;
}
.header-fintech #banner1 .imagem-direita {
  position: absolute;
  top: 10%;
  left: 38%;
}
.header-fintech #banner1 .imagem-direita img {
  width: 80%;
}
.header-fintech #banner1 .container {
  margin: auto;
}
.header-fintech #banner1 p {
  font-family: 'GothamRnd-Book', sans-serif;
  font-size: 15px;
  line-height: 25px;
}
.header-fintech #banner1 h1 {
  line-height: 88px;
  font-size: 65px;
}
.header-fintech #banner1 h2 {
  font-size: 48px;
  line-height: 55px;
  letter-spacing: -1px;
}
.header-fintech #banner1 input {
  line-height: 62px;
  padding: 0;
  margin: 0;
  border: none;
  display: inline-block;
  vertical-align: top;
}
.header-fintech #banner1 input[type="text"] {
  color: #8d97ad;
  border-radius: 36px 0 0 36px;
  text-indent: 35px;
  padding-right: 15px;
  width: 61%;
  font-weight: 300;
  -webkit-box-shadow: -5px 0 30px 0 rgba(0, 0, 0, 0.05);
  box-shadow: -5px 0 30px 0 rgba(0, 0, 0, 0.05);
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.header-fintech #banner1 input[type="submit"] {
  border-radius: 0 36px 36px 0;
  width: auto;
  padding: 0 30px;
  cursor: pointer;
  margin-left: -4px;
  -webkit-box-shadow: 5px 0 30px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 5px 0 30px 0 rgba(0, 0, 0, 0.05);
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.header-fintech #banner1 input[type="submit"]:hover {
  opacity: 0.7;
}

.header-fintech #efeito-mobile {
  display: none;
}

@media (max-width: 1100px) {
  .header-fintech #banner1 h2 {
    font-size: 40px;
    line-height: 55px;
  }
  .header-fintech #banner1 input[type="text"] {
    width: 59%;
  }
  .header-fintech #banner1 input[type="submit"] {
    padding: 0 20px;
  }
  .header-fintech #efeito {
    display: none;
  }
  .header-fintech #efeito-mobile {
    display: none;
  }
  .header-fintech #banner1 h1 {
      line-height: 60px;
      font-size: 48px;
  }
  .header-fintech #banner1 p {
      font-size: 16px;
  }
  .header-fintech .botoes > a:last-child {
    margin-top: 10px;
    margin-left: 0;
  }
}

@media (max-width: 992px) {
  .header-fintech .banner {
    height: auto !important;
    padding: 130px 0;
  }
  .header-fintech #banner1 {
    background-position: right -6em center;
    background-size: cover;
    padding: 130px 0 200px 0;
  }
  .header-fintech #banner1 h2 {
    font-size: 30px;
    line-height: 35px;
  }
  .imagem-direita {
    display: none;
  }
}

@media (max-width: 767px) {
  .header-fintech .banner {
    padding: 30px 0;
  }
  .header-fintech #banner1 {
    background-size: cover;
    background-position: right center;
    padding: 120px 0 60px;
  }
  .header-fintech #banner1 input[type="submit"] {
    padding: 0 30px;
  }
  .header-fintech #banner1 img {
    margin-top: 25px;
  }
}

@media (max-width: 428px) {
  .header-fintech #banner1 input {
    font-size: 14px;
    line-height: 50px;
  }
  .header-fintech #banner1 input[type="text"] {
    border-radius: 25px 0 0 25px;
    text-indent: 20px;
  }
  .header-fintech #banner1 input[type="submit"] {
    border-radius: 0 25px 25px 0;
    padding: 0 15px;
  }
}

@media (max-width: 320px) {
  .header-fintech #banner1 input[type="submit"] {
    padding: 0 10px;
  }
}

.header-fintech .botoes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* justify-content: center; */
}
.header-fintech .botoes a {
  font-family: "GothamRnd-Medium", sans-serif;
}
.header-fintech .gotham-bold {
  font-family: "GothamRnd-Bold", sans-serif;
}
.header-fintech .ibagem img {
  width: 100%;
  height: auto;
}


</style>

