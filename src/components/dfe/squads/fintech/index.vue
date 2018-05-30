<template>
  <div class="page-fintech">
    <header-comp titulo="TecnoSpeed"
                 subtitulo="Prepare seu software para a nova era da tecnologia financeira."
                 squad="Fintech" 
                 cor="#E44188" 
                 imagem="/static/images/dfe/squads/fintech/computer-header.png" 
                 fundo="/static/images/dfe/squads/fintech/hero.png"
                 scroll="#inicio" />

  <caracteristicas cor="#E44188" cor2="#4442B2" cor3="#202069"/>

  <div class="half-page" id="inicio">
        <div class="spacer feature16 cobranca" id="">
            <div class="row wrap-feature-16">
                <div class="col-lg-6 img-mobile">
                    <img src="/static/images/dfe/squads/fintech/produtos/boleto/print-header.png" alt="">
                </div>
                <div class="col-lg-6">
                    <div class="with-text text-right">
                        <h2 class="m-b-30 op-8">Boleto</h2>
                        <p class="op-7">Com um layout único e compatível com dezenas de bancos, õ Boleto TecnoSpeed permite que você registre remessas de boleto de forma automática ou até mesmo instantânea, sem acessar o portal do banco.</p>
                        <p class="op-7">Além do registro de boletos, a solução oferece recursos inteligentes para tornar o processo de recebimento do seu cliente muito mais eficiente, com ferramentas de conciliação, cobrança automática por e-mail e SMS, e muito mais.</p>
                        <p class="op-7 m-b-40">Prepare-se para elevar seu software para um novo patamar de inteligência e gestão financeira.</p>
                        <a class="btn btn-fintech-gradiant btn-rounded btn-md btn-arrow text-white m-t-30 hide-desktop" data-animation="animated fadeInLeft" href="/boleto">
                            <span><strong>Conheça</strong> <i class="ti-arrow-right"></i></span>
                        </a>
                        <a class="btn btn-fintech-gradiant btn-rounded btn-md btn-arrow text-white m-t-30 hide-mobile" data-animation="animated fadeInLeft" href="/boleto">
                            <span><strong>Saiba mais</strong> <i class="ti-arrow-right"></i></span>
                        </a>                        
                    </div>
                </div>
            </div>
        </div> 
        <div class="feature16 tef" id="">
            <div class="row wrap-feature-16">
                <div class="col-lg-6">
                    <div class="with-text text-left">
                        <h2 class="text-white m-b-30 op-8">Componente TEF</h2>
                        <p class="text-white op-7">Além da compatibilidade com todas as bandeiras de cartão em um único hardware, o maior ponto forte do TEF é a integração com o software do estabelecimento, permitindo maior controle das vendas com cartão. Muitos desenvolvedores são traumatizados em relação ao TEF, considerando a complexidade e a burocracia de homologação com a qual estão acostumados.</p>
                        <p class="text-white op-7 m-b-40">Estamos aqui para mudar o seu conceito, e mostrar que o TEF pode ser muito mais simples e muito mais lucrativo do que você imagina.</p>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow text-fintech m-t-30 hide-desktop" data-animation="animated fadeInLeft" href="#">
                            <span><strong>Em breve</strong> </span>
                        </a>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow text-fintech m-t-30 hide-mobile" data-animation="animated fadeInLeft" href="#">
                            <span><strong>Saiba mais</strong> </span>
                        </a>                        
                    </div>
                </div>
                <div class="col-lg-6 img-mobile">
                    <img src="/static/images/dfe/squads/fintech/2.png" alt="">
                </div>
            </div>
        </div> 

        <count fundo="transparent" cor="white" text="white"/>
  </div>
  <!-- <div class="spacer"> -->
  <!-- <testimonial cor1="white" cor2="white" text="gray" nameC="true" cargoC="true"/> -->
  <!-- </div> -->
  <formHome squad="fintech" redirect="fintech" documento="fintech" token="cf306d4d247a818ee0bb"/>
  <blog cor="#E44188"/>
  

  <!-- Count -->
  <!-- <count cor="#E44188"/> -->
  <!-- Testemunhos -->
  <!-- Form -->
    <!-- <div id="dfe-1-home-9745ef9bcdbca85782c8"></div> -->
  <!-- Blog -->
  </div>
