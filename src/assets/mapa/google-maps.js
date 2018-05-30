/* global google MarkerClusterer */
/* global swal */
// require('./markerclusterer')
let map, icone
// const elements = {
//   input: /** @type {!HTMLInputElement} */ (document.getElementById('pesquisaCidade')),
//   mapa: document.getElementById('map')
// }
const icones = {
  homologado: '/static/images/mapa/verde.png',
  compativel: '/static/images/mapa/amarelo.png'
}

export const iniciarMapa = (elements, cidades) => {
  map = new google.maps.Map(elements.mapa, {
    zoom: 3,
    center: {
      lat: -23.4209,
      lng: -51.933
    }
  })

  let markers = []

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(elements.input)

  let autocomplete = new google.maps.places.Autocomplete(elements.input)

  autocomplete.bindTo('bounds', map)

  let pesquisaMarker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  })

  autocomplete.addListener('place_changed', function () {
    pesquisaMarker.setVisible(false)
    let place = autocomplete.getPlace()
    if (!place.geometry) {
      swal({
        type: 'error',
        html: `<p>Não encontramos nenhum resultado para <strong>${place.name}</strong> no mapa.</p>`,
        showConfirmButton: false,
        timer: 3000
      })
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport)
    } else {
      map.setCenter(place.geometry.location)
      map.setZoom(17)
    }

    pesquisaMarker.setIcon(/** @type {google.maps.Icon} */ ({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }))

    colisaoMarker(place, (err, colisao) => {
      if (err) return console.log(err)

      if (!colisao) {
        pesquisaMarker.setPosition(place.geometry.location)
        pesquisaMarker.setVisible(true)

        if (place.address_components) {
          let address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ')
        }
      }

      map.setCenter({
        lat: -23.4209,
        lng: -51.933
      })
      return map.setZoom(5)
    })
  })
  // ListarCidades((err, cidades) => {
  for (let i = 0; i < cidades.length; i++) {
    if (cidades[i].homologado) {
      icone = icones.homologado
    } else {
      icone = icones.compativel
    }

    let mark = new google.maps.Marker({
      position: cidades[i].localizacao,
      icon: icone,
      dados: cidades[i]
    })

    mark.addListener('click', function () {
      if (!mark.dados.homologado) {
        return swal({ title: 'Cidade compatível', html: `<br><p class="text-justify"><b>${mark.dados.nome}</b> está compatível, selecione uma das opções abaixo do mapa para prosseguir com os passos da solicitação.</p>`, type: 'success' })
      }

      swal({ title: 'Cidade homologada', html: `<br><p class="text-justify">Para utilizar <b>${mark.dados.nome}</b>, certifique-se de possuir a versão mais recente de nossos produtos da linha NFS-e.</p>`, type: 'success' })
    })

    markers.push(mark)

    if (i + 1 === cidades.length) {
      try {
        return new MarkerClusterer(map, markers, {
          imagePath: '/static/images/mapa/cluster'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
  // })
}

// function iniciarMapa () {
//   map = new google.maps.Map(elements.mapa, {
//     zoom: 3,
//     center: {
//       lat: -23.4209,
//       lng: -51.933
//     }
//   })

//   let markers = []

//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(elements.input)

//   let autocomplete = new google.maps.places.Autocomplete(elements.input)

//   autocomplete.bindTo('bounds', map)

//   let pesquisaMarker = new google.maps.Marker({
//     map: map,
//     anchorPoint: new google.maps.Point(0, -29)
//   })

//   autocomplete.addListener('place_changed', function () {
//     pesquisaMarker.setVisible(false)
//     let place = autocomplete.getPlace()
//     if (!place.geometry) {
//       swal({
//         type: 'error',
//         html: `<p>Não encontramos nenhum resultado para <strong>${place.name}</strong> no mapa.</p>`,
//         showConfirmButton: false,
//         timer: 3000
//       })
//     }

//     if (place.geometry.viewport) {
//       map.fitBounds(place.geometry.viewport)
//     } else {
//       map.setCenter(place.geometry.location)
//       map.setZoom(17)
//     }

//     pesquisaMarker.setIcon(/** @type {google.maps.Icon} */ ({
//       url: place.icon,
//       size: new google.maps.Size(71, 71),
//       origin: new google.maps.Point(0, 0),
//       anchor: new google.maps.Point(17, 34),
//       scaledSize: new google.maps.Size(35, 35)
//     }))

//     colisaoMarker(place, (err, colisao) => {
//       if (err) return console.log(err)

//       if (!colisao) {
//         pesquisaMarker.setPosition(place.geometry.location)
//         pesquisaMarker.setVisible(true)

//         if (place.address_components) {
//           let address = [
//             (place.address_components[0] && place.address_components[0].short_name || ''),
//             (place.address_components[1] && place.address_components[1].short_name || ''),
//             (place.address_components[2] && place.address_components[2].short_name || '')
//           ].join(' ')
//         }
//       }

//       map.setCenter({
//         lat: -23.4209,
//         lng: -51.933
//       })
//       return map.setZoom(5)
//     })
//   })
//   ListarCidades((err, cidades) => {
// 	  for (let i = 0; i < cidades.length; i++) {
// 	    if (cidades[i].homologado) {
// 	      icone = icones.homologado
// 	    } else {
// 	      icone = icones.compativel
// 	    }

// 	    let mark = new google.maps.Marker({
// 	      position: cidades[i].localizacao,
// 	      icon: icone,
// 	      dados: cidades[i]
// 	    })

// 	    mark.addListener('click', function () {
// 	      if (!mark.dados.homologado) {
// 	        return swal({ title: 'Cidade compatível', html: `<br><p class="text-justify"><b>${mark.dados.nome}</b> está compatível, selecione uma das opções abaixo do mapa para prosseguir com os passos da solicitação.</p>`, type: 'success' })
// 	      }

// 	      swal({ title: 'Cidade homologada', html: `<br><p class="text-justify">Para utilizar <b>${mark.dados.nome}</b>, certifique-se de possuir a versão mais recente de nossos produtos da linha NFS-e.</p>`, type: 'success' })
// 	    })

// 	    markers.push(mark)

// 	    if (i + 1 === cidades.length) {
// 	      try {
// 	        return markerCluster = new MarkerClusterer(map, markers, {
// 	          imagePath: './img/cluster'
// 	        })
// 	      } catch (err) {
// 	        location.reload()
// 	      }
// 	    }
// 	  }
//   })
// }

function colisaoMarker (place, cb) {
  let cidade = _.filter(cidades, {
    'nome': place.name
  })[0]

  if (_.filter(place.address_components, {
    long_name: 'Brasil'
  }).length <= 0) {
    swal('Oopa...', 'O projeto NFS-e é válido apenas para o Brasil.', 'error')
    return cb(null, true)
  }

  if (cidade === undefined) {
    return swal({ title: 'Cidade ainda não verificada', html: `<br><p class="text-justify">Para verificar a compatibilidade desta cidade, basta criar uma solicitação através de um dos botões abaixo do mapa.</p>`, type: 'warning' })
  }

  if (cidade.homologado) {
    return swal({ title: 'Cidade homologada', html: `<br><p class="text-justify">Para utilizar <b>${cidade.nome}</b>, certifique-se de possuir a versão mais recente de nossos produtos da linha NFS-e.</p>`, type: 'success' })
  }

  return swal({ title: 'Cidade compatível', html: `<br><p class="text-justify"><b>${cidade.nome}</b> está compatível, selecione uma das opções abaixo do mapa para prosseguir com os passos da solicitação.</p>`, type: 'success' })
}

var getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'json'
  xhr.onload = function () {
    var status = xhr.status
    if (status === 200) {
      callback(null, xhr.response)
    } else {
      callback(status, xhr.response)
    }
  }
  xhr.send()
}
