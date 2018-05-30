<template>
    <div class="produtos-cte">
        <header-top produto="Conhecimento de Transporte Eletrônico"
                    subtitulo=""
                    squad="transporte" 
                    cor="#174F81"
                    fundo="/static/images/dfe/squads/transporte/hero.png"
                    scroll="#inicio" />

        <div class="spacer feature32" id="inicio">
            <div class="container">
                <div class="row wrap-feature-32 img-w-85">
                    <div class="col-md-6 remove-image"> 
                        <img src="/static/images/dfe/squads/transporte/1.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"> 
                    </div>
                    <div class="col-md-6 align-self-center" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <h2 class="title m-t-20 op-5"><strong>Nosso software, do seu jeito.</strong></h2>
                        <p class="m-t-30 op-5">Entendemos que cada projeto de software possui particularidades e necessidades específicas. Nossa solução ideal depende da linguagem de programação que você utiliza, do seu modelo de negócio, e até mesmo de suas preferências técnicas.</p>
                        <p class="m-t-30 op-5">Se não conseguir decidir, dê uma olhadinha em cada uma das ferramentas, ou fale com a gente!</p>
                        <p class="m-t-30"><span class="badge badge-pill badge-danger">Importante:</span> <span class="op-5">se você está procurando soluções para CT-e OS, documento para transporte de passageiros, valores e excesso de bagagem, pode encontrá-las</span><a href="#"> aqui.</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer feature6 cards-produto">
          <div class="row m-t-40">
              <div class="wrap-feature6-box shadow">
                  <div class="card bg-white" data-aos="fade-right" data-aos-duration="1200">
                      <div class="card-body">
                          <h6 class="font-medium text-transporte">Componente CT-e</h6>
                          <p class="m-t-20 op-5">DLL com integração via arquivos TXT ou DataSet. Formatos BPL, OCx e TLB.</p>
                          <a href="#" v-scroll-to="'#componente-cte'" class="linking"><span class="text-transporte">Conheça</span> <i class="ti-arrow-right"></i></a>
                      </div>
                  </div>
              </div>
              <div class="wrap-feature6-box shadow">
                  <div class="card text-white" data-aos="fade-down" data-aos-duration="1200">
                      <div class="card-body">
                          <h6 class="font-medium text-saas op-7">Manager SaaS</h6>
                          <p class="m-t-20 op-5">API Web com integração via HTTP, HTTPS ou troca de arquivos TXT e XML em pastas.</p>
                          <a  href="#" v-scroll-to="'#manager-cte'" class="linking op-5"><span class="text-saas">Conheça</span> <i class="ti-arrow-right"></i></a>
                      </div>
                  </div>
              </div>
              <div class="wrap-feature6-box shadow">
                  <div class="card text-white" data-aos="fade-down" data-aos-duration="1200">
                      <div class="card-body">
                          <h6 class="font-medium text-servico op-7">Nota Segura</h6>
                          <p class="m-t-20 op-5">Plataforma integrável para armazenamento e consulta de arquivos XML.</p>
                          <a  href="#" v-scroll-to="'#notasegura-cte'" class="linking op-5"><span class="text-servico">Conheça</span> <i class="ti-arrow-right"></i></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>        

        <div class="feature16" id="componente-cte">
            <div class="row wrap-feature-16">
                <div class="col-lg-6 m-t-40 img-mobile">
                    <img src="/static/images/dfe/squads/transporte/2.png" alt="">
                </div>
                <div class="col-lg-5 text-white">
                    <div class="with-text text-right">
                        <h2 class="text-white m-b-30">Componente CT-e</h2>
                        <p class="text-white op-8">O Componente CT-e da TecnoSpeed é uma biblioteca contendo todos os métodos necessários para emitir Conhecimento de Transporte eletrônico. É a escolha ideal para quem pode consumir OCX e prefere manter todo o processo de mensageria do CT-e dentro do próprio ambiente.</p>
                        <p class="text-white op-8">Para utilizar o Componente em seu software, basta instanciá-lo em seu projeto, implementar chamadas para cada um dos métodos e configurá-los de acordo com sua necessidade. Você terá a ajuda da nossa equipe neste processo. Uma vez integrado, está pronto: seu sistema agora emite CT-e!</p>
                        <p class="text-white op-8">Não esquente a cabeça com Conhecimento de Transporte Eletrônico. Deixa com a gente!</p>
                    </div>
                </div>
            </div>
        </div>  

        <div class="spacer feature32 bg-light">
            <div class="container">
                <div class="row wrap-feature-32">
                    <div class="col-md-6 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                        <ul class="list-block m-b-30">
                            <li><i class="icon-success"></i> <span>Todos os modais: rodoviário, aquaviário, aeroviário, ferroviário, dutoviário e multimodal.</span></li>
                            <li><i class="icon-success"></i> <span>Geração do XML a partir de arquivo de texto ou DataSet.</span></li>
                            <li><i class="icon-success"></i> <span>Assinatura e gestão de Certificados Digitais</span></li>
                            <li><i class="icon-success"></i> <span>Compatibilidade com todos os modelos de contingência</span></li>
                            <li><i class="icon-success"></i> <span>DACTe personalizável através de editor gráfico</span></li>
                            <li><i class="icon-success"></i> <span>Envio do XML para o e-mail do destinatário</span></li>
                        </ul>
                    </div>
                    <div class="col-md-6 img-right img-mobile" style="margin-top: 100px;"> 
                        <div class="middle-center"><img src="/static/images/dfe/squads/transporte/3-cte.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
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
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-transporte "><i class="icon-bell"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Solicite um orçamento <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="2000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-transporte "><i class="icon-cloud"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Use de graça por 30 dias <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="3000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-transporte "><i class="icon-laptop"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Acesse a documentação <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wrap-feature15-box feature15-right" data-aos="flip-left" data-aos-duration="1200">
                        <ul class="list-block m-b-30">
                            <h2 class="text-transporte m-t-30 m-b-30">Serviços relacionados ao Componente CT-e</h2>
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

        <div class="spacer feature16 manager-saas m-t-40 m-b-40" id="manager-cte">
            <div class="row wrap-feature-16">
                <div class="left img-mobile">
                    <img src="/static/images/dfe/squads/industria/produtos/nfe/4.png" alt="">
                </div>
                
                <div class="right text-white">
                    <div class="with-text text-right">
                        <h2 class="m-b-30 text-saas">Manager SaaS</h2>
                        <p class="text-white op-7">O Manager SaaS é uma API em nuvem que gerencia e executa todos os processos de emissão do CT-e, desde a geração do xml até a impressão do documento auxiliar. Se houver problemas de conexão durante a emissão, o Manager SaaS não para: um plugin local que ativa e desativa a contingência automaticamente e segue todas as regras de contingência offline do CT-e. Sem dor de cabeça para você.</p>
                        <p class="text-white op-7">Para utilizar o Manager SaaS, basta fornecer os parâmetros para preenchimento do CT-e. Seu software pode se comunicar com o Manager SaaS através de requisições https ou troca de arquivos em pastas.</p>
                        <p class="text-white op-7">Além do CT-e, o Manager SaaS permite gerenciar e emitir os documentos NF-e, NFS-e, NFC-e, MDF-e, CF-e SAT, CF-e MFE e GNRE.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer imagem-direita">
            <div class="left" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                <ul class="list-block m-b-30">
                    <h2 class="text-saas m-t-30 m-b-30">Recursos do Manager SaaS para CT-e</h2>
                    <li><i class="icon-success"></i> <span>Todos os modais: rodoviário, aquaviário, aeroviário, ferroviário, dutoviário e multimodal.</span></li>
                    <li><i class="icon-success"></i> <span>Geração do XML a partir de requisições HTTP ou troca de arquivos em pasta</span></li>
                    <li><i class="icon-success"></i> <span>Assinatura e gestão de Certificados Digitais</span></li>
                    <li><i class="icon-success"></i> <span>DACTe personalizável através de editor gráfico</span></li>
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
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-saas "><i class="icon-bell"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Solicite um orçamento <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="2000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-saas "><i class="icon-cloud"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Use de graça por 30 dias <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 m-b-30" data-aos="fade-down" data-aos-duration="3000">
                                <div class="d-flex no-block">
                                    <div class="no-shrink"><span class="icon-round bg-white display-4 text-saas "><i class="icon-laptop"></i></span></div>
                                    <div class="p-20">
                                        <h5 class="font-medium"><a href="javascript:void(0)" class="linking op-5">Acesse a documentação <i class="ti-arrow-right"></i></a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wrap-feature15-box" data-aos="flip-left" data-aos-duration="1200">
                        <ul class="list-block m-b-30">
                            <h2 class="text-saas m-t-30 m-b-30">Serviços relacionados ao Manager SaaS CT-e</h2>
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

        <div class="feature16 nota-segura" id="notasegura-cteos">
            <div class="row wrap-feature-16">
                <div class="col-lg-6 img-mobile">
                    <img src="/static/images/dfe/squads/industria/produtos/nfe/6.png" alt="">
                </div>
                <div class="col-lg-6 text-white">
                    <div class="with-text text-right">
                        <h2 class="text-white m-b-30">Nota Segura</h2>
                        <p class="text-white op-7">O Nota Segura é uma solução de armazenamento de arquivos XML dos documentos fiscais eletrônicos, como o próprio CT-e.</p>
                        <p class="text-white op-7">Além do armazenamento seguro e de fácil recuperação, o Nota Segura permite realizar o Manifesto do Destinatário, consulta e download de notas emitidas contra o CNPJ do usuário, envio automático dos arquivos para o contador, entre outros recursos de gestão dos documentos armazenados.</p>
                        <p class="text-white op-7 m-b-40">A integração do Nota Segura com o seu software consiste em um único método na rotina de emissão do CT-e!</p>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow text-blue m-t-30 hide-desktop" data-animation="animated fadeInLeft" href="http://mkt.tecnospeed.com.br/nota-segura-des">
                            <span><strong>Saiba mais sobre o Nota Segura</strong> <i class="ti-arrow-right"></i></span>
                        </a>
                        <a class="btn btn-white btn-rounded btn-md btn-arrow text-blue m-t-30 hide-mobile" data-animation="animated fadeInLeft" href="http://mkt.tecnospeed.com.br/nota-segura-des">
                            <span><strong>Saiba mais</strong> <i class="ti-arrow-right"></i></span>
                        </a>                        
                    </div>
                </div>
            </div>
        </div> 

        <!-- Count -->
        <count fundo="white" cor="#174F81"/>
        <!-- Testemunhos -->
        <!-- <testimonial cor1="#2F73A5" cor2="#174F81"/> -->

        <formRD produto="CT-e" squad="transporte" redirect="cte" documento="dfe-15-ct-e" token="c1fec1e0238110e72399"/>

        <!-- Blog -->
        <blog cor="#174F81"/>

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
  }
};
</script>

