<template>
    <div class="produtos-nfse">
        <header-top produto="Nota Fiscal de Serviço Eletrônica"
                    subtitulo=""
                    squad="servicos" 
                    cor="#61D0F7" 
                    fundo="/static/images/dfe/squads/servico/hero.png"
                    scroll="#inicio" />

        <div class="spacer feature32" id="inicio">
            <div class="container">
                <div class="row wrap-feature-32 img-w-85">
                    <div class="col-md-6 remove-image"> 
                        <img src="/static/images/dfe/squads/servico/1.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"> 
                    </div>
                    <div class="col-md-6 align-self-center" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <h2 class="title m-t-20 op-5"><strong>Nosso software, do seu jeito.</strong></h2>
                        <p class="m-t-30 op-5">Entendemos que cada projeto de software possui particularidades e necessidades específicas. Nossa solução ideal depende da linguagem de programação que você utiliza, do seu modelo de negócio, e até mesmo de suas preferências técnicas.</p>
                        <p class="m-t-30 op-5">Se não conseguir decidir, dê uma olhadinha em cada uma das ferramentas, ou fale com a gente!</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer feature6 cards-produto">
          <div class="row m-t-40">
              <div class="wrap-feature6-box shadow">
                  <div class="card bg-white" data-aos="fade-right" data-aos-duration="1200">
                      <div class="card-body">
                          <h6 class="font-medium text-servico">Componente NFS-e</h6>
                          <p class="m-t-20 op-5">DLL com integração via arquivos TXT ou DataSet. Formatos BPL, OCx e TLB.</p>
                          <a href="#" v-scroll-to="'#componente-nfse'" class="linking"><span class="text-servico">Conheça</span> <i class="ti-arrow-right"></i></a>
                      </div>
                  </div>
              </div>
              <div class="wrap-feature6-box shadow">
                  <div class="card text-white" data-aos="fade-down" data-aos-duration="1200">
                      <div class="card-body">
                          <h6 class="font-medium text-saas op-7">Manager SaaS</h6>
                          <p class="m-t-20 op-5">API Web com integração via HTTP, HTTPS ou troca de arquivos TXT e XML em pastas.</p>
                          <a  href="#" v-scroll-to="'#manager-nfse'" class="linking"><span class="text-saas">Conheça</span> <i class="ti-arrow-right"></i></a>
                      </div>
                  </div>
              </div>
              <!-- <div class="wrap-feature6-box shadow">
                  <div class="card text-white" data-aos="fade-down" data-aos-duration="1200">
                      <div class="card-body">
                          <h6 class="font-medium text-servico op-7">Nota Segura</h6>
                          <p class="m-t-20 op-5">Plataforma integrável para armazenamento e consulta de arquivos XML.</p>
                          <a  href="#" v-scroll-to="'#notasegura-nfce'" class="linking"><span class="text-servico">Conheça</span> <i class="ti-arrow-right"></i></a>
                      </div>
                  </div>
              </div> -->
          </div>
        </div>        

        <div class="feature16" id="componente-nfse">
            <div class="row wrap-feature-16">
                <div class="col-lg-6 m-t-40 img-mobile">
                    <img src="/static/images/dfe/squads/servico/2.png" alt="">
                </div>
                <div class="col-lg-5 text-white">
                    <div class="with-text text-right">
                        <h2 class="text-white m-b-30">Componente NFS-e</h2>
                        <p class="text-white op-8">O Componente NFS-e da TecnoSpeed é uma biblioteca contendo todos os métodos necessários para emitir a Nota Fiscal eletrônica. É a escolha ideal para quem pode consumir OCX e prefere manter todo o processo de mensageria da NFS-e dentro do próprio ambiente.</p>
                        <p class="text-white op-8">Para utilizar o Componente em seu software, basta instanciá-lo em seu projeto, implementar chamadas para cada um dos métodos e configurá-los de acordo com sua necessidade. Ao fornecer os parâmetros para a geração do XML, seu arquivo de texto terá um layout único, e cabe ao nosso Componente gerar o XML de acordo com a prefeitura.</p>
                        <p class="text-white op-8">Não esquente a cabeça com Nota Fiscal de Serviço Eletrônica. Deixa com a gente!</p>
                    </div>
                </div>
            </div>
        </div>  

        <div class="spacer feature32 bg-light">
            <div class="container">
                <div class="row wrap-feature-32">
                    <div class="col-md-6 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <ul class="list-block m-b-30">
                            <h2 class="text-servico m-t-30 m-b-30">Recursos do Componente NFS-e</h2>
                            <li><i class="icon-success"></i> <span>Padrão único de integração, compatível com mais de 900 prefeituras.</span></li>
                            <li><i class="icon-success"></i> <span>Geração do XML a partir de arquivo de texto ou DataSet.</span></li>
                            <li><i class="icon-success"></i> <span>Auditor Online: validações técnicas e tributárias</span></li>
                            <li><i class="icon-success"></i> <span>Impressão do RPS de acordo com o layout de cada prefeitura</span></li>
                            <li><i class="icon-success"></i> <span>Envio do XML para o e-mail do destinatário</span></li>
                        </ul>
                    </div>
                    <div class="col-md-6 img-right img-mobile" style="margin-top: 100px;"> 
                        <div class="middle-center"><img src="/static/images/dfe/squads/servico/3.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer feature15">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 wrap-feature15-box feature15-left">
                        <div class="row">
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="1000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-servico "><i class="icon-bell"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a class="linking op-5" href="#" v-scroll-to="'#formulario'">Solicite um orçamento <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="2000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-servico "><i class="icon-cloud"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a class="linking op-5" href="#" v-scroll-to="'#formulario'">Use de graça por 30 dias <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="3000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-servico "><i class="icon-laptop"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="http://docs.tecnospeed.com.br/nfse/" class="linking op-5">Acesse a documentação <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wrap-feature15-box feature15-right" data-aos="flip-left" data-aos-duration="1200">
                        <ul class="list-block m-b-30">
                            <h2 class="text-servico m-t-30 m-b-30">Serviços relacionados ao Componente NFS-e</h2>
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

        <div class="spacer feature16 manager-saas m-t-40 m-b-40" id="manager-nfse">
            <div class="row wrap-feature-16">
                <div class="left img-mobile">
                    <img src="/static/images/dfe/squads/industria/produtos/nfe/4.png" alt="">
                </div>
                
                <div class="right text-white">
                    <div class="with-text text-right">
                        <h2 class="m-b-30 text-saas">Manager SaaS</h2>
                        <p class="text-white op-7">O Manager SaaS é uma API em nuvem que executa todos os processos de emissão da NFS-e.</p>
                        <p class="text-white op-7">Para utilizar o Manager SaaS, basta fornecer os parâmetros para preenchimento da NFS-e. Seu software pode se comunicar com o Manager SaaS através de requisições http, https ou troca de arquivos em pastas. Ao fornecer os parâmetros para a geração do XML, seu arquivo de texto terá um layout único, e cabe ao nosso Componente gerar o XML de acordo com a prefeitura.</p>
                        <p class="text-white op-7">Além da NFS-e, o Manager SaaS permite gerenciar e emitir os documentos NF-e, NFC-e, CT-e, MDF-e, CF-e SAT, CF-e MFE e GNRE.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer imagem-direita">
            <div class="left" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                <ul class="list-block m-b-30">
                    <h2 class="text-saas m-t-30 m-b-30">Recursos do Manager SaaS para NFS-e</h2>
                    <li><i class="icon-success"></i> <span>Padrão único de integração, compatível com mais de 900 prefeituras.</span></li>
                    <li><i class="icon-success"></i> <span>Geração do XML a partir de requisições HTTP ou troca de arquivos em pasta</span></li>
                    <li><i class="icon-success"></i> <span>Impressão do RPS de acordo com o layout de cada prefeitura</span></li>
                    <li><i class="icon-success"></i> <span>Assinatura e gestão de Certificados Digitais</span></li>
                    <li><i class="icon-success"></i> <span>Envio do XML para o e-mail do destinatário</span></li>
                    <li><i class="icon-success"></i> <span>Interface gráfica para gestão de documentos emitidos</span></li>
                    <li><i class="icon-success"></i> <span>Armazenamento de arquivos XML na nuvem por 5 anos.</span></li>
                </ul>
            </div>
            <div class="right img-mobile">
                <div class="middle-center"><img src="/static/images/dfe/squads/industria/produtos/nfe/5.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
            </div>
        </div>
            
        <div class="spacer feature15">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 wrap-feature15-box" style="margin-top: 70px">
                        <div class="row">
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="1000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-saas"><i class="icon-bell"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="#" v-scroll-to="'#formulario'" class="linking op-5">Solicite um orçamento <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="2000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-saas"><i class="icon-cloud"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="#" v-scroll-to="'#formulario'" class="linking op-5">Use de graça por 30 dias <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="3000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-saas"><i class="icon-laptop"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="http://docs.tecnospeed.com.br/saas/" class="linking op-5">Acesse a documentação <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wrap-feature15-box" data-aos="flip-left" data-aos-duration="1200">
                        <ul class="list-block m-b-30">
                            <h2 class="text-saas m-t-30 m-b-30">Serviços relacionados ao Manager SaaS NFS-e</h2>
                            <li><i class="icon-success"></i> <span>Atualizações fiscais</span></li>
                            <li><i class="icon-success"></i> <span>Atualizações evolutivas automáticas</span></li>
                            <li><i class="icon-success"></i> <span>Acompanhamento durante implantação</span></li>
                            <li><i class="icon-success"></i> <span>Consultoria técnica</span></li>
                            <li><i class="icon-success"></i> <span>Consultoria fiscal e tributária</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>   

        <!-- <div class="feature16 nota-segura" id="notasegura-cfe">
            <div class="row wrap-feature-16">
                <div class="col-lg-6 img-mobile">
                    <img src="/static/images/dfe/squads/industria/produtos/nfe/6.png" alt="">
                </div>
                <div class="col-lg-6 text-white">
                    <div class="with-text text-right">
                        <h2 class="text-white m-b-30">Nota Segura</h2>
                        <p class="text-white op-7">O Nota Segura é uma solução de armazenamento de arquivos XML dos documentos fiscais eletrônicos, como a própria CF-e.</p>
                        <p class="text-white op-7">Além do armazenamento seguro e de fácil recuperação, o Nota Segura permite realizar o Manifesto do Destinatário, consulta e download de notas emitidas contra o CNPJ do usuário, envio automático dos arquivos para o contador, entre outros recursos de gestão dos documentos armazenados.</p>
                        <p class="text-white op-7 m-b-40">A integração do Nota Segura com o seu software consiste em um único método na rotina de emissão da CF-e!</p>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow text-servico m-t-30 hide-desktop" data-animation="animated fadeInLeft" href="http://mkt.tecnospeed.com.br/nota-segura-des">
                            <span><strong>Saiba mais sobre o Nota Segura</strong> <i class="ti-arrow-right"></i></span>
                        </a>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow text-servico m-t-30 hide-mobile" data-animation="animated fadeInLeft" href="http://mkt.tecnospeed.com.br/nota-segura-des">
                            <span><strong>Saiba mais</strong> <i class="ti-arrow-right"></i></span>
                        </a>                        
                    </div>
                </div>
            </div>
        </div>  -->

        <div class="flex-map">
            <div class="left">
                <input type="text" name="searchBox" id="pesquisaCidade">
                <div id="map"></div>
            </div>
            <div class="right bg-light">
                <div class="conteudo">
                    <h2 class="text-servico">Homologação de Municípios</h2>
                    <p class="op-5">Para adicionar um município em nosso padrão TecnoNFSe, de modo que você possa emitir NFS-e para este município a partir do layout único, é realizado um processo de homologação juntamente aos portais das prefeituras. Para isso, o cliente deverá solicitar uma verificação de compatibilidade e, se o resultado for positivo, poderá solicitar a homologação.</p>
                    <p class="op-5">No mapa abaixo, você pode ver todas as cidades homologadas, bem como as cidades que já foram verificadas e são compatíveis, mas ainda não foram homologadas.</p>
                </div>
            </div>
        </div>

        <!-- Count -->
        <count fundo="white" cor="#61D0F7"/>
        <!-- Testemunhos -->
        <!-- <testimonial cor1="#2F73A5" cor2="#61D0F7"/> -->

        <!-- <div class="formulario bg-light"> -->
            <!-- <div class="conteudo"> -->
                <!-- <div class="texto"></div> -->
                <!-- <div class="form m-t-40"> -->
                <!-- <div id="dfe-15-ct-e-c1fec1e0238110e72399"></div> -->
                <formRD produto="NFS-e" squad="servico" redirect="nfse" documento="dfe-14-nfse" token="b7e5b5146686ae55769e"/>
                <!-- </div> -->
            <!-- </div> -->
        <!-- </div> -->

        <!-- Blog -->
        <blog cor="#61D0F7"/>

    </div>
