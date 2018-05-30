<template>
  <div class="page-boleto">
    <div class="header-boleto">
        <div class="titulo">
            <h2><strong>Boleto</strong> <i>TecnoSpeed</i></h2>
            <div class="botoes m-t-40">
                <a class="btn btn-rounded btn-md btn-arrow" data-animation="animated fadeInLeft" data-toggle="collapse"  href="#" v-scroll-to="'#inicio'" style="border-color: #fff;"> 
                    <span class="text-uppercase">CONHEÇA <i class="ti-arrow-down"></i></span> 
                </a>
                <a class="btn btn-white btn-rounded btn-md btn-arrow text-fintech m-l-20" data-animation="animated fadeInLeft" data-toggle="collapse" href="#" v-scroll-to="'#formulario'"> 
                    <span>Experimente por 30 dias <i class="ti-arrow-down"></i></span> 
                </a>
            </div>
            <div class="absolute-image img-mobile">
                <img src="/static/images/dfe/squads/fintech/produtos/boleto/print-header.png" class="img-fluid card-shadow" alt="">
            </div>
        </div>
    </div>

    <div class="spacer feature32" id="inicio">
        <div class="container">
            <div class="row wrap-feature-32">
                <div class="col-md-7 img-right img-mobile" style="margin-top: auto; margin-bottom: auto;"> 
                    <div class="middle-center"><img src="/static/images/dfe/squads/fintech/produtos/boleto/1.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
                </div>
                <div class="col-md-5 align-self-center" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                    <div class="with-text">
                        <p class="op-5">Com um layout único e compatibilidade com dezenas de bancos, o Boleto TecnoSpeed permite que você registre remessas de boleto de forma automática ou até mesmo instantânea, sem acessar o portal do banco.</p>
                        <p class="op-5">Além do registro de boletos, a solução oferece recursos integientes para tornar o processo de recebimento do seu cliente muito mais eficiente, com ferramentas de conciliação, cobrança automática por e-mail e SMS, e muito mais.</p>
                        <p class="op-7"><strong>Prepare-se para elevar seu software à um novo patamar de inteligência e gestão financeira.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    <div class="spacer feature32">
        <div class="container">
            <div class="row wrap-feature-32">
                <div class="col-md-6 align-self-center" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                    <div class="with-text">
                        <h2 class="m-b-40 text-fintech-soft">Dezenas de bancos, <strong>um só layout</strong></h2>
                        <p class="op-5">Quem já implementou módulos de boleto em um software, sabe como é difícil e trabalhoso desenvolver e manter uma interface de comunicação com cada banco utilizado por seus clientes.</p>
                        <p class="op-5">Com o Boleto TecnoSpeed, seu software pode fornecer os parâmetros em um só layout para todos os bancos: cabe à nossa solução identificar o banco e gerar o boleto conforme ele exige.</p>
                        <p class="op-7">No retorno de solicitações de alteração no boleto, cada banco também possui seus próprios códigos, que o desenvolvedor precisaria implementar separadamente. A  Solução Cobrança Bancária também os padroniza pra você, tratando-os e te devolvendo arquivos de retorno sempre iguais, independente dos bancos de origem!</p>
                    </div>
                </div>
                <div class="col-md-6 img-right img-mobile" style="margin-top: auto; margin-bottom: auto;"> 
                    <div class="middle-center"><img src="/static/images/dfe/squads/fintech/produtos/boleto/2.png" class="img-responsive" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300"></div>
                </div>
            </div>
        </div>
    </div>   

    <div class="spacer bg-light sistema">
        <div class="conteudo">
            <div class="spacer feature32">
                <div class="container">
                    <div class="row wrap-feature-32 titulo">
                        <div class="col-md-12 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                            <div class="with-text text-center">
                                <h2 class="text-fintech-soft m-b-40">Pronto para o seu sistema</h2>
                                <p class="op-5">Ao planejar as formas de integração com o Boleto TecnoSpeed, nos certificamos de que seria possível utilizá-lo em qualquer projeto, independente da linguagem de programação.</p>
                                <p class="op-7"><strong>Você pode integrar seu sistema ao Boleto TecnoSpeed de 2 formas:</strong></p>                                
                            </div>
                        </div>
                    </div>
                    <div class="row wrap-feature-32">
                        <div class="col-md-6 img-right img-mobile" style="margin-top: auto; margin-bottom: auto;"> 
                            <div class="middle-center">
                                <img src="/static/images/dfe/squads/fintech/produtos/boleto/cloud.png" class="img-responsive img-api" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300">
                            </div>
                        </div>
                        <div class="col-md-6 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                            <div class="with-text">
                                <h2 class="text-fintech-soft m-b-40">API</h2>
                                <p class="op-5">Seu software se comunica diretamente com nossa plataforma através de requisições HTTPS.</p>
                            </div>
                        </div>
                    </div>
                    <div class="spacer feature32">
                        <div class="container">
                            <div class="row wrap-feature-32">
                                <div class="col-md-6 align-self-center" style="display: flex;" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="300">
                                    <div class="with-text text-right">
                                        <h2 class="text-fintech-soft m-b-40">OCX</h2>
                                        <p class="op-5">Uma biblioteca de métodos instanciada em seu projeto faz a interface de comunicação entre seu software e nossa plataforma.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 img-right img-mobile" style="margin-top: auto; margin-bottom: auto;"> 
                                    <div class="middle-center">
                                        <img src="/static/images/dfe/squads/fintech/produtos/boleto/engine.png" class="img-responsive img-ocx" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="300">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="spacer alem-emissao bg-boleto-gradiant">
        <div class="titulo m-b-40">
            <h2 class="text-white">Muito além do boleto</h2>
            <p class="text-white op-7 m-t-20 m-b-40">Confira os recursos que o Boleto TecnoSpeed te oferece:</p>
        </div>
        <div class="absolute-div m-t-40">
            <div class="spacer feature45 bg-white">
                <div class="container">
                    <div class="row wrap-feature45-box">
                        <div class="col-lg-12">
                            <nav class="nav f45-tab" id="table-saas">
                                <a class="nav-item nav-link active" id="wp-tab" data-toggle="tab" href="#wp-hos" aria-expanded="true">
                                    <i class="hidden-sm-up icon-automatica"></i> <span class="hidden-sm-down">Transmissão Automática</span>
                                </a>
                                <a class="nav-item nav-link" id="sh-tab" data-toggle="tab" href="#sh-hos">
                                    <i class="hidden-sm-up icon-instantanea"></i> <span class="hidden-sm-down">Transmissão Instantânea</span>
                                </a>
                                <a class="nav-item nav-link" id="vps-tab" data-toggle="tab" href="#vps-hos">
                                    <i class="hidden-sm-up icon-cobranca"></i> <span class="hidden-sm-down">Cobrança Automática</span>
                                </a>
                                <a class="nav-item nav-link" id="ded-tab" data-toggle="tab" href="#ded-hos">
                                    <i class="hidden-sm-up icon-layout"></i> <span class="hidden-sm-down">Personalização de Layout</span>
                                </a>
                                <a class="nav-item nav-link" id="whats-tab" data-toggle="tab" href="#whats-hos">
                                    <i class="hidden-sm-up icon-whatsapp"></i> <span class="hidden-sm-down">Boleto via WhatsApp</span>
                                </a>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="wp-hos" role="tabpanel" aria-labelledby="wp-tab">
                                    <div class="row">
                                        <div class="col-lg-5 m-t-40">
                                            <h3 class="title text-fintech-soft">Transmissão Automática</h3>
                                            <h6 class="op-5">Caso o cliente opte pelo modelo de Transmissão Automática, seu software só precisará solicitar a geração da remessa de boletos A partir daí, nossa API se encarrega de todas as etapas do processo de comunicação com o banco. Dessa forma, o cliente não precisa mais ficar manipulando arquivos de remessa ou retorno e acessando portais de bancos!</h6>
                                            <p class="op-5"><small>* Para ativar a Transmissão Automática, é necessário obter uma autorização formal do banco.</small></p>
                                        </div>
                                        <div class="col-lg-6 ml-auto m-t-40 animated bounceInRight">
                                            <img src="/static/images/dfe/squads/fintech/produtos/boleto/automatica.png" class="img-fluid rounded img-mobile" alt="wrapkit" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sh-hos" role="tabpanel" aria-labelledby="sh-tab">
                                    <div class="row">
                                        <div class="col-lg-5 m-t-40">
                                            <h3 class="title text-fintech-soft">Transmissão Instantânea</h3>
                                            <h6 class="op-5">Optando pelo modo de Transmissão Instantânea, seu software apenas gera o boleto, e nossa plataforma faz uma requisição para a API do banco. Imediatamente, em questão de segundos, você obtém o retorno do banco informando se seu(s) boleto(s) foram registrados ou se ocorreu alguma falha.</h6>
                                            <p class="op-5"><small>* Opção disponível apenas para o banco Santander até o momento.</small></p>
                                            
                                        </div>
                                        <div class="col-lg-6 ml-auto m-t-40 animated bounceInUp">
                                            <img src="/static/images/dfe/squads/fintech/produtos/boleto/instantanea.png" class="img-fluid rounded img-mobile" alt="wrapkit" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="vps-hos" role="tabpanel" aria-labelledby="vps-tab">
                                    <div class="row">
                                        <div class="col-lg-5 m-t-40">
                                            <h3 class="title text-fintech-soft">Cobrança Automática</h3>
                                            <h6 class="op-5">Com a Cobrança Automática, você pode criar modelos de e-mail e SMS em um editor do próprio componente, contendo diversas variáveis para compor o texto (como o nome do cliente ou o valor do boleto, por exemplo) e então configurar o envio automático deles de acordo com o prazo de vencimento ou o status do boleto!</h6>
                                        </div>
                                        <div class="col-lg-6 ml-auto m-t-40 animated bounceInLeft">
                                            <img src="/static/images/dfe/squads/fintech/produtos/boleto/cobranca.png" class="img-fluid rounded img-mobile" alt="wrapkit" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="ded-hos" role="tabpanel" aria-labelledby="ded-tab">
                                    <div class="row">
                                        <div class="col-lg-5 m-t-40">
                                            <h3 class="title text-fintech-soft">Personalização de Layout</h3>
                                            <h6 class="op-5">Nossa solução possui um recurso de personalização do layout via HTML para você criar um boleto diferente para cada um dos seus cliente. Isso pode ser feito através de uma interface gráfica simples e intuitiva, ou, se preferir, direto via código HTML!</h6>
                                        </div>
                                        <div class="col-lg-6 ml-auto m-t-40 animated bounceInDown">
                                            <img src="/static/images/dfe/squads/fintech/produtos/boleto/layout.png" class="img-fluid rounded img-mobile" alt="wrapkit" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="whats-hos" role="tabpanel" aria-labelledby="whats-tab">
                                    <div class="row">
                                        <div class="col-lg-5 m-t-40">
                                            <h3 class="title text-fintech-soft">Boleto via WhatsApp</h3>
                                            <h6 class="op-5">Na interface gráfica do Boleto TecnoSpeed, com apenas alguns cliques, é possível enviar uma mensagem contendo o link do boleto para o cliente via Whatsapp!</h6>
                                        </div>
                                        <div class="col-lg-6 ml-auto m-t-40 animated bounceInLeft">
                                            <img src="/static/images/dfe/squads/fintech/produtos/boleto/whatsapp.png" class="img-fluid rounded img-mobile" alt="wrapkit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>        
    </div>  

    <div class="spacer bg-light integre">
        <div class="titulo">
            <h2 style="color: #202069;">Integre Seu Software ao Boleto TecnoSpeed!</h2>
            <div class="botao m-t-40">
                <a class="btn btn-boleto btn-rounded btn-md btn-arrow text-white hide-mobile" data-animation="animated fadeInLeft" data-toggle="collapse" href="#" v-scroll-to="'#formulario'"> 
                    <span>Experimente por 30 dias<i class="ti-arrow-down"></i></span>
                </a>
                <a class="btn btn-boleto btn-rounded btn-md btn-arrow text-white show-mobile" data-animation="animated fadeInLeft" data-toggle="collapse" href="#" v-scroll-to="'#formulario'"> 
                    <span>Experimente por 30 dias<i class="ti-arrow-down"></i></span>
                </a>
            </div>
        </div>
    </div>  

  <!-- Count -->
  <!-- <count cor="#E44188"/> -->
    <!-- <testimonial/> -->

    <formHome fundo="" squad="boleto" trial="Baixe agora a versão teste gratuitamente!" redirect="boleto" documento="boleto" token="6e994ee6b11575ee3d81"/>  
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

  export default {
    components: {
      headerComp,
      count,
      caracteristicas,
      testimonial,
      blog,
      formHome
    },
    mounted () {
        AOS.init({
        disable: "mobile"
        })
    }
  }
