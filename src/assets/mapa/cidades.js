function ListarCidades (cb) {
  var ajax = new XMLHttpRequest()

  ajax.open('GET', `https://clientes.tecnospeed.com.br/cidades-api/v1/cidades`, true)

  ajax.send()

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
      var data = ajax.responseText
      let cidades = JSON.parse(data).cidades
      console.log(cidades)
      return cb(null, cidades)
    }
  }
}

// let cidades = [{
//   'cidade_google': 'Salvador - BA',
//   'nome': 'Salvador',
//   'uf': 'BA',
//   'padrao': 'ABRASF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.9722184,
//     'lng': -38.5014136
//   }
// },
// {
//   'cidade_google': 'Maringá - PR',
//   'nome': 'Maringá',
//   'uf': 'PR',
//   'padrao': 'ABRASF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.4209995,
//     'lng': -51.9330558
//   }
// },
// {
//   'cidade_google': 'Vila Velha - ES',
//   'nome': 'Vila Velha',
//   'uf': 'ES',
//   'padrao': 'ABRASF 2.1',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.3477821,
//     'lng': -40.2949528
//   }
// },
// {
//   'cidade_google': 'Vitória - ES',
//   'nome': 'Vitória',
//   'uf': 'ES',
//   'padrao': 'ABRASF 2.1',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.2976178,
//     'lng': -40.2957768
//   }
// },
// {
//   'cidade_google': 'João Pessoa - PB',
//   'nome': 'João Pessoa',
//   'uf': 'PB',
//   'padrao': 'ABRASF 2.2',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -7.119495799999999,
//     'lng': -34.8450118
//   }
// },
// {
//   'cidade_google': 'Governador Valadares - MG',
//   'nome': 'Governador Valadares',
//   'uf': 'MG',
//   'padrao': 'ACTCON',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.8549317,
//     'lng': -41.95592329999999
//   }
// },
// {
//   'cidade_google': 'Juiz de Fora - MG',
//   'nome': 'Juiz de Fora',
//   'uf': 'MG',
//   'padrao': 'ACTCON',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7624237,
//     'lng': -43.3433999
//   }
// },
// {
//   'cidade_google': 'Leopoldina - MG',
//   'nome': 'Leopoldina',
//   'uf': 'MG',
//   'padrao': 'ACTCON',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.5301251,
//     'lng': -42.642529
//   }
// },
// {
//   'cidade_google': 'Ariquemes - RO',
//   'nome': 'Ariquemes',
//   'uf': 'RO',
//   'padrao': 'AGILI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -9.906108699999999,
//     'lng': -63.0330263
//   }
// },
// {
//   'cidade_google': 'Itambé - PE',
//   'nome': 'Itambé',
//   'uf': 'PE',
//   'padrao': 'AGILI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -7.411067,
//     'lng': -35.1101303
//   }
// },
// {
//   'cidade_google': 'Goiânia - GO',
//   'nome': 'Goiânia',
//   'uf': 'GO',
//   'padrao': 'AMTEC',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.6868824,
//     'lng': -49.26478849999999
//   }
// },
// {
//   'cidade_google': 'Bauru - SP',
//   'nome': 'Bauru',
//   'uf': 'SP',
//   'padrao': 'BAURU',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.314459,
//     'lng': -49.0586951
//   }
// },
// {
//   'cidade_google': 'Água Boa - MT',
//   'nome': 'Água Boa',
//   'uf': 'MT',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.047489,
//     'lng': -52.1593834
//   }
// },
// {
//   'cidade_google': 'Alfenas - MG',
//   'nome': 'Alfenas',
//   'uf': 'MG',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.4261341,
//     'lng': -45.9481747
//   }
// },
// {
//   'cidade_google': 'Almirante Tamandaré - PR',
//   'nome': 'Almirante Tamandaré',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.2985567,
//     'lng': -49.34501119999999
//   }
// },
// {
//   'cidade_google': 'Barracão - PR',
//   'nome': 'Barracão',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.2499424,
//     'lng': -53.5419225
//   }
// },
// {
//   'cidade_google': 'Braço do Norte - SC',
//   'nome': 'Braço do Norte',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.2728323,
//     'lng': -49.1676018
//   }
// },
// {
//   'cidade_google': 'Bento Gonçalves - RS',
//   'nome': 'Bento Gonçalves',
//   'uf': 'RS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.1667089,
//     'lng': -51.5169861
//   }
// },
// {
//   'cidade_google': 'Bombinhas - SC',
//   'nome': 'Bombinhas',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.1466465,
//     'lng': -48.5054577
//   }
// },
// {
//   'cidade_google': 'Campos Novos - SC ​',
//   'nome': 'Campos Novos',
//   'uf': 'SC ​',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.4009891,
//     'lng': -51.2258597
//   }
// },
// {
//   'cidade_google': 'Canoinhas - SC',
//   'nome': 'Canoinhas',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.1887084,
//     'lng': -50.5549719
//   }
// },
// {
//   'cidade_google': 'Capão da Canoa - RS',
//   'nome': 'Capão da Canoa',
//   'uf': 'RS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.7649764,
//     'lng': -50.0289451
//   }
// },
// {
//   'cidade_google': 'Capinzal - SC',
//   'nome': 'Capinzal',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.3482312,
//     'lng': -51.6044276
//   }
// },
// {
//   'cidade_google': 'Catanduvas - SC',
//   'nome': 'Catanduvas',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.0565963,
//     'lng': -51.70451
//   }
// },
// {
//   'cidade_google': 'Chapecó - SC',
//   'nome': 'Chapecó',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.1009343,
//     'lng': -52.615699
//   }
// },
// {
//   'cidade_google': 'Cláudio - MG',
//   'nome': 'Cláudio',
//   'uf': 'MG',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.4441551,
//     'lng': -44.76775600000001
//   }
// },
// {
//   'cidade_google': 'Cocal do Sul - SC',
//   'nome': 'Cocal do Sul',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.6000515,
//     'lng': -49.3348621
//   }
// },
// {
//   'cidade_google': 'Colorado - PR',
//   'nome': 'Colorado',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8382929,
//     'lng': -51.95801640000001
//   }
// },
// {
//   'cidade_google': 'Congonhas - MG',
//   'nome': 'Congonhas',
//   'uf': 'MG',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.4993469,
//     'lng': -43.8613566
//   }
// },
// {
//   'cidade_google': 'Cornélio Procópio - PR',
//   'nome': 'Cornélio Procópio',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.197833,
//     'lng': -50.6378804
//   }
// },
// {
//   'cidade_google': 'Coruripe - AL',
//   'nome': 'Coruripe',
//   'uf': 'AL',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.1250022,
//     'lng': -36.1761522
//   }
// },
// {
//   'cidade_google': 'Criciúma - SC',
//   'nome': 'Criciúma',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.6727702,
//     'lng': -49.3733771
//   }
// },
// {
//   'cidade_google': 'Dionísio Cerqueira - SC',
//   'nome': 'Dionísio Cerqueira',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.2649782,
//     'lng': -53.636269
//   }
// },
// {
//   'cidade_google': 'Cachoeiro de Itapemirim - ES',
//   'nome': 'Cachoeiro de Itapemirim',
//   'uf': 'ES',
//   'padrao': 'ÁBACO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.8467047,
//     'lng': -41.1202199
//   }
// },
// {
//   'cidade_google': 'Imbituba - SC',
//   'nome': 'Imbituba',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.227627,
//     'lng': -48.6691286
//   }
// },
// {
//   'cidade_google': 'Canoas - RS',
//   'nome': 'Canoas',
//   'uf': 'RS',
//   'padrao': 'ÁBACO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.9133278,
//     'lng': -51.18615819999999
//   }
// },
// {
//   'cidade_google': 'Primavera do Leste - MT',
//   'nome': 'Primavera do Leste',
//   'uf': 'MT',
//   'padrao': 'ÁBACO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -15.5605313,
//     'lng': -54.29506749999999
//   }
// },
// {
//   'cidade_google': 'Rondonópolis - MT',
//   'nome': 'Rondonópolis',
//   'uf': 'MT',
//   'padrao': 'ÁBACO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.4654526,
//     'lng': -54.6387369
//   }
// },
// {
//   'cidade_google': 'Curitiba - PR',
//   'nome': 'Curitiba',
//   'uf': 'PR',
//   'padrao': 'ABRASF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.4244287,
//     'lng': -49.2653819
//   }
// },
// {
//   'cidade_google': 'Rio de Janeiro - RJ',
//   'nome': 'Rio de Janeiro',
//   'uf': 'RJ',
//   'padrao': 'ABRASF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.9068467,
//     'lng': -43.1728965
//   }
// },
// {
//   'cidade_google': 'Garopaba - SC',
//   'nome': 'Garopaba',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.0272534,
//     'lng': -48.6189508
//   }
// },
// {
//   'cidade_google': 'General Carneiro - PR',
//   'nome': 'General Carneiro',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.4574061,
//     'lng': -51.3889736
//   }
// },
// {
//   'cidade_google': 'Goioerê - PR',
//   'nome': 'Goioerê',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.1468613,
//     'lng': -53.0888943
//   }
// },
// {
//   'cidade_google': 'Gramado - RS',
//   'nome': 'Gramado',
//   'uf': 'RS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.3745686,
//     'lng': -50.876435
//   }
// },
// {
//   'cidade_google': 'Fazenda Rio Grande - PR',
//   'nome': 'Fazenda Rio Grande',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.6628343,
//     'lng': -49.3077648
//   }
// },
// {
//   'cidade_google': 'Itajá - GO',
//   'nome': 'Itajá',
//   'uf': 'GO',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.0662924,
//     'lng': -51.5570726
//   }
// },
// {
//   'cidade_google': 'Itapiranga - SC',
//   'nome': 'Itapiranga',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.1698985,
//     'lng': -53.7108335
//   }
// },
// {
//   'cidade_google': 'Itaú de Minas - MG',
//   'nome': 'Itaú de Minas',
//   'uf': 'MG',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7534878,
//     'lng': -46.7671967
//   }
// },
// {
//   'cidade_google': 'Jaraguá do Sul - SC',
//   'nome': 'Jaraguá do Sul',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.4822209,
//     'lng': -49.073477
//   }
// },
// {
//   'cidade_google': 'Joaçaba - SC',
//   'nome': 'Joaçaba',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.1743773,
//     'lng': -51.5054475
//   }
// },
// {
//   'cidade_google': 'Juti - MS',
//   'nome': 'Juti',
//   'uf': 'MS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7691377,
//     'lng': -54.5218074
//   }
// },
// {
//   'cidade_google': 'Lages - SC',
//   'nome': 'Lages',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.8157141,
//     'lng': -50.3263964
//   }
// },
// {
//   'cidade_google': 'Laguna - SC',
//   'nome': 'Laguna',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.4748354,
//     'lng': -48.7837539
//   }
// },
// {
//   'cidade_google': 'Mandaguaçu - PR',
//   'nome': 'Mandaguaçu',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3462407,
//     'lng': -52.0948587
//   }
// },
// {
//   'cidade_google': 'Mandirituba - PR',
//   'nome': 'Mandirituba',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.7775289,
//     'lng': -49.3287022
//   }
// },
// {
//   'cidade_google': 'Maravilha - SC',
//   'nome': 'Maravilha',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.7650048,
//     'lng': -53.1745281
//   }
// },
// {
//   'cidade_google': 'Mariana - MG',
//   'nome': 'Mariana',
//   'uf': 'MG',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.3652719,
//     'lng': -43.4150073
//   }
// },
// {
//   'cidade_google': 'Mococa - SP',
//   'nome': 'Mococa',
//   'uf': 'SP',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.4651816,
//     'lng': -47.0028663
//   }
// },
// {
//   'cidade_google': 'Morro da Fumaça - SC',
//   'nome': 'Morro da Fumaça',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.6540002,
//     'lng': -49.2120154
//   }
// },
// {
//   'cidade_google': 'Navegantes - SC',
//   'nome': 'Navegantes',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.8947924,
//     'lng': -48.6550692
//   }
// },
// {
//   'cidade_google': 'Nova Andradina - MS',
//   'nome': 'Nova Andradina',
//   'uf': 'MS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2385546,
//     'lng': -53.3442543
//   }
// },
// {
//   'cidade_google': 'Orlândia - SP',
//   'nome': 'Orlândia',
//   'uf': 'SP',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7174389,
//     'lng': -47.8857179
//   }
// },
// {
//   'cidade_google': 'Orleans - SC',
//   'nome': 'Orleans',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.3576607,
//     'lng': -49.2885418
//   }
// },
// {
//   'cidade_google': 'Ouro Branco - MG',
//   'nome': 'Ouro Branco',
//   'uf': 'MG',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -9.1622013,
//     'lng': -37.3587137
//   }
// },
// {
//   'cidade_google': 'Palmeira das Missões - RS',
//   'nome': 'Palmeira das Missões',
//   'uf': 'RS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.9001784,
//     'lng': -53.3140353
//   }
// },
// {
//   'cidade_google': 'Paranavaí - PR',
//   'nome': 'Paranavaí',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.0821226,
//     'lng': -52.4622155
//   }
// },
// {
//   'cidade_google': 'Pinhalzinho - SC',
//   'nome': 'Pinhalzinho',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.8526671,
//     'lng': -52.9814383
//   }
// },
// {
//   'cidade_google': 'Pinheiral - RJ',
//   'nome': 'Pinheiral',
//   'uf': 'RJ',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.5383309,
//     'lng': -44.0103922
//   }
// },
// {
//   'cidade_google': 'Rio Verde - GO',
//   'nome': 'Rio Verde',
//   'uf': 'GO',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.7927442,
//     'lng': -50.9196623
//   }
// },
// {
//   'cidade_google': 'Santa Rosa de Viterbo - SP',
//   'nome': 'Santa Rosa de Viterbo',
//   'uf': 'SP',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.4909206,
//     'lng': -47.37045
//   }
// },
// {
//   'cidade_google': 'São Borja - RS',
//   'nome': 'São Borja',
//   'uf': 'RS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.6583059,
//     'lng': -56.0041451
//   }
// },
// {
//   'cidade_google': 'Santo Amaro da Imperatriz - SC.',
//   'nome': 'Santo Amaro da Imperatriz',
//   'uf': 'SC.',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.6856839,
//     'lng': -48.7817857
//   }
// },
// {
//   'cidade_google': 'São Joaquim - SC',
//   'nome': 'São Joaquim',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.292455,
//     'lng': -49.9375873
//   }
// },
// {
//   'cidade_google': 'São José - SC',
//   'nome': 'São José',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.6140791,
//     'lng': -48.6370861
//   }
// },
// {
//   'cidade_google': 'São Mateus do Sul - PR',
//   'nome': 'São Mateus do Sul',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.8681839,
//     'lng': -50.3842316
//   }
// },
// {
//   'cidade_google': 'São Miguel do Oeste - SC',
//   'nome': 'São Miguel do Oeste',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.7247058,
//     'lng': -53.5167732
//   }
// },
// {
//   'cidade_google': 'Sacramento - MG',
//   'nome': 'Sacramento',
//   'uf': 'MG',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.8626448,
//     'lng': -47.4512654
//   }
// },
// {
//   'cidade_google': 'Sombrio - SC',
//   'nome': 'Sombrio',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.0798389,
//     'lng': -49.67072049999999
//   }
// },
// {
//   'cidade_google': 'Tijucas - SC',
//   'nome': 'Tijucas',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.240063,
//     'lng': -48.63361829999999
//   }
// },
// {
//   'cidade_google': 'Torres - RS',
//   'nome': 'Torres',
//   'uf': 'RS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.3344108,
//     'lng': -49.723909
//   }
// },
// {
//   'cidade_google': 'União da Vitória - PR',
//   'nome': 'União da Vitória',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.2219963,
//     'lng': -51.0850684
//   }
// },
// {
//   'cidade_google': 'Urussanga - SC',
//   'nome': 'Urussanga',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.525676,
//     'lng': -49.3215835
//   }
// },
// {
//   'cidade_google': 'Várzea Grande - MT',
//   'nome': 'Várzea Grande',
//   'uf': 'MT',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -15.646248,
//     'lng': -56.1327131
//   }
// },
// {
//   'cidade_google': 'Xanxerê - SC',
//   'nome': 'Xanxerê',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.8751803,
//     'lng': -52.4040853
//   }
// },
// {
//   'cidade_google': 'Xaxim - SC',
//   'nome': 'Xaxim',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.9560607,
//     'lng': -52.53600729999999
//   }
// },
// {
//   'cidade_google': 'Wenceslau Braz - PR',
//   'nome': 'Wenceslau Braz',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.8714093,
//     'lng': -49.8024588
//   }
// },
// {
//   'cidade_google': 'Lagoa Vermelha - RS',
//   'nome': 'Lagoa Vermelha',
//   'uf': 'RS',
//   'padrao': 'BETHA 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.1821542,
//     'lng': -51.5570726
//   }
// },
// {
//   'cidade_google': 'Camaçari - BA',
//   'nome': 'Camaçari',
//   'uf': 'BA',
//   'padrao': 'CPQD',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.6971776,
//     'lng': -38.3331983
//   }
// },
// {
//   'cidade_google': 'Altinópolis - SP',
//   'nome': 'Altinópolis',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.0227978,
//     'lng': -47.3742381
//   }
// },
// {
//   'cidade_google': 'Barra Bonita - SP',
//   'nome': 'Barra Bonita',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.472994,
//     'lng': -48.5637543
//   }
// },
// {
//   'cidade_google': 'Bebedouro - SP',
//   'nome': 'Bebedouro',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.949552,
//     'lng': -48.47953649999999
//   }
// },
// {
//   'cidade_google': 'Caieiras - SP',
//   'nome': 'Caieiras',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3611748,
//     'lng': -46.7402461
//   }
// },
// {
//   'cidade_google': 'Ferraz de Vasconcelos - SP',
//   'nome': 'Ferraz de Vasconcelos',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5289582,
//     'lng': -46.3635823
//   }
// },
// {
//   'cidade_google': 'Jaú - SP',
//   'nome': 'Jaú',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.30275,
//     'lng': -48.5755491
//   }
// },
// {
//   'cidade_google': 'Limeira - SP',
//   'nome': 'Limeira',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.5836504,
//     'lng': -47.4098328
//   }
// },
// {
//   'cidade_google': 'Mairiporã - SP',
//   'nome': 'Mairiporã',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3195045,
//     'lng': -46.5902794
//   }
// },
// {
//   'cidade_google': 'Poa - SP',
//   'nome': 'Poa',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5337777,
//     'lng': -46.3477362
//   }
// },
// {
//   'cidade_google': 'Taboão da Serra - SP',
//   'nome': 'Taboão da Serra',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6228759,
//     'lng': -46.7816647
//   }
// },
// {
//   'cidade_google': 'Taubaté - SP',
//   'nome': 'Taubaté',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.0204559,
//     'lng': -45.5563555
//   }
// },
// {
//   'cidade_google': 'Varginha - MG',
//   'nome': 'Varginha',
//   'uf': 'MG',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.5560521,
//     'lng': -45.4368421
//   }
// },
// {
//   'cidade_google': 'Alvorada - RS',
//   'nome': 'Alvorada',
//   'uf': 'RS',
//   'padrao': 'DBSELLER',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.991901,
//     'lng': -51.08136769999999
//   }
// },
// {
//   'cidade_google': 'Carazinho - RS',
//   'nome': 'Carazinho',
//   'uf': 'RS',
//   'padrao': 'DBSELLER',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.2963334,
//     'lng': -52.793776
//   }
// },
// {
//   'cidade_google': 'Taquari - RS',
//   'nome': 'Taquari',
//   'uf': 'RS',
//   'padrao': 'DBSELLER',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.7948227,
//     'lng': -51.8658729
//   }
// },
// {
//   'cidade_google': 'Osório - RS',
//   'nome': 'Osório',
//   'uf': 'RS',
//   'padrao': 'DBSELLER',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.9194588,
//     'lng': -50.2244429
//   }
// },
// {
//   'cidade_google': 'São José dos Pinhais - PR',
//   'nome': 'São José dos Pinhais',
//   'uf': 'PR',
//   'padrao': 'DEVEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.5318354,
//     'lng': -49.2035722
//   }
// },
// {
//   'cidade_google': 'Belém - PA',
//   'nome': 'Belém',
//   'uf': 'PA',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -1.4557794,
//     'lng': -48.4901968
//   }
// },
// {
//   'cidade_google': 'Campinas - SP',
//   'nome': 'Campinas',
//   'uf': 'SP',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.9098833,
//     'lng': -47.0625812
//   }
// },
// {
//   'cidade_google': 'Campo Grande - MS',
//   'nome': 'Campo Grande',
//   'uf': 'MS',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.4697105,
//     'lng': -54.6201211
//   }
// },
// {
//   'cidade_google': 'Cravinhos - SP',
//   'nome': 'Cravinhos',
//   'uf': 'SP',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.3407385,
//     'lng': -47.7352517
//   }
// },
// {
//   'cidade_google': 'São Luís - MA',
//   'nome': 'São Luís',
//   'uf': 'MA',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -2.5391099,
//     'lng': -44.28290459999999
//   }
// },
// {
//   'cidade_google': 'Sorocaba - SP',
//   'nome': 'Sorocaba',
//   'uf': 'SP',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5015338,
//     'lng': -47.4525944
//   }
// },
// {
//   'cidade_google': 'Teresina - PI',
//   'nome': 'Teresina',
//   'uf': 'PI',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -5.0920108,
//     'lng': -42.80375970000001
//   }
// },
// {
//   'cidade_google': 'Uberlândia - MG',
//   'nome': 'Uberlândia',
//   'uf': 'MG',
//   'padrao': 'DSF',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.9146078,
//     'lng': -48.2753801
//   }
// },
// {
//   'cidade_google': 'Bilac - SP',
//   'nome': 'Bilac',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.4044336,
//     'lng': -50.4751106
//   }
// },
// {
//   'cidade_google': 'Buritama - SP',
//   'nome': 'Buritama',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.0652092,
//     'lng': -50.1438905
//   }
// },
// {
//   'cidade_google': 'Junqueirópolis - SP',
//   'nome': 'Junqueirópolis',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.5108173,
//     'lng': -51.4346653
//   }
// },
// {
//   'cidade_google': 'Pitangueiras - SP',
//   'nome': 'Pitangueiras',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.0169221,
//     'lng': -48.2592606
//   }
// },
// {
//   'cidade_google': 'Penápolis - SP',
//   'nome': 'Penápolis',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.4152377,
//     'lng': -50.0773225
//   }
// },
// {
//   'cidade_google': 'Presidente Epitácio - SP',
//   'nome': 'Presidente Epitácio',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7668369,
//     'lng': -52.109674
//   }
// },
// {
//   'cidade_google': 'Monte Alto - SP',
//   'nome': 'Monte Alto',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.2660221,
//     'lng': -48.4975211
//   }
// },
// {
//   'cidade_google': 'Tanabi - SP',
//   'nome': 'Tanabi',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.6286479,
//     'lng': -49.6546435
//   }
// },
// {
//   'cidade_google': 'Valparaiso - SP',
//   'nome': 'Valparaiso',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.229467,
//     'lng': -50.8593288
//   }
// },
// {
//   'cidade_google': 'Assis - SP',
//   'nome': 'Assis',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.6604341,
//     'lng': -50.4187813
//   }
// },
// {
//   'cidade_google': 'Avaré - SP',
//   'nome': 'Avaré',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.1072154,
//     'lng': -48.92551599999999
//   }
// },
// {
//   'cidade_google': 'Bariri - SP',
//   'nome': 'Bariri',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.075317,
//     'lng': -48.7417603
//   }
// },
// {
//   'cidade_google': 'Brodowski - SP',
//   'nome': 'Brodowski',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.9992548,
//     'lng': -47.6581615
//   }
// },
// {
//   'cidade_google': 'Chapadão do Sul - MS',
//   'nome': 'Chapadão do Sul',
//   'uf': 'MS',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.7943896,
//     'lng': -52.6190912
//   }
// },
// {
//   'cidade_google': 'Fernandópolis - SP',
//   'nome': 'Fernandópolis',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.2810232,
//     'lng': -50.2475804
//   }
// },
// {
//   'cidade_google': 'Floriano - PI',
//   'nome': 'Floriano',
//   'uf': 'PI',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -7.025847400000001,
//     'lng': -43.0978284
//   }
// },
// {
//   'cidade_google': 'Garça - SP',
//   'nome': 'Garça',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2131635,
//     'lng': -49.65553939999999
//   }
// },
// {
//   'cidade_google': 'Guaira - SP',
//   'nome': 'Guaira',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.3307471,
//     'lng': -48.3589086
//   }
// },
// {
//   'cidade_google': 'Guaiçara - SP',
//   'nome': 'Guaiçara',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.6230871,
//     'lng': -49.7970324
//   }
// },
// {
//   'cidade_google': 'Guara - SP',
//   'nome': 'Guara',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.4894632,
//     'lng': -47.7834888
//   }
// },
// {
//   'cidade_google': 'Guararapes - SP',
//   'nome': 'Guararapes',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.2906244,
//     'lng': -50.6378804
//   }
// },
// {
//   'cidade_google': 'Hidrolândia - GO',
//   'nome': 'Hidrolândia',
//   'uf': 'GO',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.0165096,
//     'lng': -49.2435998
//   }
// },
// {
//   'cidade_google': 'Holambra - SP',
//   'nome': 'Holambra',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.6409997,
//     'lng': -47.0491411
//   }
// },
// {
//   'cidade_google': 'Ibaté - SP',
//   'nome': 'Ibaté',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.953253,
//     'lng': -48.0006076
//   }
// },
// {
//   'cidade_google': 'Ibitinga - SP',
//   'nome': 'Ibitinga',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7567077,
//     'lng': -48.8323618
//   }
// },
// {
//   'cidade_google': 'Igarapava - SP',
//   'nome': 'Igarapava',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.0421785,
//     'lng': -47.7563994
//   }
// },
// {
//   'cidade_google': 'Ji Paraná - RO',
//   'nome': 'Ji Paraná',
//   'uf': 'RO',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.8781412,
//     'lng': -61.93267280000001
//   }
// },
// {
//   'cidade_google': 'José Bonifácio - SP',
//   'nome': 'José Bonifácio',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.0482479,
//     'lng': -49.6879727
//   }
// },
// {
//   'cidade_google': 'Laranjal Paulista - SP',
//   'nome': 'Laranjal Paulista',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.0510503,
//     'lng': -47.838004
//   }
// },
// {
//   'cidade_google': 'Macapa - AP',
//   'nome': 'Macapa',
//   'uf': 'AP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': 0.0355735,
//     'lng': -51.070535
//   }
// },
// {
//   'cidade_google': 'Mirandópolis - SP',
//   'nome': 'Mirandópolis',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.1331045,
//     'lng': -51.1023381
//   }
// },
// {
//   'cidade_google': 'Monte Aprazível - SP',
//   'nome': 'Monte Aprazível',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7359953,
//     'lng': -49.7115614
//   }
// },
// {
//   'cidade_google': 'Morungaba - SP',
//   'nome': 'Morungaba',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8877661,
//     'lng': -46.7671967
//   }
// },
// {
//   'cidade_google': 'Novo Horizonte - SP',
//   'nome': 'Novo Horizonte',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.4649748,
//     'lng': -49.2246518
//   }
// },
// {
//   'cidade_google': 'Ouro Fino - MG',
//   'nome': 'Ouro Fino',
//   'uf': 'MG',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2508537,
//     'lng': -46.400872
//   }
// },
// {
//   'cidade_google': 'Ouro Preto Do Oeste - RO',
//   'nome': 'Ouro Preto Do Oeste',
//   'uf': 'RO',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.6008331,
//     'lng': -62.3095833
//   }
// },
// {
//   'cidade_google': 'Paraguaçu Paulista - SP',
//   'nome': 'Paraguaçu Paulista',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.4141128,
//     'lng': -50.5753348
//   }
// },
// {
//   'cidade_google': 'Parnaiba - PI',
//   'nome': 'Parnaiba',
//   'uf': 'PI',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -2.9055447,
//     'lng': -41.7733626
//   }
// },
// {
//   'cidade_google': 'Pedreira - SP',
//   'nome': 'Pedreira',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7418343,
//     'lng': -46.8952925
//   }
// },
// {
//   'cidade_google': 'Pirapozinho - SP',
//   'nome': 'Pirapozinho',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2756953,
//     'lng': -51.50023179999999
//   }
// },
// {
//   'cidade_google': 'Pontal - SP',
//   'nome': 'Pontal',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.9960165,
//     'lng': -48.0605108
//   }
// },
// {
//   'cidade_google': 'Saquarema - RJ',
//   'nome': 'Saquarema',
//   'uf': 'RJ',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.932382,
//     'lng': -42.4866843
//   }
// },
// {
//   'cidade_google': 'São Joaquim da Barra - SP',
//   'nome': 'São Joaquim da Barra',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.5816355,
//     'lng': -47.85975939999999
//   }
// },
// {
//   'cidade_google': 'Serra Negra - SP',
//   'nome': 'Serra Negra',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.5947659,
//     'lng': -46.6898516
//   }
// },
// {
//   'cidade_google': 'Timon - MA',
//   'nome': 'Timon',
//   'uf': 'MA',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -5.0980798,
//     'lng': -42.8333011
//   }
// },
// {
//   'cidade_google': 'Osasco - SP',
//   'nome': 'Osasco',
//   'uf': 'SP',
//   'padrao': 'EGOVERNE ISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5328871,
//     'lng': -46.7919978
//   }
// },
// {
//   'cidade_google': 'Dois Vizinhos - PR',
//   'nome': 'Dois Vizinhos',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.7464549,
//     'lng': -53.0615734
//   }
// },
// {
//   'cidade_google': 'Ibaiti - PR',
//   'nome': 'Ibaiti',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.8401969,
//     'lng': -50.1925938
//   }
// },
// {
//   'cidade_google': 'Ibiporã - PR',
//   'nome': 'Ibiporã',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.2664186,
//     'lng': -51.0527244
//   }
// },
// {
//   'cidade_google': 'Ivaí - PR',
//   'nome': 'Ivaí',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.9449414,
//     'lng': -50.8872648
//   }
// },
// {
//   'cidade_google': 'Laranjeiras do Sul - PR',
//   'nome': 'Laranjeiras do Sul',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.4079504,
//     'lng': -52.4134746
//   }
// },
// {
//   'cidade_google': 'Prudentópolis - PR',
//   'nome': 'Prudentópolis',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.2115687,
//     'lng': -50.9758851
//   }
// },
// {
//   'cidade_google': 'Santo Antônio do Sudoeste - PR',
//   'nome': 'Santo Antônio do Sudoeste',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.074187,
//     'lng': -53.72561289999999
//   }
// },
// {
//   'cidade_google': 'Toledo - PR',
//   'nome': 'Toledo',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.7251855,
//     'lng': -53.7418514
//   }
// },
// {
//   'cidade_google': 'Guaratuba - PR',
//   'nome': 'Guaratuba',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.8804742,
//     'lng': -48.57376619999999
//   }
// },
// {
//   'cidade_google': 'Juína - MT',
//   'nome': 'Juína',
//   'uf': 'MT',
//   'padrao': 'FISSLEX',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -11.4228495,
//     'lng': -58.75719290000001
//   }
// },
// {
//   'cidade_google': 'Mogi Mirim - SP',
//   'nome': 'Mogi Mirim',
//   'uf': 'SP',
//   'padrao': 'FISSLEX',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.455799,
//     'lng': -47.0193913
//   }
// },
// {
//   'cidade_google': 'Sinop - MT',
//   'nome': 'Sinop',
//   'uf': 'MT',
//   'padrao': 'FISSLEX',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -11.8608456,
//     'lng': -55.5095451
//   }
// },
// {
//   'cidade_google': 'Itatinga - SP',
//   'nome': 'Itatinga',
//   'uf': 'SP',
//   'padrao': 'GEISWEB',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.1067087,
//     'lng': -48.61238669999999
//   }
// },
// {
//   'cidade_google': 'Votorantim - SP',
//   'nome': 'Votorantim',
//   'uf': 'SP',
//   'padrao': 'GEISWEB',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.540286,
//     'lng': -47.4445978
//   }
// },
// {
//   'cidade_google': 'Campina Grande - PB',
//   'nome': 'Campina Grande',
//   'uf': 'PB',
//   'padrao': 'GIAP',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -7.2290752,
//     'lng': -35.8808337
//   }
// },
// {
//   'cidade_google': 'Pirassununga - SP',
//   'nome': 'Pirassununga',
//   'uf': 'SP',
//   'padrao': 'GIAP',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.9689374,
//     'lng': -47.4098328
//   }
// },
// {
//   'cidade_google': 'Amparo - SP',
//   'nome': 'Amparo',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7080671,
//     'lng': -46.77266969999999
//   }
// },
// {
//   'cidade_google': 'Arapiraca - AL',
//   'nome': 'Arapiraca',
//   'uf': 'AL',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -9.755588,
//     'lng': -36.6639577
//   }
// },
// {
//   'cidade_google': 'Araraquara - SP',
//   'nome': 'Araraquara',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7848272,
//     'lng': -48.1786486
//   }
// },
// {
//   'cidade_google': 'Araxá - MG',
//   'nome': 'Araxá',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.5906483,
//     'lng': -46.9442412
//   }
// },
// {
//   'cidade_google': 'Belford Roxo - RJ',
//   'nome': 'Belford Roxo',
//   'uf': 'RJ',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7645391,
//     'lng': -43.3996264
//   }
// },
// {
//   'cidade_google': 'Betim - MG',
//   'nome': 'Betim',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.9673078,
//     'lng': -44.2011904
//   }
// },
// {
//   'cidade_google': 'Campos dos Goytacazes - RJ',
//   'nome': 'Campos dos Goytacazes',
//   'uf': 'RJ',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7626902,
//     'lng': -41.3184877
//   }
// },
// {
//   'cidade_google': 'Caraguatatuba - SP',
//   'nome': 'Caraguatatuba',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6255903,
//     'lng': -45.4241453
//   }
// },
// {
//   'cidade_google': 'Capivari - SP',
//   'nome': 'Capivari',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.9946056,
//     'lng': -47.50945979999999
//   }
// },
// {
//   'cidade_google': 'Caruaru - PE',
//   'nome': 'Caruaru',
//   'uf': 'PE',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -8.2849639,
//     'lng': -35.9701874
//   }
// },
// {
//   'cidade_google': 'Cataguases - MG',
//   'nome': 'Cataguases',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.3892337,
//     'lng': -42.69454959999999
//   }
// },
// {
//   'cidade_google': 'Cotia - SP',
//   'nome': 'Cotia',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6026684,
//     'lng': -46.9194693
//   }
// },
// {
//   'cidade_google': 'Diadema - SP',
//   'nome': 'Diadema',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6818396,
//     'lng': -46.620967
//   }
// },
// {
//   'cidade_google': 'Fortaleza - CE',
//   'nome': 'Fortaleza',
//   'uf': 'CE',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -3.7319029,
//     'lng': -38.5267393
//   }
// },
// {
//   'cidade_google': 'Franca - SP',
//   'nome': 'Franca',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.5393288,
//     'lng': -47.4013437
//   }
// },
// {
//   'cidade_google': 'Guaíba - RS',
//   'nome': 'Guaíba',
//   'uf': 'RS',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -30.1090924,
//     'lng': -51.3238273
//   }
// },
// {
//   'cidade_google': 'Guaratinguetá - SP',
//   'nome': 'Guaratinguetá',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8080237,
//     'lng': -45.19421910000001
//   }
// },
// {
//   'cidade_google': 'Guarujá - SP',
//   'nome': 'Guarujá',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.9949104,
//     'lng': -46.2568758
//   }
// },
// {
//   'cidade_google': 'Guarulhos - SP',
//   'nome': 'Guarulhos',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.4543148,
//     'lng': -46.5336521
//   }
// },
// {
//   'cidade_google': 'Itaboraí - RJ',
//   'nome': 'Itaboraí',
//   'uf': 'RJ',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7570025,
//     'lng': -42.8643167
//   }
// },
// {
//   'cidade_google': 'Hortolândia - SP',
//   'nome': 'Hortolândia',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8533412,
//     'lng': -47.2147082
//   }
// },
// {
//   'cidade_google': 'Itajuba - MG',
//   'nome': 'Itajuba',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.4230065,
//     'lng': -45.4602809
//   }
// },
// {
//   'cidade_google': 'Itaúna - MG',
//   'nome': 'Itaúna',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.0446857,
//     'lng': -44.5878439
//   }
// },
// {
//   'cidade_google': 'Itu - SP',
//   'nome': 'Itu',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.2639728,
//     'lng': -47.2997085
//   }
// },
// {
//   'cidade_google': 'Jaboticabal - SP',
//   'nome': 'Jaboticabal',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.2525138,
//     'lng': -48.3256762
//   }
// },
// {
//   'cidade_google': 'Jardinópolis - SP',
//   'nome': 'Jardinópolis',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.0277616,
//     'lng': -47.77720490000001
//   }
// },
// {
//   'cidade_google': 'Jundiaí - SP',
//   'nome': 'Jundiaí',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.1857076,
//     'lng': -46.8978057
//   }
// },
// {
//   'cidade_google': 'Lagoa Santa - MG',
//   'nome': 'Lagoa Santa',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.6303019,
//     'lng': -43.89830310000001
//   }
// },
// {
//   'cidade_google': 'Morro Agudo - SP',
//   'nome': 'Morro Agudo',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.6974477,
//     'lng': -48.1597946
//   }
// },
// {
//   'cidade_google': 'Mauá - SP',
//   'nome': 'Mauá',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.668163,
//     'lng': -46.46170859999999
//   }
// },
// {
//   'cidade_google': 'Muriaé - MG',
//   'nome': 'Muriaé',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.1291403,
//     'lng': -42.3702252
//   }
// },
// {
//   'cidade_google': 'Nova Iguaçu - RJ',
//   'nome': 'Nova Iguaçu',
//   'uf': 'RJ',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7561319,
//     'lng': -43.4607419
//   }
// },
// {
//   'cidade_google': 'Maceió - AL',
//   'nome': 'Maceió',
//   'uf': 'AL',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -9.6498487,
//     'lng': -35.7089492
//   }
// },
// {
//   'cidade_google': 'Manaus - AM',
//   'nome': 'Manaus',
//   'uf': 'AM',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -3.1190275,
//     'lng': -60.0217314
//   }
// },
// {
//   'cidade_google': 'Olímpia - SP',
//   'nome': 'Olímpia',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7371116,
//     'lng': -48.9110606
//   }
// },
// {
//   'cidade_google': 'Paulínia - SP',
//   'nome': 'Paulínia',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7546466,
//     'lng': -47.1492176
//   }
// },
// {
//   'cidade_google': 'Porto Ferreira - SP',
//   'nome': 'Porto Ferreira',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.8421051,
//     'lng': -47.4710798
//   }
// },
// {
//   'cidade_google': 'Pouso Alegre - MG',
//   'nome': 'Pouso Alegre',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2480373,
//     'lng': -45.9420118
//   }
// },
// {
//   'cidade_google': 'Registro - SP',
//   'nome': 'Registro',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.5002295,
//     'lng': -47.8448116
//   }
// },
// {
//   'cidade_google': 'Ribeirão das Neves - MG',
//   'nome': 'Ribeirão das Neves',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.7618937,
//     'lng': -44.0853128
//   }
// },
// {
//   'cidade_google': 'Ribeirão Pires - SP',
//   'nome': 'Ribeirão Pires',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.7071623,
//     'lng': -46.4062503
//   }
// },
// {
//   'cidade_google': 'Ribeirão Preto - SP',
//   'nome': 'Ribeirão Preto',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.1704008,
//     'lng': -47.8103238
//   }
// },
// {
//   'cidade_google': 'Rio Claro - SP',
//   'nome': 'Rio Claro',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.4149023,
//     'lng': -47.5651394
//   }
// },
// {
//   'cidade_google': 'Santa Rita do Passa Quatro - SP',
//   'nome': 'Santa Rita do Passa Quatro',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.6865018,
//     'lng': -47.4882762
//   }
// },
// {
//   'cidade_google': 'Santo André - SP',
//   'nome': 'Santo André',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6742228,
//     'lng': -46.5436003
//   }
// },
// {
//   'cidade_google': 'Santos - SP',
//   'nome': 'Santos',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.9561304,
//     'lng': -46.3264089
//   }
// },
// {
//   'cidade_google': 'São Bernardo do Campo - SP',
//   'nome': 'São Bernardo do Campo',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6898429,
//     'lng': -46.5648481
//   }
// },
// {
//   'cidade_google': 'São Caetano do Sul - SP',
//   'nome': 'São Caetano do Sul',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6233625,
//     'lng': -46.5552433
//   }
// },
// {
//   'cidade_google': 'São Carlos - SP',
//   'nome': 'São Carlos',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.0087082,
//     'lng': -47.8909263
//   }
// },
// {
//   'cidade_google': 'São José do Rio Preto - SP',
//   'nome': 'São José do Rio Preto',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.811761,
//     'lng': -49.3762272
//   }
// },
// {
//   'cidade_google': 'São José dos Campos - SP',
//   'nome': 'São José dos Campos',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.223701,
//     'lng': -45.9009074
//   }
// },
// {
//   'cidade_google': 'São Roque - SP',
//   'nome': 'São Roque',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5307554,
//     'lng': -47.13539979999999
//   }
// },
// {
//   'cidade_google': 'Sarzedo - MG',
//   'nome': 'Sarzedo',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.0371483,
//     'lng': -44.14501509999999
//   }
// },
// {
//   'cidade_google': 'Suzano - SP',
//   'nome': 'Suzano',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5453209,
//     'lng': -46.311625
//   }
// },
// {
//   'cidade_google': 'Taquaritinga - SP',
//   'nome': 'Taquaritinga',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.4069762,
//     'lng': -48.5052392
//   }
// },
// {
//   'cidade_google': 'Ubá - MG',
//   'nome': 'Ubá',
//   'uf': 'MG',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.120123,
//     'lng': -42.9426188
//   }
// },
// {
//   'cidade_google': 'Ubatuba - SP',
//   'nome': 'Ubatuba',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.4336713,
//     'lng': -45.0838529
//   }
// },
// {
//   'cidade_google': 'Votuporanga - SP',
//   'nome': 'Votuporanga',
//   'uf': 'SP',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.4171943,
//     'lng': -49.9703251
//   }
// },
// {
//   'cidade_google': 'Apucarana - PR',
//   'nome': 'Apucarana',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5504385,
//     'lng': -51.4639716
//   }
// },
// {
//   'cidade_google': 'Assis Chateaubriand - PR',
//   'nome': 'Assis Chateaubriand',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.4066881,
//     'lng': -53.5142422
//   }
// },
// {
//   'cidade_google': 'Barrinha - SP',
//   'nome': 'Barrinha',
//   'uf': 'SP',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.2397333,
//     'lng': -48.1002024
//   }
// },
// {
//   'cidade_google': 'Boa Esperança - MG',
//   'nome': 'Boa Esperança',
//   'uf': 'MG',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.0928433,
//     'lng': -45.5629752
//   }
// },
// {
//   'cidade_google': 'Camaquã - RS',
//   'nome': 'Camaquã',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -30.8493976,
//     'lng': -51.80483109999999
//   }
// },
// {
//   'cidade_google': 'Catanduva - SP',
//   'nome': 'Catanduva',
//   'uf': 'SP',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.1318555,
//     'lng': -48.977473
//   }
// },
// {
//   'cidade_google': 'Colina - SP',
//   'nome': 'Colina',
//   'uf': 'SP',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7096088,
//     'lng': -48.5318251
//   }
// },
// {
//   'cidade_google': 'Contagem - MG',
//   'nome': 'Contagem',
//   'uf': 'MG',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.9161508,
//     'lng': -44.0808763
//   }
// },
// {
//   'cidade_google': 'Eldorado do Sul - RS',
//   'nome': 'Eldorado do Sul',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.9973202,
//     'lng': -51.3081324
//   }
// },
// {
//   'cidade_google': 'Jacarezinho - PR',
//   'nome': 'Jacarezinho',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.157939,
//     'lng': -49.9777202
//   }
// },
// {
//   'cidade_google': 'Ijuí - RS',
//   'nome': 'Ijuí',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.3013365,
//     'lng': -53.88892
//   }
// },
// {
//   'cidade_google': 'Itaipulandia - PR',
//   'nome': 'Itaipulandia',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.1362597,
//     'lng': -54.3685809
//   }
// },
// {
//   'cidade_google': 'Marmeleiro - PR',
//   'nome': 'Marmeleiro',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.2442498,
//     'lng': -53.1104044
//   }
// },
// {
//   'cidade_google': 'Medianeira - PR',
//   'nome': 'Medianeira',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.2952784,
//     'lng': -54.0932225
//   }
// },
// {
//   'cidade_google': 'Naviraí - MS',
//   'nome': 'Naviraí',
//   'uf': 'MS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.062277,
//     'lng': -54.1999693
//   }
// },
// {
//   'cidade_google': 'Nova Santa Rita - RS',
//   'nome': 'Nova Santa Rita',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.8507825,
//     'lng': -51.2741212
//   }
// },
// {
//   'cidade_google': 'Pato Branco - PR',
//   'nome': 'Pato Branco',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.2297202,
//     'lng': -52.6711356
//   }
// },
// {
//   'cidade_google': 'Regente Feijó - SP',
//   'nome': 'Regente Feijó',
//   'uf': 'SP',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2188934,
//     'lng': -51.3064462
//   }
// },
// {
//   'cidade_google': 'Rolandia - PR',
//   'nome': 'Rolandia',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3105968,
//     'lng': -51.366412
//   }
// },
// {
//   'cidade_google': 'Rosana - SP',
//   'nome': 'Rosana',
//   'uf': 'SP',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.5786418,
//     'lng': -53.0607901
//   }
// },
// {
//   'cidade_google': 'São Gabriel - RS',
//   'nome': 'São Gabriel',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -30.2915042,
//     'lng': -54.5218074
//   }
// },
// {
//   'cidade_google': 'Santa Terezinha de Itaipu - PR',
//   'nome': 'Santa Terezinha de Itaipu',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.4452671,
//     'lng': -54.4013186
//   }
// },
// {
//   'cidade_google': 'Santo Antônio da Platina - PR',
//   'nome': 'Santo Antônio da Platina',
//   'uf': 'PR',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.2980974,
//     'lng': -50.07268819999999
//   }
// },
// {
//   'cidade_google': 'Triunfo - RS',
//   'nome': 'Triunfo',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.9332492,
//     'lng': -51.7129471
//   }
// },
// {
//   'cidade_google': 'Tupanciretã - RS',
//   'nome': 'Tupanciretã',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.001375,
//     'lng': -53.99767749999999
//   }
// },
// {
//   'cidade_google': 'Uruguaiana - RS',
//   'nome': 'Uruguaiana',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.7619121,
//     'lng': -57.08584279999999
//   }
// },
// {
//   'cidade_google': 'Cândido Mota - SP',
//   'nome': 'Cândido Mota',
//   'uf': 'SP',
//   'padrao': 'GOVBR 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8065424,
//     'lng': -50.3894858
//   }
// },
// {
//   'cidade_google': 'Guarapuava - PR',
//   'nome': 'Guarapuava',
//   'uf': 'PR',
//   'padrao': 'GOVBR 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.3907214,
//     'lng': -51.4628097
//   }
// },
// {
//   'cidade_google': 'Itabira - MG',
//   'nome': 'Itabira',
//   'uf': 'MG',
//   'padrao': 'GOVBR 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.6244172,
//     'lng': -43.2316363
//   }
// },
// {
//   'cidade_google': 'Julio de Castilhos - RS',
//   'nome': 'Julio de Castilhos',
//   'uf': 'RS',
//   'padrao': 'GOVBR 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.2293516,
//     'lng': -53.6827015
//   }
// },
// {
//   'cidade_google': 'Viamão - RS',
//   'nome': 'Viamão',
//   'uf': 'RS',
//   'padrao': 'GOVBR 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -30.0722165,
//     'lng': -51.0969571
//   }
// },
// {
//   'cidade_google': 'Matinhos - PR',
//   'nome': 'Matinhos',
//   'uf': 'PR',
//   'padrao': 'GOVBR 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.8322614,
//     'lng': -48.53804539999999
//   }
// },
// {
//   'cidade_google': 'Vacaria - RS',
//   'nome': 'Vacaria',
//   'uf': 'RS',
//   'padrao': 'GOVBR 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '10/10/2017',
//   'localizacao': {
//     'lat': -28.5083259,
//     'lng': -50.942302
//   }
// },
// {
//   'cidade_google': 'Araguari - MG',
//   'nome': 'Araguari',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.6460397,
//     'lng': -48.193856
//   }
// },
// {
//   'cidade_google': 'Bragança Paulista - SP',
//   'nome': 'Bragança Paulista',
//   'uf': 'SP',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.9531705,
//     'lng': -46.5423239
//   }
// },
// {
//   'cidade_google': 'Divinópolis - MG',
//   'nome': 'Divinópolis',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.1451261,
//     'lng': -44.8916447
//   }
// },
// {
//   'cidade_google': 'Guaxupé - MG',
//   'nome': 'Guaxupé',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.299654,
//     'lng': -46.6898516
//   }
// },
// {
//   'cidade_google': 'Lavras - MG',
//   'nome': 'Lavras',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.2659139,
//     'lng': -45.0373171
//   }
// },
// {
//   'cidade_google': 'Paracatu - MG',
//   'nome': 'Paracatu',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.2174522,
//     'lng': -46.8711355
//   }
// },
// {
//   'cidade_google': 'Pelotas - RS',
//   'nome': 'Pelotas',
//   'uf': 'RS',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -31.7653989,
//     'lng': -52.3375886
//   }
// },
// {
//   'cidade_google': 'Pedro Leopoldo - MG',
//   'nome': 'Pedro Leopoldo',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.6188994,
//     'lng': -44.0406592
//   }
// },
// {
//   'cidade_google': 'Poços de Caldas - MG',
//   'nome': 'Poços de Caldas',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7853787,
//     'lng': -46.5619303
//   }
// },
// {
//   'cidade_google': 'Prata - MG',
//   'nome': 'Prata',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.3100889,
//     'lng': -48.9277508
//   }
// },
// {
//   'cidade_google': 'Teixeira de Freitas - BA',
//   'nome': 'Teixeira de Freitas',
//   'uf': 'BA',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.5400307,
//     'lng': -39.7421813
//   }
// },
// {
//   'cidade_google': 'Unaí - MG',
//   'nome': 'Unaí',
//   'uf': 'MG',
//   'padrao': 'GOVDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.3596547,
//     'lng': -46.9027545
//   }
// },
// {
//   'cidade_google': 'Valparaiso de Goiás - GO',
//   'nome': 'Valparaiso de Goiás',
//   'uf': 'GO',
//   'padrao': 'GOVERNA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.0663414,
//     'lng': -47.9845465
//   }
// },
// {
//   'cidade_google': 'Aracati - CE',
//   'nome': 'Aracati',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -4.561154300000001,
//     'lng': -37.7689913
//   }
// },
// {
//   'cidade_google': 'Beberibe - CE',
//   'nome': 'Beberibe',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -4.1828216,
//     'lng': -38.1300412
//   }
// },
// {
//   'cidade_google': 'Crato - CE',
//   'nome': 'Crato',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -7.229957199999999,
//     'lng': -39.4122984
//   }
// },
// {
//   'cidade_google': 'Eusébio - CE',
//   'nome': 'Eusébio',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -3.884188699999999,
//     'lng': -38.46396319999999
//   }
// },
// {
//   'cidade_google': 'Maracanaú - CE',
//   'nome': 'Maracanaú',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -3.8674127,
//     'lng': -38.6261113
//   }
// },
// {
//   'cidade_google': 'Jijoca de Jericoacoara - CE',
//   'nome': 'Jijoca de Jericoacoara',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -2.7956135,
//     'lng': -40.514267
//   }
// },
// {
//   'cidade_google': 'Juazeiro do Norte - CE.',
//   'nome': 'Juazeiro do Norte',
//   'uf': 'CE.',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -7.228472699999999,
//     'lng': -39.3121233
//   }
// },
// {
//   'cidade_google': 'Pacajus - CE',
//   'nome': 'Pacajus',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -4.1731846,
//     'lng': -38.460945
//   }
// },
// {
//   'cidade_google': 'Petrolina - PE',
//   'nome': 'Petrolina',
//   'uf': 'PE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -9.389083,
//     'lng': -40.5030961
//   }
// },
// {
//   'cidade_google': 'Tianguá - CE',
//   'nome': 'Tianguá',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -3.7300232,
//     'lng': -40.9926511
//   }
// },
// {
//   'cidade_google': 'Aquiraz - CE',
//   'nome': 'Aquiraz',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -3.906286399999999,
//     'lng': -38.3874738
//   }
// },
// {
//   'cidade_google': 'Quixada - CE',
//   'nome': 'Quixada',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -4.9685795,
//     'lng': -39.0162466
//   }
// },
// {
//   'cidade_google': 'Araruama - RJ',
//   'nome': 'Araruama',
//   'uf': 'RJ',
//   'padrao': 'ISSDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8636192,
//     'lng': -42.3336313
//   }
// },
// {
//   'cidade_google': 'Cabo Frio - RJ',
//   'nome': 'Cabo Frio',
//   'uf': 'RJ',
//   'padrao': 'ISSDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8867507,
//     'lng': -42.0262542
//   }
// },
// {
//   'cidade_google': 'Nova Lima - MG',
//   'nome': 'Nova Lima',
//   'uf': 'MG',
//   'padrao': 'ISSDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.9930393,
//     'lng': -43.8485623
//   }
// },
// {
//   'cidade_google': 'Crateus - CE',
//   'nome': 'Crateus',
//   'uf': 'CE',
//   'padrao': 'ISSINTEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -5.178204,
//     'lng': -40.6695522
//   }
// },
// {
//   'cidade_google': 'Pirapora - MG',
//   'nome': 'Pirapora',
//   'uf': 'MG',
//   'padrao': 'ISSINTEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.3435064,
//     'lng': -44.9230576
//   }
// },
// {
//   'cidade_google': 'Juara - MT',
//   'nome': 'Juara',
//   'uf': 'MT',
//   'padrao': 'ISSINTEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -11.2670409,
//     'lng': -57.5165612
//   }
// },
// {
//   'cidade_google': 'Várzea da Palma - MG',
//   'nome': 'Várzea da Palma',
//   'uf': 'MG',
//   'padrao': 'ISSINTEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.4725042,
//     'lng': -44.6254642
//   }
// },
// {
//   'cidade_google': 'Anápolis - GO',
//   'nome': 'Anápolis',
//   'uf': 'GO',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.3285085,
//     'lng': -48.95342
//   }
// },
// {
//   'cidade_google': 'Aparecida de Goiânia - GO',
//   'nome': 'Aparecida de Goiânia',
//   'uf': 'GO',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.820257,
//     'lng': -49.2473044
//   }
// },
// {
//   'cidade_google': 'Cascavel - PR',
//   'nome': 'Cascavel',
//   'uf': 'PR',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.9577771,
//     'lng': -53.45951119999999
//   }
// },
// {
//   'cidade_google': 'Cruz Alta - RS',
//   'nome': 'Cruz Alta',
//   'uf': 'RS',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.6454883,
//     'lng': -53.605355
//   }
// },
// {
//   'cidade_google': 'Cuiabá - MT',
//   'nome': 'Cuiabá',
//   'uf': 'MT',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -15.6014109,
//     'lng': -56.0978917
//   }
// },
// {
//   'cidade_google': 'Paranaiba - MS',
//   'nome': 'Paranaiba',
//   'uf': 'MS',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.67511,
//     'lng': -51.1913338
//   }
// },
// {
//   'cidade_google': 'Praia Grande - SP',
//   'nome': 'Praia Grande',
//   'uf': 'SP',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.0088421,
//     'lng': -46.4124616
//   }
// },
// {
//   'cidade_google': 'São Vicente - SP',
//   'nome': 'São Vicente',
//   'uf': 'SP',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.960745,
//     'lng': -46.3961359
//   }
// },
// {
//   'cidade_google': 'Sorriso - MT',
//   'nome': 'Sorriso',
//   'uf': 'MT',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.5429239,
//     'lng': -55.7215037
//   }
// },
// {
//   'cidade_google': 'Três Corações - MG',
//   'nome': 'Três Corações',
//   'uf': 'MG',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.6946622,
//     'lng': -45.2511765
//   }
// },
// {
//   'cidade_google': 'Santa Maria - RS',
//   'nome': 'Santa Maria',
//   'uf': 'RS',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.68725,
//     'lng': -53.8154499
//   }
// },
// {
//   'cidade_google': 'Jacareí - SP',
//   'nome': 'Jacareí',
//   'uf': 'SP',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.2987827,
//     'lng': -45.96625419999999
//   }
// },
// {
//   'cidade_google': 'Agudos - SP',
//   'nome': 'Agudos',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.4684228,
//     'lng': -48.98798009999999
//   }
// },
// {
//   'cidade_google': 'Araçatuba - SP',
//   'nome': 'Araçatuba',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.2028539,
//     'lng': -50.4536793
//   }
// },
// {
//   'cidade_google': 'Barretos - SP',
//   'nome': 'Barretos',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.5279587,
//     'lng': -48.6388879
//   }
// },
// {
//   'cidade_google': 'Brotas - SP',
//   'nome': 'Brotas',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.279958,
//     'lng': -48.1255698
//   }
// },
// {
//   'cidade_google': 'Dracena - SP',
//   'nome': 'Dracena',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.5427809,
//     'lng': -51.5570726
//   }
// },
// {
//   'cidade_google': 'Ipojuca - PE',
//   'nome': 'Ipojuca',
//   'uf': 'PE',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -8.5570521,
//     'lng': -35.0125535
//   }
// },
// {
//   'cidade_google': 'Lins - SP',
//   'nome': 'Lins',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.6733002,
//     'lng': -49.74713879999999
//   }
// },
// {
//   'cidade_google': 'Paiçandu - PR',
//   'nome': 'Paiçandu',
//   'uf': 'PR',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.4554707,
//     'lng': -52.0423373
//   }
// },
// {
//   'cidade_google': 'Presidente Venceslau - SP',
//   'nome': 'Presidente Venceslau',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.8737026,
//     'lng': -51.8452266
//   }
// },
// {
//   'cidade_google': 'Porto Real - RJ',
//   'nome': 'Porto Real',
//   'uf': 'RJ',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.4179651,
//     'lng': -44.2955901
//   }
// },
// {
//   'cidade_google': 'Tambaú - SP',
//   'nome': 'Tambaú',
//   'uf': 'SP',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.6123347,
//     'lng': -47.2533007
//   }
// },
// {
//   'cidade_google': 'Campo Bom - RS',
//   'nome': 'Campo Bom',
//   'uf': 'RS',
//   'padrao': 'INFISC',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.6751942,
//     'lng': -51.0611099
//   }
// },
// {
//   'cidade_google': 'Caxias do Sul - RS',
//   'nome': 'Caxias do Sul',
//   'uf': 'RS',
//   'padrao': 'INFISC',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.1634031,
//     'lng': -51.1796683
//   }
// },
// {
//   'cidade_google': 'Sapucaia do Sul - RS',
//   'nome': 'Sapucaia do Sul',
//   'uf': 'RS',
//   'padrao': 'INFISC',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.8287957,
//     'lng': -51.14418
//   }
// },
// {
//   'cidade_google': 'Arapongas - PR',
//   'nome': 'Arapongas',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.4157731,
//     'lng': -51.4264048
//   }
// },
// {
//   'cidade_google': 'Balneário Piçarras - SC',
//   'nome': 'Balneário Piçarras',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.7697853,
//     'lng': -48.67675699999999
//   }
// },
// {
//   'cidade_google': 'Biguaçú - SC',
//   'nome': 'Biguaçú',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.4955748,
//     'lng': -48.65536849999999
//   }
// },
// {
//   'cidade_google': 'Brusque - SC',
//   'nome': 'Brusque',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.0982053,
//     'lng': -48.9111422
//   }
// },
// {
//   'cidade_google': 'Campo Largo - PR',
//   'nome': 'Campo Largo',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.4596855,
//     'lng': -49.5273149
//   }
// },
// {
//   'cidade_google': 'Campo Mourão - PR',
//   'nome': 'Campo Mourão',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.0436553,
//     'lng': -52.3781098
//   }
// },
// {
//   'cidade_google': 'Castro - PR',
//   'nome': 'Castro',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.7902746,
//     'lng': -49.7728757
//   }
// },
// {
//   'cidade_google': 'Colombo - PR',
//   'nome': 'Colombo',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.2929784,
//     'lng': -49.22663439999999
//   }
// },
// {
//   'cidade_google': 'Concórdia - SC',
//   'nome': 'Concórdia',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.2331134,
//     'lng': -52.0275531
//   }
// },
// {
//   'cidade_google': 'Gravataí - RS',
//   'nome': 'Gravataí',
//   'uf': 'RS',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.942289,
//     'lng': -50.9907877
//   }
// },
// {
//   'cidade_google': 'Guaíra - PR',
//   'nome': 'Guaíra',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.0840649,
//     'lng': -54.2565481
//   }
// },
// {
//   'cidade_google': 'Guaramirim - SC',
//   'nome': 'Guaramirim',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.4743278,
//     'lng': -49.0023
//   }
// },
// {
//   'cidade_google': 'Igrejinha - RS',
//   'nome': 'Igrejinha',
//   'uf': 'RS',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.5700426,
//     'lng': -50.7927755
//   }
// },
// {
//   'cidade_google': 'Itapoá - SC',
//   'nome': 'Itapoá',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.0799326,
//     'lng': -48.6589406
//   }
// },
// {
//   'cidade_google': 'Lapa - PR',
//   'nome': 'Lapa',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.7675893,
//     'lng': -49.717299
//   }
// },
// {
//   'cidade_google': 'Marechal Cândido Rondon - PR',
//   'nome': 'Marechal Cândido Rondon',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.5568725,
//     'lng': -54.056788
//   }
// },
// {
//   'cidade_google': 'Palhoça - SC',
//   'nome': 'Palhoça',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.6466202,
//     'lng': -48.6703613
//   }
// },
// {
//   'cidade_google': 'Parobé - RS',
//   'nome': 'Parobé',
//   'uf': 'RS',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.6247579,
//     'lng': -50.8316868
//   }
// },
// {
//   'cidade_google': 'Paranaguá - PR',
//   'nome': 'Paranaguá',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.5148826,
//     'lng': -48.5225655
//   }
// },
// {
//   'cidade_google': 'Pinhais - PR',
//   'nome': 'Pinhais',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.4434411,
//     'lng': -49.1931448
//   }
// },
// {
//   'cidade_google': 'Rio do Sul - SC',
//   'nome': 'Rio do Sul',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.2160932,
//     'lng': -49.6435018
//   }
// },
// {
//   'cidade_google': 'Santa Helena - PR',
//   'nome': 'Santa Helena',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.8584188,
//     'lng': -54.3364348
//   }
// },
// {
//   'cidade_google': 'Santa Rosa - RS',
//   'nome': 'Santa Rosa',
//   'uf': 'RS',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.8706817,
//     'lng': -54.4801558
//   }
// },
// {
//   'cidade_google': 'São Francisco do Sul - SC',
//   'nome': 'São Francisco do Sul',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.2490884,
//     'lng': -48.6346216
//   }
// },
// {
//   'cidade_google': 'Telêmaco Borba - PR',
//   'nome': 'Telêmaco Borba',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.3250322,
//     'lng': -50.6180771
//   }
// },
// {
//   'cidade_google': 'Timbó - SC',
//   'nome': 'Timbó',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.8218106,
//     'lng': -49.2778813
//   }
// },
// {
//   'cidade_google': 'Três Barras - SC',
//   'nome': 'Três Barras',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.1265438,
//     'lng': -50.3142152
//   }
// },
// {
//   'cidade_google': 'Videira - SC',
//   'nome': 'Videira',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.0052075,
//     'lng': -51.15439500000001
//   }
// },
// {
//   'cidade_google': 'Cajazeiras - PB',
//   'nome': 'Cajazeiras',
//   'uf': 'PB',
//   'padrao': 'ISSSIMPLES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -6.8897071,
//     'lng': -38.5612185
//   }
// },
// {
//   'cidade_google': 'Imperatriz - MA',
//   'nome': 'Imperatriz',
//   'uf': 'MA',
//   'padrao': 'ISSSIMPLES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -5.5205646,
//     'lng': -47.4718463
//   }
// },
// {
//   'cidade_google': 'Jataí - GO',
//   'nome': 'Jataí',
//   'uf': 'GO',
//   'padrao': 'ISSWEB',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.8796049,
//     'lng': -51.7206735
//   }
// },
// {
//   'cidade_google': 'Paraíba do Sul - RJ',
//   'nome': 'Paraíba do Sul',
//   'uf': 'RJ',
//   'padrao': 'JGBAIAO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.1588749,
//     'lng': -43.29047389999999
//   }
// },
// {
//   'cidade_google': 'Araucária - PR',
//   'nome': 'Araucária',
//   'uf': 'PR',
//   'padrao': 'LEXSOM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.586431,
//     'lng': -49.4052251
//   }
// },
// {
//   'cidade_google': 'Foz do Iguaçu - PR',
//   'nome': 'Foz do Iguaçu',
//   'uf': 'PR',
//   'padrao': 'LEXSOM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.5163356,
//     'lng': -54.58537639999999
//   }
// },
// {
//   'cidade_google': 'Londrina - PR',
//   'nome': 'Londrina',
//   'uf': 'PR',
//   'padrao': 'LONDRINA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3044524,
//     'lng': -51.1695824
//   }
// },
// {
//   'cidade_google': 'Cambará - PR',
//   'nome': 'Cambará',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.0113046,
//     'lng': -50.0803953
//   }
// },
// {
//   'cidade_google': 'Ipiranga - PR',
//   'nome': 'Ipiranga',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.0253304,
//     'lng': -50.5835338
//   }
// },
// {
//   'cidade_google': 'Mandaguari - PR',
//   'nome': 'Mandaguari',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5169691,
//     'lng': -51.6872041
//   }
// },
// {
//   'cidade_google': 'Nova Esperança - PR',
//   'nome': 'Nova Esperança',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.1891863,
//     'lng': -52.2004893
//   }
// },
// {
//   'cidade_google': 'Palmeira - PR',
//   'nome': 'Palmeira',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.4239714,
//     'lng': -50.00446969999999
//   }
// },
// {
//   'cidade_google': 'Palotina - PR',
//   'nome': 'Palotina',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.2808439,
//     'lng': -53.8671868
//   }
// },
// {
//   'cidade_google': 'Piraquara - PR',
//   'nome': 'Piraquara',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.4776052,
//     'lng': -49.0615086
//   }
// },
// {
//   'cidade_google': 'Marialva - PR',
//   'nome': 'Marialva',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.4846227,
//     'lng': -51.7930941
//   }
// },
// {
//   'cidade_google': 'Ponta Grossa - PR',
//   'nome': 'Ponta Grossa',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -25.0993621,
//     'lng': -50.1584514
//   }
// },
// {
//   'cidade_google': 'Lauro de Freitas - BA',
//   'nome': 'Lauro de Freitas',
//   'uf': 'BA',
//   'padrao': 'METROPOLIS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.8820575,
//     'lng': -38.3148204
//   }
// },
// {
//   'cidade_google': 'Natal - RN',
//   'nome': 'Natal',
//   'uf': 'RN',
//   'padrao': 'NATAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -5.7792569,
//     'lng': -35.200916
//   }
// },
// {
//   'cidade_google': 'Três Lagoas - MS',
//   'nome': 'Três Lagoas',
//   'uf': 'MS',
//   'padrao': 'NEA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7881656,
//     'lng': -51.7030882
//   }
// },
// {
//   'cidade_google': 'Salto - SP',
//   'nome': 'Salto',
//   'uf': 'SP',
//   'padrao': 'OBARATEC',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.2000805,
//     'lng': -47.293538
//   }
// },
// {
//   'cidade_google': 'Belo Horizonte - MG',
//   'nome': 'Belo Horizonte',
//   'uf': 'MG',
//   'padrao': 'PRODABEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.9245018,
//     'lng': -43.93523760000001
//   }
// },
// {
//   'cidade_google': 'Porto Alegre - RS',
//   'nome': 'Porto Alegre',
//   'uf': 'RS',
//   'padrao': 'PRODABEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -30.0346471,
//     'lng': -51.2176584
//   }
// },
// {
//   'cidade_google': 'Morrinhos - GO',
//   'nome': 'Morrinhos',
//   'uf': 'GO',
//   'padrao': 'PRODATA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.7299968,
//     'lng': -49.11427399999999
//   }
// },
// {
//   'cidade_google': 'Caçador - SC',
//   'nome': 'Caçador',
//   'uf': 'SC',
//   'padrao': 'PUBLICA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.7761609,
//     'lng': -51.0124989
//   }
// },
// {
//   'cidade_google': 'Barreiras - BA',
//   'nome': 'Barreiras',
//   'uf': 'BA',
//   'padrao': 'PUBLICA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.1477483,
//     'lng': -44.9953475
//   }
// },
// {
//   'cidade_google': 'Boa Vista - RR',
//   'nome': 'Boa Vista',
//   'uf': 'RR',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': 2.8235098,
//     'lng': -60.6758331
//   }
// },
// {
//   'cidade_google': 'Bom Jesus da Lapa - BA',
//   'nome': 'Bom Jesus da Lapa',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -13.2513786,
//     'lng': -43.4112394
//   }
// },
// {
//   'cidade_google': 'Catu - BA',
//   'nome': 'Catu',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.3713805,
//     'lng': -38.3852123
//   }
// },
// {
//   'cidade_google': 'Eunápolis - BA',
//   'nome': 'Eunápolis',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.3719941,
//     'lng': -39.5825118
//   }
// },
// {
//   'cidade_google': 'Ipiaú - BA',
//   'nome': 'Ipiaú',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.1349424,
//     'lng': -39.7385835
//   }
// },
// {
//   'cidade_google': 'Jacobina - BA',
//   'nome': 'Jacobina',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -11.1816506,
//     'lng': -40.5120603
//   }
// },
// {
//   'cidade_google': 'São Sebastião de Passé - BA',
//   'nome': 'São Sebastião de Passé',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.5057978,
//     'lng': -38.5270305
//   }
// },
// {
//   'cidade_google': 'Cáceres - MT',
//   'nome': 'Cáceres',
//   'uf': 'MT',
//   'padrao': 'SATURNO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.0768867,
//     'lng': -57.68226540000001
//   }
// },
// {
//   'cidade_google': "Mirassol D'Oeste - MT",
//   'nome': "Mirassol D'Oeste",
//   'uf': 'MT',
//   'padrao': 'SATURNO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -15.6682287,
//     'lng': -58.09150389999999
//   }
// },
// {
//   'cidade_google': 'Pontes e Lacerda - MT',
//   'nome': 'Pontes e Lacerda',
//   'uf': 'MT',
//   'padrao': 'SATURNO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -15.2325772,
//     'lng': -59.3322746
//   }
// },
// {
//   'cidade_google': 'Nova Friburgo - RJ',
//   'nome': 'Nova Friburgo',
//   'uf': 'RJ',
//   'padrao': 'MODPUBLICA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2887261,
//     'lng': -42.5340796
//   }
// },
// {
//   'cidade_google': 'Porto Velho - RO',
//   'nome': 'Porto Velho',
//   'uf': 'RO',
//   'padrao': 'SEMFAZONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -8.761160499999999,
//     'lng': -63.9004303
//   }
// },
// {
//   'cidade_google': 'Botucatu - SP',
//   'nome': 'Botucatu',
//   'uf': 'SP',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8841808,
//     'lng': -48.4441654
//   }
// },
// {
//   'cidade_google': 'Cianorte - PR',
//   'nome': 'Cianorte',
//   'uf': 'PR',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6602731,
//     'lng': -52.60686459999999
//   }
// },
// {
//   'cidade_google': 'Marília - SP',
//   'nome': 'Marília',
//   'uf': 'SP',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2175997,
//     'lng': -49.9505101
//   }
// },
// {
//   'cidade_google': 'Mogi Guaçu - SP',
//   'nome': 'Mogi Guaçu',
//   'uf': 'SP',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.3680589,
//     'lng': -46.9432954
//   }
// },
// {
//   'cidade_google': 'Rio Grande - RS',
//   'nome': 'Rio Grande',
//   'uf': 'RS',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -32.2998858,
//     'lng': -52.4465474
//   }
// },
// {
//   'cidade_google': 'São Gonçalo - RJ',
//   'nome': 'São Gonçalo',
//   'uf': 'RJ',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8272883,
//     'lng': -43.0637646
//   }
// },
// {
//   'cidade_google': 'Sapiranga - RS',
//   'nome': 'Sapiranga',
//   'uf': 'RS',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.6354213,
//     'lng': -51.0068073
//   }
// },
// {
//   'cidade_google': 'Arujá - SP',
//   'nome': 'Arujá',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3969682,
//     'lng': -46.3204265
//   }
// },
// {
//   'cidade_google': 'Cubatão - SP',
//   'nome': 'Cubatão',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.8916151,
//     'lng': -46.4244141
//   }
// },
// {
//   'cidade_google': 'Franco da Rocha - SP',
//   'nome': 'Franco da Rocha',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3233727,
//     'lng': -46.7294577
//   }
// },
// {
//   'cidade_google': 'Itapevi - SP',
//   'nome': 'Itapevi',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5492651,
//     'lng': -46.9331962
//   }
// },
// {
//   'cidade_google': 'Itápolis - SP',
//   'nome': 'Itápolis',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.5950536,
//     'lng': -48.8163705
//   }
// },
// {
//   'cidade_google': 'Itaquaquecetuba - SP',
//   'nome': 'Itaquaquecetuba',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.4849456,
//     'lng': -46.3494828
//   }
// },
// {
//   'cidade_google': 'Jandira - SP',
//   'nome': 'Jandira',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5280281,
//     'lng': -46.9027629
//   }
// },
// {
//   'cidade_google': 'Matão - SP',
//   'nome': 'Matão',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.6029893,
//     'lng': -48.3644226
//   }
// },
// {
//   'cidade_google': 'Mogi das Cruzes - SP',
//   'nome': 'Mogi das Cruzes',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5213379,
//     'lng': -46.18586699999999
//   }
// },
// {
//   'cidade_google': 'Nova Odessa - SP',
//   'nome': 'Nova Odessa',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.783676,
//     'lng': -47.2944999
//   }
// },
// {
//   'cidade_google': 'Ourinhos - SP',
//   'nome': 'Ourinhos',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.9798639,
//     'lng': -49.8699589
//   }
// },
// {
//   'cidade_google': 'Serra - ES',
//   'nome': 'Serra',
//   'uf': 'ES',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.1215224,
//     'lng': -40.3077898
//   }
// },
// {
//   'cidade_google': 'Sertãozinho - SP',
//   'nome': 'Sertãozinho',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.1379949,
//     'lng': -47.990137
//   }
// },
// {
//   'cidade_google': 'Frederico Westphalen - RS',
//   'nome': 'Frederico Westphalen',
//   'uf': 'RS',
//   'padrao': 'SIM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.3607338,
//     'lng': -53.3963199
//   }
// },
// {
//   'cidade_google': 'Andirá - PR',
//   'nome': 'Andirá',
//   'uf': 'PR',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.047934,
//     'lng': -50.2306675
//   }
// },
// {
//   'cidade_google': 'Araras - SP',
//   'nome': 'Araras',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.3604911,
//     'lng': -47.37983910000001
//   }
// },
// {
//   'cidade_google': 'Astorga - PR',
//   'nome': 'Astorga',
//   'uf': 'PR',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.2400211,
//     'lng': -51.6639768
//   }
// },
// {
//   'cidade_google': 'Balneário Camboriú - SC',
//   'nome': 'Balneário Camboriú',
//   'uf': 'SC',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.9930938,
//     'lng': -48.6356285
//   }
// },
// {
//   'cidade_google': 'Bandeirantes - PR',
//   'nome': 'Bandeirantes',
//   'uf': 'PR',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.1054048,
//     'lng': -50.3714912
//   }
// },
// {
//   'cidade_google': 'Barretos - SP',
//   'nome': 'Barretos',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.5279587,
//     'lng': -48.6388879
//   }
// },
// {
//   'cidade_google': 'Carapicuíba - SP',
//   'nome': 'Carapicuíba',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5239623,
//     'lng': -46.8411243
//   }
// },
// {
//   'cidade_google': 'Casa Branca - SP',
//   'nome': 'Casa Branca',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7712926,
//     'lng': -47.0856897
//   }
// },
// {
//   'cidade_google': 'Dois Córregos - SP',
//   'nome': 'Dois Córregos',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.3734081,
//     'lng': -48.3860575
//   }
// },
// {
//   'cidade_google': 'Espirito Santo do Pinhal - SP',
//   'nome': 'Espirito Santo do Pinhal',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.1913443,
//     'lng': -46.748089
//   }
// },
// {
//   'cidade_google': 'João Monlevade - MG',
//   'nome': 'João Monlevade',
//   'uf': 'MG',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.8131282,
//     'lng': -43.1738765
//   }
// },
// {
//   'cidade_google': 'Lagoa da Prata - MG',
//   'nome': 'Lagoa da Prata',
//   'uf': 'MG',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.0242053,
//     'lng': -45.5405732
//   }
// },
// {
//   'cidade_google': 'Monte Carmelo - MG',
//   'nome': 'Monte Carmelo',
//   'uf': 'MG',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.7024324,
//     'lng': -47.4882762
//   }
// },
// {
//   'cidade_google': 'Nova Londrina - PR',
//   'nome': 'Nova Londrina',
//   'uf': 'PR',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7643989,
//     'lng': -52.9872654
//   }
// },
// {
//   'cidade_google': 'Osvaldo Cruz - SP',
//   'nome': 'Osvaldo Cruz',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7972251,
//     'lng': -50.879763
//   }
// },
// {
//   'cidade_google': 'Patrocónio - MG',
//   'nome': 'Patrocónio',
//   'uf': 'MG',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.9383312,
//     'lng': -46.9938375
//   }
// },
// {
//   'cidade_google': 'Piracicaba - SP',
//   'nome': 'Piracicaba',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7342864,
//     'lng': -47.6480644
//   }
// },
// {
//   'cidade_google': 'Presidente Prudente - SP',
//   'nome': 'Presidente Prudente',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.121114,
//     'lng': -51.39302540000001
//   }
// },
// {
//   'cidade_google': 'Porecatu - PR',
//   'nome': 'Porecatu',
//   'uf': 'PR',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7238417,
//     'lng': -51.4099625
//   }
// },
// {
//   'cidade_google': 'Umuarama - PR',
//   'nome': 'Umuarama',
//   'uf': 'PR',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.7661064,
//     'lng': -53.3206105
//   }
// },
// {
//   'cidade_google': 'Santa Cruz das Palmeiras - SP',
//   'nome': 'Santa Cruz das Palmeiras',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.8239574,
//     'lng': -47.2484692
//   }
// },
// {
//   'cidade_google': 'São João da Boa Vista - SP',
//   'nome': 'São João da Boa Vista',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.9712237,
//     'lng': -46.7947225
//   }
// },
// {
//   'cidade_google': 'São José do Rio Pardo - SP',
//   'nome': 'São José do Rio Pardo',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.5957703,
//     'lng': -46.8877455
//   }
// },
// {
//   'cidade_google': 'Tupa - SP',
//   'nome': 'Tupa',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.9340257,
//     'lng': -50.5195809
//   }
// },
// {
//   'cidade_google': 'Vargem Grande do Sul - SP',
//   'nome': 'Vargem Grande do Sul',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.8326774,
//     'lng': -46.89172929999999
//   }
// },
// {
//   'cidade_google': 'Volta Redonda - RJ',
//   'nome': 'Volta Redonda',
//   'uf': 'RJ',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.5077597,
//     'lng': -44.09473029999999
//   }
// },
// {
//   'cidade_google': 'Iracemápolis - SP',
//   'nome': 'Iracemápolis',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.5578673,
//     'lng': -47.5079055
//   }
// },
// {
//   'cidade_google': 'Nonoai - RS',
//   'nome': 'Nonoai',
//   'uf': 'RS',
//   'padrao': 'SINSOFT',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -27.3663872,
//     'lng': -52.7749937
//   }
// },
// {
//   'cidade_google': 'Adamantina - SP',
//   'nome': 'Adamantina',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.682447,
//     'lng': -51.0741997
//   }
// },
// {
//   'cidade_google': 'Andradina - SP',
//   'nome': 'Andradina',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.8990393,
//     'lng': -51.379714
//   }
// },
// {
//   'cidade_google': 'Itapetininga - SP',
//   'nome': 'Itapetininga',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.6399075,
//     'lng': -48.1597946
//   }
// },
// {
//   'cidade_google': 'Itanhaem - SP',
//   'nome': 'Itanhaem',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.181841,
//     'lng': -46.78503850000001
//   }
// },
// {
//   'cidade_google': 'Itararé - SP',
//   'nome': 'Itararé',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -24.1089373,
//     'lng': -49.33568589999999
//   }
// },
// {
//   'cidade_google': 'Lucélia - SP',
//   'nome': 'Lucélia',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.7186744,
//     'lng': -51.0219868
//   }
// },
// {
//   'cidade_google': 'Porto Feliz - SP',
//   'nome': 'Porto Feliz',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.2248099,
//     'lng': -47.4882762
//   }
// },
// {
//   'cidade_google': 'São Manuel - SP',
//   'nome': 'São Manuel',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7324847,
//     'lng': -48.5724499
//   }
// },
// {
//   'cidade_google': 'Tatuí - SP',
//   'nome': 'Tatuí',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.3492186,
//     'lng': -47.8465761
//   }
// },
// {
//   'cidade_google': 'Matias Barbosa - MG',
//   'nome': 'Matias Barbosa',
//   'uf': 'MG',
//   'padrao': 'TECSYSTEM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.8680209,
//     'lng': -43.3177168
//   }
// },
// {
//   'cidade_google': 'Cachoeirinha - RS',
//   'nome': 'Cachoeirinha',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.9477228,
//     'lng': -51.1021166
//   }
// },
// {
//   'cidade_google': 'Esteio - RS',
//   'nome': 'Esteio',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.8524975,
//     'lng': -51.1845782
//   }
// },
// {
//   'cidade_google': 'Lajeado - RS',
//   'nome': 'Lajeado',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.459582,
//     'lng': -51.96494209999999
//   }
// },
// {
//   'cidade_google': 'Montenegro - RS',
//   'nome': 'Montenegro',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.6816904,
//     'lng': -51.4680471
//   }
// },
// {
//   'cidade_google': 'Passo Fundo - RS',
//   'nome': 'Passo Fundo',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.2587812,
//     'lng': -52.4160039
//   }
// },
// {
//   'cidade_google': 'Santa Cruz do Sul - RS',
//   'nome': 'Santa Cruz do Sul',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.722516,
//     'lng': -52.43483819999999
//   }
// },
// {
//   'cidade_google': 'Santo Antônio da Patrulha - RS',
//   'nome': 'Santo Antônio da Patrulha',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.8272335,
//     'lng': -50.5181108
//   }
// },
// {
//   'cidade_google': 'São Leopoldo - RS',
//   'nome': 'São Leopoldo',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.7549941,
//     'lng': -51.150283
//   }
// },
// {
//   'cidade_google': 'Taquara - RS',
//   'nome': 'Taquara',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.6509073,
//     'lng': -50.77598
//   }
// },
// {
//   'cidade_google': 'Venâncio Aires - RS',
//   'nome': 'Venâncio Aires',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.61554,
//     'lng': -52.1937805
//   }
// },
// {
//   'cidade_google': 'Cabo de Santo Agostinho - PE',
//   'nome': 'Cabo de Santo Agostinho',
//   'uf': 'PE',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -8.2794398,
//     'lng': -35.0304219
//   }
// },
// {
//   'cidade_google': 'Jaboatão Dos Guararapes - PE',
//   'nome': 'Jaboatão Dos Guararapes',
//   'uf': 'PE',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -8.1693806,
//     'lng': -34.9370588
//   }
// },
// {
//   'cidade_google': 'Mossoró - RN',
//   'nome': 'Mossoró',
//   'uf': 'RN',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -5.1841285,
//     'lng': -37.3477805
//   }
// },
// {
//   'cidade_google': 'Parnamirim - RN',
//   'nome': 'Parnamirim',
//   'uf': 'RN',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -5.911554499999999,
//     'lng': -35.2713164
//   }
// },
// {
//   'cidade_google': 'Americana - SP',
//   'nome': 'Americana',
//   'uf': 'SP',
//   'padrao': 'TIPLAN',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7378203,
//     'lng': -47.3337008
//   }
// },
// {
//   'cidade_google': 'Duque de Caxias - RJ',
//   'nome': 'Duque de Caxias',
//   'uf': 'RJ',
//   'padrao': 'TIPLAN',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7862985,
//     'lng': -43.3053106
//   }
// },
// {
//   'cidade_google': 'Macaé - RJ',
//   'nome': 'Macaé',
//   'uf': 'RJ',
//   'padrao': 'TIPLAN',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.3836904,
//     'lng': -41.7827891
//   }
// },
// {
//   'cidade_google': 'Recife - PE',
//   'nome': 'Recife',
//   'uf': 'PE',
//   'padrao': 'TIPLAN',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -8.0475622,
//     'lng': -34.8769643
//   }
// },
// {
//   'cidade_google': 'São Paulo - SP',
//   'nome': 'São Paulo',
//   'uf': 'SP',
//   'padrao': 'TIPLAN/PRODAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -23.5505199,
//     'lng': -46.63330939999999
//   }
// },
// {
//   'cidade_google': 'Blumenau - SC',
//   'nome': 'Blumenau',
//   'uf': 'SC',
//   'padrao': 'TIPLAN/PRODAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -26.9165792,
//     'lng': -49.0717331
//   }
// },
// {
//   'cidade_google': 'Arcos - MG',
//   'nome': 'Arcos',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.2878706,
//     'lng': -45.5399855
//   }
// },
// {
//   'cidade_google': 'Bagé - RS',
//   'nome': 'Bagé',
//   'uf': 'RS',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -31.3301746,
//     'lng': -54.1004709
//   }
// },
// {
//   'cidade_google': 'Barbacena - MG',
//   'nome': 'Barbacena',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.2219344,
//     'lng': -43.7706811
//   }
// },
// {
//   'cidade_google': 'Brumado - BA.',
//   'nome': 'Brumado',
//   'uf': 'BA.',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.1968614,
//     'lng': -41.68097239999999
//   }
// },
// {
//   'cidade_google': 'Campo Belo - MG',
//   'nome': 'Campo Belo',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.8938356,
//     'lng': -45.2721363
//   }
// },
// {
//   'cidade_google': 'Candeias - BA',
//   'nome': 'Candeias',
//   'uf': 'BA',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.6720059,
//     'lng': -38.54749169999999
//   }
// },
// {
//   'cidade_google': 'Cássia - MG',
//   'nome': 'Cássia',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.5849166,
//     'lng': -46.91917170000001
//   }
// },
// {
//   'cidade_google': 'Caldas Novas - GO',
//   'nome': 'Caldas Novas',
//   'uf': 'GO',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.7006127,
//     'lng': -48.598804
//   }
// },
// {
//   'cidade_google': 'Coronel Fabriciano - MG',
//   'nome': 'Coronel Fabriciano',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.5189968,
//     'lng': -42.628205
//   }
// },
// {
//   'cidade_google': 'Estância - SE',
//   'nome': 'Estância',
//   'uf': 'SE',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -11.268661,
//     'lng': -37.43854
//   }
// },
// {
//   'cidade_google': 'Extrema - MG',
//   'nome': 'Extrema',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.854505,
//     'lng': -46.3184212
//   }
// },
// {
//   'cidade_google': 'Formiga - MG',
//   'nome': 'Formiga',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.4623459,
//     'lng': -45.4272185
//   }
// },
// {
//   'cidade_google': 'Guanambi - BA',
//   'nome': 'Guanambi',
//   'uf': 'BA',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.2235167,
//     'lng': -42.7803335
//   }
// },
// {
//   'cidade_google': 'Içara - SC',
//   'nome': 'Içara',
//   'uf': 'SC',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.7137096,
//     'lng': -49.3091437
//   }
// },
// {
//   'cidade_google': 'Itabaiana - SE',
//   'nome': 'Itabaiana',
//   'uf': 'SE',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.6872332,
//     'lng': -37.4329352
//   }
// },
// {
//   'cidade_google': 'Itabuna - BA',
//   'nome': 'Itabuna',
//   'uf': 'BA',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.7880327,
//     'lng': -39.2784178
//   }
// },
// {
//   'cidade_google': 'Itapetinga - BA',
//   'nome': 'Itapetinga',
//   'uf': 'BA',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -15.2475119,
//     'lng': -40.2509918
//   }
// },
// {
//   'cidade_google': 'Lagarto - SE',
//   'nome': 'Lagarto',
//   'uf': 'SE',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.9141032,
//     'lng': -37.6692881
//   }
// },
// {
//   'cidade_google': 'Lucas do Rio Verde - MT',
//   'nome': 'Lucas do Rio Verde',
//   'uf': 'MT',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -13.064847,
//     'lng': -55.91932139999999
//   }
// },
// {
//   'cidade_google': 'Luís Eduardo Magalhães - BA',
//   'nome': 'Luís Eduardo Magalhães',
//   'uf': 'BA',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.0841461,
//     'lng': -45.778301
//   }
// },
// {
//   'cidade_google': 'Nova Serrana - MG',
//   'nome': 'Nova Serrana',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.8717775,
//     'lng': -44.9850828
//   }
// },
// {
//   'cidade_google': 'Palmas - TO',
//   'nome': 'Palmas',
//   'uf': 'TO',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.249091,
//     'lng': -48.32428580000001
//   }
// },
// {
//   'cidade_google': 'Passos - MG',
//   'nome': 'Passos',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7221434,
//     'lng': -46.6133353
//   }
// },
// {
//   'cidade_google': 'Porto Nacional - TO',
//   'nome': 'Porto Nacional',
//   'uf': 'TO',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.703164,
//     'lng': -48.4084858
//   }
// },
// {
//   'cidade_google': 'Queimados - RJ',
//   'nome': 'Queimados',
//   'uf': 'RJ',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.7106685,
//     'lng': -43.5522256
//   }
// },
// {
//   'cidade_google': 'Santo Antônio de Jesus - BA',
//   'nome': 'Santo Antônio de Jesus',
//   'uf': 'BA',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.9698503,
//     'lng': -39.2617368
//   }
// },
// {
//   'cidade_google': 'Santa Rita do Sapucai - MG',
//   'nome': 'Santa Rita do Sapucai',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.2200666,
//     'lng': -45.6385125
//   }
// },
// {
//   'cidade_google': 'São Gotardo - MG',
//   'nome': 'São Gotardo',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.3107686,
//     'lng': -46.04897949999999
//   }
// },
// {
//   'cidade_google': 'São Lourenço - MG',
//   'nome': 'São Lourenço',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.1123693,
//     'lng': -45.027985
//   }
// },
// {
//   'cidade_google': 'Tangará da Serra - MT',
//   'nome': 'Tangará da Serra',
//   'uf': 'MT',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.6197868,
//     'lng': -57.48755629999999
//   }
// },
// {
//   'cidade_google': 'Teresópolis - RJ',
//   'nome': 'Teresópolis',
//   'uf': 'RJ',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.416956,
//     'lng': -42.9756194
//   }
// },
// {
//   'cidade_google': 'Uberaba - MG',
//   'nome': 'Uberaba',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.7473668,
//     'lng': -47.93915399999999
//   }
// },
// {
//   'cidade_google': 'Vilhena - RO',
//   'nome': 'Vilhena',
//   'uf': 'RO',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.7414031,
//     'lng': -60.1304566
//   }
// },
// {
//   'cidade_google': 'Vitória da Conquista - BA',
//   'nome': 'Vitória da Conquista',
//   'uf': 'BA',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.8619237,
//     'lng': -40.8445346
//   }
// },
// {
//   'cidade_google': 'Aracajú - SE',
//   'nome': 'Aracajú',
//   'uf': 'SE',
//   'padrao': 'WEBISS 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -10.9472468,
//     'lng': -37.0730823
//   }
// },
// {
//   'cidade_google': 'Rolim de Moura - RO',
//   'nome': 'Rolim de Moura',
//   'uf': 'RO',
//   'padrao': 'WEBISS 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -11.7257556,
//     'lng': -61.7781519
//   }
// },
// {
//   'cidade_google': 'Ribeirão das Neves - MG',
//   'nome': 'Ribeirão das Neves',
//   'uf': 'MG',
//   'padrao': 'ERECEITA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.7618937,
//     'lng': -44.0853128
//   }
// },
// {
//   'cidade_google': 'Niterói - RJ',
//   'nome': 'Niterói',
//   'uf': 'RJ',
//   'padrao': 'WEBISS 2.0',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8858975,
//     'lng': -43.1152211
//   }
// },
// {
//   'cidade_google': 'Machado - MG',
//   'nome': 'Machado',
//   'uf': 'MG',
//   'padrao': 'ERECEITA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.6782427,
//     'lng': -45.9223323
//   }
// },
// {
//   'cidade_google': 'São Sebastião do Paraíso - MG',
//   'nome': 'São Sebastião do Paraíso',
//   'uf': 'MG',
//   'padrao': 'ERECEITA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.917221,
//     'lng': -46.984069
//   }
// },
// {
//   'cidade_google': 'Três Pontas - MG',
//   'nome': 'Três Pontas',
//   'uf': 'MG',
//   'padrao': 'ERECEITA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -21.3697623,
//     'lng': -45.5113389
//   }
// },
// {
//   'cidade_google': 'Viçosa - MG',
//   'nome': 'Viçosa',
//   'uf': 'MG',
//   'padrao': 'ERECEITA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.7548697,
//     'lng': -42.8785858
//   }
// },
// {
//   'cidade_google': 'Montes Claros - MG',
//   'nome': 'Montes Claros',
//   'uf': 'MG',
//   'padrao': 'ERECEITA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -16.7286406,
//     'lng': -43.8582139
//   }
// },
// {
//   'cidade_google': 'Patos de Minas - MG',
//   'nome': 'Patos de Minas',
//   'uf': 'MG',
//   'padrao': 'CONSIST',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.5872582,
//     'lng': -46.5146749
//   }
// },
// {
//   'cidade_google': 'Ipiguá - SP',
//   'nome': 'Ipiguá',
//   'uf': 'SP',
//   'padrao': 'MAKERPLANET',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.6441427,
//     'lng': -49.3856256
//   }
// },
// {
//   'cidade_google': 'Alfredo Chaves - ES',
//   'nome': 'Alfredo Chaves',
//   'uf': 'ES',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.6362063,
//     'lng': -40.7500672
//   }
// },
// {
//   'cidade_google': 'Baixo Guandu - ES',
//   'nome': 'Baixo Guandu',
//   'uf': 'ES',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -19.5097867,
//     'lng': -41.0165586
//   }
// },
// {
//   'cidade_google': 'Ilheus - BA',
//   'nome': 'Ilheus',
//   'uf': 'BA',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -14.7935051,
//     'lng': -39.0463797
//   }
// },
// {
//   'cidade_google': 'Itamaraju - BA',
//   'nome': 'Itamaraju',
//   'uf': 'BA',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -17.0382224,
//     'lng': -39.5389741
//   }
// },
// {
//   'cidade_google': 'Manhuaçu - MG',
//   'nome': 'Manhuaçu',
//   'uf': 'MG',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.2577126,
//     'lng': -42.028386
//   }
// },
// {
//   'cidade_google': 'Raul Soares - MG',
//   'nome': 'Raul Soares',
//   'uf': 'MG',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.1013284,
//     'lng': -42.452666
//   }
// },
// {
//   'cidade_google': 'São Mateus - ES.',
//   'nome': 'São Mateus',
//   'uf': 'ES.',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -18.7190705,
//     'lng': -39.856734
//   }
// },
// {
//   'cidade_google': 'Simões Filho - BA',
//   'nome': 'Simões Filho',
//   'uf': 'BA',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -12.7700716,
//     'lng': -38.42188489999999
//   }
// },
// {
//   'cidade_google': 'Viana - ES',
//   'nome': 'Viana',
//   'uf': 'ES',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -20.3646691,
//     'lng': -40.4274631
//   }
// },
// {
//   'cidade_google': 'Nilópolis - RJ',
//   'nome': 'Nilópolis',
//   'uf': 'RJ',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -22.8098164,
//     'lng': -43.4194095
//   }
// },
// {
//   'cidade_google': 'Arroio do Meio - RS',
//   'nome': 'Arroio do Meio',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.3652193,
//     'lng': -51.95801640000001
//   }
// },
// {
//   'cidade_google': 'Flores da Cunha - RS',
//   'nome': 'Flores da Cunha',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.0303854,
//     'lng': -51.2003761
//   }
// },
// {
//   'cidade_google': 'Portão - RS',
//   'nome': 'Portão',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -29.7020333,
//     'lng': -51.2434253
//   }
// },
// {
//   'cidade_google': 'Serafina Corrêa - RS',
//   'nome': 'Serafina Corrêa',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.7171828,
//     'lng': -51.9156992
//   }
// },
// {
//   'cidade_google': 'Veranópolis - RS',
//   'nome': 'Veranópolis',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '',
//   'localizacao': {
//     'lat': -28.9427186,
//     'lng': -51.5507365
//   }
// },
// {
//   'cidade_google': 'Carazinho - RS',
//   'nome': 'Carazinho',
//   'uf': 'RS',
//   'padrao': 'DBSELLER',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '18/03/2017',
//   'localizacao': {
//     'lat': -28.2963334,
//     'lng': -52.793776
//   }
// },
// {
//   'cidade_google': 'Cráteus - CE',
//   'nome': 'Cráteus',
//   'uf': 'CE',
//   'padrao': 'ISSINTEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '06/06/2017',
//   'localizacao': {
//     'lat': -5.178204,
//     'lng': -40.6695522
//   }
// },
// {
//   'cidade_google': 'São João Batista - SC',
//   'nome': 'São João Batista',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '02/06/2017',
//   'localizacao': {
//     'lat': -27.2758303,
//     'lng': -48.8503707
//   }
// },
// {
//   'cidade_google': 'Paraiso do Tocantis - TO',
//   'nome': 'Paraiso do Tocantis',
//   'uf': 'TO',
//   'padrao': 'ISSONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '12/06/2017',
//   'localizacao': {
//     'lat': -10.1754102,
//     'lng': -48.8826983
//   }
// },
// {
//   'cidade_google': 'Jussara - PR',
//   'nome': 'Jussara',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '26/06/2017',
//   'localizacao': {
//     'lat': -23.6153619,
//     'lng': -52.4252353
//   }
// },
// {
//   'cidade_google': 'Lapa - PR',
//   'nome': 'Lapa',
//   'uf': 'PR',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '27/06/2017',
//   'localizacao': {
//     'lat': -25.7675893,
//     'lng': -49.717299
//   }
// },
// {
//   'cidade_google': 'Araras - SP',
//   'nome': 'Araras',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '27/06/2017',
//   'localizacao': {
//     'lat': -22.3604911,
//     'lng': -47.37983910000001
//   }
// },
// {
//   'cidade_google': 'Três Barras - SC',
//   'nome': 'Três Barras',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '27/06/2017',
//   'localizacao': {
//     'lat': -26.1265438,
//     'lng': -50.3142152
//   }
// },
// {
//   'cidade_google': 'Trairi - CE',
//   'nome': 'Trairi',
//   'uf': 'CE',
//   'padrao': 'INTERSOL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '04/07/2017',
//   'localizacao': {
//     'lat': -3.3072032,
//     'lng': -39.3621196
//   }
// },
// {
//   'cidade_google': 'Cascavel - CE',
//   'nome': 'Cascavel',
//   'uf': 'CE',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '04/07/2017',
//   'localizacao': {
//     'lat': -4.132863599999999,
//     'lng': -38.2470885
//   }
// },
// {
//   'cidade_google': 'Tiradentes - MG',
//   'nome': 'Tiradentes',
//   'uf': 'MG',
//   'padrao': 'NFISS',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '11/07/2017',
//   'localizacao': {
//     'lat': -21.1102097,
//     'lng': -44.1733621
//   }
// },
// {
//   'cidade_google': 'Peabiru - PR',
//   'nome': 'Peabiru',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '13/07/2017',
//   'localizacao': {
//     'lat': -23.9145273,
//     'lng': -52.3400517
//   }
// },
// {
//   'cidade_google': 'Alto Paraná - PR',
//   'nome': 'Alto Paraná',
//   'uf': 'PR',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '13/07/2017',
//   'localizacao': {
//     'lat': -23.13172,
//     'lng': -52.3193827
//   }
// },
// {
//   'cidade_google': 'Garanhuns - PE',
//   'nome': 'Garanhuns',
//   'uf': 'PE',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '17/07/2017',
//   'localizacao': {
//     'lat': -8.882855100000002,
//     'lng': -36.4968966
//   }
// },
// {
//   'cidade_google': 'Araquari - SC',
//   'nome': 'Araquari',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '17/07/2017',
//   'localizacao': {
//     'lat': -26.3766505,
//     'lng': -48.7188884
//   }
// },
// {
//   'cidade_google': 'Parobé - RS',
//   'nome': 'Parobé',
//   'uf': 'RS',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '17/07/2017',
//   'localizacao': {
//     'lat': -29.6247579,
//     'lng': -50.8316868
//   }
// },
// {
//   'cidade_google': 'Gurupi - TO',
//   'nome': 'Gurupi',
//   'uf': 'TO',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '18/07/2017',
//   'localizacao': {
//     'lat': -11.7283752,
//     'lng': -49.0686083
//   }
// },
// {
//   'cidade_google': 'Itapicuru - BA',
//   'nome': 'Itapicuru',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '26/07/2017',
//   'localizacao': {
//     'lat': -11.20525,
//     'lng': -38.1899782
//   }
// },
// {
//   'cidade_google': 'Mesquita - RJ',
//   'nome': 'Mesquita',
//   'uf': 'RJ',
//   'padrao': 'MODPUBLICA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '26/07/2017',
//   'localizacao': {
//     'lat': -22.7819449,
//     'lng': -43.4293183
//   }
// },
// {
//   'cidade_google': 'Regente Feijó - SP',
//   'nome': 'Regente Feijó',
//   'uf': 'SP',
//   'padrao': 'GOVBR20',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '27/07/2017',
//   'localizacao': {
//     'lat': -22.2188934,
//     'lng': -51.3064462
//   }
// },
// {
//   'cidade_google': 'Santo Augusto - RS',
//   'nome': 'Santo Augusto',
//   'uf': 'RS',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '27/07/2017',
//   'localizacao': {
//     'lat': -27.843667,
//     'lng': -53.7762598
//   }
// },
// {
//   'cidade_google': 'Oriente - SP',
//   'nome': 'Oriente',
//   'uf': 'SP',
//   'padrao': 'FGMAISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '01/08/2017',
//   'localizacao': {
//     'lat': -22.1416781,
//     'lng': -50.0803953
//   }
// },
// {
//   'cidade_google': 'Itapecerica da Serra - SP',
//   'nome': 'Itapecerica da Serra',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '01/08/2017',
//   'localizacao': {
//     'lat': -23.7166271,
//     'lng': -46.8576421
//   }
// },
// {
//   'cidade_google': 'Boituva - SP',
//   'nome': 'Boituva',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '11/08/2017',
//   'localizacao': {
//     'lat': -23.2860188,
//     'lng': -47.6790285
//   }
// },
// {
//   'cidade_google': 'Erechim - RS',
//   'nome': 'Erechim',
//   'uf': 'RS',
//   'padrao': 'SYSTEM',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '11/08/2017',
//   'localizacao': {
//     'lat': -27.6347754,
//     'lng': -52.2740707
//   }
// },
// {
//   'cidade_google': 'Itapoá - SC',
//   'nome': 'Itapoá',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '14/08/2017',
//   'localizacao': {
//     'lat': -26.0799326,
//     'lng': -48.6589406
//   }
// },
// {
//   'cidade_google': 'Marabá - PA',
//   'nome': 'Marabá',
//   'uf': 'PA',
//   'padrao': 'GOVERNA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '14/08/2017',
//   'localizacao': {
//     'lat': -5.3811326,
//     'lng': -49.1331046
//   }
// },
// {
//   'cidade_google': 'Alta Floresta - MT',
//   'nome': 'Alta Floresta',
//   'uf': 'MT',
//   'padrao': 'COPLAN',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '17/08/2017',
//   'localizacao': {
//     'lat': -9.8764576,
//     'lng': -56.08550899999999
//   }
// },
// {
//   'cidade_google': 'Pirenópolis - GO',
//   'nome': 'Pirenópolis',
//   'uf': 'GO',
//   'padrao': 'PRODATA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '17/08/2017',
//   'localizacao': {
//     'lat': -15.8511801,
//     'lng': -48.9588768
//   }
// },
// {
//   'cidade_google': 'Paranatinga - MT',
//   'nome': 'Paranatinga',
//   'uf': 'MT',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '17/08/2017',
//   'localizacao': {
//     'lat': -14.4268795,
//     'lng': -54.05289699999999
//   }
// },
// {
//   'cidade_google': 'Estrela - RS',
//   'nome': 'Estrela',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '17/08/2017',
//   'localizacao': {
//     'lat': -29.501873,
//     'lng': -51.9640632
//   }
// },
// {
//   'cidade_google': 'Piracanjuba - GO',
//   'nome': 'Piracanjuba',
//   'uf': 'GO',
//   'padrao': 'MEGASOFT',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '21/08/2017',
//   'localizacao': {
//     'lat': -17.3697902,
//     'lng': -48.9605972
//   }
// },
// {
//   'cidade_google': 'Alegre - ES',
//   'nome': 'Alegre',
//   'uf': 'ES',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '21/08/2017',
//   'localizacao': {
//     'lat': -20.7627978,
//     'lng': -41.5324195
//   }
// },
// {
//   'cidade_google': 'Alagoinhas - BA',
//   'nome': 'Alagoinhas',
//   'uf': 'BA',
//   'padrao': 'WEBISS20',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '25/08/2017',
//   'localizacao': {
//     'lat': -12.1339689,
//     'lng': -38.4211223
//   }
// },
// {
//   'cidade_google': 'Aparecida - SP',
//   'nome': 'Aparecida',
//   'uf': 'SP',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '25/08/2017',
//   'localizacao': {
//     'lat': -22.8469774,
//     'lng': -45.231637
//   }
// },
// {
//   'cidade_google': 'Armacao dos Buzios - RJ',
//   'nome': 'Armacao dos Buzios',
//   'uf': 'RJ',
//   'padrao': 'MODPUBLICA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '25/08/2017',
//   'localizacao': {
//     'lat': -22.7563906,
//     'lng': -41.889042
//   }
// },
// {
//   'cidade_google': 'Campina Grande do Sul - PR',
//   'nome': 'Campina Grande do Sul',
//   'uf': 'PR',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '25/08/2017',
//   'localizacao': {
//     'lat': -25.3049524,
//     'lng': -49.0541429
//   }
// },
// {
//   'cidade_google': 'Cedral - SP',
//   'nome': 'Cedral',
//   'uf': 'SP',
//   'padrao': 'FIORILLI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -20.9339465,
//     'lng': -49.3044253
//   }
// },
// {
//   'cidade_google': 'Cesário Lange - SP',
//   'nome': 'Cesário Lange',
//   'uf': 'SP',
//   'padrao': 'SISTEMAS4R',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -23.2262827,
//     'lng': -47.9020367
//   }
// },
// {
//   'cidade_google': 'Guarapari - ES',
//   'nome': 'Guarapari',
//   'uf': 'ES',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -20.6741197,
//     'lng': -40.4997382
//   }
// },
// {
//   'cidade_google': 'Iretama - PR',
//   'nome': 'Iretama',
//   'uf': 'PR',
//   'padrao': 'MAISISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -24.3389217,
//     'lng': -52.0639245
//   }
// },
// {
//   'cidade_google': 'Itacaré - BA',
//   'nome': 'Itacaré',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -14.2790654,
//     'lng': -38.994629
//   }
// },
// {
//   'cidade_google': 'Itaguai - RJ',
//   'nome': 'Itaguai',
//   'uf': 'RJ',
//   'padrao': 'TIPLAN',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -22.8631853,
//     'lng': -43.7779187
//   }
// },
// {
//   'cidade_google': 'Ituiutaba - MG',
//   'nome': 'Ituiutaba',
//   'uf': 'MG',
//   'padrao': 'GOVERNA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -18.9776571,
//     'lng': -49.464392
//   }
// },
// {
//   'cidade_google': 'Linhares - ES',
//   'nome': 'Linhares',
//   'uf': 'ES',
//   'padrao': 'EL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -19.3946651,
//     'lng': -40.0652641
//   }
// },
// {
//   'cidade_google': 'Marechal Deodoro - AL',
//   'nome': 'Marechal Deodoro',
//   'uf': 'AL',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -9.6978089,
//     'lng': -35.8934136
//   }
// },
// {
//   'cidade_google': 'Mata de São João - BA',
//   'nome': 'Mata de São João',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -12.5311289,
//     'lng': -38.30124790000001
//   }
// },
// {
//   'cidade_google': 'Paraty - RJ',
//   'nome': 'Paraty',
//   'uf': 'RJ',
//   'padrao': 'BETHA20',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -23.2200542,
//     'lng': -44.7204757
//   }
// },
// {
//   'cidade_google': 'Porto Seguro - BA',
//   'nome': 'Porto Seguro',
//   'uf': 'BA',
//   'padrao': 'ISSINTEL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -16.4443537,
//     'lng': -39.0653656
//   }
// },
// {
//   'cidade_google': 'Santa Cruz Cabralia - BA',
//   'nome': 'Santa Cruz Cabralia',
//   'uf': 'BA',
//   'padrao': 'SAATRI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -16.2825282,
//     'lng': -39.0236206
//   }
// },
// {
//   'cidade_google': 'São Bento do Sul - SC',
//   'nome': 'São Bento do Sul',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '05/12/2017',
//   'localizacao': {
//     'lat': -26.2500365,
//     'lng': -49.3835566
//   }
// },
// {
//   'cidade_google': 'Tres Marias - MG',
//   'nome': 'Tres Marias',
//   'uf': 'MG',
//   'padrao': 'MEMORY',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -18.2053685,
//     'lng': -45.231971
//   }
// },
// {
//   'cidade_google': 'Vespasiano - MG',
//   'nome': 'Vespasiano',
//   'uf': 'MG',
//   'padrao': 'MEMORY',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -19.688806,
//     'lng': -43.9243123
//   }
// },
// {
//   'cidade_google': 'Itaperuna - RJ',
//   'nome': 'Itaperuna',
//   'uf': 'RJ',
//   'padrao': 'GOVBR20',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/08/2017',
//   'localizacao': {
//     'lat': -21.2000807,
//     'lng': -41.8802333
//   }
// },
// {
//   'cidade_google': 'Alpinopolis - MG',
//   'nome': 'Alpinopolis',
//   'uf': 'MG',
//   'padrao': 'BETHA20',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '29/08/2017',
//   'localizacao': {
//     'lat': -20.8635252,
//     'lng': -46.3882246
//   }
// },
// {
//   'cidade_google': 'Parnamirim - RN',
//   'nome': 'Parnamirim',
//   'uf': 'RN',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '29/08/2017',
//   'localizacao': {
//     'lat': -5.911554499999999,
//     'lng': -35.2713164
//   }
// },
// {
//   'cidade_google': 'Iturama - MG',
//   'nome': 'Iturama',
//   'uf': 'MG',
//   'padrao': 'GOVERNA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '29/08/2017',
//   'localizacao': {
//     'lat': -19.7280301,
//     'lng': -50.1970234
//   }
// },
// {
//   'cidade_google': 'Quirinópolis - GO',
//   'nome': 'Quirinópolis',
//   'uf': 'GO',
//   'padrao': 'PRODATA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '29/08/2017',
//   'localizacao': {
//     'lat': -18.4476442,
//     'lng': -50.4551598
//   }
// },
// {
//   'cidade_google': 'Indaial - SC',
//   'nome': 'Indaial',
//   'uf': 'SC',
//   'padrao': 'IPM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '04/09/2017',
//   'localizacao': {
//     'lat': -26.8997445,
//     'lng': -49.2358981
//   }
// },
// {
//   'cidade_google': 'Sapucaia - RJ',
//   'nome': 'Sapucaia',
//   'uf': 'RJ',
//   'padrao': 'WEBISS20',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '04/09/2017',
//   'localizacao': {
//     'lat': -21.9953615,
//     'lng': -42.9146039
//   }
// },
// {
//   'cidade_google': 'Caçapava - SP',
//   'nome': 'Caçapava',
//   'uf': 'SP',
//   'padrao': 'CONAM',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '08/09/2017',
//   'localizacao': {
//     'lat': -23.0996965,
//     'lng': -45.7080824
//   }
// },
// {
//   'cidade_google': 'Porto União - SC',
//   'nome': 'Porto União',
//   'uf': 'SC',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '26/09/2017',
//   'localizacao': {
//     'lat': -26.2389124,
//     'lng': -51.0817102
//   }
// },
// {
//   'cidade_google': 'Sidrolândia - MS',
//   'nome': 'Sidrolândia',
//   'uf': 'MS',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '26/09/2017',
//   'localizacao': {
//     'lat': -20.9306687,
//     'lng': -54.9697212
//   }
// },
// {
//   'cidade_google': 'Rio Brilhante - MS',
//   'nome': 'Rio Brilhante',
//   'uf': 'MS',
//   'padrao': 'ISSNETONLINE',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '26/09/2017',
//   'localizacao': {
//     'lat': -21.8047006,
//     'lng': -54.5432691
//   }
// },
// {
//   'cidade_google': 'Dores de Campos - MG',
//   'nome': 'Dores de Campos',
//   'uf': 'MG',
//   'padrao': 'NFISS',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '27/09/2017',
//   'localizacao': {
//     'lat': -21.1094506,
//     'lng': -44.0206193
//   }
// },
// {
//   'cidade_google': 'Ibirité - MG',
//   'nome': 'Ibirité',
//   'uf': 'MG',
//   'padrao': 'ISSDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': true,
//   'url_info': '',
//   'compativel': true,
//   'data_verificacao': '27/09/2017',
//   'localizacao': {
//     'lat': -20.0256695,
//     'lng': -44.0572964
//   }
// },
// {
//   'cidade_google': 'Pompéia - SP',
//   'nome': 'Pompéia',
//   'uf': 'SP',
//   'padrao': 'EMBRAS',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/09/2017',
//   'localizacao': {
//     'lat': -22.1007393,
//     'lng': -50.1858252
//   }
// },
// {
//   'cidade_google': 'Itatiba - SP',
//   'nome': 'Itatiba',
//   'uf': 'SP',
//   'padrao': 'SIL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '29/09/2017',
//   'localizacao': {
//     'lat': -23.0040152,
//     'lng': -46.8467973
//   }
// },
// {
//   'cidade_google': 'Santo Angelo - RS',
//   'nome': 'Santo Angelo',
//   'uf': 'RS',
//   'padrao': 'ABASE',
//   'nivel': 'D3',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '02/10/2017',
//   'localizacao': {
//     'lat': -28.3006117,
//     'lng': -54.2673083
//   }
// },
// {
//   'cidade_google': 'Parauapebas - PA',
//   'nome': 'Parauapebas',
//   'uf': 'PA',
//   'padrao': 'GOVERNA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '02/10/2017',
//   'localizacao': {
//     'lat': -6.0682494,
//     'lng': -49.904199
//   }
// },
// {
//   'cidade_google': 'Encantado - RS',
//   'nome': 'Encantado',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '03/10/2017',
//   'localizacao': {
//     'lat': -29.2360837,
//     'lng': -51.869606
//   }
// },
// {
//   'cidade_google': 'Lençois Paulista - SP',
//   'nome': 'Lençois Paulista',
//   'uf': 'SP',
//   'padrao': '',
//   'nivel': 'D3',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '03/10/2017',
//   'localizacao': {
//     'lat': -22.6031668,
//     'lng': -48.80415319999999
//   }
// },
// {
//   'cidade_google': 'Itatinga - SP',
//   'nome': 'Itatinga',
//   'uf': 'SP',
//   'padrao': 'GEISWEB',
//   'nivel': 'D3',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '09/10/2017',
//   'localizacao': {
//     'lat': -23.1067087,
//     'lng': -48.61238669999999
//   }
// },
// {
//   'cidade_google': 'Pinheiral - RJ',
//   'nome': 'Pinheiral',
//   'uf': 'RJ',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '11/10/2017',
//   'localizacao': {
//     'lat': -22.5383309,
//     'lng': -44.0103922
//   }
// },
// {
//   'cidade_google': 'Santa Vitória do Palmar - RS',
//   'nome': 'Santa Vitória do Palmar',
//   'uf': 'RS',
//   'padrao': 'GOVBR',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '11/10/2017',
//   'localizacao': {
//     'lat': -33.5215632,
//     'lng': -53.3664818
//   }
// },
// {
//   'cidade_google': 'Poconé - MT',
//   'nome': 'Poconé',
//   'uf': 'MT',
//   'padrao': 'FISSLEX',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '18/10/2017',
//   'localizacao': {
//     'lat': -16.2664706,
//     'lng': -56.6265989
//   }
// },
// {
//   'cidade_google': 'Araguaína - TO',
//   'nome': 'Araguaína',
//   'uf': 'TO',
//   'padrao': 'BETHA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '18/10/2017',
//   'localizacao': {
//     'lat': -7.192773300000001,
//     'lng': -48.20482699999999
//   }
// },
// {
//   'cidade_google': 'Santo Antônio da Patulha - RS',
//   'nome': 'Santo Antônio da Patulha',
//   'uf': 'RS',
//   'padrao': 'THEMA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '18/10/2017',
//   'localizacao': {
//     'lat': -29.8272335,
//     'lng': -50.5181108
//   }
// },
// {
//   'cidade_google': 'Piraju - SP',
//   'nome': 'Piraju',
//   'uf': 'SP',
//   'padrao': 'ISSMAP',
//   'nivel': 'D3',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '18/10/2017',
//   'localizacao': {
//     'lat': -23.1934114,
//     'lng': -49.3842072
//   }
// },
// {
//   'cidade_google': 'Santa Helena - GO',
//   'nome': 'Santa Helena',
//   'uf': 'GO',
//   'padrao': 'PRODATA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '25/10/2017',
//   'localizacao': {
//     'lat': -17.8119748,
//     'lng': -50.5981252
//   }
// },
// {
//   'cidade_google': 'Cajamar - SP',
//   'nome': 'Cajamar',
//   'uf': 'SP',
//   'padrao': 'GEISWEB',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '25/10/2017',
//   'localizacao': {
//     'lat': -23.3555044,
//     'lng': -46.8785941
//   }
// },
// {
//   'cidade_google': 'Campina Grande do Sul - PR',
//   'nome': 'Campina Grande do Sul',
//   'uf': 'PR',
//   'padrao': 'SIGISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '28/10/2017',
//   'localizacao': {
//     'lat': -25.3049524,
//     'lng': -49.0541429
//   }
// },
// {
//   'cidade_google': 'Carlos Barbosa - RS',
//   'nome': 'Carlos Barbosa',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '31/10/2017',
//   'localizacao': {
//     'lat': -29.2950409,
//     'lng': -51.50089209999999
//   }
// },
// {
//   'cidade_google': 'Santa Luzia - MG',
//   'nome': 'Santa Luzia',
//   'uf': 'MG',
//   'padrao': 'ISSDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '01/11/2017',
//   'localizacao': {
//     'lat': -19.7882663,
//     'lng': -43.9403221
//   }
// },
// {
//   'cidade_google': 'Conselheiro Lafaiete - MG',
//   'nome': 'Conselheiro Lafaiete',
//   'uf': 'MG',
//   'padrao': 'ISSDIGITAL',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '01/11/2017',
//   'localizacao': {
//     'lat': -20.6639305,
//     'lng': -43.7850227
//   }
// },
// {
//   'cidade_google': 'São Gonçalo do Amarante - RN',
//   'nome': 'São Gonçalo do Amarante',
//   'uf': 'RN',
//   'padrao': 'TINUS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '03/11/2017',
//   'localizacao': {
//     'lat': -5.7852461,
//     'lng': -35.3288131
//   }
// },
// {
//   'cidade_google': 'Ribeirão do Pinhal - PR',
//   'nome': 'Ribeirão do Pinhal',
//   'uf': 'PR',
//   'padrao': 'EQUIPLANO',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '03/11/2017',
//   'localizacao': {
//     'lat': -23.4078025,
//     'lng': -50.3562829
//   }
// },
// {
//   'cidade_google': 'Limoeiro - PE',
//   'nome': 'Limoeiro',
//   'uf': 'PE',
//   'padrao': '',
//   'nivel': 'D4',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '10/11/2017',
//   'localizacao': {
//     'lat': -7.872984900000001,
//     'lng': -35.4405946
//   }
// },
// {
//   'cidade_google': 'Santa Rita de Cássia - BA',
//   'nome': 'Santa Rita de Cássia',
//   'uf': 'BA',
//   'padrao': 'NOTAINTELIGENTE',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '16/11/2017',
//   'localizacao': {
//     'lat': -11.0001503,
//     'lng': -44.5213769
//   }
// },
// {
//   'cidade_google': 'São João do Rio do Peixe - PB',
//   'nome': 'São João do Rio do Peixe',
//   'uf': 'PB',
//   'padrao': 'AGILI',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '20/11/2017',
//   'localizacao': {
//     'lat': -6.768021399999999,
//     'lng': -38.44292739999999
//   }
// },
// {
//   'cidade_google': 'Frutal - MG',
//   'nome': 'Frutal',
//   'uf': 'MG',
//   'padrao': 'WEBISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '20/11/2017',
//   'localizacao': {
//     'lat': -20.0264222,
//     'lng': -48.93601289999999
//   }
// },
// {
//   'cidade_google': 'Águas Lindas de Goias - GO',
//   'nome': 'Águas Lindas de Goias',
//   'uf': 'GO',
//   'padrao': 'PRODATA',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '20/11/2017',
//   'localizacao': {
//     'lat': -15.7460358,
//     'lng': -48.299098
//   }
// },
// {
//   'cidade_google': 'Roca Sales - RS',
//   'nome': 'Roca Sales',
//   'uf': 'RS',
//   'padrao': 'TECNOSISTEMAS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '22/11/2017',
//   'localizacao': {
//     'lat': -29.2831866,
//     'lng': -51.8311441
//   }
// },
// {
//   'cidade_google': 'Embu das Artes - SP',
//   'nome': 'Embu das Artes',
//   'uf': 'SP',
//   'padrao': 'SIMPLISS',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '23/11/2017',
//   'localizacao': {
//     'lat': -23.6515085,
//     'lng': -46.8521864
//   }
// },
// {
//   'cidade_google': 'Itapipoca - CE',
//   'nome': 'Itapipoca',
//   'uf': 'CE',
//   'padrao': 'XTR Online',
//   'nivel': 'D3',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '9/11/2017',
//   'localizacao': {
//     'lat': -3.499706,
//     'lng': -39.5839241
//   }
// },
// {
//   'cidade_google': 'Quixeramobim - CE',
//   'nome': 'Quixeramobim',
//   'uf': 'CE',
//   'padrao': 'Intersol',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '5/12/2017',
//   'localizacao': {
//     'lat': -5.192007299999999,
//     'lng': -39.2933955
//   }
// },
// {
//   'cidade_google': 'Sarandi - RS',
//   'nome': 'Sarandi',
//   'uf': 'RS',
//   'padrao': 'SafeWeb',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '8/12/2017',
//   'localizacao': {
//     'lat': -27.946449,
//     'lng': -52.9164069
//   }
// },
// {
//   'cidade_google': 'Santarém - PA',
//   'nome': 'Santarém',
//   'uf': 'PA',
//   'padrao': 'GINFES',
//   'nivel': 'D1',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '8/12/2017',
//   'localizacao': {
//     'lat': -2.4506291,
//     'lng': -54.7009228
//   }
// },
// {
//   'cidade_google': 'Santo Antonio de Goiás - GO',
//   'nome': 'Santo Antonio de Goiás',
//   'uf': 'GO',
//   'padrao': 'ArrecadaNet',
//   'nivel': 'D2',
//   'integracao': 'Webservice',
//   'homologado': false,
//   'compativel': true,
//   'url_info': 'https://goo.gl/Vbj8Ga',
//   'data_verificacao': '11/12/2017',
//   'localizacao': {
//     'lat': -16.47459,
//     'lng': -49.3044253
//   }
// }
// ]

// function ListarCidades () {
//   return cidades
// }