<style>
.produtos-cte .cards-produto .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.produtos-cte .cards-produto .card-body a {
  margin-top: auto;
}
.produtos-cte .cards-produto .card {
  height: 200px;
  padding: 0 10px;
}

.produtos-cte .imagem-direita {
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 70%;
  margin: 0 auto;
}
.produtos-cte .imagem-direita .left {
  margin-right: auto;
}
.produtos-cte .imagem-direita .right {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 55%;
}

.produtos-cte .produtos-cte .linking {
  font-size: 25px;
}

.produtos-cte .formulario {
  height: 80vh;
}

.produtos-cte .feature16 {
  background: url(/static/images/dfe/squads/transporte/hero.png);
  background-size: cover;
  background-repeat: no-repeat;
  /* padding: 0 100px; */
}
.produtos-cte .manager-saas {
  background: url(/static/images/dfe/squads/industria/produtos/nfe/back-4.png) !important;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 51vh;

  padding: 0 50px;
}
.produtos-cte .manager-saas .right {
  margin-left: auto;
  width: 50%;
}
.produtos-cte .manager-saas .left {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -30px;
  margin-left: 300px;
}
.produtos-cte .manager-saas .left img {
  width: 45%;
}

.produtos-cte .wrap-feature-16 {
  padding: 60px 200px;
}