</script>
<style>
.page-boleto .show-mobile {
    display: none;
}
.page-boleto .hide-mobile {
    display: initial;
}
.page-boleto .testimonial10 {
    background: linear-gradient(to bottom, #E44188 0%, #4442B2 100%);
}
.page-boleto .show-mobile {
    display: none;
}
.page-boleto .hide-mobile {
    display: initial;
}
.page-boleto .integre {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.page-boleto .integre .titulo h2 {
    font-size: 60px;
    line-height: 70px;
    font-family: 'GothamRnd-Bold', sans-serif;
    padding: 0 650px 0 650px;
    color: #333132;
    text-align: center;
}
.page-boleto .integre .titulo .botao {
    text-align: center;
}
.page-boleto .integre .titulo .botao a {
    width: 500px;
    font-family: 'GothamRnd-Bold', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
}
.page-boleto .alem-emissao img {
    width: 80%;
}
.page-boleto .alem-emissao .absolute-div .feature45 {
    padding: 5px 40px;
    border-top-left-radius: 2.5em;
    border-top-right-radius: 2.5em;
}
.page-boleto .alem-emissao .absolute-div .wrap-feature45-box .f45-tab > a.active {
    color: #777;
}
.page-boleto .alem-emissao .absolute-div .wrap-feature45-box .f45-tab > a {
    font-family: 'GothamRnd-Book', sans-serif;
    font-size: 15px;
    color: #999;;
}
.page-boleto .alem-emissao {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background: linear-gradient(to bottom, #333132 60%, #fff 40%); */
    background: linear-gradient(to bottom, #E44188 0%, #4442B2 60%, #fff 40%);
}
.page-boleto .alem-emissao .titulo h2 {
    font-family: 'GothamRnd-Bold', sans-serif;
    font-size: 75px;
    padding: 0 700px 0 700px;
    line-height: 80px;
    text-align: center;
}
.page-boleto .alem-emissao .titulo p {
    text-align: center;
}


.page-boleto .sistema .conteudo .titulo {
    margin-bottom: 10%;
    padding: 0 50px 0 50px;
}
.page-boleto .sistema .conteudo {
    width: 50%;
    margin: auto;
}
.page-boleto .sistema .conteudo .img-api {
    width: 60%;
    margin-left: 90px;    
}
.page-boleto .sistema .conteudo .img-ocx {
    width: 50%;
    margin-left: 90px;  
}
.page-boleto .header-boleto {
    background: url(/static/images/dfe/squads/fintech/produtos/boleto/hero.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;

    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
}
.page-boleto .header-boleto .titulo {
    margin-bottom: 5%;
}
.page-boleto .header-boleto .titulo h2 {
    color: #fff;
    font-size: 60px;
}
.page-boleto .header-boleto .titulo .botoes {
    text-align: center;
    font-family: 'GothamRnd-Book', sans-serif;
}
.page-boleto .header-boleto .titulo .botoes a:last-child {
    border-color: #fff;
}
.page-boleto .header-boleto .absolute-image {
    /* background: tomato; */
    width: 100%;
    position: absolute;
    left: 50%;
    top: 10%;
}
.page-boleto .header-boleto .absolute-image img {
    width: 50%;
}
.page-boleto .header-boleto .absolute-image img:empty {
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.page-boleto .feature32 {
    margin-top: 10%;
}
.wrap-feature45-box {
  margin-top: 60px; }
  .wrap-feature45-box .f45-tab {
    display: table;
    width: 100%; }
    .wrap-feature45-box .f45-tab > a {
      display: table-cell;
      border: 1px solid rgba(120, 130, 140, 0.13);
      text-align: center;
      padding: 15px 10px;
      background: #f4f8fa;
      color: #263238; }
      .wrap-feature45-box .f45-tab > a.active {
        border-bottom-color: transparent;
        background: #ffffff;
        font-weight: 400; }
  .wrap-feature45-box .tab-pane {
    padding: 60px 0; }
</style>
<style>
@media (min-width: 1000px) and (max-width: 1440px) {
    .page-boleto .header-boleto .absolute-image {
        /* background: tomato; */
        width: 100%;
        position: absolute;
        left: 50%;
        top: 9%;
    }    
    .page-boleto .alem-emissao .titulo h2 {
        font-family: 'GothamRnd-Bold', sans-serif;
        font-size: 75px;
        padding: 0 400px 0 400px;
        line-height: 80px;
        text-align: center;
    }    
}
@media (max-width: 767px) {
    .page-boleto .img-mobile {
        display: none;
    }
    .page-boleto .show-mobile {
        display: initial;
    }  
    .page-boleto .hide-mobile {
        display: none;
    }
    .page-boleto .header-boleto {
        height: 100vh;
    }   
    .page-boleto .header-boleto .titulo h2 {
        color: #fff;
        font-size: 50px;
        padding: 0;
        text-align: center;
    }  
    .page-boleto .header-boleto .titulo .botoes a:last-child {
        margin-top: 10px;
    }   
    .page-boleto .sistema .conteudo {
        width: 100%;
        margin: auto;
    }    
    .page-boleto .sistema .conteudo .titulo {
        margin-bottom: 10%;
        padding: 0;
    }    
    .page-boleto .alem-emissao .titulo h2 {
        font-family: 'GothamRnd-Bold', sans-serif;
        font-size: 75px;
        padding: 0;
        line-height: 80px;
        text-align: center;
    }    
    .page-boleto .alem-emissao .absolute-div .feature45 {
        padding: 5px 10px;
        border-top-left-radius: 2.5em;
        border-top-right-radius: 2.5em;
    }    
    .page-boleto .integre .titulo h2 {
        font-size: 50px;
        line-height: 70px;
        font-family: 'GothamRnd-Bold', sans-serif;
        padding: 0;
        color: #333132;
        text-align: center;
    }    
    .page-boleto .integre .titulo .botao a {
        width: 320px;
    }  
}
</style>

