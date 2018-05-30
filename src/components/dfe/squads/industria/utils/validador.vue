<template>
    <div class="util-validador">
        <div class="header">
            <div class="conteudo">
                <h2 class="text-white">Validador de NF-e</h2>
                <p class="text-white m-t-40 btn-arrow">Faça um diagnóstico completo do seu XML de NF-e.</p>
                <div class="botoes m-t-40">
                    <a class="btn btn-white btn-rounded btn-md btn-arrow" data-animation="animated fadeInLeft" data-toggle="collapse" href="#" v-scroll-to="{ el: '#validador', offset: -50 }"> 
                        <span class="text-uppercase">Validar XML <i class="ti-arrow-down"></i></span>
                    </a>
                    <a class="btn btn-white-inverse btn-rounded btn-md btn-arrow m-l-20" data-animation="animated fadeInLeft" data-toggle="collapse" href="#" v-scroll-to="{ el: '#componente-nfe', offset: -100 }"> 
                        <span class="text-uppercase">Conheça o componente NF-e <i class="ti-arrow-down"></i></span>
                    </a>
                </div>
            </div>
        </div>

        <section class="spacer painel" id="validador">
            <h2 class="m-b-40">Valide o seu XML</h2>
            <div class="container">
                <div class="lines">
                    <div class="validador">
                        <div class="left">
                            <div class="xml-area">
                                <textarea class="card-shadow xml" placeholder="Cole o XML aqui" v-model="arquivo_entrada"></textarea>
                            </div>
                            <div class="buttons-area">
                                <a @click="limpar()" class="btn text-white btn-white btn-rounded btn-arrow btn-md" data-animation="animated fadeInLeft"> 
                                    <span>Limpar <i class="fa fa-eraser"></i></span>
                                </a>
                                <a @click="validar()" class="btn text-white btn-white btn-rounded btn-md btn-arrow btn-saas" data-animation="animated fadeInLeft"> 
                                    <span>Validar <i class="fa fa-check"></i></span>
                                </a>
                                <a class="btn text-white btn-white btn-rounded btn-md btn-arrow btn-saas" data-animation="animated fadeInLeft"> 
                                    <span>Validar e baixar <i class="fa fa-cloud-download"></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="right">
                            <div class="steps">
                                <div class="step">
                                    <div class="imagem"><img src="/static/images/validador/1.png" class="img-fluid" alt=""></div>
                                    <div class="texto"><p class="op-5">Cole no quadro abaixo o conteúdo do arquivo XML, TX2 ou REC a ser validado.</p></div>
                                </div>
                                <div class="step">
                                    <div class="imagem"><img src="/static/images/validador/2.png" class="img-fluid" alt=""></div>
                                    <div class="texto"><p class="op-5">Após inserir o conteúdo, clique em validar ou validar e baixar para iniciar o processo de validação.</p></div>
                                </div>
                                <div class="step">
                                    <div class="imagem"><img src="/static/images/validador/3.png" class="img-fluid" alt=""></div>
                                    <div class="texto"><p class="op-5">Confira o resultado da validação abaixo, e a lista de erros encontrados.</p></div>
                                </div>
                            </div>
                            <div class="button-step">                       
                                <a class="btn text-white btn-rounded btn-md btn-arrow btn-saas-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                    <span>Confira exemplos de<br> notas para validação <i class="ti-arrow-down"></i></span>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">XML Válido</a>
                                    <a class="dropdown-item" href="#">XML Inválido</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">TX2 Válido</a>
                                    <a class="dropdown-item" href="#">TX2 Inválido</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">REC Válido</a>
                                    <a class="dropdown-item" href="#">REC Inválido</a>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div class="m-t-40 resultado">
                        <textarea class="xml" placeholder="Resultado" v-model="resultado"></textarea>
                    </div>                 
                </div>
            </div>
        </section>

        <div class="spacer feature16 componente-nfe" id="componente-nfe">
            <div class="container">
                <div class="row wrap-feature-16">
                    <div class="col-lg-6">
                        <div class="with-text left text-left">
                            <img src="/static/images/dfe/squads/industria/produtos/nfe/2.png" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="with-text right text-right">
                            <p class="text-white">Leve a inteligência fiscal do Validador NF-e para dentro do seu software.</p>
                            <div class="botao-nfe">
                                <a class="btn btn-rounded btn-white btn-md btn-arrow" data-animation="animated fadeInLeft" href="/dfe/nfe"> 
                                    <span>Conheça nossas soluções para NF-e <i class="ti-arrow-right"></i></span>
                                </a>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

        <section class="spacer bg-white">
            <div class="container">
                <div class="comentarios-facebook">
                    <div id="fb-root"></div>
                    <div class="fb-comments" data-href="http://validadornfe.tecnospeed.com.br/" data-order-by="reverse_time" data-width="800px" data-numposts="4" data-colorscheme="light" style="margin-left:10px;"></div>                
                </div>                
            </div>
        </section>

        <blog cor="#33A0DD"/>
    </div>
