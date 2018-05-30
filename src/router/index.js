import Vue from 'vue'
import Router from 'vue-router'
// Principal =============
import Home from '@/components/routes/Home'
// Setores =============
import DFe from '@/components/routes/DFe'
import Academy from '@/components/routes/Academy'
// Squads =============
import Industria from '@/components/dfe/squads/industria'
import Escrituracao from '@/components/dfe/squads/escrituracao-fiscal'
import Servicos from '@/components/dfe/squads/servicos'
import Transporte from '@/components/dfe/squads/transporte'
import Varejo from '@/components/dfe/squads/varejo'
import Fintech from '@/components/dfe/squads/fintech'
// Obrigados ==========
import ObrigadoIndustria from '@/components/general/obrigado'
import ObrigadoVarejo from '@/components/general/obrigado'
import ObrigadoServicos from '@/components/general/obrigado'
import ObrigadoTransporte from '@/components/general/obrigado'
import ObrigadoEscrituracao from '@/components/general/obrigado'
import ObrigadoFintech from '@/components/general/obrigado'

import ObrigadoNFe from '@/components/general/obrigado'
import ObrigadoGNRe from '@/components/general/obrigado'

import ObrigadoNFCe from '@/components/general/obrigado'
import ObrigadoCFe from '@/components/general/obrigado'

import ObrigadoNFSe from '@/components/general/obrigado'

import ObrigadoMDFe from '@/components/general/obrigado'
import ObrigadoCTe from '@/components/general/obrigado'
import ObrigadoCTeOS from '@/components/general/obrigado'

import ObrigadoBoleto from '@/components/general/obrigado'

import ObrigadoSped from '@/components/general/obrigado'
import ObrigadoEFDReinf from '@/components/general/obrigado'
import ObrigadoEsocial from '@/components/general/obrigado'

// Produtos ===========
// Industria
import Validador from '@/components/dfe/squads/industria/utils/validador'
import NFe from '@/components/dfe/squads/industria/produtos/nfe'
import MDFeIndustria from '@/components/dfe/squads/industria/produtos/mdfe'
import GNRe from '@/components/dfe/squads/industria/produtos/gnre'
import NotaSegura from '@/components/dfe/squads/industria/produtos/notasegura'
import SaaS from '@/components/dfe/squads/industria/produtos/saas'
// Varejo
import NFCe from '@/components/dfe/squads/varejo/produtos/nfce'
import CFe from '@/components/dfe/squads/varejo/produtos/cfe'
// Serviço
import NFSe from '@/components/dfe/squads/servicos/produtos/nfse'
// Transporte
import CTe from '@/components/dfe/squads/transporte/produtos/cte'
import CTeOS from '@/components/dfe/squads/transporte/produtos/cteos'
import MDFeTransporte from '@/components/dfe/squads/transporte/produtos/mdfe'
// Escrituração Fiscal
import EFDReinf from '@/components/dfe/squads/escrituracao-fiscal/produtos/efd-reinf'
import Esocial from '@/components/dfe/squads/escrituracao-fiscal/produtos/esocial'
import SPED from '@/components/dfe/squads/escrituracao-fiscal/produtos/sped'
// Fintech
import Boleto from '@/components/dfe/squads/fintech/produtos/boleto'

