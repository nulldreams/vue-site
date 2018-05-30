<template>
  <div>
    <header-comp titulo="Soluções fiscais para softwares de"
                 subtitulo='Transportadoras conhecem bem as consequências de um problema com documentação fiscal. Evite o "caminhão parado": forneça a melhor solução.'
                 squad="Transporte" 
                 cor="#2F73A5" 
                 :imagem="defaultOptions" 
                 fundo="/static/images/dfe/squads/transporte/hero.png"
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
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true" v-scroll-to="'#produtos-transporte'">
                                <div class="display-5 t-icon t-transporte"><i class="icon-fast-delivery"></i></div>
                                <div>
                                    <h5 class="m-b-0">CT-e</h5>
                                    <h6 class="subtitle">Transporte de carga em todos os modais</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" v-scroll-to="'#produtos-transporte'">
                                <div class="display-5 t-icon t-transporte"><i class="icon-shipped"></i></div>
                                <div>
                                    <h5 class="m-b-0">MDF-e</h5>
                                    <h6 class="subtitle">Obrigatório em operações interestaduais.</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="dropdown1-tab" data-toggle="tab" href="#dropdown1" role="tab" aria-controls="dropdown1" v-scroll-to="'#produtos-transporte'">
                                <div class="display-5 t-icon t-transporte"><i class="icon-bus"></i></div>
                                <div>
                                    <h5 class="m-b-0">CT-e OS</h5>
                                    <h6 class="subtitle">Transporte de passageiros, valores e bagagem.</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Column -->
                <!-- Column -->
                <div class="col-md-7 ml-auto">
                    <div class="tab-content" id="produtos-transporte">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> 
                            <img src="/static/images/dfe/squads/transporte/cte.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInDown" />
                            <p class="m-t-40 animated fadeIn">O Conhecimento de Transporte Eletrônico deve ser emitido por transportadoras de carga. No CT-e, a transportadora deve identificar as NF-es referentes aos produtos transportados naquela operação. Aceita os modais: Rodoviário, Aquaviário, Ferroviário e Dutoviário. Nossa solução já tem todos eles!</p> 
                            <a class="btn btn-transporte-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" data-toggle="collapse" href="/dfe/cte">
                                <span>Conheça <i class="ti-arrow-right"></i></span>
                            </a>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                            <img src="/static/images/dfe/squads/transporte/mdfe.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInRight" />
                            <p class="m-t-40 animated fadeIn">O Manifesto dos Documentos Fiscais eletrônicos não recolhe impostos. Sua finalidade é agilizar a fiscalização nas barreiras interestaduais, mas sua ausência ainda acarreta multas. No MDF-e, o transportador informa todos os CT-es e NF-es contidos naquele veículo. Conheça nossas soluções para o MDF-e!</p> 
                            <a class="btn btn-transporte-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" data-toggle="collapse" href="/dfe/mdfe">
                                <span>Conheça <i class="ti-arrow-right"></i></span>
                            </a>
                        </div>
                        <div class="tab-pane fade" id="dropdown1" role="tabpanel" aria-labelledby="dropdown1-tab"> 
                            <img src="/static/images/dfe/squads/transporte/cteos.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInUp" />
                            <p class="m-t-40 animated fadeIn">Substituto da Nota Fiscal de Serviço de Transporte, o CT-e para Outros Serviços acoberta operações de transporte fretado de pessoas, excesso de bagagem, valores, entre outros serviços não atingidos pelo CT-e tradicional. Nossa solução para o CT-e OS já está pronta e funcionando! Venha conhecer!</p> 
                            <a class="btn btn-transporte-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" data-toggle="collapse" href="/dfe/cteos">
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
  <caracteristicas cor="#2F73A5"/>
  <!-- Count -->
  <count cor="#2F73A5"/>
  <!-- Testemunhos -->
  <!-- <testimonial cor1="#2F73A5" cor2="#174F81"/> -->
  <!-- Form -->
  <formHome squad="transporte" redirect="transporte" documento="dfe-5-transporte" token="0286349df51cfa71df62"/>
  <!-- Blog -->
  <blog cor="#2F73A5"/>
  </div>
</template>
<script>
  import headerComp from '@/components/general/header-two-columns'
  import count from '@/components/general/count'
  import caracteristicas from '@/components/general/caracteristicas'
  import testimonial from '@/components/general/testimonial'
  import blog from '@/components/general/blog'
  import * as animationData from '../../../../assets/efeito/transporte/data.json'
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

.wrap-feature41-box .f41-tab li a.active .t-transporte, .wrap-feature41-box .f41-tab li a:hover .t-transporte {
  background: #2F73A5;
  background: -webkit-linear-gradient(legacy-direction(to right), #2F73A5 0%, #174F81 100%);
  background: -webkit-gradient(linear, left top, right top, from(#2F73A5), to(#174F81));
  background: -webkit-linear-gradient(left, #2F73A5 0%, #174F81 100%);
  background: -o-linear-gradient(left, #2F73A5 0%, #174F81 100%);
  background: linear-gradient(to right, #2F73A5 0%, #174F81 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}
/* Feature */
</style>