.produtos-cte .wrap-feature6-box {
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}

.produtos-cte .wrap-feature6-box .card-body {
  /* padding: 30px; */
}

.produtos-cte .wrap-feature6-box .card-body .linking {
  color: #ffffff;
}

.produtos-cte .wrap-feature6-box .card-body .linking:hover {
  color: #263238;
}

.produtos-cte .wrap-feature6-box .card-body p {
  opacity: 0.8;
}

.produtos-cte .wrap-feature6-box:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.produtos-cte .wrap-feature-16 [class*="col-"] {
  padding: 80px 35px;
}

.produtos-cte .wrap-feature-16 .with-bg {
  width: 100%;
  min-height: 200px;
  background-size: cover;
  background-position: center center;
}

.produtos-cte .wrap-feature-16 .with-text {
  max-width: 500px;
  margin-left: 80px;
}

.produtos-cte .feature32 .img-right {
  margin: auto;
}
.produtos-cte .feature32 img {
  width: 100%;
}

.produtos-cte .shadow {
  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
}

.produtos-cte .feature6 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-family: "GothamRnd-Book", sans-serif;
}

.produtos-cte .feature16 img {
  width: 100%;
}

.produtos-cte .feature6 .wrap-feature6-box {
  height: 200px;
  width: 350px;
  margin: 10px;
}

