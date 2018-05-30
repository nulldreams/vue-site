<template>
    <div class="produtos-sped">
        <header-top produto="SPED Fiscal"
                    subtitulo=""
                    squad="escrituracao-fiscal" 
                    cor="#47AE4C"
                    fundo="/static/images/dfe/squads/escrituracao-fiscal/hero.png"
                    scroll="#inicio" />

        <div class="spacer feature32" id="inicio">
            <div class="container">
                <div class="row wrap-feature-32 img-w-85">
                    <div class="col-md-6 remove-image"> 
                        <img src="/static/images/dfe/squads/escrituracao-fiscal/1.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"> 
                    </div>
                    <div class="col-md-6 align-self-center" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <h2 class="title m-t-20 op-5"><strong>Nosso software, do seu jeito.</strong></h2>
                        <p class="m-t-30 op-5">Entendemos que cada projeto de software possui particularidades e necessidades específicas. Nossa solução ideal depende da linguagem de programação que você utiliza, do seu modelo de negócio, e até mesmo de suas preferências técnicas.</p>
                        <p class="m-t-30 op-5">Se não conseguir decidir, dê uma olhadinha em cada uma das ferramentas, ou fale com a gente!</p>
                    </div>
                </div>
            </div>
        </div>    

        <div class="feature16 half-background" id="componente-efd-reinf">
            <div class="row wrap-feature-16">
                <div class="col-lg-5 text-white">
                    <div class="with-text text-left">
                        <h2 class="text-white m-b-30">Componente SPED Fiscal</h2>
                        <p class="text-white op-8">O Componente SPED Fiscal da TecnoSpeed facilita a geração do arquivo SPED no seu software, e apresenta um diagnóstico completo do arquivo gerado. Deste modo, o Componente reduz seu esforço de suporte com o cliente e não exige que seu time domine a parte fiscal para desenvolver.</p>
                        <p class="text-white op-8">Integrado com o Componente SPED Fiscal, seu sistema deve enviar blocos de informação através de um layout simplificado ao longo do mês.</p>
                        <p class="text-white op-8">Quando solicitada, nossa API executa uma complexa validação das informações, identificando possíveis erros no arquivo na parte de estrutura, combinação de informações e totalização de registros.</p>
                        <p class="text-white op-8">Se as informações estiverem corretas, você poderá baixar o arquivo txt do SPED, pronto para enviar para a Sefaz!</p>
                        <p class="text-white op-8">Existem duas formas de integrar o Componente SPED Fiscal em seu software:</p>
                    </div>
                </div>
                <div class="col-lg-6 m-t-40 img-mobile ml-auto hidden-md-down align-self-center thumb">
                    <!-- <div class="video-img botao-play grow">
                        <img src="/static/images/home/play-button.png" alt="">
                    </div> -->
                    <!-- <div class="fundo-laptop">
                        <div class="video-img">
                            <img src="/static/images/home/thumb.png" class="thumb-image img-responsive img-rounded" alt="Video" data-animation="animated fadeInRight"/>
                        </div>
                    </div> -->
                    <div class="embed-responsive hide embed-responsive-16by9" data-animation="animated fadeIn" style="z-index: 1 !important;">
                        <video class="video" controls>
                            <source src="../../../../../assets/videos/Apresentação - SPED.mp4" type="video/mp4"> Your browser does not support HTML5 video. 
                        </video>
                    </div>
                    <div class="video-img" style="cursor: pointer;"><img src="/static/images/dfe/squads/escrituracao-fiscal/laptop.png" alt="video"></div>
                </div>
            </div>
        </div>  

        <div class="feature16 half-background" id="ocx">
            <div class="row wrap-feature-16">
                <div class="col-lg-6 img-mobile">
                    <img src="/static/images/dfe/squads/escrituracao-fiscal/engine.png" alt="">
                </div>
                <div class="col-lg-5 text-white">
                    <div class="with-text text-left">
                        <h2 class="text-escrituracao-fiscal m-b-30">OCX</h2>
                        <p class="op-8">Com uma biblioteca de métodos instanciada em seu projeto, seu software gera arquivos de texto contendo as informações necessárias e chama os métodos para iniciar uma nova apuração, enviar estes dados para nossa API, validar as informações, consultar a apuração e baixar o arquivo SPED.</p>
                    </div>
                </div>
            </div>
        </div> 

        <div class="spacer feature32 bg-light half-background" id="api">
            <div class="container">
                <div class="row wrap-feature-32">
                    <div class="col-md-6 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <div class="with-text text-left">
                            <h2 class="text-white m-b-30">API</h2>
                            <p class="text-white op-8">Se sua linguagem de programação permitir, é possível comunicar-se diretamente com nossa API Web. Basta utilizar requisições HTTPS, tanto para iniciar uma apuração e enviar os blocos de informação, quanto para solicitar as validações, consultar a apuração e fazer o download do arquivo SPED.</p>
                        </div>
                    </div>
                    <div class="col-md-6 img-right img-mobile"> 
                        <div class="middle-center"><img src="/static/images/dfe/squads/escrituracao-fiscal/cloud.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="spacer feature32 bg-white">
            <div class="container">
                <div class="row wrap-feature-32">
                    <div class="col-md-7 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <ul class="list-block">
                            <h2 class="text-escrituracao-fiscal m-t-30 m-b-30">Recursos do Componente SPED Fiscal</h2>
                            <li><i class="icon-success"></i> <span>Layout dos 42 eventos do eSocial</span></li>
                            <li><i class="icon-success"></i> <span>Integração via OCX ou API</span></li>
                            <li><i class="icon-success"></i> <span>Explicação detalhada de erros em eventos rejeitados</span></li>
                            <li><i class="icon-success"></i> <span>Enfileiramento de processos em caso de instabilidade nos web services</span></li>
                        </ul>
                    </div>
                    <div class="col-md-5 img-right img-mobile" style="margin-top: 100px;"> 
                        <div class="middle-center"><img src="/static/images/dfe/squads/escrituracao-fiscal/3-esocial.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
                    </div>
                </div>
            </div>
        </div>         -->

        <div class="spacer feature15 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 wrap-feature15-box feature15-left">
                        <div class="row">
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="1000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-light display-4 text-escrituracao-fiscal "><i class="icon-bell"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Solicite um orçamento <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="2000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-light display-4 text-escrituracao-fiscal "><i class="icon-cloud"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Use de graça por 30 dias <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="3000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-light display-4 text-escrituracao-fiscal "><i class="icon-laptop"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Acesse a documentação <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wrap-feature15-box feature15-right" data-aos="flip-left" data-aos-duration="1200">
                        <ul class="list-block m-b-30">
                            <h2 class="text-escrituracao-fiscal m-t-30 m-b-30">Serviços relacionados ao Componente SPED Fiscal</h2>
                            <li><i class="icon-success"></i> <span>Atualizações fiscais</span></li>
                            <li><i class="icon-success"></i> <span>Atualizações evolutivas</span></li>
                            <li><i class="icon-success"></i> <span>Acompanhamento durante implantação</span></li>
                            <li><i class="icon-success"></i> <span>Consultoria técnica</span></li>
                            <li><i class="icon-success"></i> <span>Consultoria fiscal e tributária</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="spacer feature16 ebook bg-white" id="book">
            <div class="row wrap-feature-16">
                <div class="col-lg-6 text-white">
                    <div class="with-text text-left">
                        <h2 class="text-escrituracao-fiscal m-b-30">Aprenda tudo sobre o eSocial!</h2>
                        <p class="op-5">Feito de desenvolvedor para desenvolvedor, o ebook "Tudo sobre eSocial para Desenvolvedores" busca esclarecer este complexo projeto para o desenvolvedor de softwares de RH.</p>
                        <p class="op-5 m-b-40">Sabemos que, antes de qualquer implementação, é essencial conhecer as regras de negócio. E é por isso que escrevemos este livro pra você.</p>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow btn-escrituracao-fiscal-gradiant hide-desktop" data-animation="animated fadeInLeft" href="http://mkt.tecnospeed.com.br/ebook-des">
                            <span><strong>Faça o download gratuitamente e desvende o eSocial!</strong> <i class="ti-arrow-right"></i></span>
                        </a>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow btn-escrituracao-fiscal-gradiant hide-mobile" data-animation="animated fadeInLeft" href="http://mkt.tecnospeed.com.br/ebook-des">
                            <span><strong>Download gratuito!</strong> <i class="ti-arrow-right"></i></span>
                        </a>                        
                    </div>
                </div>
                <div class="col-lg-6 img-mobile">
                    <img src="/static/images/dfe/squads/escrituracao-fiscal/book.png" alt="">
                </div>
            </div>
        </div>  -->
        <!-- Count -->
        <count fundo="" cor="#47AE4C"/>
        <!-- Testemunhos -->
        <!-- <testimonial cor1="#2F73A5" cor2="#47AE4C"/> -->