</template>

<script>
import headerTop from "@/components/general/header-two-columns-produtos";
import count from "@/components/general/count";
import caracteristicas from "@/components/general/caracteristicas";
import testimonial from "@/components/general/testimonial";
import blog from "@/components/general/blog";
import axios from 'axios'
import formRD from '@/components/general/formProdutos'

// if (process.browser) {
//   let google_maps = require("../../../../../assets/js/mapa/google-maps")
//   require("../../../../../assets/js/mapa/cidades")
// }

export default {
  data() {
      return {
          title: 'Tecno Speed | CF-e SAT'
      }
  },
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
    })
  },
  created () {
    $(function () {
        let map
        let google_maps = require("../../../../../assets/mapa/google-maps")

        const elements = {
            input: /** @type {!HTMLInputElement} */ (document.getElementById('pesquisaCidade')),
            mapa: document.getElementById('map')
        }

        axios.get('https://clientes.tecnospeed.com.br/cidades-api/v1/cidades').then(res => {
            google_maps.iniciarMapa(elements, res.data.cidades)
        })
    })
  }
};
</script>

<style>
.produtos-nfse .formulario .conteudo {
    width: 50%;
}
.produtos-nfse .formulario .conteudo .form {
    /* margin-top:  */
}

.produtos-nfse .flex-map {
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
}
.produtos-nfse #pesquisaCidade {
    margin: 10px;
    height: 40px;
    width: 50%;
    /* border: 1px solid #999; */
    border: none;
    border-radius: .50em;
    padding: 10px;
    color: #777;
    font-size: 17px !important;
    font-family: 'GothamRnd-Book', sans-serif;
}
.produtos-nfse .flex-map .left {
    height: 800px;
    width: 50%;
}
.produtos-nfse .flex-map .left #map {
    width: 100%;
    height: 100%;

    font-family: 'GothamRnd-Book', sans-serif;
}
.produtos-nfse .flex-map .left #map .gmnoprint .gm-style-mtc div {
    font-family: 'GothamRnd-Book', sans-serif !important;
    height: 40px;
    width: 100px;
    /* line-height: 25px; */
    padding: 10px !important;
    font-size: 17px !important;
}
.produtos-nfse .flex-map .right {
    height: 800px;
    width: 50%;

    display: flex;
    justify-content: center;
}
.produtos-nfse .flex-map .right .conteudo {
    margin: auto auto auto 100px;
    padding: 0 300px 0 0;
}
.produtos-nfse .flex-map .right .conteudo h2 {
    font-size: 40px;
    margin-bottom: 50px;
}
.produtos-nfse .flex-map .right .conteudo p {
    padding: 0 150px 0 0;
    margin-bottom: 50px;
    line-height: 30px;
}

