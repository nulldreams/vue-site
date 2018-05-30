<template>
  <div class="page-escrituracao-fiscal">
    <header-comp titulo="Soluções fiscais para"
                 subtitulo="Além do já conhecido EFD ICMS IPI, disponibilizamos soluções para os projetos mais recentes do SPED: o eSocial e a EFD-Reinf."
                 squad="Escrituração Fiscal" 
                 cor="#69D66B" 
                 :imagem="defaultOptions" 
                 fundo="/static/images/dfe/squads/escrituracao-fiscal/hero.png"
                 scroll="#produtos" />

    <div class="bg-white spacer feature41" id="produtos">
        <div class="container">
            <!-- Row  -->
            <div class="row justify-content-center">
                <div class="col-md-7 text-center">
                    <h2 class="title">Bem vindo ao Squad Escrituração da Casa do Desenvolvedor!</h2>
                    <h6 class="subtitle"></h6>
                </div>
            </div>
            <!-- Row  -->
            <div class="row m-t-40 wrap-feature41-box">
                <!-- Column -->
                <div class="col-md-4">
                    <ul class="nav vtab f41-tab">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true" v-scroll-to="'#produtos-escrituracao-fiscal'">
                                <div class="display-5 t-icon t-escrituracao"><i class="icon-teamwork"></i></div>
                                <div>
                                    <h5 class="m-b-0">eSocial</h5>
                                    <h6 class="subtitle">Informações trabalhistas e previdenciárias.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="dropdown1-tab" data-toggle="tab" href="#dropdown1" role="tab" aria-controls="dropdown1" v-scroll-to="'#produtos-escrituracao-fiscal'">
                                <div class="display-5 t-icon t-escrituracao"><i class="icon-money"></i></div>
                                <div>
                                    <h5 class="m-b-0">Reinf</h5>
                                    <h6 class="subtitle">Rendimentos e retenções sem vínculo empregatício.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" v-scroll-to="'#produtos-escrituracao-fiscal'">
                                <div class="display-5 t-icon t-escrituracao"><i class="icon-files"></i></div>
                                <div>
                                    <h5 class="m-b-0">Sped</h5>
                                    <h6 class="subtitle">Apurações mensais de ICMS e IPI.</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Column -->
                <!-- Column -->
                <div class="col-md-7 ml-auto text-left">
                    <div class="tab-content" id="produtos-escrituracao-fiscal">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> 
                            <img src="/static/images/dfe/squads/escrituracao-fiscal/esocial.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInDown" />
                            <p class="m-t-40 animated fadeIn">A espera acabou: o eSocial está em operação. Com a promessa de reduzir drasticamente a burocracia dos processos de RH, o projeto contempla mais de 40 eventos com diferentes layouts. Pois é, o eSocial é enorme! Mas não se preocupe: temos uma solução prontinha para o seu software!</p>
                            <a class="btn btn-escrituracao-fiscal-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/esocial">
                                <span>Conheça <i class="ti-arrow-right"></i></span>
                            </a>
                        </div>
                        <div class="tab-pane fade" id="dropdown1" role="tabpanel" aria-labelledby="dropdown1-tab"> 
                            <img src="/static/images/dfe/squads/escrituracao-fiscal/reinf.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInRight" />
                            <p class="m-t-40 animated fadeIn">A EFD-Reinf contém a escrituração de rendimentos e retenções não relacionados à contratos de trabalho. Contempla informações que eram transmitidas pela DIRF, Guia de Recolhimento do FGTS e pela GFIP. Por ser muito abrangente, praticamente todo software de gestão precisará emitir a EFD-Reinf. Seu software está pronto?</p>
                            <a class="btn btn-escrituracao-fiscal-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/efdreinf">
                                <span>Conheça <i class="ti-arrow-right"></i></span>
                            </a>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                            <img src="/static/images/dfe/squads/escrituracao-fiscal/sped.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInUp" />
                            <p class="m-t-40 animated fadeIn">A EFD ICMS IPI, ou simplesmente Sped, é um arquivo de texto contendo informações sobre as operações do contribuinte durante todo o mês. Nele, constam todos os documentos fiscais emitidos, bem como registros de apuração de impostos. Com a nossa solução você implementa, sem esforço, a geração do Sped no seu software!</p>
                            <a class="btn btn-escrituracao-fiscal-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/sped">
                                <span>Conheça <i class="ti-arrow-right"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Column -->
            </div>
        </div>
    </div>    
  <!-- Caracteristicas -->
  <caracteristicas cor="#69D66B"/>
  <!-- Count -->
  <count cor="#69D66B"/>
  <!-- Testemunhos -->
  <!-- <testimonial cor1="#69D66B" cor2="#47AE4C"/> -->
  <!-- Form -->
  <formHome squad="escrituracao-fiscal" redirect="escrituracao-fiscal" documento="dfe-6-escrituracao-fiscal" token="0e503c64e64f372f27d7"/>
  <!-- Blog -->
  <blog cor="#69D66B"/>
  </div>
</template>
<script>
  import headerComp from '@/components/general/header-two-columns'
  import count from '@/components/general/count'
  import caracteristicas from '@/components/general/caracteristicas'
  import testimonial from '@/components/general/testimonial'
  import blog from '@/components/general/blog'
  import * as animationData from '../../../../assets/efeito/GP/data.json'
  import formHome from '@/components/general/formHomes'

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
/* Feature */
.wrap-feature41-box .f41-tab {
  display: block;
}

.wrap-feature41-box .f41-tab li a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 20px;
  padding: 25px;
}

.wrap-feature41-box .f41-tab li a .t-icon {
  margin-right: 25px;
  color: #8d97ad;
}

.wrap-feature41-box .f41-tab li a h5 {
  /* font-weight: 500; */
  font-family: 'GothamRnd-Medium', sans-serif;
  color: #777;
}

.wrap-feature41-box .f41-tab li a h6 {
  font-family: 'GothamRnd-Book', sans-serif;
  color: #777;
  
  font-size: 14px;
  margin-bottom: 0px;
}

.tab-content p {
  font-family: 'GothamRnd-Book', sans-serif;
  color: #777;
}

.wrap-feature41-box .f41-tab li a.active, .wrap-feature41-box .f41-tab li a:hover {
  background: #ffffff;
  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
  box-shadow: 0px 0px 30px rgba(5, 20, 54, 0.1);
}

.wrap-feature41-box .f41-tab li a.active .t-escrituracao, .wrap-feature41-box .f41-tab li a:hover .t-escrituracao {
  background: #69D66B;
  background: -webkit-linear-gradient(legacy-direction(to right), #69D66B 0%, #47AE4C 100%);
  background: -webkit-gradient(linear, left top, right top, from(#69D66B), to(#47AE4C));
  background: -webkit-linear-gradient(left, #69D66B 0%, #47AE4C 100%);
  background: -o-linear-gradient(left, #69D66B 0%, #47AE4C 100%);
  background: linear-gradient(to right, #69D66B 0%, #47AE4C 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}
/* Feature */
@media (max-width: 767px) {
    .page-escrituracao-fiscal .header-two-columns #banner1 h1 {
        line-height: 52px;
        font-size: 43px;
    }
}
</style>