<!-- <div id="dfe-19-efd-reinf-6db3bfc70e28065b2c17"></div> -->
        <formRD produto="" squad="escrituracao-fiscal" redirect="sped" documento="dfe-20-sped" token="8f53e05724642a12694e"/>

        <!-- Blog -->
        <blog cor="#47AE4C"/>

    </div>
</template>

<script>
import headerTop from "@/components/general/header-two-columns-produtos";
import count from "@/components/general/count";
import caracteristicas from "@/components/general/caracteristicas";
import testimonial from "@/components/general/testimonial";
import blog from "@/components/general/blog";
import formRD from '@/components/general/formProdutos';

export default {
  components: {
    count,
    caracteristicas,
    testimonial,
    blog,
    headerTop,
    formRD
  },
  mounted: function() {
    AOS.init({
      disable: "mobile"
    });
    // new RDStationForms('dfe-19-efd-reinf-6db3bfc70e28065b2c17-html', 'UA-54505819-1').createForm();
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
  }
};
</script>

<style>
.produtos-sped .fundo-laptop {
    position: absolute;
    width: 64%;
    left: 136px;
    top: 107px;    
}
.produtos-sped #api p {
    padding: 0 100px 0 0;
}
.produtos-sped #api img {
    width: 80%;
    padding: 0 0 0 100px;
}
.produtos-sped #ocx img {
    margin-left: 350px;
    width: 30%;
}
.produtos-sped .cards-produto .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.produtos-sped .cards-produto .card-body a {
  margin-top: auto;
}
.produtos-sped .cards-produto .card {
  height: 200px;
  padding: 0 10px;
}

