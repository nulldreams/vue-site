<template>
  <div class="form-rd-homes" id="formulario" :style="fundoColor">
    <div class="texto">
      <h2 class="op-5" v-if="!trial" :style="textColor">Gostou? Venha conhecer!</h2>
      <h2 class="op-5" v-if="trial" :style="textColor">{{trial}}</h2>
      <p class="op-5" v-if="!trial" :style="textColor">Se você ficou com alguma dúvida, deseja uma apresentação técnica ou um orçamento, preencha o formulário abaixo, e nós entraremos em contato!</p>
    </div>
    <div class="form">
      <div :id="documento + '-' + token">
        <section :id="'form-' + documento + '-' + token">
          <div :id="'form-container-' + documento + '-' + token" class="cleanslate">
            <div :id="'conversion-' + documento + '-' + token" class="wrapper">
              <section>
                <form :id="'conversion-form-' + documento + '-' + token" action="https://www.rdstation.com.br/api/1.2/conversions" method="POST"
                  data-internal-rdstation-form="" data-form-autofill="">

                  <input type="hidden" name="token_rdstation" value="20897a981db18ca82c40c3a4fe53a138">
                  <input type="hidden" name="identificador" :value="documento">
                  <input type="hidden" name="_is" value="6">
                  <input type="hidden" name="redirect_to" :value="'http://tecnospeed.com.br/' + redirect + '/obrigado'">
                  <input type="hidden" name="c_utmz" value="">
                  <input type="hidden" name="traffic_source" value="">
                  <input type="hidden" name="client_id" value="">
                  <input type="hidden" name="thankyou_message" value="" disabled="">

                  <div :id="'error-container-' + documento + '-' + token" class="hide">
                    <p>Preencha corretamente os campos marcados</p>
                  </div>

                  <div class="field">
                    <label for="name">Nome*</label>
                    <input type="text" name="name" id="name" value="" class="form-control required js-text" placeholder=""
                      required="required">
                  </div>
                  <div class="field">
                    <label for="email">Email*</label>
                    <input type="email" name="email" id="email" value="" class="form-control required js-email" placeholder=""
                      required="required">
                  </div>
                  <div class="field">
                    <label for="company">Empresa*</label>
                    <input type="text" name="company" id="company" value="" class="form-control required js-text"
                      placeholder="" required="required">
                  </div>
                  <div class="field">
                    <label for="custom_fields_63188">Skype</label>
                    <input type="text" name="custom_fields[63188]" id="custom_fields_63188" value="" class="form-control js-text"
                      placeholder="">
                  </div>

                  <div class="actions">
                    <input type="submit" :class="buttonClass" id="cf_submit-documento + '-' + token" value="Enviar">
                    <img src="//d335luupugsy2.cloudfront.net/images/ajax-loader.gif" id="ajax-loader-documento + '-' + token" class="hide"
                      alt="#{Enviando...}">
                  </div>


                  <div style="position: fixed!important; left: -5000px!important;">
                    <input type="text" name="emP7yF13ld" readonly="" autocomplete="false" tabindex="-1" value="">
                    <input type="text" name="sh0uldN07ch4ng3" readonly="" autocomplete="false" tabindex="-1" value="should_not_change">
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      documento: String,
      token: String,
      squad: String,
      redirect: String,
      produto: String,
      fundo: String,
      trial: String
    },
    data () {
      return {
        buttonClass: {
          call_button: true
        }
      }
    },
    created () {
      this.buttonClass[`btn-${this.squad}-gradiant`] = true

      document.querySelectorAll('input[name=emP7yF13ld],input[name=sh0uldN07ch4ng3]').forEach(function (element) {
        element.addEventListener('focus', function (e) {
          e.target.removeAttribute('readonly')
        })
      })
      
    },
    computed: {
      fundoColor () {
        if (this.fundo) {
          return `background: ${this.fundo};`
        }
      },
      textColor () {
        if (this.fundo) {
          return `color: #fff !important;
                  opacity: 1;`
        }
      }
    }
  }
</script>

<style>
.form-rd-homes {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 110vh;  
    padding: 0 500px 0 500px;
    background: #f5f7fa;
}
.form-rd-homes .form {
  background: #fff;
  padding: 20px;
  border-radius: .50em;
}
.form-rd-homes .texto {
  text-align: center;
  padding: 60px 150px 50px 150px;
}
.form-rd-homes .texto h2 {
  font-family: 'GothamRnd-Medium', sans-serif;
  margin-bottom: 30px;
}
.form-rd-homes .form label {
  font-family: 'GothamRnd-Book', sans-serif;
  color: #999;
}
.form-rd-homes .form .form-control {
  border: none;
  border-radius: .50em;
  background: #f5f7fa;
  margin-bottom: 10px;
}
.form-rd-homes .form .call_button {
  width: 100%;
  height: 80px;
  border-radius: .25em;
  border: none;
  color: #fff;
  font-family: 'GothamRnd-Book', sans-serif;
  font-size: 25px;
  cursor: pointer;
}
</style>

<style>
@media (max-width: 767px) {
  .form-rd-homes {
      display: block;
      /* justify-content: center; */
      /* flex-direction: column; */
      height: 110vh;  
      padding: 50px 0 0 0 !important;
      background: #f5f7fa;
      /* margin-top: 200px; */
      margin-bottom: 100px;
  }
  .form-rd-homes .texto {
    text-align: center;
    padding: 0 35px 0 35px !important;
  }  
}
@media (min-width: 1000px) and (max-width: 1440px) {
  .form-rd-homes {
      padding: 0 300px 0 300px;
  }
}
</style>