</template>
<script>
  import headerComp from '@/components/general/header-fintech'
  import count from '@/components/general/count'
  import caracteristicas from '@/components/general/caracteristicas'
  import testimonial from '@/components/general/testimonial'
  import blog from '@/components/general/blog'
  import formHome from '@/components/general/formHomes'
  import * as animationData from '../../../../assets/efeito/varejo/data.json'

  export default {
    components: {
      headerComp,
      count,
      caracteristicas,
      testimonial,
      blog,
      formHome
    },
    data() {
        return {
            defaultOptions: {animationData: animationData},
            animationSpeed: 1
        }
    }
  }
</script>
<style>
.header-fintech #banner1 .imagem-direita img {
    width: 80%;
}
.page-fintech .cobranca img {
    width: 100%;
}
.page-fintech .cobranca .img-mobile {
    padding-right: 0px;
    padding-left: 230px;
}

.page-fintech .tef img {
    width: 110%;
}
.page-fintech .tef .img-mobile {
    padding-right: 0px;
    padding-right: 300px;
}
.page-fintech .tef .with-text {
    margin-left: 380px;
}
.page-fintech .cobranca .with-text h2 {
    font-family: 'GothamRnd-Book', sans-serif;
    color: #999;
    font-size: 35px;
    line-height: 40px;
    padding: 0 0 0 100px;
}
.page-fintech .cobranca .with-text p {
    /* font-size: 17px; */
    color: #999;
}

.page-fintech .half-page {
    background: url(/static/images/dfe/squads/fintech/half-page.png);
    /* height: 150vh; */
    background-size: cover;
    background-repeat: no-repeat;
}
/* Feature */
.page-fintech .wrap-feature41-box .f41-tab {
  display: block;
}

.page-fintech .wrap-feature41-box .f41-tab li a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 20px;
  padding: 25px;
}

.page-fintech .wrap-feature41-box .f41-tab li a .t-icon {
  margin-right: 25px;
  color: #8d97ad;
}

.page-fintech .wrap-feature41-box .f41-tab li a h5 {
  /* font-weight: 500; */
  font-family: 'GothamRnd-Medium', sans-serif;
  color: #777;
}

.page-fintech .wrap-feature41-box .f41-tab li a h6 {
  font-family: 'GothamRnd-Book', sans-serif;
  color: #777;
  
  font-size: 14px;
  margin-bottom: 0px;
}

.page-fintech .tab-content p {
  font-family: 'GothamRnd-Book', sans-serif;
  color: #777;
}

.page-fintech .wrap-feature41-box .f41-tab li a.active, .wrap-feature41-box .f41-tab li a:hover {
  background: #ffffff;
  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
}

.page-fintech .wrap-feature41-box .f41-tab li a.active .t-varejo, .wrap-feature41-box .f41-tab li a:hover .t-varejo {
  background: #E44188;
  background: -webkit-linear-gradient(legacy-direction(to right), #E44188 0%, #F39200 100%);
  background: -webkit-gradient(linear, left top, right top, from(#E44188), to(#F39200));
  background: -webkit-linear-gradient(left, #E44188 0%, #F39200 100%);
  background: -o-linear-gradient(left, #E44188 0%, #F39200 100%);
  background: linear-gradient(to right, #E44188 0%, #F39200 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}
/* Feature */
</style>
<style>
@media (max-width: 767px) {
    .page-fintech .img-mobile {
        display: none;
    }
    .page-fintech .half-page {
        background: url(/static/images/dfe/squads/fintech/half-page.png);
        height: 320vh;
        background-size: cover;
        background-repeat: no-repeat;
    }    
    .page-fintech .tef .with-text {
        /* padding-right: 0px; */
        /* padding-right: 300px; */
        margin-left: 0px;
        color: #fff;
    }       
    .page-fintech .cobranca .with-text {
        text-align: left !important;
        color: #fff !important;
    }        
    .page-fintech .cobranca .with-text h2, .page-fintech .cobranca .with-text p {
        color: #fff !important;
    } 
}
@media (min-width: 1000px) and (max-width: 1440px) { 
  .header-fintech #banner1 .imagem-direita {
      position: absolute;
      top: 15%;
      left: 38%;
      /* padding-bottom: 38%; */
  }
  .header-fintech #banner1 .imagem-direita img {
      width: 100% !important;
  }
  .header-fintech #banner1 {
    margin-bottom: 10%;
  }
    .page-fintech .cobranca img {
        width: 100%;
    }
    .page-fintech .cobranca .img-mobile {
        padding-right: 0px;
        padding-left: 90px;
    }  
    .page-fintech .tef .with-text {
        /* padding-right: 0px; */
        /* padding-right: 300px; */
        margin-left: 140px;
    }
    .page-fintech .tef img {
        width: 150%;
    }
    .page-fintech .cobranca {
        padding: 0;
    }
}
</style>

