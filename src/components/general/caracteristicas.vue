<template>
    <div class="caracteristicas">
        <div class="bg-white spacer feature5" id="caracteristicas">
            <div class="container">
                <!-- Row  -->
                <div class="row justify-content-center">
                    <div class="col-md-7 text-center">
                        <h2 class="title">Aqui você encontra</h2>
                    </div>
                </div>
                <!-- Row  -->
                <div class="row m-t-40 conteudo">
                    <!-- Column -->
                    <div class="col-md-4 wrap-feature5-box">
                        <div class="card" data-aos="fade-right" data-aos-duration="1200">
                            <div class="card-body d-flex">
                                <div class="icon-space"><i class="icon-integracao" :style="squadColor"></i></div>
                                <div class="">
                                    <h6 class="font-medium"><a href="javascript:void(0)" class="linking">Integração facilitada </a></h6>
                                    <p class="m-t-20">Integre com seu sistema através de arquivos TXT, XML, DataSet ou API.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-md-4 wrap-feature5-box">
                        <div class="card" data-aos="fade-down" data-aos-duration="1200">
                            <div class="card-body d-flex">
                                <div class="icon-space"><i class="icon-atualizacao" :style="squadColor"></i></div>
                                <div class="">
                                    <h6 class="font-medium"><a href="javascript:void(0)" class="linking">Atualização contínua </a></h6>
                                    <p class="m-t-20">Sua empresa e seu software sempre atualizados com a legislação em vigor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-md-4 wrap-feature5-box">
                        <div class="card" data-aos="fade-left" data-aos-duration="1200">
                            <div class="card-body d-flex">
                                <div class="icon-space"><i class="icon-monitor" :style="squadColor"></i></div>
                                <div class="">
                                    <h6 class="font-medium"><a href="javascript:void(0)" class="linking">Compatibilidade </a></h6>
                                    <p class="m-t-20">Seja qual for a sua linguagem de programação, temos uma solução para você!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-md-4 wrap-feature5-box">
                        <div class="card" data-aos="fade-right" data-aos-duration="1200">
                            <div class="card-body d-flex">
                                <div class="icon-space"><i class="icon-suporte" :style="squadColor"></i></div>
                                <div class="">
                                    <h6 class="font-medium"><a href="javascript:void(0)" class="linking">Suporte especializado </a></h6>
                                    <p class="m-t-20">Nossa equipe de suporte é especialista em ajudar desenvolvedores de software.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-md-4 wrap-feature5-box">
                        <div class="card" data-aos="fade-up" data-aos-duration="1200">
                            <div class="card-body d-flex">
                                <div class="icon-space"><i class="icon-calculadora" :style="squadColor"></i></div>
                                <div class="">
                                    <h6 class="font-medium"><a href="javascript:void(0)" class="linking">Consultoria tributária </a></h6>
                                    <p class="m-t-20">Oferecemos consultoria para ajudá-lo a compreender e aplicar a legislação.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-md-4 wrap-feature5-box">
                        <div class="card" data-aos="fade-left" data-aos-duration="1200">
                            <div class="card-body d-flex">
                                <div class="icon-space"><i class="icon-emblema" :style="squadColor"></i></div>
                                <div class="">
                                    <h6 class="font-medium"><a href="javascript:void(0)" class="linking">Garantia de qualidade </a></h6>
                                    <p class="m-t-20">Temos a Certificação CMMI Nível 3, prova da qualidade dos nossos serviços.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>              
    </div>
</template>

<script>
export default {
    props: {
        cor: String,
        cor2: String,
        cor3: String
    },
    computed: {
        squadColor() {
        if (this.cor === 'fintech') {
            return `background: ${this.cor};
              background: -webkit-linear-gradient(legacy-direction(to right), ${this.cor} 0%, ${this.cor2} 50%, ${this.cor3} 100%);
              background: -webkit-gradient(linear, left top, right top, from(${this.cor}), to(${this.cor2}));
              background: -webkit-linear-gradient(left, ${this.cor} 0%, ${this.cor2} 50%, ${this.cor3} 100%);
              background: -o-linear-gradient(left, ${this.cor} 0%, ${this.cor2} 50%, ${this.cor3} 100%);
              background: linear-gradient(to right, ${this.cor} 0%, ${this.cor2} 50%, ${this.cor3} 100%);`
        }
        return `color: ${this.cor} !important;
                fill: ${this.cor} !important;`
        }
    },
    mounted: function () {
        AOS.init({
            disable: 'mobile'
        })
    }
}    
</script>

<style>
/* Feature */
.caracteristicas .wrap-feature5-box .card-body {
  padding: 30px;
}

.caracteristicas .wrap-feature5-box .card-body .icon-space {
  padding: 0px 30px 20px 0px;
  font-size: 45px;
  margin: 0px;
}

.caracteristicas .wrap-feature5-box .card-body p {
  margin-bottom: 0px;
}

.caracteristicas .feature5 p,
.caracteristicas h2,
.caracteristicas h6,
.caracteristicas .linking {
  color: #999;
}
.caracteristicas .feature5 .title {
  font-family: "GothamRnd-Medium", sans-serif;
}
.caracteristicas .font-medium {
  font-family: "GothamRnd-Medium", sans-serif;
}

@media (max-width: 1000px) {
    .caracteristicas .conteudo {
        text-align: center !important;
    }
    .caracteristicas .conteudo .col-md-4 {
        /* width: 50% !important; */
    }
    .caracteristicas .wrap-feature5-box .card-body .icon-space {
        padding: 0px 0px 20px 0px;
        font-size: 45px;
        margin: 0px;
    }    
}
</style>