// Outros =============
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1200,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/validador',
      // redirect: () => {
      //   window.location.href = 'http://validador.tecnospeed.com.br/'
      // }
      name: 'Validador',
      component: Validador
    },
    {
      path: '/atendimento',
      redirect: () => {
        window.location.href = 'http://atendimento.tecnospeed.com.br/'
      }
    },
    {
      path: '/blog',
      redirect: () => {
        window.location.href = 'http://tsdn.tecnospeed.com.br/blog/blog-da-tecnospeed/'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor',
        metaTags: [
          {
            name: 'description',
            content: 'TecnoSpeed - A Casa do Desenvolvedor'
          },
          {
            property: 'og:description',
            content: 'TecnoSpeed - A Casa do Desenvolvedor'
          }
        ]
      }
    },
    {
      path: '/dfe',
      name: 'DFe',
      component: DFe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    // {
    //   path: '/academy',
    //   beforeEnter () { location.href = 'http://www.tecnospeed.com.br/nf-e/' },
    //   name: 'Academy',
    //   component: Academy,
    // },
    {
      path: '/dfe/escrituracao-fiscal',
      name: 'Escrituracao',
      component: Escrituracao,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/industria',
      name: 'Industria',
      component: Industria,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/servicos',
      name: 'Servicos',
      component: Servicos,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/transporte',
      name: 'Transporte',
      component: Transporte,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/varejo',
      name: 'Varejo',
      component: Varejo,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/fintech',
      name: 'Fintech',
      component: Fintech,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/nfe',
      name: 'NFe',
      component: NFe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/mdfe',
      name: 'MDFeIndustria',
      component: MDFeIndustria,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/gnre',
      name: 'GNRe',
      component: GNRe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/notasegura',
      name: 'NotaSegura',
      component: NotaSegura,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/saas',
      name: 'SaaS',
      component: SaaS,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/nfce',
      name: 'NFCe',
      component: NFCe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/cfe',
      name: 'CFe',
      component: CFe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/nfe',
      name: 'NFe',
      component: NFe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/gnre',
      name: 'GNRe',
      component: GNRe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/nfse',
      name: 'NFSe',
      component: NFSe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/cte',
      name: 'CTe',
      component: CTe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/mdfe',
      name: 'MDFeTransporte',
      component: MDFeTransporte,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/cteos',
      name: 'CTeOS',
      component: CTeOS,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/efdreinf',
      name: 'EFDReinf',
      component: EFDReinf,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/esocial',
      name: 'Esocial',
      component: Esocial,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/dfe/sped',
      name: 'SPED',
      component: SPED,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/boleto',
      name: 'Boleto',
      component: Boleto,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/industria/obrigado',
      name: 'ObrigadoIndustria',
      component: ObrigadoIndustria,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/varejo/obrigado',
      name: 'ObrigadoVarejo',
      component: ObrigadoVarejo,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/servicos/obrigado',
      name: 'ObrigadoServicos',
      component: ObrigadoServicos,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/transporte/obrigado',
      name: 'ObrigadoTransporte',
      component: ObrigadoTransporte,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/escrituracao-fiscal/obrigado',
      name: 'ObrigadoEscrituracao',
      component: ObrigadoEscrituracao,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/fintech/obrigado',
      name: 'ObrigadoFintech',
      component: ObrigadoFintech,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/nfe/obrigado',
      name: 'ObrigadoNFe',
      component: ObrigadoNFe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/gnre/obrigado',
      name: 'ObrigadoGNRe',
      component: ObrigadoGNRe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/nfce/obrigado',
      name: 'ObrigadoNFCe',
      component: ObrigadoNFCe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/cfe/obrigado',
      name: 'ObrigadoCFe',
      component: ObrigadoCFe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/nfse/obrigado',
      name: 'ObrigadoNFSe',
      component: ObrigadoNFSe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/mdfe/obrigado',
      name: 'ObrigadoMDFe',
      component: ObrigadoMDFe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/cte/obrigado',
      name: 'ObrigadoCTe',
      component: ObrigadoCTe,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/cteos/obrigado',
      name: 'ObrigadoCTeOS',
      component: ObrigadoCTeOS,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/boleto/obrigado',
      name: 'ObrigadoBoleto',
      component: ObrigadoBoleto,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/esocial/obrigado',
      name: 'ObrigadoEsocial',
      component: ObrigadoEsocial,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/sped/obrigado',
      name: 'ObrigadoSped',
      component: ObrigadoSped,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    },
    {
      path: '/reinf/obrigado',
      name: 'ObrigadoEFDReinf',
      component: ObrigadoEFDReinf,
      meta: {
        title: 'TecnoSpeed - A Casa do Desenvolvedor'
      }
    }
  ]
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag))
  window.scrollTo(0, 0)
  next()
})

// router.beforeEach(function (to, from, next) {
//   to.matched.some(record => console.log(record.path))
//   document.title = to.meta.title
//   window.scrollTo(0, 0)
//   next()
// })

export default router