.produtos-cte .feature6 .wrap-feature6-box .font-medium {
  font-family: "GothamRnd-Medium", sans-serif;
}

.produtos-cte .img-w-85 {
  width: 85%;
}

.produtos-cte .feature-15-left {
  margin-top: 60px;
  margin-left: 3em;
}
.produtos-cte .feature-15-right {
  margin-left: 3em;
}
.produtos-cte .feature15-left {
  margin-top: 60px;
}
.produtos-cte #componente-cte h2 {
  font-size: 40px !important;
}
.produtos-cte #componente-cte p {
  font-size: 17px !important;
}
.produtos-cte #inicio img {
  width: 78%;
}
</style>

<style>
@media (max-width: 767px) {
  .produtos-cte .img-w-85 {
    width: 100%;
  }
  .produtos-cte .img-mobile {
    display: none;
  }
  .produtos-cte .wrap-feature-16 {
    padding: 10px 0px;
    text-align: center !important;
  }
  .produtos-cte .wrap-feature-16 .with-text {
    max-width: 500px;
    margin-left: 0px;
    text-align: left !important;
  }
  .produtos-cte .feature16 .with-text h2 {
    font-size: 30px;
  }
  .produtos-cte .feature-15-left {
    margin-top: 0px;
  }
  .produtos-cte .feature-15 {
    margin-left: 0 !important;
  }
  .produtos-cte .col-lg-6 {
    margin-top: 0px;
  }
  .produtos-cte .wrap-feature15-box {
    margin-top: 0px !important;
    margin-left: 0px !important;
  }
  .produtos-cte .wrap-feature-16 {
    padding: 60px 0px;
  }
  .produtos-cte .manager-saas {
    height: 100%;
  }
  .produtos-cte .manager-saas .right {
    margin: auto;
    width: 100%;
  }
  .produtos-cte .hide-mobile {
      display: initial;
  }
  .produtos-cte .hide-desktop {
      display: none;
  }
  .produtos-cte #notasegura-nfe .btn {
      margin-top: 50px;
  }
  .remove-image {
      display: none;
  }
  #inicio {
    padding: 90px 0px 0px !important;
  }
}
</style>
