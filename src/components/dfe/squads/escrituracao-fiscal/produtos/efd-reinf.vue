<template>
    <div class="produtos-efd-reinf">
        <header-top produto="EFD-Reinf"
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
                        <h2 class="text-white m-b-30">Componente EFD-Reinf</h2>
                        <p class="text-white op-8">O Componente EFD-Reinf da TecnoSpeed é uma solução completa que executa todo o processo de geração, transmissão e consulta dos 15 eventos da EFD-Reinf.</p>
                        <p class="text-white op-8">Uma vez integrado com o Componente EFD-Reinf, seu software só precisa fornecer os parâmetros exigidos por cada evento. Depois isso, a geração do XML e a comunicação com os web services da Receita Federal são realizados pela nossa API.!</p>
                        <p class="text-white op-8">Existem duas formas de integrar o Componente EFD-Reinf em seu software:</p>
                    </div>
                </div>
                <div class="col-lg-6 m-t-40 img-mobile">
                    <img src="/static/images/dfe/squads/escrituracao-fiscal/2.png" alt="">
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
                        <p class="op-8">Com uma biblioteca de métodos instanciada em seu projeto, você fornece um arquivo de texto contendo os campos e grupos do evento do evento e chama os métodos de geração do XML, assinatura digital, envio do XML assinado com o lote de eventos e consulta do protocolo de retorno.</p>
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
                            <p class="text-white op-8">Se sua linguagem de programação permitir, é possível comunicar-se diretamente com nossa API Web. Basta enviar o arquivo texto através de uma requisição HTTPS que ela se encarregará de gerar o xml, assinar e enviar o lote de eventos. Em seguida, basta fazer outra requisição HTTPS para consultar o lote. Para integrar diretamente com nossa API, você deverá configurar um certificado A1 em nossa GUI</p>
                        </div>
                    </div>
                    <div class="col-md-6 img-right img-mobile"> 
                        <div class="middle-center"><img src="/static/images/dfe/squads/escrituracao-fiscal/cloud.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer feature32 bg-white">
            <div class="container">
                <div class="row wrap-feature-32">
                    <div class="col-md-7 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <ul class="list-block">
                            <h2 class="text-escrituracao-fiscal m-t-30 m-b-30">Recursos do Componente EFD-Reinf</h2>
                            <li><i class="icon-success"></i> <span>Layout dos 15 eventos do eSocial</span></li>
                            <li><i class="icon-success"></i> <span>Integração via OCX ou API</span></li>
                            <li><i class="icon-success"></i> <span>Explicação detalhada de erros em eventos rejeitados</span></li>
                            <li><i class="icon-success"></i> <span>Enfileiramento de processos em caso de instabilidade nos web services</span></li>
                        </ul>
                    </div>
                    <div class="col-md-5 img-right img-mobile" style="margin-top: 100px;"> 
                        <div class="middle-center"><img src="/static/images/dfe/squads/escrituracao-fiscal/3-reinf.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
                    </div>
                </div>
            </div>
        </div>        

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
                            <h2 class="text-escrituracao-fiscal m-t-30 m-b-30">Serviços relacionados ao Componente EFD-Reinf</h2>
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

        <!-- Count -->
        <count fundo="white" cor="#47AE4C"/>
        <!-- Testemunhos -->
        <!-- <testimonial cor1="#2F73A5" cor2="#47AE4C"/> -->
<!-- <div id="dfe-19-efd-reinf-6db3bfc70e28065b2c17"></div> -->
        <formRD produto="" squad="escrituracao-fiscal" redirect="reinf" documento="dfe-19-efd-reinf" token="6db3bfc70e28065b2c17"/>

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
  }
};
</script>

<style>
.produtos-efd-reinf #api p {
    padding: 0 100px 0 0;
}
.produtos-efd-reinf #api img {
    width: 80%;
    padding: 0 0 0 100px;
}
.produtos-efd-reinf #ocx img {
    margin-left: 350px;
    width: 30%;
}
.produtos-efd-reinf .cards-produto .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.produtos-efd-reinf .cards-produto .card-body a {
  margin-top: auto;
}
.produtos-efd-reinf .cards-produto .card {
  height: 200px;
  padding: 0 10px;
}

.produtos-efd-reinf .imagem-direita {
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 70%;
  margin: 0 auto;
}
.produtos-efd-reinf .imagem-direita .left {
  margin-right: auto;
}
.produtos-efd-reinf .imagem-direita .right {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 55%;
}

.produtos-efd-reinf .produtos-efd-reinf .linking {
  font-size: 25px;
}

.produtos-efd-reinf .formulario {
  height: 80vh;
}

.produtos-efd-reinf .feature16 {
  background: url(/static/images/dfe/squads/escrituracao-fiscal/hero.png);
  background-size: cover;
  background-repeat: no-repeat;
  /* padding: 0 100px; */
}
.produtos-efd-reinf .manager-saas {
  background: url(/static/images/dfe/squads/industria/produtos/nfe/back-4.png) !important;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 51vh;

  padding: 0 50px;
}
.produtos-efd-reinf .manager-saas .right {
  margin-left: auto;
  width: 50%;
}
.produtos-efd-reinf .manager-saas .left {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -30px;
  margin-left: 300px;
}
.produtos-efd-reinf .manager-saas .left img {
  width: 45%;
}

