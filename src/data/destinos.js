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

    imagens: [
      "/paris.webp",
    ],

    filme: {
      titulo: "Filme de exemplo",

      ano: 2020,

      imagem: "/paris.webp",

      descricao:
        "Breve descrição do filme e da história.",

      relacaoComDestino:
        "A atmosfera do filme representa de alguma forma a maneira como enxergo este lugar e aumenta minha vontade de conhecê-lo e viver uma experiência parecida.",
    },

    experiencias: [
      {
        id: 1,

        titulo: "Quero viver isso",

        texto:
          "Caminhar pela cidade, conhecer seus cafés, observar a arquitetura e viver a atmosfera cultural de Paris.",

        imagem: "/paris.webp",
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

    imagens: [
      "/paris.webp",
    ],

    filme: {
      titulo: "Filme de teste — Roma",

      ano: 2020,

      imagem: "/paris.webp",

      descricao:
        "Imagem e descrição provisórias utilizadas apenas para testar o sistema de destinos dinâmicos.",

      relacaoComDestino:
        "Texto provisório para testar se os dados exibidos mudam de acordo com o destino selecionado.",
    },

    experiencias: [
      {
        id: 1,

        titulo: "Quero viver isso em Roma",

        texto:
          "Conhecer as ruas da cidade, observar a arquitetura histórica e experimentar a gastronomia italiana.",

        imagem: "/paris.webp",
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