.produtos-sped .imagem-direita {
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 70%;
  margin: 0 auto;
}
.produtos-sped .imagem-direita .left {
  margin-right: auto;
}
.produtos-sped .imagem-direita .right {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 55%;
}

.produtos-sped .produtos-sped .linking {
  font-size: 25px;
}

.produtos-sped .formulario {
  height: 80vh;
}

.produtos-sped .feature16 {
  /* background: url(/static/images/dfe/squads/escrituracao-fiscal/hero.png); */
  background-size: cover;
  background-repeat: no-repeat;
  /* padding: 0 100px; */
}
.produtos-sped .manager-saas {
  background: url(/static/images/dfe/squads/industria/produtos/nfe/back-4.png) !important;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 51vh;

  padding: 0 50px;
}
.produtos-sped .manager-saas .right {
  margin-left: auto;
  width: 50%;
}
.produtos-sped .manager-saas .left {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -30px;
  margin-left: 300px;
}
.produtos-sped .manager-saas .left img {
  width: 45%;
}

.produtos-sped .wrap-feature-16 {
  padding: 60px 200px;
}

.produtos-sped .wrap-feature6-box {
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}

.produtos-sped .wrap-feature6-box .card-body {
  /* padding: 30px; */
}

.produtos-sped .wrap-feature6-box .card-body .linking {
  color: #ffffff;
}

.produtos-sped .wrap-feature6-box .card-body .linking:hover {
  color: #263238;
}