.produtos-efd-reinf .wrap-feature-16 {
  padding: 60px 200px;
}

.produtos-efd-reinf .wrap-feature6-box {
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}

.produtos-efd-reinf .wrap-feature6-box .card-body {
  /* padding: 30px; */
}

.produtos-efd-reinf .wrap-feature6-box .card-body .linking {
  color: #ffffff;
}

.produtos-efd-reinf .wrap-feature6-box .card-body .linking:hover {
  color: #263238;
}

.produtos-efd-reinf .wrap-feature6-box .card-body p {
  opacity: 0.8;
}

.produtos-efd-reinf .wrap-feature6-box:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.produtos-efd-reinf .wrap-feature-16 [class*="col-"] {
  padding: 80px 35px;
}

.produtos-efd-reinf .wrap-feature-16 .with-bg {
  width: 100%;
  min-height: 200px;
  background-size: cover;
  background-position: center center;
}

.produtos-efd-reinf .wrap-feature-16 .with-text {
  max-width: 500px;
  margin-left: 80px;
}

.produtos-efd-reinf .feature32 .img-right {
  margin: auto;
}
.produtos-efd-reinf .feature32 img {
  width: 100%;
}

.produtos-efd-reinf .shadow {
  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
}

.produtos-efd-reinf .feature6 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-family: "GothamRnd-Book", sans-serif;
}

.produtos-efd-reinf .feature16 img {
  width: 100%;
}

.produtos-efd-reinf .feature6 .wrap-feature6-box {
  height: 200px;
  width: 350px;
  margin: 10px;
}

.produtos-efd-reinf .feature6 .wrap-feature6-box .font-medium {
  font-family: "GothamRnd-Medium", sans-serif;
}

.produtos-efd-reinf .img-w-85 {
  width: 85%;
}

.produtos-efd-reinf .feature-15-left {
  margin-top: 60px;
  margin-left: 3em;
}
.produtos-efd-reinf .feature-15-right {
  margin-left: 3em;
}
.produtos-efd-reinf .feature15-left {
  margin-top: 60px;
}
.produtos-efd-reinf .half-background {
    background: linear-gradient(90deg, #47AE4C 50%, #fff 50%);
}
.produtos-efd-reinf #componente-efd-reinf h2 {
  font-size: 40px !important;
}
.produtos-efd-reinf #componente-efd-reinf p {
  font-size: 17px !important;
}
.produtos-efd-reinf #inicio {
    padding: 200px 0 200px 0;
}
.produtos-efd-reinf #inicio img {
  width: 60%;
}
.produtos-efd-reinf .form-rd {
    background: url(/static/images/dfe/squads/escrituracao-fiscal/hero.png);
}
.produtos-efd-reinf .form-rd .texto h2, .produtos-efd-reinf .form-rd .texto p {
    color: #fff !important;
    opacity: 1;
}
</style>

<style>
@media (max-width: 767px) {
  .produtos-efd-reinf .img-w-85 {
    width: 100%;
  }
  .produtos-efd-reinf .img-mobile {
    display: none;
  }
  .produtos-efd-reinf .wrap-feature-16 {
    padding: 10px 0px;
    text-align: center !important;
  }
  .produtos-efd-reinf .wrap-feature-16 .with-text {
    max-width: 500px;
    margin-left: 0px;
    text-align: left !important;
  }
  .produtos-efd-reinf .feature16 .with-text h2 {
    font-size: 30px;
  }
  .produtos-efd-reinf .feature-15-left {
    margin-top: 0px;
  }
  .produtos-efd-reinf .feature-15 {
    margin-left: 0 !important;
  }
  .produtos-efd-reinf .col-lg-6 {
    margin-top: 0px;
  }
  .produtos-efd-reinf .wrap-feature15-box {
    margin-top: 0px !important;
    margin-left: 0px !important;
  }
  .produtos-efd-reinf .wrap-feature-16 {
    padding: 60px 0px;
  }
  .produtos-efd-reinf .manager-saas {
    height: 100%;
  }
  .produtos-efd-reinf .manager-saas .right {
    margin: auto;
    width: 100%;
  }
  .produtos-efd-reinf .hide-mobile {
      display: initial;
  }
  .produtos-efd-reinf .hide-desktop {
      display: none;
  }
  .produtos-efd-reinf #notasegura-nfe .btn {
      margin-top: 50px;
  }
  .remove-image {
      display: none;
  }
  #inicio {
    padding: 90px 0px 0px !important;
  }
  .produtos-efd-reinf .half-background {
    background: #47AE4C !important;
    color: #fff;
  }
  .produtos-efd-reinf #ocx h2, .produtos-efd-reinf #ocx p {
      color: #fff;
  }
  .produtos-efd-reinf #api p {
      padding: 0;
  }
}
</style>
