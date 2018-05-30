<template>
  <div>
    <header-comp titulo="Soluções fiscais para softwares de"
                 subtitulo="A NF-e é obrigatória para qualquer indústria em território brasileiro, enquanto os outros documentos variam de acordo com as operações."
                 squad="Indústria" 
                 cor="#33A0DD" 
                 :imagem="defaultOptions" 
                 fundo="/static/images/dfe/squads/industria/hero.png"
                 scroll="#produtos" />

    <div class="bg-white spacer feature41" id="produtos">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7 text-center">
                    <h2 class="title op-8">Produtos</h2>
                    <h6 class="subtitle"></h6>
                </div>
            </div>
            <div class="row m-t-40 wrap-feature41-box">
                <!-- Column -->
                <div class="col-md-4">
                    <ul class="nav vtab f41-tab">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" ariaexpanded="true" v-scroll-to="'#produtos-industria'">
                                <div class="display-5 t-icon t-industria"><i class="icon-box"></i></div>
                                <div>
                                    <h5 class="m-b-0">NFe</h5>
                                    <h6 class="subtitle">Toda indústria precisa.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" v-scroll-to="'#produtos-industria'">
                                <div class="display-5 t-icon t-industria"><i class="icon-shipped"></i></div>
                                <div>
                                    <h5 class="m-b-0">MDFe</h5>
                                    <h6 class="subtitle">Necessário para indústrias com transporte próprio.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="dropdown1-tab" data-toggle="tab" href="#dropdown1" role="tab" aria-controls="dropdown1" v-scroll-to="'#produtos-industria'">
                                <div class="display-5 t-icon t-industria"><i class="icon-brasil"></i></div>
                                <div>
                                    <h5 class="m-b-0">GNRe</h5>
                                    <h6 class="subtitle">Obrigatório em vendas interestaduais.</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Column -->
                <!-- Column -->
                <div class="col-md-7 ml-auto">
                    <div class="tab-content" id="produtos-industria">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <img src="/static/images/dfe/squads/industria/box.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInDown" />
                            <p class="m-t-40 op-8 animated fadeIn">A Nota Fiscal eletrônica, modelo 55, foi o primeiro documento criado pelo projeto SPED. Deve ser emitida em toda operação B2B (entre empresas) e até mesmo B2C (entre empresa e consumidor final) em alguns casos. Além de todas as etapas de comunicação, nossas soluções para NFe ainda oferecem auditoria fiscal.</p> 
                            <a class="btn btn-industria-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/nfe">
                                <span>Conheça <i class="ti-arrow-right"></i></span>
                            </a>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <img src="/static/images/dfe/squads/industria/mdfe.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInRight" />
                            <p class="m-t-40 op-8 animated fadeIn">Algumas indústrias, por diversas razões, preferem ter sua própria frota para escoar sua produção, sem depender de uma transportadora. Nestes casos, essa indústria deverá emitir o MDFe, no qual as NFes referentes aos produtos transportados em determinada operação serão anexados. Nossa solução está prontinha para o seu ERP.</p> 
                            <a class="btn btn-industria-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/mdfe">
                                <span>Conheça <i class="ti-arrow-right"></i></span>
                            </a>
                        </div>
                        <div class="tab-pane fade" id="dropdown1" role="tabpanel" aria-labelledby="dropdown1-tab">
                            <img src="/static/images/dfe/squads/industria/gnre.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInUp" />
                            <p class="m-t-40 op-8 animated fadeIn">Com a regulamentação da Partilha do ICMS entre os estados, um número maior de empresas passou a ter que emitir a GNRE, conforme cada operação de venda interestadual é realizada. Automatize a geração da GNRE no seu sistema!</p> 
                            <a class="btn btn-industria-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/gnre">
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
  <caracteristicas cor="#33A0DD"/>
  <!-- Count -->
  <count cor="#33A0DD"/>
  <!-- Testemunhos -->
  <!-- <testimonial cor1="#33A0DD" cor2="#0F76B8"/> -->
  <!-- Form -->
  <formHome squad="industria" redirect="industria" documento="dfe-2-industria" token="f92107608cab268f27d1"/>
  <!-- Blog -->
  <blog cor="#33A0DD"/>
  </div>
</template>
<script>
  import headerComp from '@/components/general/header-two-columns'
  import count from '@/components/general/count'
  import caracteristicas from '@/components/general/caracteristicas'
  import testimonial from '@/components/general/testimonial'
  import blog from '@/components/general/blog'
  import * as animationData from '../../../../assets/efeito/industria/data.json'
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
    },
    created: function () {
        $(function () {
            feather.replace()
        })
    }
  }
</script>
<style>
/* @import '../../../../assets/squads/style.css'; */

@media (max-width: 1000px) {
    .tab-content {
        text-align: center;
    }
}

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

.wrap-feature41-box .f41-tab li a.active .t-industria, .wrap-feature41-box .f41-tab li a:hover .t-industria {
  background: #33A0DD;
  background: -webkit-linear-gradient(legacy-direction(to right), #33A0DD 0%, #0F76B8 100%);
  background: -webkit-gradient(linear, left top, right top, from(#33A0DD), to(#0F76B8));
  background: -webkit-linear-gradient(left, #33A0DD 0%, #0F76B8 100%);
  background: -o-linear-gradient(left, #33A0DD 0%, #0F76B8 100%);
  background: linear-gradient(to right, #33A0DD 0%, #0F76B8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}
/* Feature */
</style>