.produtos-nfse .cards-produto .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.produtos-nfse .cards-produto .card-body a {
  margin-top: auto;
}
.produtos-nfse .cards-produto .card {
  height: 200px;
  padding: 0 10px;
}

.produtos-nfse .imagem-direita {
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 70%;
  margin: 0 auto;
}
.produtos-nfse .imagem-direita .left {
  margin-right: auto;
}
.produtos-nfse .imagem-direita .right {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 55%;
}

.produtos-nfse .produtos-nfse .linking {
  font-size: 25px;
}
.produtos-nfse .feature16 {
  background: url(/static/images/dfe/squads/servico/hero.png);
  background-size: cover;
  background-repeat: no-repeat;
  /* padding: 0 100px; */
}
.produtos-nfse .manager-saas {
  background: url(/static/images/dfe/squads/industria/produtos/nfe/back-4.png) !important;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 51vh;

  padding: 0 50px;
}
.produtos-nfse .manager-saas .right {
  margin-left: auto;
  width: 50%;
}
.produtos-nfse .manager-saas .left {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -30px;
  margin-left: 300px;
}
.produtos-nfse .manager-saas .left img {
  width: 45%;
}

.produtos-nfse .wrap-feature-16 {
  padding: 60px 200px;
}

.produtos-nfse .wrap-feature6-box {
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}