</template>

<script>
  import blog from '@/components/general/blog'
  import axios from 'axios'

export default {
  components: {
      blog
  },
  data () {
      return {
          arquivo_entrada: '',
          resultado: ''
      }
  },
  mounted: function() {
    $(function () {
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));        
    })      
  },
  methods: {
      limpar: function () {
          this.arquivo_entrada = ''
          this.resultado = ''
      },
      validar: function() {
          let nfe = this.arquivo_entrada
          console.log(nfe)
          axios.post('http://validadornfe.tecnospeed.com.br/validar', { txtXML: nfe }).then(response => {
              this.resultado = response.data
          }).catch(error => {
              console.log(error)
          })
      }
  }
};
</script>

<style>
.util-validador .header {
    background: #333132;
    height: 100vh;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
}
.util-validador .header .conteudo {
    text-align: center;
}
.util-validador .header .conteudo h2 {
    font-size: 60px;
    font-family: 'GothamRnd-Bold', sans-serif;
}
.util-validador .header .conteudo p {
    font-size: 25px;
}
.util-validador .header .conteudo .botoes a:first-child {
    color: #333132;
    font-family: 'GothamRnd-Medium', sans-serif;
}
.util-validador .header .conteudo .botoes a:last-child {
    background: #333132;
    font-family: 'GothamRnd-Medium', sans-serif;
}
.util-validador .painel h2 {
    text-align: center;
    font-size: 25px;
}
.util-validador .painel .lines  {
    display: flex;
    flex-direction: column;
}
.util-validador .painel .lines .resultado {
    height: 350px;
}
.util-validador .painel .lines .validador {
    display: flex;
    flex-direction: row;

    height: 500px;
}
.util-validador .painel .lines .validador .left {
    width: 65%;
    height: 100%;

    display: flex;
    flex-direction: column;
}
.util-validador .painel .lines .validador .right {
    margin-left: 10%;
    width: 25%;
    height: 100%;
    max-height: 100%;

    display: flex;
    flex-direction: column;
}
.util-validador .painel .lines .validador .right .steps {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 75%;
}
.util-validador .painel .lines .validador .right .step {
    height: 100px;
    display: flex;
    flex-direction: row;
}
.util-validador .painel .lines .validador .right .step .imagem img {
    width: 60%;
}
.util-validador .painel .lines .validador .right .step .texto {
    width: 80%;
}
.util-validador .painel .lines .validador .right .button-step {
    margin-top: auto;
    text-align: center;
}
.util-validador .painel .lines .validador .right .button-step .btn-saas-dark {
    height: 60px;
    width: 80%;
    padding: 5px;;
    border: none;
}
.util-validador .painel .lines .validador .right .button-step span {
    width: 80%;
    text-align: center;
}

.util-validador .painel .lines .validador .left .xml-area {
    height: 75%;
}
.util-validador .painel .lines .validador .left .buttons-area {
    margin-top: auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
}
.util-validador .painel .lines .validador .left .buttons-area a:first-child {
    background: #ff7675;
}
.util-validador .painel .lines .validador .left .buttons-area a {
    width: 220px;
    font-family: 'GothamRnd-Book', sans-serif;
    line-height: 30px;
}

.util-validador .painel .lines .validador .left .xml-area .xml, .util-validador .painel .lines .resultado .xml {
    background: #f5f7fa;
    border-radius: 2.5em;
    height: 100%;
    width: 100%;
    border: none;
    box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.2);
    padding: 40px;
    font-family: 'GothamRnd-Book', sans-serif;
    color: #777;
}
.util-validador .painel .lines .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border: none;
}
.util-validador .painel .lines .dropdown-menu {
    width: 218px;
}
.util-validador .painel .lines .dropdown-menu a {
    margin: 0;
    height: 35px !important;
}

.util-validador .componente-nfe {
    background: #0f76b8;
}
.util-validador .componente-nfe .botao-nfe {
    text-align: center;
}
.util-validador .componente-nfe .botao-nfe a {
    color: #0f76b8;
    font-family: 'GothamRnd-Medium', sans-serif;
    width: 90%;
}
.util-validador .componente-nfe p {
    font-family: 'GothamRnd-Medium', sans-serif;
    font-size: 39px;
}

.util-validador .comentarios-facebook {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
}
.util-validador .comentarios-facebook .fb-comments #facebook .plugin {
    font-family: 'GothamRnd-Book', sans-serif;
}
</style>
