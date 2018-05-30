<template>
  <div class="page-obrigado">
    <header-top produto="Obrigado!"
                produtoMobile="NF-e"
                subtitulo="Projetos de software para indústria são complexos. Documentos fiscais eletrônicos, também. Desse segundo, a gente cuida para você."
                squad="" 
                cor="" 
                :imagem="defaultOptions" 
                fundo=""
                scroll="#inicio" />
 
  <!-- Caracteristicas -->
  <!-- <caracteristicas cor="#33A0DD"/> -->
  <!-- Count -->
  <!-- <count cor="#33A0DD"/> -->
  <!-- Testemunhos -->
  <!-- <testimonial cor1="#33A0DD" cor2="#0F76B8"/> -->
  <!-- Form -->
  <!-- <formHome squad="industria" redirect="industria" documento="dfe-2-industria" token="f92107608cab268f27d1"/> -->
  <!-- Blog -->
  <blog cor="#33A0DD"/>
  </div>
</template>
<script>
    import headerTop from '@/components/general/header-obrigado'
    import blog from '@/components/general/blog'

    export default {
    props: {
        squad: String
    },
    components: {
        headerTop,
        blog
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
