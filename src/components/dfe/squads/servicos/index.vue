<template>
  <div>
    <header-comp titulo="Soluções fiscais para softwares de"
                 subtitulo="Na área de serviços, há apenas um documento fiscal: a Nota Fiscal de Serviços Eletrônica. Mas não se engane: a NFS-e, sozinha, pode te dar uma enorme dor de cabeça."
                 squad="Serviços" 
                 cor="#61D0F7" 
                 :imagem="defaultOptions" 
                 fundo="/static/images/dfe/squads/servico/hero.png"
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
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true" v-scroll-to="'#produtos-servicos'">
                                <div class="display-5 t-icon t-servicos"><i class="icon-apartments"></i></div>
                                <div>
                                    <h5 class="m-b-0">NFSe</h5>
                                    <h6 class="subtitle">Centenas de prefeituras. <br>Um só layout.</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Column -->
                <!-- Column -->
                <div class="col-md-7 ml-auto">
                    <div class="tab-content" id="produtos-servicos">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <img src="/static/images/dfe/squads/servico/nfse.jpg" alt="wrapkit" class="rounded img-fluid animated bounceInDown" />
                            <p class="m-t-40 op-8 animated fadeIn">Diferente do ICMS, que é um tributo estadual, o Imposto Sobre Serviços (ISS) é recolhido pelo município. Cada prefeitura tem autonomia para criar seu próprio webservice de NFS-e, com regras e exigências personalizadas. Com isso, a NFS-e ficou famosa como o documento mais caótico e complexo do SPED. É aí que entra a TecnoSpeed.</p>
                            <a class="btn btn-servico-gradiant btn-md btn-rounded btn-arrow m-t-20 animated fadeIn" href="/dfe/nfse">
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
  <caracteristicas cor="#61D0F7"/>
  <!-- Count -->
  <count cor="#61D0F7"/>
  <!-- Testemunhos -->
  <!-- <testimonial cor1="#61D0F7" cor2="#27AAE1"/> -->
  <!-- Form -->
  <formHome squad="servico" redirect="servico" documento="dfe-4-servicos" token="54034362268d7bd1d9d3"/>
  <!-- Blog -->
  <blog cor="#61D0F7"/>
  </div>
</template>
<script>
  import headerComp from '@/components/general/header-two-columns'
  import count from '@/components/general/count'
  import caracteristicas from '@/components/general/caracteristicas'
  import testimonial from '@/components/general/testimonial'
  import blog from '@/components/general/blog'
  import * as animationData from '../../../../assets/efeito/servico/data.json'
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

.wrap-feature41-box .f41-tab li a.active .t-servicos, .wrap-feature41-box .f41-tab li a:hover .t-servicos {
  background: #61D0F7;
  background: -webkit-linear-gradient(legacy-direction(to right), #61D0F7 0%, #27AAE1 100%);
  background: -webkit-gradient(linear, left top, right top, from(#61D0F7), to(#27AAE1));
  background: -webkit-linear-gradient(left, #61D0F7 0%, #27AAE1 100%);
  background: -o-linear-gradient(left, #61D0F7 0%, #27AAE1 100%);
  background: linear-gradient(to right, #61D0F7 0%, #27AAE1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}
/* Feature */
</style>
