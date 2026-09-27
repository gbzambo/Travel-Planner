const destinos = [
  {
    id: 1,

    cidade: "Paris",
    pais: "França",
    continente: "Europa",

    informacoes: {
      descricao:
        "Paris é uma cidade marcada por arte, arquitetura, gastronomia, história e uma atmosfera cultural muito própria.",
      clima: "Temperado",
      localizacao: "Europa Ocidental",
    },

    latitude: 48.8566,
    longitude: 2.3522,

    imagens: [
      "/destinos/paris/capa.webp",
    ],

    filme: {
      titulo: "Filme de exemplo",
      ano: 2020,
      imagem: "/destinos/paris/filme.webp",
      descricao:
        "Breve descrição do filme e da história.",
      relacaoComDestino:
        "A atmosfera do filme representa de alguma forma a maneira como enxergo este lugar e aumenta minha vontade de conhecê-lo e viver uma experiência parecida.",
    },

    experiencias: [
      {
        id: 1,
        titulo: "Caminhar pela cidade",
        texto:
          "Caminhar pelas ruas de Paris, conhecer seus cafés, observar a arquitetura e viver a atmosfera cultural da cidade.",
        imagem: "/destinos/paris/experiencia-1.webp",
      },

      {
        id: 2,
        titulo: "Conhecer os cafés",
        texto:
          "Sentar em um café parisiense, observar o movimento da cidade e viver uma experiência cotidiana em Paris.",
        imagem: "/destinos/paris/experiencia-2.webp",
      },
    ],

    elementosVisuais: [
      "arte",
      "arquitetura",
      "cafés",
      "croissant",
      "rio",
    ],
  },

  {
    id: 2,

    cidade: "Roma",
    pais: "Itália",
    continente: "Europa",

    informacoes: {
      descricao:
        "Roma é uma cidade marcada por história, arquitetura, gastronomia e monumentos que atravessam diferentes períodos da civilização.",
      clima: "Mediterrâneo",
      localizacao: "Europa Meridional",
    },

    latitude: 41.9028,
    longitude: 12.4964,

    imagens: [
      "/destinos/roma/capa.webp",
    ],

    filme: {
      titulo: "Filme de teste — Roma",
      ano: 2020,
      imagem: "/destinos/roma/filme.webp",
      descricao:
        "Imagem e descrição provisórias utilizadas para testar o sistema de destinos.",
      relacaoComDestino:
        "Texto provisório para testar a relação entre o filme e a atmosfera do destino.",
    },

    experiencias: [
      {
        id: 1,
        titulo: "Conhecer o Coliseu",
        texto:
          "Caminhar pela região histórica de Roma e conhecer de perto o Coliseu e os monumentos que fazem parte da história da cidade.",
        imagem: "/destinos/roma/experiencia-1.webp",
      },

      {
        id: 2,
        titulo: "Experimentar a gastronomia italiana",
        texto:
          "Conhecer restaurantes e pequenas trattorias, experimentar uma pizza italiana e viver a gastronomia local.",
        imagem: "/destinos/roma/experiencia-2.webp",
      },
    ],

    elementosVisuais: [
      "Coliseu",
      "pizza",
      "arquitetura",
      "história",
      "ruas",
    ],
  },
]

export default destinos