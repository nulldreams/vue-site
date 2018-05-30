<template>
  <div class="header-obrigado">
    <section class="header-produto" :style="style">
      <div class="middle-center">
        <div class="m-b-40">
          <i v-if="squad === 'industria'" class="display-4 icon-industria"></i>
          <i v-if="squad === 'transporte'" class="display-4 icon-transporte"></i>
          <i v-if="squad === 'varejo'" class="display-4 icon-varejo"></i>
          <i v-if="squad === 'servicos'" class="display-4 icon-servicos"></i>
          <i v-if="squad === 'escrituracao-fiscal'" class="display-4 icon-escrituracao"></i>
        </div>
        <div class="display-title">
          <div class="item">
            <span class="title-lg">{{produto}}</span>
          </div>
        </div>
        <div class="botoes m-t-40">
            <a class="btn btn-white btn-rounded btn-md btn-arrow text-blue" :style="styleColor" data-animation="animated fadeInLeft" data-toggle="collapse" @click="backPage()"> 
              <span>Voltar para o site <i class="ti-arrow-down"></i></span> 
            </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import lottie from "../../lottie.vue";
// if (process.browser) {
//   require('../../assets/efeito/')
// }

export default {
  props: {
    titulo: String,
    produto: String,
    subtitulo: String,
    squad: String,
    imagem: "",
    cor: String,
    fundo: String,
    defaultOptions: Object,
    scroll: String
  },
  data() {
    return {
      // defaultOptions: {animationData: animationData},
      animationSpeed: 1
    };
  },
  computed: {
    style() {
      if (this.fundo === "dfe") {
        let cor1 = "#00d2ff";
        let cor2 = "#3a7bd5";
        return `background: ${cor1};
              background: -webkit-linear-gradient(legacy-direction(to right), ${cor1} 0%, ${cor2} 100%);
              background: -webkit-gradient(linear, left top, right top, from(${cor1}), to(${cor2}));
              background: -webkit-linear-gradient(left, ${cor1} 0%, ${this.cor2} 100%);
              background: -o-linear-gradient(left, ${cor1} 0%, ${cor2} 100%);
              background: linear-gradient(to right, ${cor1} 0%, ${cor2} 100%);
              background-size: cover;
              background-repeat: no-repeat !important;
              min-height: 100vh;`;
      }
      return `background: url('${this.fundo}'); background-size: cover; background-repeat: no-repeat !important; min-height: 100vh;`;
    },
    styleColor() {
      return `color: ${this.cor} !important;`;
    },
    styleBg() {
      return `background: rgba(0, 0, 0, 0);`;
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    stop: function() {
      this.anim.stop();
    },
    play: function() {
      this.anim.play();
    },
    pause: function() {
      this.anim.pause();
    },
    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    },
    backPage: function() {
      window.history.back()
    }
  },
  components: {
    lottie
  }
};
</script>


<style>
.header-obrigado {
  background: linear-gradient(to right, #0F76B8 0%, #174F81 100%);
}
.display-title {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.display-title .title-sm {
  font-family: "GothamRnd-Book", sans-serif;
  font-size: 25px;
  line-height: 40px;
}
.display-title .title-lg {
  font-family: "GothamRnd-Bold", sans-serif;
  font-size: 70px;
  line-height: 80px;
}

.header-produto {
  display: flex;
  justify-content: center;
}

.header-produto .middle-center {
  margin: auto;
  text-align: center;
  padding: 0 500px;
}
.header-produto .botoes {
  font-family: 'GothamRnd-Book', sans-serif;
}
</style>

<style>
@media (max-width: 767px) {
  .header-produto .middle-center {
    margin: auto;
    text-align: center;
    padding: 130px 0;
  }
  .header-produto .display-title .title-sm {
    font-family: "GothamRnd-Book", sans-serif;
    font-size: 20px;
    line-height: 40px;
  }
  .header-produto .display-title .title-lg {
    font-family: "GothamRnd-Bold", sans-serif;
    font-size: 44px;
    line-height: 60px;
  }
  .header-produto .botoes a {
    margin-bottom: 20px;
  }
  .header-produto .m-b-40 {
    margin-bottom: 10px !important;
  }
}
</style>