.produtos-sped .wrap-feature6-box .card-body p {
  opacity: 0.8;
}

.produtos-sped .wrap-feature6-box:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.produtos-sped .wrap-feature-16 [class*="col-"] {
  padding: 80px 35px;
}

.produtos-sped .wrap-feature-16 .with-bg {
  width: 100%;
  min-height: 200px;
  background-size: cover;
  background-position: center center;
}

.produtos-sped .wrap-feature-16 .with-text {
  max-width: 500px;
  margin-left: 80px;
}

.produtos-sped .feature32 .img-right {
  margin: auto;
}
.produtos-sped .feature32 img {
  width: 100%;
}

.produtos-sped .shadow {
  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
}

.produtos-sped .feature6 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-family: "GothamRnd-Book", sans-serif;
}

.produtos-sped .feature16 img {
  width: 100%;
}

.produtos-sped .feature6 .wrap-feature6-box {
  height: 200px;
  width: 350px;
  margin: 10px;
}

.produtos-sped .feature6 .wrap-feature6-box .font-medium {
  font-family: "GothamRnd-Medium", sans-serif;
}

.produtos-sped .img-w-85 {
  width: 85%;
}

.produtos-sped .feature-15-left {
  margin-top: 60px;
  margin-left: 3em;
}
.produtos-sped .feature-15-right {
  margin-left: 3em;
}
.produtos-sped .feature15-left {
  margin-top: 60px;
}
.produtos-sped .half-background {
    background: linear-gradient(90deg, #47AE4C 50%, #fff 50%);
}
.produtos-sped #componente-efd-reinf h2 {
  font-size: 40px !important;
}
.produtos-sped #componente-efd-reinf p {
  font-size: 17px !important;
}
.produtos-sped #inicio {
    padding: 200px 0 200px 0;
}
.produtos-sped #inicio img {
  width: 60%;
}
.produtos-sped .form-rd {
    background: url(/static/images/dfe/squads/escrituracao-fiscal/hero.png);
}
.produtos-sped .form-rd .texto h2, .produtos-sped .form-rd .texto p {
    color: #fff !important;
    opacity: 1;
}
.produtos-sped #book .img-mobile {
    position: absolute;
    right: 20%;
    top: 54%;
}
.produtos-sped #book .img-mobile img {
    width: 130%;
}
</style>

<style>
@media (max-width: 767px) {
  .produtos-sped .img-w-85 {
    width: 100%;
  }
  .produtos-sped .img-mobile {
    display: none;
  }
  .produtos-sped .wrap-feature-16 {
    padding: 10px 0px;
    text-align: center !important;
  }
  .produtos-sped .wrap-feature-16 .with-text {
    max-width: 500px;
    margin-left: 0px;
    text-align: left !important;
  }
  .produtos-sped .feature16 .with-text h2 {
    font-size: 30px;
  }
  .produtos-sped .feature-15-left {
    margin-top: 0px;
  }
  .produtos-sped .feature-15 {
    margin-left: 0 !important;
  }
  .produtos-sped .col-lg-6 {
    margin-top: 0px;
  }
  .produtos-sped .wrap-feature15-box {
    margin-top: 0px !important;
    margin-left: 0px !important;
  }
  .produtos-sped .wrap-feature-16 {
    padding: 60px 0px;
  }
  .produtos-sped .manager-saas {
    height: 100%;
  }
  .produtos-sped .manager-saas .right {
    margin: auto;
    width: 100%;
  }
  .produtos-sped .hide-mobile {
      display: initial;
  }
  .produtos-sped .hide-desktop {
      display: none;
  }
  .produtos-sped #book .btn {
      margin-top: 50px;
  }
  .remove-image {
      display: none;
  }
  #inicio {
    padding: 90px 0px 0px !important;
  }
  .produtos-sped .half-background {
    background: #47AE4C !important;
    color: #fff !important;
  }
  .produtos-sped #ocx h2, .produtos-sped #ocx p {
      color: #fff !important;
  }
  .produtos-sped #api p {
      padding: 0;
  }
}
</style>