.produtos-nfse .wrap-feature6-box .card-body {
  /* padding: 30px; */
}

.produtos-nfse .wrap-feature6-box .card-body .linking {
  color: #ffffff;
}

.produtos-nfse .wrap-feature6-box .card-body .linking:hover {
  color: #263238;
}

.produtos-nfse .wrap-feature6-box .card-body p {
  opacity: 0.8;
}

.produtos-nfse .wrap-feature6-box:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.produtos-nfse .wrap-feature-16 [class*="col-"] {
  padding: 80px 35px;
}

.produtos-nfse .wrap-feature-16 .with-bg {
  width: 100%;
  min-height: 200px;
  background-size: cover;
  background-position: center center;
}

.produtos-nfse .wrap-feature-16 .with-text {
  max-width: 500px;
  margin-left: 80px;
}

.produtos-nfse .feature32 .img-right {
  margin: auto;
}
.produtos-nfse .feature32 img {
  width: 100%;
}

.produtos-nfse .shadow {
  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
}

.produtos-nfse .feature6 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-family: "GothamRnd-Book", sans-serif;
}

.produtos-nfse .feature16 img {
  width: 100%;
}

.produtos-nfse .feature6 .wrap-feature6-box {
  height: 200px;
  width: 350px;
  margin: 10px;
}

