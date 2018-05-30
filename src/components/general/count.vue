<template>
  <div class="spacer counter-pages" :style="fundoCor">
      <div class="container">
      <!-- Row -->
      <div class="row client-box">
          <!-- column  -->
          <div class="col-lg-3 col-md-6">
          <div class="d-flex no-block">
              <div class="display-5">
              <i class="icon-apartments display-3" :style="squadColor"></i>
              </div>
              <div class="m-l-20">
              <h1 class="font-light m-b-0 op-5" :style="textColor">+
                  <span class="counter">1100</span>
              </h1>
              <h6 class="text-muted font-13 text-uppercase op-5" :style="textColor">Software Houses Atendidas</h6>
              </div>
          </div>
          </div>
          <!-- column  -->
          <!-- column  -->
          <div class="col-lg-3 col-md-6">
          <div class="d-flex no-block">
              <div class="display-5">
              <i class="icon-emblema display-3" :style="squadColor"></i>
              </div>
              <div class="m-l-20">
              <h1 class="font-light m-b-0 op-5" :style="textColor">
                  <span class="counter">98</span>%</h1>
              <h6 class="text-muted font-13 text-uppercase op-5" :style="textColor">Desenvolvedores Satisfeitos</h6>
              </div>
          </div>
          </div>
          <!-- column  -->
          <!-- column  -->
          <div class="col-lg-3 col-md-6">
          <div class="d-flex no-block">
              <div class="display-5">
              <i class="icon-monitor display-3" :style="squadColor"></i>
              </div>
              <div class="m-l-20">
              <h1 class="font-light counter m-b-0 op-5" :style="textColor">27</h1>
              <h6 class="text-muted font-13 text-uppercase op-5" :style="textColor">Soluções para o seu projeto</h6>
              </div>
          </div>
          </div>
          <!-- column  -->
          <!-- column  -->
          <div class="col-lg-3 col-md-6">
          <div class="d-flex no-block">
              <div class="display-5">
              <i class="icon-suporte display-3" :style="squadColor"></i>
              </div>
              <div class="m-l-20">
              <h1 class="font-light m-b-0 op-5" :style="textColor">+
                  <span class="counter">100</span>
              </h1>
              <h6 class="text-muted font-13 text-uppercase op-5" :style="textColor">Colaboradores Especialistas</h6>
              </div>
          </div>
          </div>
          <!-- column  -->
      </div>
      </div>
  </div>  
</template>

<script>
export default {
    props: {
        cor: String,
        fundo: '',
        text: String
    },
    mounted: function () {
        $(function () {
            console.log($('.counter'))
            $('.counter').counterUp({delay: 10});
        })
    },
    computed: {
        squadColor() {
        
        return `color: ${this.cor}; !important`
        },
        fundoCor () {
            if (this.fundo === 'white') {
                return 'background: #fff !important;'
            } else if (this.fundo === 'transparent') {
                return `background-color:rgba(0, 0, 0, 0);`;
            } else {
                return 'background: #f5f7fa !important;'
            }
        },
        textColor () {
            if (this.text === 'white')
                return `color: white !important;
                        opacity: 1;`;
        }
    }
}
</script>