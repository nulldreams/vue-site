<template>
<div class="page-home">

  <div class="page-wrapper">
    <div class="container-fluid">
      <!-- <div class="header-principal">
        <div class="image-middle">
          <img src="../../assets/images/home/casa-do-desenvolvedor.png" alt="" class="img-fluid mx-auto">
        </div>
        <div class="info-bottom">
          <a href="#" v-scroll-to="'#feature'">
            <img src="../../assets/images/home/more.png" alt="" class="img-fluid mx-auto">
          </a>
        </div>
      </div> -->
      <!-- <div class="static-slider7">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-md-8 align-self-center text-center" data-aos="fade-right" data-aos-duration="1200">
              <div class="imagem-central">
                <img src="../../assets/images/home/casa-do-desenvolvedor.png" alt="" class="img-fluid mx-auto">
              </div>
              <div class="mais-informacoes">
                <a href="#" v-scroll-to="'#feature'">
                  <img src="../../assets/images/home/more.png" alt="" class="img-fluid mx-auto">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="home-header">
        <div class="conteudo">
          <div class="left">
            <div class="imagem-topo-header">
              <img src="/static/images/home/computer-mobile.png" class="img-fluid" alt="">
            </div>
            <div class="titulo">
              <h2 class="text-white">Bem-vindo(a) <br> à sua casa, <strong>Desenvolvedor(a)</strong></h2>
              <div class="botoes m-t-40">
                  <a class="btn btn-white btn-rounded btn-md btn-arrow text-industria show-mobile" data-animation="animated fadeInLeft" data-toggle="collapse" href="#" v-scroll-to="'#feature'"> 
                    <span>CONHEÇA <i class="ti-arrow-down"></i></span> 
                  </a>
                  <a class="btn btn-white btn-rounded btn-md btn-arrow text-industria hide-mobile" data-animation="animated fadeInLeft" data-toggle="collapse" href="#" v-scroll-to="'#feature'"> 
                    <span>CONHEÇA <i class="ti-arrow-down"></i></span> 
                  </a>
              </div>
            </div>
          </div>
          <div class="right img-mobile">
            <img src="/static/images/home/computer.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>      
      <!-- ============================================================== -->
      <!-- End Static Slider 1  -->
      <!-- ============================================================== -->
      <div class="feature16" id="feature">
        <div class="row wrap-feature-16">
          <div class="col-lg-5 ml-auto hidden-md-down align-self-center thumb">
            <div class="video-img botao-play grow">
              <img src="/static/images/home/play-button.png" alt="">
            </div>
            <img src="/static/images/home/thumb.png" class="thumb-image img-responsive img-rounded" alt="Video" data-animation="animated fadeInRight"/>
            <div class="embed-responsive hide embed-responsive-16by9" data-animation="animated fadeIn">
              <video class="video" controls>
                <source src="../../assets/videos/TecnoSpeed a Casa do Desenvolvedor.mp4" type="video/mp4"> Your browser does not support HTML5 video. </video>
            </div>
          </div>
          <div class="col-lg-6 bg-white">
            <div class="with-text">
              <h2 class="m-t-30 op-5 m-b-30">Acreditamos que desenvolver softwares é mais do que um trabalho:
                <span class="text-blue-dark op-r">é uma arte</span>.</h2>
              <p class="op-5">Em seu primeiro contato com uma linguagem de programação, você sentiu que poderia criar tudo, não é? Quando isso
                deixou de ser verdade? Naturalmente, a burocracia, as legislações complexas, os bugs e outras dificuldades
                do dia-a-dia fazem os desenvolvedores deixarem grandes ideias de lado. Mas é assim mesmo, não é?</p>
              <p class="op-5">Bem... nós achamos que não.</p>
              <p class="op-5">Na TecnoSpeed, nós criamos soluções para que você se esforce menos em tarefas repetitivas, e tenha mais tempo
                e energia para dedicar aos projetos mais incríveis que já imaginou.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- ============================================================== -->
      <!-- End Feature 16  -->
      <!-- ============================================================== -->
      <div class="bg-white spacer feature3">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 text-center">
              <h1>Veja o que fazemos para você:</h1>
            </div>
          </div>
          <div class="row m-t-40">
            <div class="col-md-6 wrap-feature3-box">
              <div class="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                <div class="card-body d-flex">
                  <div class="icon-space align-self-center">
                    <i class="icon-DFE display-2 text-info-gradiant"></i>
                  </div>
                  <div class="align-self-center">
                    <h5 class="font-medium">
                      <a href="/dfe" class="linking">Documentos Fiscais
                        <i class="ti-arrow-right"></i>
                      </a>
                    </h5>
                    <p class="op-5 m-t-20">Componentes e serviços integráveis para automatizar a emissão de documentos fiscais no seu software.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 wrap-feature3-box">
              <div class="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                <div class="card-body d-flex">
                  <div class="icon-space align-self-center">
                    <i class="icon-FINTECH display-2 text-warning-gradiant"></i>
                  </div>
                  <div class="align-self-center">
                    <h5 class="font-medium">
                      <a href="/fintech" target="_blank" class="linking">Fintech
                        <i class="ti-arrow-right"></i>
                      </a>
                    </h5>
                    <p class="op-5 m-t-20">Soluções inteligentes para gestão de pagamentos e cobranças, boletos e operações com cartão de crédito.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 wrap-feature3-box">
              <div class="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                <div class="card-body d-flex">
                  <div class="icon-space align-self-center">
                    <i class="icon-CERTIFICADOS display-2 text-success-gradiant"></i>
                  </div>
                  <div class="align-self-center">
                    <h5 class="font-medium">
                      <a href="http://conteudo.tecnospeed.com.br/revenda-certificado-digital/" target="_blank" class="linking">Certificação Digital
                        <i class="ti-arrow-right"></i>
                      </a>
                    </h5>
                    <p class="op-5 m-t-20">Componentes e serviços integráveis para automatizar a emissão de documentos fiscais no seu software.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 wrap-feature3-box">
              <div class="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                <div class="card-body d-flex">
                  <div class="icon-space align-self-center">
                    <i class="icon-ACADEMY display-2 text-warning-2-gradiant"></i>
                  </div>
                  <div class="align-self-center">
                    <h5 class="font-medium">
                      <a href="http://tecnospeedacademy.com.br/" target="_blank" class="linking">Academy
                        <i class="ti-arrow-right"></i>
                      </a>
                    </h5>
                    <p class="op-5 m-t-20">Cursos, treinamentos, e-books e workshops direcionados à desenvolvedores de software.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 wrap-feature3-box">
              <div class="card card-shadow" data-aos="fade-left" data-aos-duration="1200">
                <div class="card-body d-flex">
                  <div class="icon-space align-self-center">
                    <i class="icon-MOBILE display-2 text-rose-gradiant"></i>
                  </div>
                  <div class="align-self-center">
                    <h5 class="font-medium">
                      <a href="https://www.plugmobile.com.br" target="_blank" class="linking">PlugMobile
                        <i class="ti-arrow-right"></i>
                      </a>
                    </h5>
                    <p class="op-5 m-t-20">Aplicativos móveis plugáveis que se comunicam com o seu software desktop.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 wrap-feature3-box">
              <div class="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
                <div class="card-body d-flex">
                  <div class="icon-space align-self-center">
                    <i class="icon-AUDITOR display-2 text-inverse"></i>
                  </div>
                  <div class="align-self-center">
                    <h5 class="font-medium">
                      <a href="http://validadornfe.tecnospeed.com.br/" target="_blank" class="linking">Auditor Online NF-e
                        <i class="ti-arrow-right"></i>
                      </a>
                    </h5>
                    <p class="op-5 m-t-20">Ferramenta gratuita que valida o XML da sua nota fiscal, detectando erros e sugerindo soluções.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ============================================================== -->
      <!-- End Feature 3  -->
      <!-- ============================================================== -->
      <count cor="#33A0DD"/>
      <blog cor="#33A0DD"></blog>
      <!-- ============================================================== -->
      <!-- End Blog -->
      <!-- ============================================================== -->
    </div>
  </div>    