.produtos-nfse .feature6 .wrap-feature6-box .font-medium {
  font-family: "GothamRnd-Medium", sans-serif;
}

.produtos-nfse .img-w-85 {
  width: 85%;
}

.produtos-nfse .feature-15-left {
  margin-top: 60px;
  margin-left: 3em;
}
.produtos-nfse .feature-15-right {
  margin-left: 3em;
}
.produtos-nfse .feature15-left {
  margin-top: 60px;
}
.produtos-nfse #componente-nfse h2, .produtos-nfse #notasegura-cfe h2 {
  font-size: 40px !important;
  padding-left: 10%;
}
.produtos-nfse #componente-nfse p {
  font-size: 17px !important;
}
.produtos-nfse #inicio img {
  width: 78%;
}
.produtos-nfse .header-produto {
    padding: 0px 100px;
}
.swal2-container .swal2-popup .swal2-title {
    color: #777 !important;
}
.swal2-container .swal2-popup .swal2-content  p {
    color: #999 !important;
}
</style>

<style>
@media (max-width: 767px) {
    .produtos-nfse .img-w-85 {
    width: 100%;
    }
    .produtos-nfse .img-mobile {
    display: none;
    }
    .produtos-nfse .wrap-feature-16 {
    padding: 10px 0px;
    text-align: center !important;
    }
    .produtos-nfse .wrap-feature-16 .with-text {
    max-width: 500px;
    margin-left: 0px;
    text-align: left !important;
    }
    .produtos-nfse .feature16 .with-text h2 {
    font-size: 30px;
    }
    .produtos-nfse .feature-15-left {
    margin-top: 0px;
    }
    .produtos-nfse .feature-15 {
    margin-left: 0 !important;
    }
    .produtos-nfse .col-lg-6 {
    margin-top: 0px;
    }
    .produtos-nfse .wrap-feature15-box {
    margin-top: 0px !important;
    margin-left: 0px !important;
    }
    .produtos-nfse .wrap-feature-16 {
    padding: 60px 0px;
    }
    .produtos-nfse .manager-saas {
    height: 100%;
    }
    .produtos-nfse .manager-saas .right {
    margin: auto;
    width: 100%;
    }
    .produtos-nfse .hide-mobile {
        display: initial;
    }
    .produtos-nfse .hide-desktop {
        display: none;
    }
    .produtos-nfse #notasegura-cfe .btn {
        margin-top: 50px;
    }
    .remove-image {
        display: none;
    }
    #inicio {
    padding: 90px 0px 0px !important;
    }
    .produtos-nfse .flex-map .left {
    height: 400px;
    width: 100%;
    }
    .produtos-nfse .flex-map .right {
        height: auto;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .produtos-nfse .flex-map .right .conteudo {
        margin: auto;
        padding: 40px;
    }    
    .produtos-nfse .flex-map .right .conteudo p {
        padding: 0;
        margin-bottom: 50px;
        line-height: 30px;
    }  
    .produtos-nfse .flex-map .right .conteudo h2 {
        font-size: 30px;
    }
    .produtos-nfse .flex-map .left #map .gmnoprint .gm-style-mtc div {
        font-family: 'GothamRnd-Book', sans-serif !important;
        height: 28px;
        width: 60px;
        line-height: 28px;
        padding: 0px !important;
        font-size: 13px !important;
    }    
    .produtos-nfse #pesquisaCidade {
        margin: 10px;
        margin-left: 20px;
        height: 28px;
        width: 40%;
        /* border: 1px solid #999; */
        border: none;
        border-radius: .50em;
        padding: 10px;
        color: #777;
        font-size: 15px !important;
        font-family: 'GothamRnd-Book', sans-serif;
    }    
}
</style>
