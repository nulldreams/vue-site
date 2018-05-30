<template>  
  <div class="blog-home1 bg-white">
      <div class="container">
          <!-- Row  -->
          <div class="row justify-content-center">
              <!-- Column -->
                  <div class="col-md-8 text-center">
                    <h1 class="op-5 title">Fique por dentro</h1>
                    <h6 class="op-5 subtitle">Veja as publicações mais recentes do blog da TecnoSpeed</h6>
                  </div>
              <!-- Column -->

              <!-- Column -->
          </div>
          <div class="row m-t-40">
              <!-- Column -->
              <div class="col-md-4" v-for="post of posts" :key="post.id">
                  <div class="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                      <a :href="post.link" target="_blank"><img class="card-img-top" v-bind:src="post.imagem" alt="wrappixel kit"></a>
                      <div class="p-30">
                          <div class="d-flex no-block font-14">
                              <a :href="post.link" target="_blank" :style="squadColor">{{post.produto}}</a>
                              <span class="ml-auto">{{post.data}}</span>
                          </div>    
                          <h5 class="op-8 font-medium m-t-20"><a :href="post.link" target="_blank" class="link">{{post.titulo}}</a></h5>
                          
                      </div>
                  </div>
              </div>
              <!-- Column -->
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    props: {
        cor: String
    },
    data() {
      return {
        posts: []
      }
    },
    created() {
      this.posts = [
        { id: 1, produto: 'DFe', titulo: 'LBC Sistemas e TecnoSpeed ampliam parceria...', data: '17 de Maio, 2018', imagem: 'https://s3.amazonaws.com/ciranda/entities/1/c23fc11b9fe4e70ba6e6e60b360b6a2baec377a4.png', link: 'http://tsdn.tecnospeed.com.br/blog-da-tecnospeed/post/lbc-sistemas-e-tecnospeed-ampliam-parceria-em-documentos-fiscais-eletronicos' },
        { id: 2, produto: 'SPED', titulo: 'Está lançado o Componente SPED Fiscal da TecnoSpeed!', data: '17 de Maio, 2018', imagem: 'https://s3.amazonaws.com/ciranda/entities/1/ae84d01c6957eb25fb605c50c505b396a0b03d0e.png', link: 'http://tsdn.tecnospeed.com.br/blog-da-tecnospeed/post/esta-lancado-o-componente-sped-fiscal-da-tecnospeed' },
        { id: 3, produto: 'DFe', titulo: 'O que mudou na NT 2017.001 versão 1.20', data: '16 de Maio, 2018', imagem: 'https://s3.amazonaws.com/ciranda/entities/1/61db6c21aea58f0b751a53f3d6e63de456a30623.png', link: 'http://tsdn.tecnospeed.com.br/blog-da-tecnospeed/post/o-que-mudou-na-versao-1-5-da-nota-tecnica-2016-002' }
      ]
    },
    computed: {
        squadColor() {
            return `color: ${this.cor}; !important`
        }
    }
  }
</script>

<style>
.blog-home1 .title {
        line-height: 30px;
}
@media (min-width: 1000px) and (max-width: 1280px) {
    .blog-home1 {
        padding: 100px 0;
    }
}
@media (min-width: 1300px) and (max-width: 1440px) {
}
</style>