</div>
</template>

<script>
import blog from "@/components/general/blog"
import count from '@/components/general/count'

if (process.browser) {
  require("../../assets/js/perfect-scrollbar.jquery.min.js");
  require("../../assets/js/bootstrap-touch-slider.js");
  require("../../assets/js/home/video.js");
}

export default {
  name: "Home",
  components: {
    blog,
    count
  },
  created () {
    $(function () {
      $('.video-img').on('click', function() {
          $(this).addClass('hide')
          $('.thumb-image').addClass('hide')
          $('.embed-responsive').show().removeClass('hide')
          $('video').each(function() {
              this.play()
          })
      })
    })  
  },
  mounted: function () {
      AOS.init({
          disable: 'mobile'
      })
  }
};
</script>

<style>
.page-home .imagem-topo-header {
  display: none;
}
.page-home .botoes {
  text-align: left;
}
.page-home .botoes a {
  color: #0F76B8 !important;
}
.page-home .show-mobile {
    display: none;
}
.page-home .hide-mobile {
    display: initial;
}
.page-home .home-header {
  display: flex;
  justify-content: center;
  align-items: center;

  /* background: url(/static/images/home/seta.jpg); */
  background: linear-gradient(to right, #0F76B8 0%, #174F81 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

.page-home .home-header .conteudo {
  display: flex;
  width: 100%;
}

.page-home .home-header .conteudo .left {
  margin-right: auto;
  margin-left: 400px;
  margin-top: 170px;
}

.page-home .home-header .conteudo .left h2 {
  width: 70%;
  font-size: 50px;
  line-height: 60px;
}

.page-home .home-header .conteudo .right {
  margin-left: auto;
  padding-left: 0px;
}
.page-home .home-header .conteudo .right img {
  width: 60%;
}

.page-home .header-principal {
  background: url(../../assets/images/home/banner-home.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 100vh;
  /* padding: 12% 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.page-home .header-principal .image-middle {
  width: 40%;
  margin: auto;
  padding-top: 200px;
}
.page-home .header-principal .info-bottom {
  width: 60px;
  margin-top: auto;
  margin-bottom: 100px;
}

.page-home .mais-informacoes {
  margin: auto;
  margin-top: auto;
  max-width: 50px;
}
/*******************
slide 3
*******************/

.page-home .thumb {
  position: relative;
  /* display: flex; */
}

.page-home .botao-play {
  /* margin: auto; */
  position: absolute;
  left: 50%;
  top: 50%;
  /* margin-top: auto; */
}

.page-home .botao-play img {
  width: 50%;
}
.page-home .botao-play img:empty {
  top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}

.page-home .video-img {
  -webkit-animation-delay: 1.3s;
  animation-delay: 1.3s;
}

.page-home .video-img {
  cursor: pointer;
}

.page-home .bs-slider-overlay {
  background: rgba(32, 35, 43, 0.8);
}

.page-home .slider-control span {
  width: 53px;
  height: 53px;
  line-height: 53px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ffffff;
}

.page-home label {
  line-height: 27px;
  border-radius: 0;
  color: #263238;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.page-home h2 {
  line-height: 42px;
  font-size: 36px;
}

.page-home p {
  line-height: 24px;
  font-weight: 400;
}

.page-home i.icon-Play-Music {
  font-size: 32px;
}

@media (max-width: 1280px) {
  .page-home .slide-image {
    height: 550px;
    width: auto !important;
  }
  .page-home .slider-control span {
    width: 44px;
    height: 44px;
    line-height: 44px;
  }
}

@media (max-width: 1100px) {
  .page-home h2 {
    font-size: 34px;
  }
  .page-home .slide-image {
    left: -20%;
    position: relative;
  }
  .page-home .slide-text {
    width: 80% !important;
  }
}

@media (max-width: 767px) {
  .page-home .show-mobile {
      display: initial;
  }
  .page-home .hide-mobile {
      display: none;
  }
  .page-home .slider-control span {
    width: 34px;
    height: 34px;
    line-height: 34px;
  }
  .page-home .slide-text {
    padding: 0 !important;
    width: 80% !important;
  }
  .page-home h2 {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 30px;
  }
  .page-home .slide-image {
    left: 0;
    height: 300px;
  }
  .page-home .btn {
    padding-left: 15px;
    padding-right: 15px;
  }
  .page-home .btn.btn-md {
    padding-left: 25px;
    padding-right: 25px;
  }
  .page-home .btn-pad {
    padding-right: 0;
  }
}

@media (max-width: 428px) {
  .page-home .slider-control span {
    width: 26px;
    height: 26px;
    line-height: 26px;
    font-size: 12px !important;
  }
  .page-home h2 {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .page-home i.icon-Play-Music {
    font-size: 26px;
  }
  .page-home a.btn-md {
    text-align: center;
    margin-bottom: 10px;
  }
  .page-home .slide-image {
    left: -75%;
    height: 380px;
  }
  .page-home .btn {
    padding-left: 0;
  }
  .page-home video {
    width: 160%;
  }
}
</style>

<style>
/* Responsive style */

@media(max-width:767px) {
  .page-home .imagem-topo-header {
    display: block;
    width: 60%;
    margin: auto;
  }
  .page-home .botoes {
    text-align: center;
  }
  .page-home .img-mobile {
    display: none;
  }
  .page-home .header-principal .image-middle {
    width: 90%;
    margin: auto;
    padding-top: 200px;
  }
  .page-home .header-principal .info-bottom {
    width: 40px;
    margin-top: auto;
    margin-bottom: 100px;
  }
  /* .page-home .home-header {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
      background: #61d0f7;
      background: -webkit-linear-gradient(
        legacy-direction(to right),
        #61d0f7 0%,
        #27aae1 100%
      );
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#61d0f7),
        to(#27aae1)
      );
      background: -webkit-linear-gradient(left, #61d0f7 0%, #27aae1 100%);
      background: -o-linear-gradient(left, #61d0f7 0%, #27aae1 100%);
      background: linear-gradient(to right, #61d0f7 0%, #27aae1 100%);
      border: 0px;
  }   */
.page-home .home-header .conteudo .left {
    margin-right: 0;
    margin-left: 0;
    margin-top: 0;
}  
.page-home .home-header .conteudo .left h2 {
    width: 100%;
    font-size: 35px;
    line-height: 40px;
    color: #fff;
    padding: 10px;
    text-align: center;
}
.page-home .home-header .conteudo .right {
    margin-left: 0;
    padding-left: 0px;
}
}
@media (min-width: 1000px) and (max-width: 1440px) {
  .page-home .home-header .conteudo .left {
      margin-right: auto;
      margin-left: 200px;
      margin-top: 80px;
  }  
.page-home .home-header .conteudo .left h2 {
    width: 80%;
    font-size: 50px;
    line-height: 60px;
}  
}
</style>
