<template>
  <!-- <div class="topbar">
      <div class="header5">
          <div class="container po-relative">
              <nav class="navbar navbar-expand-lg h5-nav-bar">
                  <a href="javascript:void(0)" class="navbar-brand"><img src="../../../ass/g../eneralets/general/images/home/logo.png" alt="wrapkit"/></a>
                  <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#h5-info" aria-controls="h4-info" aria-expanded="false" aria-label="Toggle navigation"><span class="ti-menu"></span></button>
                  <div class="collapse navbar-collapse" id="h5-info">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Documentos Fiscais</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Fintech</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">PlugMobile</a></li>
                          <li class="nav-item"><a href="javascript:void(0)" class="nav-link">Suporte</a></li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>
  </div> -->
  <div class="topbar" id="top">
    <div class="header6">
      <div class="container po-relative">
        <nav class="navbar navbar-expand-lg h6-nav-bar">
          <a href="/" class="navbar-brand">
            <img src="/static/images/home/logo.png" alt="wrapkit" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#h6-info" aria-controls="h6-info" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="ti-menu"></span>
          </button>
          <div class="collapse navbar-collapse hover-dropdown font-14 ml-auto" id="h6-info">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown mega-dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="h6-mega-dropdown" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Documentos Fiscais
                  <i class="fa fa-angle-down m-l-5"></i>
                </a>
                <div class="dropdown-menu b-none font-14 animated fadeInUp" aria-labelledby="h6-mega-dropdown">
                  <div class="row">
                    <div class="col-lg-3 inside-bg hidden-md-down">
                      <a href="/dfe/saas">
                        <div class="bg-img img-fluid" style="background-image:url(/static/images/home/banner-navbar.jpg); width: 275px;">
                          <!-- <h3 class="text-white font-light">Manager SaaS</h3> -->
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-md-6">
                      <ul class="list-style-none">
                        <li>
                          <h6 class="nav-title-link">Qual segmento seu software atende?</h6>
                        </li>
                        <li>
                          <a href="/dfe/industria">Indústria</a>
                        </li>
                        <li>
                          <a href="/dfe/varejo" target="_blank">Varejo</a>
                        </li>
                        <li>
                          <a href="/dfe/servicos" target="_blank">Serviços</a>
                        </li>
                        <li>
                          <a href="/dfe/transporte" target="_blank">Transporte</a>
                        </li>
                        <li>
                          <a href="/dfe/escrituracao-fiscal" target="_blank">Escrituração</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <ul class="list-style-none">
                        <li>
                          <h6 class="nav-title-link second-nav-title" style="margin-left: 13px;">Já sabe do que precisa? <br> Então, é só escolher!</h6>
                        </li>
                        <div class="row">
                          <div class="col-md-4">
                            <li><a href="/dfe/nfe">NF-e</a></li>
                            <li><a href="/dfe/gnre">GNR-e</a></li>
                            <li><a href="/dfe/nfce">NFC-e</a></li>
                            <li><a href="/dfe/cte">CT-e</a></li>
                            <li><a href="/dfe/cteos">CT-e OS</a></li>
                            <li><a href="/dfe/mdfe">MDF-e</a></li>
                          </div>
                          <div class="col-md-6">
                            <li><a href="/dfe/nfse">NFS-e</a></li>
                            <li><a href="/dfe/cfe">CF-e SAT</a></li>
                            <li><a href="/dfe/esocial">eSocial</a></li>
                            <li><a href="/dfe/efdreinf">EFD-Reinf</a></li>
                            <li><a href="/dfe/sped">SPED Fiscal <span class="badge badge-success">Novo</span></a></li>
                          </div>
                        </div>
                      </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <ul class="list-style-none">
                        <li>
                          <h6 class="nav-title-link">Turbine ainda mais o seu software!</h6>
                        </li>
                        <li>
                          <a href="/dfe/saas" target="_blank">Manager SaaS</a>
                        </li>
                        <li>
                          <a href="/dfe/notasegura" target="_blank">Nota Segura</a>
                        </li>
                      </ul>
                      <ul class="list-style-none">
                        <li>
                          <h6 class="nav-title-link">Já é cliente?</h6>
                        </li>
                        <li>
                          <a class="dropdown-item" href="http://atendimento.tecnospeed.com.br" target="_blank">Atendimento Online</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="https://clientes.tecnospeed.com.br/" target="_blank">Portal do Cliente</a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </li>
              <li class="nav-item dropdown mega-dropdown">
                <a class="nav-link dropdown-toggle" href="/fintech" id="h6-mega-dropdown2" aria-haspopup="true"
                  aria-expanded="false">
                  Fintech
                  <!-- <i class="fa fa-angle-down m-l-5"></i> -->
                </a>
                <!-- <div class="dropdown-menu b-none font-14 animated fadeInUp" aria-labelledby="h6-mega-dropdown2">
                  <div class="row">
                    <div class="col-lg-4 inside-bg hidden-md-down">
                      <div class="bg-img" style="background-image:url(/static/general/images/innerpage/mega-bg2.jpg)">
                        <h3 class="text-white font-light">Create anything
                          <br/>with our amazing
                          <br/>sections</h3>
                      </div>
                    </div>

                    <div class="col-lg-2 col-md-4">
                      <ul class="list-style-none">
                        <li>
                          <h6>Headers &amp; Footers</h6>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/sliders-static.html" target="_blank">Banners</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/form-banners.html" target="_blank">Form Banners</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/headers1.html" target="_blank">Navigation 1-10</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/headers2.html" target="_blank">Navigation 11-20</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/footers.html" target="_blank">Footers</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/call-to-action.html" target="_blank">Call to Actions</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-1 col-md-4">
                      <ul class="list-style-none">
                        <li>
                          <h6>Sliders</h6>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider1.html" target="_blank">Slider1</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider2.html" target="_blank">Slider2</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider3.html" target="_blank">Slider3</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider4.html" target="_blank">Slider4</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider5.html" target="_blank">Slider5</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-1 col-md-4">
                      <ul class="list-style-none">
                        <li>
                          <h6>&nbsp;</h6>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider6.html" target="_blank">Slider6</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider7.html" target="_blank">Slider7</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider8.html" target="_blank">Slider8</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider9.html" target="_blank">Slider9</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/slider10.html" target="_blank">Slider10</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <ul class="list-style-none">
                        <li>
                          <h6>Other Sections</h6>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/contacts-forms.html" target="_blank">Contacts</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/blog-homepage.html" target="_blank">Blogs</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/pricing.html" target="_blank">Pricing</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/ui-custom-modals.html" target="_blank">Popups / Modals</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/team.html" target="_blank">Teams</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/testimonial.html" target="_blank">Testimonials</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <ul class="list-style-none">
                        <li>
                          <h6>Features</h6>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/feature1.html" target="_blank">Features 1-10</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/feature2.html" target="_blank">Features 11-20</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/feature3.html" target="_blank">Features 21-30</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/feature4.html" target="_blank">Features 31-40</a>
                        </li>
                        <li>
                          <a href="../../wrapki/generalt/feature5.html" target="_blank">Features 41-50</a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div> -->
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="https://www.plugmobile.com.br" id="h6-dropdown" aria-haspopup="true" aria-expanded="false">
                  PlugMobile
                  <!-- <i class="fa fa-angle-down m-l-5"></i> -->
                </a>
                <!-- <ul class="b-none dropdown-menu font-14 animated fadeInUp">
                  <li>
                    <a class="dropdown-item" href="../../wrapki/generalt/pages-aboutus.html" target="_blank">About Us</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../../wrapki/generalt/pages-pricing.html" target="_blank">Pricing</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../../wrapki/generalt/pages-services.html" target="_blank">Services</a>
                  </li>
                  <li class="divider" role="separator"></li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-toggle dropdown-item" href="javascript:void(0)" aria-haspopup="true" aria-expanded="false">Portfolio
                      <i class="fa fa-angle-right ml-auto"></i>
                    </a>
                    <ul class="dropdown-menu font-14 b-none animated flipInY">
                      <li>
                        <a class="dropdown-item" href="../../wrapki/generalt/pages-portfolio-one-column.html" target="_blank">Portfolio 1 Column</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="../../wrapki/generalt/pages-portfolio-two-column.html" target="_blank">Portfolio 2 Column</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="../../wrapki/generalt/pages-portfolio-three-column.html" target="_blank">Portfolio 3 Column</a>
                      </li>
                      <li class="divider" role="separator"></li>
                      <li>
                        <a class="dropdown-item" href="../../wrapki/generalt/pages-portfolio-masonry.html" target="_blank">Portfolio with Masonry</a>
                      </li>
                      <li class="divider" role="separator"></li>
                      <li>
                        <a class="dropdown-item" href="../../wrapki/generalt/pages-portfolio-with-popup.html" target="_blank">Portfolio with Popup</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="../../wrapki/generalt/pages-portfolio-detail.html" target="_blank">Portfolio Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../../wrapki/generalt/pages-portfolio-detail.html" target="_blank">Portfolio Detail</a>
                  </li>
                  <li class="divider" role="separator"></li>
                  <li>
                    <a class="dropdown-item" href="../../wrapki/generalt/pages-blog.html" target="_blank">Blog</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../../wrapki/generalt/pages-blog-detail.html" target="_blank">Blog Single</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="../../wrapki/generalt/pages-contact-us.html" target="_blank">Contact Us</a>
                  </li>
                </ul> -->
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
.topbar .nav-title-link {
  font-family: 'GothamRnd-Book', sans-serif;
}
.h5-nav-bar {
  padding: 25px 15px;
  position: relative;
  width: 100%;
  left: 0px;
}
.h5-nav-bar .navbar-brand {
  position: absolute;
}
.h5-nav-bar .navbar-nav .nav-link {
  color: #ffffff;
  font-size: 14px;
  padding: 20px 10px;
  font-weight: 500;
}
.h5-nav-bar .navbar-nav .nav-item:hover .nav-link {
  color: #ff4d7e;
}
.h5-nav-bar .rounded-button {
  border-radius: 60px;
  padding: 10px 30px;
  display: inline-block;
  border: 2px solid #ff4d7e;
  position: absolute;
  right: 0px;
  color: #fff;
  font-size: 14px;
}
.h5-nav-bar .rounded-button a {
  color: #ffffff;
  font-weight: 500;
}
.h5-nav-bar .rounded-button a:hover {
  color: #ff4d7e;
}

.mega-dropdown .inside-bg {
    margin: -30px 40px -30px -45px;
}

@media (max-width: 1023px) {
  .h5-nav-bar .navbar-brand {
    position: relative;
  }
  .h5-nav-bar .navbar-collapse {
    background: #263238;
    padding: 15px 15px 20px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
    box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
    z-index: 10;
  }
  .h5-nav-bar .rounded-button {
    position: relative;
  }
}
@media (max-width: 767px) {
  .topbar #h6-info {
    background: #343a40;
  }  
  .topbar .hidden-md-down {
    display: none;
  }
  .topbar .second-nav-title {
    margin-left: 0 !important;
  }
}
</style>
