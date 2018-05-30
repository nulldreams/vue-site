<template>
  <div>
    <header-comp titulo="Soluções fiscais para softwares de"
                 subtitulo="Cada Sefaz tem autonomia para escolher qual documento irá substituir o Cupom Fiscal via ECF. A solução ideal para você dependerá da localização dos seus clientes!"
                 squad="Varejo" 
                 cor="#FFBC64" 
                 :imagem="defaultOptions" 
                 fundo="/static/images/dfe/squads/varejo/hero.png"
                 scroll="#produtos" />

    <div class="bg-white spacer feature41" id="produtos">
        <div class="container">
            <!-- Row  -->
            <div class="row justify-content-center">
                <div class="col-md-7 text-center">
                    <h2 class="title op-8">Produtos</h2>
                    <h6 class="subtitle"></h6>
                </div>
            </div>
            <!-- Row  -->
            <div class="row m-t-40 wrap-feature41-box">
                <!-- Column -->
                <div class="col-md-4">
                    <ul class="nav vtab f41-tab">
                        <li class="nav-item">
                            <a class="nav-link active" id="nfce-tab" data-toggle="tab" href="#nfce" role="tab" aria-controls="nfce" v-scroll-to="{ el: '#produtos-varejo', offset: -200 }">
                                <div class="display-5 t-icon t-varejo"><i class="icon-tag"></i></div>
                                <div>
                                    <h5 class="m-b-0">NFCe</h5>
                                    <h6 class="subtitle">Totalmente digital, presente em mais de 20 estados.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="cfe-tab" data-toggle="tab" href="#cfe" role="tab" aria-controls="cfe" v-scroll-to="{ el: '#produtos-varejo', offset: -200 }">
                                <div class="display-5 t-icon t-varejo"><i class="icon-cashier"></i></div>
                                <div>
                                    <h5 class="m-b-0">CFe SAT</h5>
                                    <h6 class="subtitle">Baseado em hardware, presente em São Paulo e Ceará.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nfe-tab" data-toggle="tab" href="#nfe" role="tab" aria-controls="nfe" ariaexpanded="true" v-scroll-to="{ el: '#produtos-varejo', offset: -200 }">
                                <div class="display-5 t-icon t-varejo"><i class="icon-box"></i></div>
                                <div>
                                    <h5 class="m-b-0">NFe</h5>
                                    <h6 class="subtitle">Necessário para operações específicas.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="gnre-tab" data-toggle="tab" href="#gnre" role="tab" aria-controls="gnre" v-scroll-to="{ el: '#produtos-varejo', offset: -200 }">
                                <div class="display-5 t-icon t-varejo"><i class="icon-brasil"></i></div>
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
                <div class="col-md-7 ml-auto all-center">
                    <div class="tab-content" id="produtos-varejo">
                        <div class="tab-pane fade show active" id="nfce" role="tabpanel" aria-labelledby="nfce-tab"> 
                            <img src="/static/images/dfe/squads/varejo/nfce.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInDown" />
                            <p class="m-t-40 animated fadeIn">Criada a partir do layout da NF-e modelo 55, a NFC-e é atualmente o projeto com maior aderência por parte dos estados brasileiros. Independente de hardware autorizador ou até mesmo homologação, a NFC-e é uma maravilha para o varejista. Com as soluções TecnoSpeed, é uma maravilha para o desenvolvedor também.</p>
                            <a class="btn btn-varejo-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/nfce"><span>Conheça <i class="ti-arrow-right"></i></span></a>
                        </div>
                        <div class="tab-pane fade" id="cfe" role="tabpanel" aria-labelledby="cfe-tab"> 
                            <img src="/static/images/dfe/squads/varejo/sat.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInRight" />
                            <p class="m-t-40 animated fadeIn">Desconfiados em relação ao modelo de contingência offline da NFC-e, os governos de São Paulo e Ceará optaram por colocar um equipamento no fluxo do documento eletrônico. Assim, surgiu o Cupom Fiscal eletrônico e seus respectivos acessórios: o SAT e o MFE.</p>
                            <a class="btn btn-varejo-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/cfe"><span>Conheça <i class="ti-arrow-right"></i></span></a>
                        </div>
                        <div class="tab-pane fade" id="nfe" role="tabpanel" aria-labelledby="nfe-tab"> 
                            <img src="/static/images/dfe/squads/varejo/nfe.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInUp" />
                            <p class="m-t-40 animated fadeIn">Nem toda operação de varejo gera cupom fiscal. Em vendas não-presenciais, por exemplo, mesmo que o destinatário seja consumidor final, o varejista deve emitir a NF-e modelo 55. Em casos de devolução do produto, também. Vendas acima de R$ 200 mil? NF-e. Não tem como fugir. Mas tudo bem: a gente te ajuda!</p>
                            <a class="btn btn-varejo-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/nfe"><span>Conheça <i class="ti-arrow-right"></i></span></a>
                        </div>
                        <div class="tab-pane fade" id="gnre" role="tabpanel" aria-labelledby="gnre-tab"> 
                            <img src="/static/images/dfe/squads/varejo/gnre.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInLeft" />
                            <p class="m-t-40 animated fadeIn">Com a regulamentação da Partilha do ICMS entre os estados, um número maior de empresas passou a ter que emitir a GNRE, conforme cada operação de venda interestadual é realizada. Automatize a geração da GNRE no seu sistema!</p>
                            <a class="btn btn-varejo-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/gnre"><span>Conheça <i class="ti-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
                <!-- Column -->
            </div>
        </div>
    </div>    
  <!-- Caracteristicas -->
  <caracteristicas cor="#FFBC64"/>
  <!-- Count -->
  <count cor="#FFBC64"/>
  <!-- Testemunhos -->
  <!-- <testimonial cor1="#FFBC64" cor2="#F39200"/> -->
  <!-- Form -->
  <formHome squad="varejo" redirect="varejo" documento="dfe-3-varejo" token="29d382048194f923f93a"/>
    <!-- <div id="dfe-1-home-9745ef9bcdbca85782c8"></div> -->
  <!-- Blog -->
  <blog cor="#FFBC64"/>
  </div>
</template>
<script>
  import headerComp from '@/components/general/header-two-columns'
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
    },
    mounted: function () {
        AOS.init({
            disable: "mobile"
        })
    }
  }
</script>
<style>
/* @import '../../../../assets/squads/style.css'; */

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
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
}

.wrap-feature41-box .f41-tab li a.active .t-varejo, .wrap-feature41-box .f41-tab li a:hover .t-varejo {
  background: #FFBC64;
  background: -webkit-linear-gradient(legacy-direction(to right), #FFBC64 0%, #F39200 100%);
  background: -webkit-gradient(linear, left top, right top, from(#FFBC64), to(#F39200));
  background: -webkit-linear-gradient(left, #FFBC64 0%, #F39200 100%);
  background: -o-linear-gradient(left, #FFBC64 0%, #F39200 100%);
  background: linear-gradient(to right, #FFBC64 0%, #F39200 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}
/* Feature */
</style>
