const paises = [
  {
    id: 1,
    nome: "Suíça",
    codigo: "CH",
    continente: "Europa",

    lugares: [
      {
        id: 101,
        nome: "St. Moritz",
        imagem: "/stmoritz.jpg",
        experiencias: [
          {
            titulo: "Esquiar nos Alpes",
            texto:
              "Quero viver a experiência de passar alguns dias entre neve, montanhas e estações de esqui nos Alpes.",
            imagem: "/expesquiar.jpg",
          },
        ],
      },
      {
        id: 102,
        nome: "Gstaad",
        imagem: "/gstaad.avif",
        experiencias: [
          {
            titulo: "Caminhar pelos Alpes",
            texto:
              "Quero caminhar pelas paisagens alpinas, passando por vilarejos e montanhas cobertas de neve.",
            imagem: "/expgstaad.jpg",
          },
        ],
      },
      {
        id: 103,
        nome: "Zermatt",
        imagem: "/zermatt.jpg",
        experiencias: [
          {
            titulo: "Ver o Matterhorn",
            texto:
              "Quero conhecer Zermatt e caminhar pela vila tendo o Matterhorn como cenário.",
            imagem: "/expzermatt.webp",
          },
        ],
      },
      {
        id: 104,
        nome: "Interlaken",
        imagem: "/interlaken.jpg",
        experiencias: [
          {
            titulo: "Lagos e montanhas",
            texto:
              "Quero passar alguns dias entre os lagos e as montanhas da região de Interlaken.",
            imagem: "/expinterlaken.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Vinland Saga",
        tipo: "Anime · Atmosfera",
        imagem: "/vinlandsaga.jpg",
        sinopse:
          "Uma história marcada por viagens, paisagens naturais, exploração e uma forte sensação de grandiosidade.",
        motivo:
          "A referência representa principalmente a atmosfera que quero sentir nas paisagens alpinas: natureza imensa, silêncio e sensação de estar diante de algo muito maior que você.",
      },
    ],
  },

  {
    id: 2,
    nome: "Estados Unidos",
    codigo: "US",
    continente: "América do Norte",

    lugares: [
      {
        id: 201,
        nome: "New York",
        imagem: "/nyc.jpg",
        experiencias: [
          {
            titulo: "Natal em Nova York",
            texto:
              "Quero conhecer Nova York durante o Natal, caminhar pela cidade à noite e sentir a atmosfera das ruas iluminadas.",
            imagem: "/expnyc.jpeg",
          },
          {
            titulo: "Assistir a um jogo da NBA",
            texto:
              "Quero assistir a uma partida de playoffs da NBA em Nova York, se houver essa possibilidade durante a viagem.",
            imagem: "/expnyc3.jpeg",
          },
          {
            titulo: "Caminhar pela cidade à noite",
            texto:
              "Quero simplesmente andar por Manhattan à noite, vendo as luzes, os prédios e o movimento da cidade.",
            imagem: "/expnyc2.avif",
          },
          {
            titulo: "Super Bowl",
            texto:
              "Quero viver a experiência de estar nos Estados Unidos durante um Super Bowl.",
            imagem: "/expsuperbowl.jpeg",
          },
        ],
      },

      {
        id: 202,
        nome: "Los Angeles",
        imagem: "/losangeles.jpg",
        experiencias: [
          {
            titulo: "Dirigir durante o pôr do sol",
            texto:
              "Quero fazer uma viagem de carro por Los Angeles durante o pôr do sol.",
            imagem: "/explosangeles.jpg",
          },
        ],
      },

      {
        id: 203,
        nome: "Miami",
        imagem: "/miami.jpg",
        experiencias: [
          {
            titulo: "Caminhar pela cidade à noite",
            texto:
              "Quero caminhar por Miami em uma noite quente, sentindo o clima da cidade.",
            imagem: "/expmiami.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Eyes Wide Shut",
        tipo: "Filme · Cena / Atmosfera",
        imagem: "/tomcruiseews.jpg",
        sinopse:
          "Um thriller ambientado durante a noite de Nova York, explorando uma cidade elegante, misteriosa e estranha.",
        motivo:
          "A referência vem principalmente da atmosfera noturna do filme e da sensação de caminhar pela cidade durante a noite.",
      },
      {
        titulo: "Chinatown",
        tipo: "Filme · Atmosfera",
        imagem: "/chinatown.jpeg",
        sinopse:
          "Um clássico noir ambientado em Los Angeles.",
        motivo:
          "Representa a imagem cinematográfica que tenho de Los Angeles e sua estética clássica.",
      },
      {
        titulo: "Dexter",
        tipo: "Série · Atmosfera",
        imagem: "/dex.jpg",
        sinopse:
          "Série ambientada em Miami, explorando a cidade durante o dia e principalmente à noite.",
        motivo:
          "É uma referência direta à atmosfera urbana e noturna de Miami.",
      },
    ],
  },

  {
    id: 3,
    nome: "Espanha",
    codigo: "ES",
    continente: "Europa",

    lugares: [
      {
        id: 301,
        nome: "Marbella",
        imagem: "/marbella.jpg",
        experiencias: [
          {
            titulo: "Andar de jet ski",
            texto:
              "Quero passar um dia no litoral de Marbella e andar de jet ski.",
            imagem: "/expmarbella.jpg",
          },
        ],
      },

      {
        id: 302,
        nome: "Ibiza",
        imagem: "/ibiza.webp",
        experiencias: [
          {
            titulo: "Noite em Ibiza",
            texto:
              "Quero conhecer a vida noturna de Ibiza e passar uma noite em algum dos clubes da ilha.",
            imagem: "/expibiza.jpeg",
          },
        ],
      },

      {
        id: 303,
        nome: "Barcelona",
        imagem: "/barcelonaa.jpeg",
        experiencias: [
          {
            titulo: "Assistir a um jogo do Barcelona",
            texto:
              "Quero assistir a uma partida do Barcelona no estádio.",
            imagem: "/expbarcelona.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Tudo Sobre Minha Mãe",
        tipo: "Filme · Referência cultural",
        imagem: "/tudosobremm.jpg",
        sinopse:
          "Drama de Pedro Almodóvar que apresenta diferentes lugares e aspectos da cultura espanhola.",
        motivo:
          "É uma referência pessoal à Espanha que me vem à cabeça quando penso no país.",
      },
    ],
  },

  {
    id: 4,
    nome: "Japão",
    codigo: "JP",
    continente: "Ásia",

    lugares: [
      {
        id: 401,
        nome: "Tokyo",
        imagem: "/toquio.webp",
        experiencias: [
          {
            titulo: "Caminhar por Tokyo à noite",
            texto:
              "Quero caminhar pela cidade durante a noite e observar as luzes, ruas e bairros de Tokyo.",
            imagem: "/toquio.webp",
          },
          {
            titulo: "Ir a uma konbini de madrugada",
            texto:
              "Quero entrar em uma loja de conveniência durante a madrugada e viver aquela experiência cotidiana japonesa.",
            imagem: "/toquio.webp",
          },
        ],
      },

      {
        id: 402,
        nome: "Kyoto",
        imagem: "/kyoto.jpg",
        experiencias: [
          {
            titulo: "Templos e caminhadas",
            texto:
              "Quero passar um dia caminhando por Kyoto e conhecendo seus templos e bairros históricos.",
            imagem: "/kyoto.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Lost in Translation",
        tipo: "Filme · Atmosfera",
        imagem: "/lostintranslation.jpg",
        sinopse:
          "Drama de Sofia Coppola ambientado em Tokyo, explorando a cidade, seus hotéis, luzes e vida noturna.",
        motivo:
          "Representa muito da atmosfera que imagino quando penso em conhecer Tokyo, principalmente durante a noite.",
      },
    ],
  },

  {
    id: 5,
    nome: "França",
    codigo: "FR",
    continente: "Europa",

    lugares: [
      {
        id: 501,
        nome: "Paris",
        imagem: "/paris.webp",
        experiencias: [
          {
            titulo: "Tomar café em um café parisiense",
            texto:
              "Quero sentar em um café parisiense, pedir alguma coisa e simplesmente observar a cidade.",
            imagem: "/expparis1.webp",
          },
          {
            titulo: "Jantar em um bom restaurante",
            texto:
              "Quero ter uma noite em um restaurante realmente bom em Paris.",
            imagem: "/expparis2.jpg",
          },
          {
            titulo: "Conhecer o Louvre",
            texto:
              "Quero passar algumas horas conhecendo o Louvre.",
            imagem: "/expparis3.webp",
          },
          {
            titulo: "Ver a Torre Eiffel à noite",
            texto:
              "Quero chegar à Torre Eiffel durante a noite e observar a cidade iluminada.",
            imagem: "/expparis1.webp",
          },
          {
            titulo: "Caminhar por Paris",
            texto:
              "Quero passar um dia inteiro simplesmente caminhando pela cidade.",
            imagem: "/expparis2.jpg",
          },
        ],
      },

      {
        id: 502,
        nome: "Saint-Tropez",
        imagem: "/sttropez.jpeg",
        experiencias: [
          {
            titulo: "Passeio de barco",
            texto:
              "Quero alugar ou fazer um passeio de barco pelo litoral de Saint-Tropez.",
            imagem: "/expsttropez.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Le Samouraï",
        tipo: "Filme · Atmosfera",
        imagem: "/lesamourai.jpg",
        sinopse:
          "Clássico de Jean-Pierre Melville, marcado pela atmosfera fria, silenciosa e elegante de Paris.",
        motivo:
          "Representa uma Paris muito mais cinematográfica e silenciosa, que combina com a estética que gosto.",
      },
      {
        titulo: "La Haine",
        tipo: "Filme · Referência cultural",
        imagem: "/lahaine.jpg",
        sinopse:
          "Filme de Mathieu Kassovitz que acompanha jovens na periferia de Paris.",
        motivo:
          "Mostra outro lado da França e de Paris, muito diferente da imagem turística tradicional.",
      },
      {
        titulo: "The Swimming Pool",
        tipo: "Filme · Atmosfera",
        imagem: "/swimmingpool.jpg",
        sinopse:
          "Thriller francês de 1969 ambientado no sul da França.",
        motivo:
          "Representa a atmosfera sofisticada e ensolarada do sul francês.",
      },
    ],
  },

  {
    id: 6,
    nome: "Itália",
    codigo: "IT",
    continente: "Europa",

    lugares: [
      {
        id: 601,
        nome: "Roma",
        imagem: "/roma.avif",
        experiencias: [
          {
            titulo: "Caminhar por Roma",
            texto:
              "Quero caminhar por Roma durante a tarde, conhecer seus monumentos e parar para comer alguma coisa pelo caminho.",
            imagem: "/expromacoliseu.jpg",
          },
          {
            titulo: "Conhecer a Fontana di Trevi",
            texto:
              "Quero conhecer a Fontana di Trevi durante o dia.",
            imagem: "/expfontana.webp",
          },
        ],
      },

      {
        id: 602,
        nome: "Lago di Como",
        imagem: "/lagodicomo.webp",
        experiencias: [
          {
            titulo: "Conhecer os vilarejos do lago",
            texto:
              "Quero conhecer os pequenos vilarejos ao redor do Lago di Como.",
            imagem: "/explagodicomo.jpg",
          },
        ],
      },

      {
        id: 603,
        nome: "Veneza",
        imagem: "/veneza.webp",
        experiencias: [
          {
            titulo: "Caminhar pelos canais à noite",
            texto:
              "Quero conhecer Veneza principalmente durante a noite, caminhando pelos canais e ruas históricas.",
            imagem: "/expveneza.jpg",
          },
        ],
      },

      {
        id: 604,
        nome: "Sicília",
        imagem: "/sicilia.jpeg",
        experiencias: [
          {
            titulo: "Pequenas cidades e comida",
            texto:
              "Quero conhecer pequenas cidades da Sicília, comer bem e viver um ritmo mais lento perto do Mediterrâneo.",
            imagem: "/expsicilia.jpg",
          },
        ],
      },

      {
        id: 605,
        nome: "Amalfi Coast",
        imagem: "/costaamlfitana.png",
        experiencias: [
          {
            titulo: "Alugar um barco",
            texto:
              "Quero alugar um barco e passar um dia conhecendo a costa pelo mar.",
            imagem: "/expcostaamalfitana.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "O Sol por Testemunha",
        tipo: "Filme · Referência pessoal",
        imagens: [
          "/purplenoon.jpg",
          "/purplenoon2.jpg",
          "/purplenoon3.jpg",
        ],
        sinopse:
          "Clássico francês de 1960, marcado pela estética mediterrânea, pelo verão e pelas paisagens do sul da Europa.",
        motivo:
          "Foi o filme que me inspirou a fazer este projeto. A estética absurdamente bonita me fez querer viver algo parecido e representa perfeitamente a experiência que imagino ao conhecer o Mediterrâneo.",
      },
    ],
  },

  {
    id: 7,
    nome: "Austrália",
    codigo: "AU",
    continente: "Oceania",

    lugares: [
      {
        id: 701,
        nome: "Gold Coast",
        imagem: "/goldcoast.webp",
        experiencias: [
          {
            titulo: "Surfar",
            texto:
              "Quero passar alguns dias na Gold Coast e aprender ou praticar surf.",
            imagem: "/expgoldcoast.jpeg",
          },
        ],
      },

      {
        id: 702,
        nome: "Sydney",
        imagem: "/sydney.webp",
        experiencias: [
          {
            titulo: "Correr na praia de manhã",
            texto:
              "Quero correr pela praia durante a manhã e depois caminhar pela cidade.",
            imagem: "/expsydney.jpeg",
          },
          {
            titulo: "Caminhar pela cidade",
            texto:
              "Quero passar o dia caminhando por Sydney e conhecendo a cidade.",
            imagem: "/sydney.webp",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Point Break",
        tipo: "Filme · Atmosfera",
        imagem: "/pointbreak.jpg",
        sinopse:
          "Filme marcado por surf, praia, liberdade e uma forte relação com o litoral.",
        motivo:
          "É a referência que associo à experiência de praia, surf e liberdade que quero viver na Austrália.",
      },
    ],
  },

  {
    id: 8,
    nome: "Inglaterra",
    codigo: "GB",
    continente: "Europa",

    lugares: [
      {
        id: 801,
        nome: "London",
        imagem: "/londres.webp",
        experiencias: [
          {
            titulo: "Conhecer o Big Ben",
            texto:
              "Quero conhecer o Big Ben e caminhar pelo centro histórico de Londres.",
            imagem: "/explondres1.webp",
          },
          {
            titulo: "Caminhar por Londres à noite",
            texto:
              "Quero caminhar pela cidade durante a noite e observar sua arquitetura iluminada.",
            imagem: "/explondres2.jpeg",
          },
        ],
      },

      {
        id: 802,
        nome: "Liverpool",
        imagem: "/liverpool.webp",
        experiencias: [
          {
            titulo: "Conhecer Anfield",
            texto:
              "Quero conhecer Anfield e assistir a um jogo do Liverpool.",
            imagem: "/expliverpool.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Skyfall",
        tipo: "Filme · Atmosfera",
        imagem: "/skyfallturquia.webp",
        sinopse:
          "Filme da franquia James Bond marcado por espionagem, viagens e uma estética cinematográfica elegante.",
        motivo:
          "É uma referência à estética e ao imaginário britânico que associo ao país.",
      },
    ],
  },

  {
    id: 9,
    nome: "Países Baixos",
    codigo: "NL",
    continente: "Europa",

    lugares: [
      {
        id: 901,
        nome: "Amsterdam",
        imagem: "/amsterdam.webp",
        experiencias: [
          {
            titulo: "Conhecer os museus",
            texto:
              "Quero passar alguns dias conhecendo os museus e o lado cultural da cidade.",
            imagem: "/expamsterdam1.jpg",
          },
          {
            titulo: "Conhecer os campos de flores",
            texto:
              "Quero conhecer os campos de flores próximos a Amsterdam.",
            imagem: "/expamsterdam2.jpeg",
          },
          {
            titulo: "Caminhar pelos canais à noite",
            texto:
              "Quero caminhar pelos canais durante a noite.",
            imagem: "/expamsterdam3.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Spider-Man: Far From Home",
        tipo: "Filme · Memória de infância",
        imagem: "/spidermanholanda.jpeg",
        sinopse:
          "Filme que apresenta Peter Parker viajando pela Europa, incluindo cenas nos Países Baixos.",
        motivo:
          "A cena do filme na Holanda ficou na minha cabeça desde criança. Quando penso nos Países Baixos, automaticamente associo o país àquela estética.",
      },
    ],
  },

  {
    id: 10,
    nome: "Alemanha",
    codigo: "DE",
    continente: "Europa",

    lugares: [
      {
        id: 1001,
        nome: "Munich",
        imagem: "/munique.webp",
        experiencias: [
          {
            titulo: "Centro histórico e igrejas",
            texto:
              "Quero caminhar pelo centro histórico de Munique e conhecer suas igrejas e construções históricas.",
            imagem: "/expmunique.jpg",
          },
        ],
      },

      {
        id: 1002,
        nome: "Berlin",
        imagem: "/berlim.jpeg",
        experiencias: [
          {
            titulo: "Caminhar pela cidade",
            texto:
              "Quero caminhar por Berlim conhecendo sua arquitetura e diferentes bairros.",
            imagem: "/expberlin.jpeg",
          },
          {
            titulo: "Conhecer a vida noturna",
            texto:
              "Quero conhecer a vida noturna de Berlim.",
            imagem: "/expberlin.jpeg",
          },
        ],
      },

      {
        id: 1003,
        nome: "Cologne Cathedral",
        imagem: "/colonia.jpeg",
        experiencias: [
          {
            titulo: "Conhecer uma catedral gótica",
            texto:
              "Quero conhecer a Catedral de Colônia e outras igrejas góticas da Alemanha.",
            imagem: "/expcolonia.gif",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Nosferatu",
        tipo: "Filme · Atmosfera",
        imagem: "/nosferatu.jpg",
        sinopse:
          "Clássico expressionista alemão marcado por arquitetura, sombras e uma atmosfera gótica.",
        motivo:
          "Representa a estética gótica e histórica que associo à Alemanha.",
      },
    ],
  },

  {
    id: 11,
    nome: "Finlândia",
    codigo: "FI",
    continente: "Europa",

    lugares: [
      {
        id: 1101,
        nome: "Lapland",
        imagem: "/laponia.webp",
        experiencias: [
          {
            titulo: "Natal na neve",
            texto:
              "Quero passar o Natal na Lapônia cercado por neve.",
            imagem: "/explaponia.webp",
          },
          {
            titulo: "Ver a Aurora Boreal",
            texto:
              "Quero ver a Aurora Boreal durante uma noite na Lapônia.",
            imagem: "/explaponia.webp",
          },
          {
            titulo: "Andar de trenó",
            texto:
              "Quero andar de trenó em meio à neve.",
            imagem: "/exprespolar.webp",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "O Expresso Polar",
        tipo: "Filme · Memória de infância",
        imagem: "/expressopolar.webp",
        sinopse:
          "Filme de Natal sobre uma viagem de trem rumo ao Polo Norte.",
        motivo:
          "É um filme de Natal que eu gostava muito quando criança. A estética e a sensação de magia do filme contribuíram para eu gostar tanto da ideia de passar o Natal em um lugar com neve.",
      },
    ],
  },

  {
    id: 12,
    nome: "Egito",
    codigo: "EG",
    continente: "África",

    lugares: [
      {
        id: 1201,
        nome: "Cairo",
        imagem: "/cairo.jpg",
        experiencias: [
          {
            titulo: "Conhecer as Pirâmides de Gizé",
            texto:
              "Quero conhecer as Pirâmides de Gizé pessoalmente.",
            imagem: "/piramides.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "A Múmia",
        tipo: "Filme · Memória",
        imagem: "/amummia.jpg",
        sinopse:
          "Aventura ambientada no Egito e marcada por arqueologia, desertos e mistério.",
        motivo:
          "É uma das referências que ajudaram a criar meu imaginário sobre o Egito.",
      },
    ],
  },

  {
    id: 13,
    nome: "Peru",
    codigo: "PE",
    continente: "América do Sul",

    lugares: [
      {
        id: 1301,
        nome: "Machu Picchu",
        imagem: "/machupicchu.jpg",
        experiencias: [
          {
            titulo: "Conhecer Machu Picchu",
            texto:
              "Quero conhecer Machu Picchu pessoalmente e passar alguns dias explorando a região dos Andes.",
            imagem: "/expperu.webp",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Diários de Motocicleta",
        tipo: "Filme · Viagem",
        imagem: "/diariosdemotocicleta.jpg",
        sinopse:
          "Filme que acompanha uma longa viagem pela América do Sul.",
        motivo:
          "Representa a ideia de viajar pela América do Sul e conhecer lugares históricos e naturais durante uma grande viagem.",
      },
    ],
  },

  {
    id: 14,
    nome: "Portugal",
    codigo: "PT",
    continente: "Europa",

    lugares: [
      {
        id: 1401,
        nome: "Lisboa",
        imagem: "/lisboa.webp",
        experiencias: [
          {
            titulo: "Conhecer os bairros históricos",
            texto:
              "Quero caminhar pelos bairros históricos de Lisboa e conhecer seus miradouros e cafés.",
            imagem: "/explisboa1.jpg",
          },
          {
            titulo: "Caminhar à noite",
            texto:
              "Quero caminhar por Lisboa durante a noite.",
            imagem: "/explisboa2.webp",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "007 - A serviço secreto de sua Majestade",
        tipo: "Filme · Cena / Localização",
        imagem: "/lisboaa.jpg",
        sinopse:
          "Referência cinematográfica ligada a Portugal e ao universo de James Bond.",
        motivo:
          "A cena em Portugal é a principal referência que associo ao país.",
      },
    ],
  },

  {
    id: 15,
    nome: "Grécia",
    codigo: "GR",
    continente: "Europa",

    lugares: [
      {
        id: 1501,
        nome: "Atenas",
        imagem: "/atenasmelhor.jpg",
        experiencias: [
          {
            titulo: "Conhecer a Acrópole",
            texto:
              "Quero conhecer a Acrópole e caminhar pela cidade imaginando a história da Grécia Antiga.",
            imagem: "/expatenas1.jpg",
          },
          {
            titulo: "Conhecer a história e filosofia",
            texto:
              "Quero visitar os lugares ligados à história e à filosofia da Grécia Antiga.",
            imagem: "/expatenas2.webp",
          },
        ],
      },

      {
        id: 1502,
        nome: "Santorini",
        imagem: "/santorini.webp",
        experiencias: [
          {
            titulo: "Hotel com vista para o mar",
            texto:
              "Quero ficar em um hotel com vista para o mar e passar alguns dias na praia.",
            imagem: "/santorini.webp",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Before Midnight",
        tipo: "Filme · Atmosfera",
        imagem: "/beforemidnight.webp",
        sinopse:
          "Filme da trilogia Before, marcado pelas paisagens e pela atmosfera da Grécia.",
        motivo:
          "Representa a atmosfera mediterrânea e contemplativa que associo à Grécia.",
      },
    ],
  },

  {
    id: 16,
    nome: "Áustria",
    codigo: "AT",
    continente: "Europa",

    lugares: [
      {
        id: 1601,
        nome: "Vienna",
        imagem: "/viena.jpg",
        experiencias: [
          {
            titulo: "Caminhar no fim da tarde",
            texto:
              "Quero caminhar por Viena no fim da tarde e durante a noite, conhecendo sua arquitetura histórica.",
            imagem: "/expviena1.webp",
          },
          {
            titulo: "Cafés históricos",
            texto:
              "Quero passar algumas horas em cafés tradicionais de Viena.",
            imagem: "/expviena2.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Before Sunrise",
        tipo: "Filme · Atmosfera",
        imagem: "/beforesunrise.jpg",
        sinopse:
          "Filme de Richard Linklater que acompanha dois jovens que se encontram em um trem, decidem ir para Viena para caminhar e conversar durante uma noite europeia.",
        motivo:
          "Além de se passar em Viena o filme representa exatamente a experiência de caminhar por uma cidade europeia histórica, entrar em cafés e simplesmente viver a noite.",
      },
    ],
  },

  {
    id: 17,
    nome: "Hungria",
    codigo: "HU",
    continente: "Europa",

    lugares: [
      {
        id: 1701,
        nome: "Budapest",
        imagem: "/budapeste.jpg",
        experiencias: [
          {
            titulo: "Conhecer o Danúbio",
            texto:
              "Quero caminhar às margens do Danúbio e observar a cidade iluminada.",
            imagem: "/expbudapeste1.avif",
          },
          {
            titulo: "Budapeste à noite",
            texto:
              "Quero conhecer a cidade durante a noite e ver seus prédios iluminados.",
            imagem: "/expbudapeste2.webp",
          },
          {
            titulo: "Termas",
            texto:
              "Quero conhecer os famosos banhos termais de Budapeste.",
            imagem: "/expbudapeste3.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "O Grande Hotel Budapeste",
        tipo: "Filme · Estética",
        imagem: "/hotelbudapeste.jpg",
        sinopse:
          "Filme de Wes Anderson marcado por arquitetura, hotéis e uma estética visual extremamente característica.",
        motivo:
          "A estética do filme é a principal referência que associo a Budapeste.",
      },
    ],
  },

  {
    id: 18,
    nome: "China",
    codigo: "CN",
    continente: "Ásia",

    lugares: [
      {
        id: 1801,
        nome: "Shanghai",
        imagem: "/xangai.jpg",
        experiencias: [
          {
            titulo: "Conhecer a megacidade à noite",
            texto:
              "Quero caminhar por Shanghai durante a noite e observar seus arranha-céus e luzes.",
            imagem: "/expxangai.webp",
          },
        ],
      },

      {
        id: 1802,
        nome: "Chongqing",
        imagem: "/chongqing.webp",
        experiencias: [
          {
            titulo: "Conhecer a cidade futurista",
            texto:
              "Quero caminhar por Chongqing durante a noite e conhecer sua arquitetura extremamente vertical e futurista.",
            imagem: "/expchongqing.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Blade Runner 2049",
        tipo: "Filme · Atmosfera",
        imagem: "/bladerunner2049.jpg",
        sinopse:
          "Ficção científica marcada por megacidades, arquitetura futurista, luzes e atmosfera cyberpunk.",
        motivo:
          "É a estética futurista e urbana que associo principalmente a Shanghai e Chongqing.",
      },
    ],
  },

  {
    id: 19,
    nome: "República Tcheca",
    codigo: "CZ",
    continente: "Europa",

    lugares: [
      {
        id: 1901,
        nome: "Prague",
        imagem: "/praga.webp",
        experiencias: [
          {
            titulo: "Caminhar pela arquitetura histórica",
            texto:
              "Quero caminhar por Praga durante o dia e principalmente à noite, observando sua arquitetura.",
            imagem: "/exppraga1.avif",
          },
          {
            titulo: "Cafés",
            texto:
              "Quero conhecer os cafés históricos da cidade.",
            imagem: "/exppraga2.webp",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Amadeus",
        tipo: "Filme · Local de filmagem",
        imagem: "/amadeus.jpg",
        sinopse:
          "Filme sobre Mozart e sua relação com a Viena do século XVIII.",
        motivo:
          "Embora a história seja principalmente ambientada em Viena, Praga foi amplamente utilizada como locação para representar a Viena histórica. Por isso, a estética do filme é uma referência para conhecer Praga.",
      },
    ],
  },

  {
    id: 20,
    nome: "Bélgica",
    codigo: "BE",
    continente: "Europa",

    lugares: [
      {
        id: 2001,
        nome: "Brussels",
        imagem: "/bruxelas.jpg",
        experiencias: [
          {
            titulo: "Conhecer a Grand-Place",
            texto:
              "Quero conhecer a Grand-Place e caminhar pelo centro histórico de Bruxelas.",
            imagem: "/expbruxelas1.jpeg",
          },
          {
            titulo: "Comer waffles e chocolate",
            texto:
              "Quero experimentar waffles e chocolates belgas enquanto caminho pela cidade.",
            imagem: "/expbruxelas2.jpeg",
          },
          {
            titulo: "Caminhar à noite",
            texto:
              "Quero caminhar pelo centro histórico durante a noite.",
            imagem: "/expbruxelas3.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Tintin",
        tipo: "História · Memória de infância",
        imagem: "/tintin.webp",
        sinopse:
          "Personagem belga criado por Hergé, conhecido por suas aventuras ao redor do mundo.",
        motivo:
          "Eu assistia muito Tintin quando era criança. Por isso, o personagem ficou fortemente associado à Bélgica no meu imaginário.",
      },
    ],
  },

  {
    id: 21,
    nome: "México",
    codigo: "MX",
    continente: "América do Norte",

    lugares: [
      {
        id: 2101,
        nome: "Cancun",
        imagem: "/cancun.jpg",
        experiencias: [
          {
            titulo: "Hotel perto do mar",
            texto:
              "Quero ficar em um hotel próximo ao mar e passar alguns dias aproveitando o litoral.",
            imagem: "/expcancun.jpg",
          },
          {
            titulo: "Passeio de barco",
            texto:
              "Quero fazer um passeio de barco pelo litoral.",
            imagem: "/expcancun2.jpeg",
          },
        ],
      },

      {
        id: 2102,
        nome: "Mexico City",
        imagem: "/cidadedomexico.jpg",
        experiencias: [
          {
            titulo: "Conhecer a cidade à noite",
            texto:
              "Quero caminhar pela Cidade do México durante a noite e conhecer sua atmosfera urbana.",
            imagem: "/expmexicocity.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Meu Malvado Favorito 2",
        tipo: "Filme · Memória de infância",
        imagem: "/meumalvadofav.jpg",
        sinopse:
          "Filme de animação com elementos e referências ao México.",
        motivo:
          "É uma referência de infância que me faz associar o país a uma estética mexicana divertida e marcante.",
      },
    ],
  },

  {
    id: 22,
    nome: "Turquia",
    codigo: "TR",
    continente: "Ásia",

    lugares: [
      {
        id: 2201,
        nome: "Istanbul",
        imagem: "/istambul.webp",
        experiencias: [
          {
            titulo: "Conhecer as mesquitas",
            texto:
              "Quero conhecer as grandes mesquitas e a arquitetura histórica de Istambul.",
            imagem: "/expturquia.webp",
          },
        ],
      },

      {
        id: 2202,
        nome: "Cappadocia",
        imagem: "/capadocia.jpg",
        experiencias: [
          {
            titulo: "Balões ao nascer do sol",
            texto:
              "Quero acordar antes do amanhecer para observar os balões sobre a Capadócia.",
            imagem: "/expcapadocia.jpg",
          },
          {
            titulo: "Passeio de balão",
            texto:
              "Quero fazer um voo de balão sobre a região.",
            imagem: "/expcapadocia.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Skyfall",
        tipo: "Filme · Localização / Atmosfera",
        imagem: "/skyfallturquia.webp",
        sinopse:
          "Filme de James Bond com importantes cenas ambientadas em Istambul.",
        motivo:
          "As cenas em Istambul, com mercados, arquitetura, mesquitas e ruas da cidade, reforçam muito a imagem que tenho da Turquia.",
      },
    ],
  },

  {
    id: 23,
    nome: "Emirados Árabes Unidos",
    codigo: "AE",
    continente: "Ásia",

    lugares: [
      {
        id: 2301,
        nome: "Dubai",
        imagem: "/dubai.jpg",
        experiencias: [
          {
            titulo: "Andar de quadriciclo no deserto",
            texto:
              "Quero andar de quadriciclo pelo deserto.",
            imagem: "/expdubai1.jpg",
          },
          {
            titulo: "Conhecer o Burj Khalifa",
            texto:
              "Quero conhecer o Burj Khalifa e observar Dubai do alto.",
            imagem: "/expdubai2.webp",
          },
          {
            titulo: "Pôr do sol no deserto",
            texto:
              "Quero passar pelo deserto durante o pôr do sol.",
            imagem: "/expdubai3.jpeg",
          },
        ],
      },

      {
        id: 2302,
        nome: "Abu Dhabi",
        imagem: "/abudhabi.jpg",
        experiencias: [
          {
            titulo: "Ferrari World",
            texto:
              "Quero conhecer o Ferrari World em Abu Dhabi.",
            imagem: "/expabudhabi.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Missão: Impossível — Protocolo Fantasma",
        tipo: "Filme · Atmosfera",
        imagem: "/missaoimpossivel.jpg",
        sinopse:
          "Filme de espionagem com cenas marcantes em Dubai e Abu Dhabi.",
        motivo:
          "É uma referência direta à imagem que tenho dos Emirados, principalmente pela arquitetura, escala e paisagens urbanas.",
      },
    ],
  },

  {
    id: 24,
    nome: "Brasil",
    codigo: "BR",
    continente: "América do Sul",

    lugares: [
      {
        id: 2401,
        nome: "Rio de Janeiro",
        imagem: "/rj.jpg",

        experiencias: [
          {
            titulo: "Caminhar pelo Rio durante o dia",
            texto:
              "Quero passar o dia caminhando pelo Rio de Janeiro, conhecendo seus bairros, paisagens e a atmosfera da cidade.",
            imagem: "/exprio1.jpg",
          },
          {
            titulo: "Conhecer as praias e a orla",
            texto:
              "Quero passar um dia conhecendo as praias e caminhando pela orla do Rio de Janeiro.",
            imagem: "/exprio2.webp",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Cidade de Deus",
        tipo: "Filme · Referência cultural",
        imagem: "/cidadededeus.jpg",
        sinopse:
          "Filme brasileiro que retrata a vida na Cidade de Deus, no Rio de Janeiro.",
        motivo:
          "É uma das referências cinematográficas mais fortes que associo ao Rio de Janeiro e à identidade brasileira.",
      },
    ],
  },

  {
    id: 25,
    nome: "Dinamarca",
    codigo: "DK",
    continente: "Europa",

    lugares: [
      {
        id: 2501,
        nome: "Copenhagen",
        imagem: "/copenhagen.jpeg",

        experiencias: [
          {
            titulo: "Caminhar por Copenhagen",
            texto:
              "Quero caminhar pela cidade conhecendo sua arquitetura, canais e bairros.",
            imagem: "/expcopenhagen.jpeg",
          },
          {
            titulo: "Bicicleta e cafés",
            texto:
              "Quero andar de bicicleta pela cidade, parar em cafés e conhecer o ritmo cotidiano de Copenhagen.",
            imagem: "/expcopenhagen2.webp",
          },
          {
            titulo: "Caminhar por Nyhavn",
            texto:
              "Quero conhecer Nyhavn e caminhar pela região durante o fim da tarde e à noite.",
            imagem: "/expcopenhagen3.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "A Caça",
        tipo: "Filme · Atmosfera",
        imagem: "/thehunt.png",
        sinopse:
          "Drama dinamarquês dirigido por Thomas Vinterberg.",
        motivo:
          "É uma referência cinematográfica que reforça a atmosfera nórdica que associo à Dinamarca.",
      },
    ],
  },

  {
    id: 26,
    nome: "Suécia",
    codigo: "SE",
    continente: "Europa",

    lugares: [
      {
        id: 2601,
        nome: "Stockholm",
        imagem: "/estocolmo.jpg",

        experiencias: [
          {
            titulo: "Caminhar por Stockholm",
            texto:
              "Quero caminhar pela cidade conhecendo suas ruas, ilhas e arquitetura.",
            imagem: "/expestocolmo1.webp",
          },
          {
            titulo: "Viver a atmosfera nórdica",
            texto:
              "Quero conhecer Stockholm durante o frio e sentir aquela atmosfera nórdica mais silenciosa e contemplativa.",
            imagem: "/expestocolmo2.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "O Sétimo Selo",
        tipo: "Filme · Atmosfera",
        imagem: "/setimoselo.jpg",
        sinopse:
          "Clássico de Ingmar Bergman ambientado na Suécia medieval.",
        motivo:
          "É uma referência cinematográfica muito ligada à atmosfera, paisagens e identidade cultural sueca.",
      },
    ],
  },

  {
    id: 27,
    nome: "Argentina",
    codigo: "AR",
    continente: "América do Sul",

    lugares: [
      {
        id: 2701,
        nome: "Buenos Aires",
        imagem: "/buenosaires.jpeg",

        experiencias: [
          {
            titulo: "Caminhar por Buenos Aires",
            texto:
              "Quero caminhar pela cidade conhecendo seus bairros, arquitetura e cafés.",
            imagem: "/expbuenosaires1.webp",
          },
          {
            titulo: "Ir no Monumental",
            texto:
              "Como já fui na Bombonera quero ir no estádio do River Plate",
            imagem: "/expbuenosaires2.jpg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "When Evil Lurks",
        tipo: "Filme · Atmosfera",
        imagem: "/whenevillurks.jpeg",
        sinopse:
          "Filme argentino de terror dirigido por Demián Rugna.",
        motivo:
          "É uma referência argentina que conheci pelo cinema e que ficou associada ao país no meu imaginário.",
      },
    ],
  },

  {
    id: 28,
    nome: "Rússia",
    codigo: "RU",
    continente: "Europa / Ásia",

    lugares: [
      {
        id: 2801,
        nome: "Moscow",
        imagem: "/moscou.webp",

        experiencias: [
          {
            titulo: "Conhecer a Praça Vermelha e o Kremlin",
            texto:
              "Quero conhecer a Praça Vermelha, o Kremlin e a arquitetura histórica de Moscou.",
            imagem: "/expmoscou1.jpg",
          },
          {
            titulo: "Conhecer Moscou durante o inverno",
            texto:
              "Quero conhecer Moscou durante o frio, caminhar pela cidade e ver a arquitetura coberta de neve.",
            imagem: "/expmoscou2.webp",
          },
          {
            titulo: "Conhecer o metrô de Moscou",
            texto:
              "Quero conhecer as estações históricas e monumentais do metrô de Moscou.",
            imagem: "/expmoscou3.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Mirror",
        tipo: "Filme · Atmosfera",
        imagem: "/mirror.jpg",
        sinopse:
          "Filme de Andrei Tarkovsky marcado por memória, paisagens e uma atmosfera profundamente contemplativa.",
        motivo:
          "A estética de Tarkovsky é uma referência importante para a maneira como imagino algumas paisagens e atmosferas russas.",
      },
    ],
  },

  {
    id: 29,
    nome: "Singapura",
    codigo: "SG",
    continente: "Ásia",

    lugares: [
      {
        id: 2901,
        nome: "Singapura",
        imagem: "/singapura.webp",

        experiencias: [
          {
            titulo: "Conhecer Marina Bay à noite",
            texto:
              "Quero caminhar pela região de Marina Bay durante a noite e observar o skyline iluminado.",
            imagem: "/expsingapura1.avif",
          },
          {
            titulo: "Conhecer Gardens by the Bay",
            texto:
              "Quero conhecer o Gardens by the Bay e sua arquitetura futurista.",
            imagem: "/expsingapura2.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "Crazy Rich Asians",
        tipo: "Filme · Atmosfera",
        imagem: "/crazyrichasians.webp",
        sinopse:
          "Comédia romântica ambientada em Singapura e marcada por sua arquitetura, luxo e vida urbana.",
        motivo:
          "É uma das referências que mais associo à imagem moderna e sofisticada de Singapura.",
      },
    ],
  },

  {
    id: 30,
    nome: "África do Sul",
    codigo: "ZA",
    continente: "África",

    lugares: [
      {
        id: 3001,
        nome: "Cape Town",
        imagem: "/joanesburgo.jpeg",

        experiencias: [
          {
            titulo: "Conhecer Cape Town",
            texto:
              "Quero conhecer Cape Town, sua costa, bairros e paisagens naturais.",
            imagem: "/expcapetown.jpg",
          },
        ],
      },

      {
        id: 3003,
        nome: "Safari",
        imagem: "/safari.jpg",

        experiencias: [
          {
            titulo: "Fazer um safari",
            texto:
              "Quero fazer um safari e ver animais como leões, elefantes, girafas e zebras em seu habitat natural.",
            imagem: "/expsafari.jpeg",
          },
        ],
      },
    ],

    referencias: [
      {
        titulo: "District 9",
        tipo: "Filme · Localização / Atmosfera",
        imagem: "/district9.jpg",
        sinopse:
          "Ficção científica ambientada em Joanesburgo.",
        motivo:
          "É uma referência cinematográfica diretamente ligada à África do Sul e principalmente a Joanesburgo.",
      },
    ],
  },
]

export default paises