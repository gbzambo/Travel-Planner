import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet"

import L from "leaflet"
import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

import "leaflet/dist/leaflet.css"

const paisesMapa = {
  BR: {
    nome: "Brasil",
    centro: [-14.235, -51.9253],
  },

  CH: {
    nome: "Suíça",
    centro: [46.8182, 8.2275],
  },

  US: {
    nome: "Estados Unidos",
    centro: [37.0902, -95.7129],
  },

  ES: {
    nome: "Espanha",
    centro: [40.4637, -3.7492],
  },

  FR: {
    nome: "França",
    centro: [46.2276, 2.2137],
  },

  IT: {
    nome: "Itália",
    centro: [41.8719, 12.5674],
  },

  JP: {
    nome: "Japão",
    centro: [36.2048, 138.2529],
  },

  AU: {
    nome: "Austrália",
    centro: [-25.2744, 133.7751],
  },

  GB: {
    nome: "Inglaterra",
    centro: [55.3781, -3.436],
  },

  NL: {
    nome: "Países Baixos",
    centro: [52.1326, 5.2913],
  },

  DE: {
    nome: "Alemanha",
    centro: [51.1657, 10.4515],
  },

  FI: {
    nome: "Finlândia",
    centro: [61.9241, 25.7482],
  },

  EG: {
    nome: "Egito",
    centro: [26.8206, 30.8025],
  },

  PE: {
    nome: "Peru",
    centro: [-9.19, -75.0152],
  },

  PT: {
    nome: "Portugal",
    centro: [39.3999, -8.2245],
  },

  GR: {
    nome: "Grécia",
    centro: [39.0742, 21.8243],
  },

  AT: {
    nome: "Áustria",
    centro: [47.5162, 14.5501],
  },

  HU: {
    nome: "Hungria",
    centro: [47.1625, 19.5033],
  },

  CN: {
    nome: "China",
    centro: [35.8617, 104.1954],
  },

  CZ: {
    nome: "República Tcheca",
    centro: [49.8175, 15.473],
  },

  BE: {
    nome: "Bélgica",
    centro: [50.5039, 4.4699],
  },

  MX: {
    nome: "México",
    centro: [23.6345, -102.5528],
  },

  TR: {
    nome: "Turquia",
    centro: [38.9637, 35.2433],
  },

  AE: {
    nome: "Emirados Árabes Unidos",
    centro: [23.4241, 53.8478],
  },

  DK: {
    nome: "Dinamarca",
    centro: [56.2639, 9.5018],
  },

  SE: {
    nome: "Suécia",
    centro: [60.1282, 18.6435],
  },

  AR: {
    nome: "Argentina",
    centro: [-38.4161, -63.6167],
  },

  RU: {
    nome: "Rússia",
    centro: [61.524, 105.3188],
  },

  SG: {
    nome: "Singapura",
    centro: [1.3521, 103.8198],
  },

  ZA: {
    nome: "África do Sul",
    centro: [-30.5595, 22.9375],
  },

  KR: {
    nome: "Coreia do Sul",
    centro: [35.9078, 127.7669],
  },
}

function obterCodigoPais(valor) {
  if (!valor) {
    return ""
  }

  if (typeof valor === "string") {
    return valor.toUpperCase().trim()
  }

  if (typeof valor === "object") {
    if (typeof valor.codigo === "string") {
      return valor.codigo.toUpperCase().trim()
    }

    if (typeof valor.code === "string") {
      return valor.code.toUpperCase().trim()
    }

    if (typeof valor.codigoPais === "string") {
      return valor.codigoPais.toUpperCase().trim()
    }

    if (typeof valor.id === "string") {
      return valor.id.toUpperCase().trim()
    }
  }

  return ""
}

function obterNomePais(valor) {
  if (!valor) {
    return ""
  }

  if (typeof valor === "string") {
    return valor.trim()
  }

  if (typeof valor === "object") {
    if (typeof valor.nome === "string") {
      return valor.nome
    }

    if (typeof valor.name === "string") {
      return valor.name
    }

    if (typeof valor.pais === "string") {
      return valor.pais
    }

    if (typeof valor.country === "string") {
      return valor.country
    }
  }

  return ""
}

function criarIconePais(codigoPais) {
  const codigo = codigoPais.toLowerCase()

  return L.divIcon({
    className: "country-marker-wrapper",

    html: `
      <div class="country-marker">
        <img
          src="https://flagcdn.com/w80/${codigo}.png"
          alt=""
        />
      </div>
    `,

    iconSize: [54, 54],
    iconAnchor: [27, 27],
    popupAnchor: [0, -30],
  })
}

function MapController({ paisSelecionado }) {
  const map = useMap()

  useEffect(() => {
    if (!paisSelecionado) {
      return
    }

    const pais = paisesMapa[paisSelecionado]

    if (!pais) {
      return
    }

    map.flyTo(pais.centro, 4, {
      duration: 1,
    })
  }, [paisSelecionado, map])

  return null
}

function WorldMap({
  paises = [],
  destinosUsuario = [],
}) {
  const navigate = useNavigate()

  const [paisSelecionado, setPaisSelecionado] =
    useState(null)

  /*
    Usa diretamente o codigo ISO existente
    no paises.js.

    Exemplo:

    {
      id: 1,
      nome: "Suíça",
      codigo: "CH"
    }
  */
  const paisesProcessados = useMemo(() => {
    return paises
      .map((pais) => {
        const codigo = obterCodigoPais(pais.codigo)

        if (!codigo) {
          return null
        }

        return {
          ...pais,
          codigo,
        }
      })
      .filter(Boolean)
  }, [paises])

  /*
    Códigos dos países que já existem
    no nosso catálogo principal.
  */
  const codigosCurados = useMemo(() => {
    return paisesProcessados.map(
      (pais) => pais.codigo
    )
  }, [paisesProcessados])

  /*
    Junta os destinos adicionados pelo usuário
    ao país correspondente.

    Exemplo:

    Estados Unidos
      ├── New York
      ├── Los Angeles
      └── destino adicionado pelo usuário
  */
  const paisesComDestinos = useMemo(() => {
    return paisesProcessados.map((pais) => {
      const destinosDoPais =
        destinosUsuario.filter((destino) => {
          const codigoDestino =
            obterCodigoPais(destino.codigoPais)

          return codigoDestino === pais.codigo
        })

      return {
        ...pais,
        destinosUsuario: destinosDoPais,
      }
    })
  }, [paisesProcessados, destinosUsuario])

  /*
    Destinos cujo país ainda não está
    no paises.js.

    Nesse caso criamos apenas um marcador
    para aquele país.
  */
  const destinosAvulsos = useMemo(() => {
    const agrupados = {}

    destinosUsuario.forEach((destino) => {
      const codigo = obterCodigoPais(
        destino.codigoPais
      )

      if (!codigo) {
        return
      }

      if (codigosCurados.includes(codigo)) {
        return
      }

      if (!agrupados[codigo]) {
        agrupados[codigo] = []
      }

      agrupados[codigo].push(destino)
    })

    return Object.entries(agrupados).map(
      ([codigo, destinos]) => ({
        codigo,
        destinos,
      })
    )
  }, [destinosUsuario, codigosCurados])

  function obterCentroPais(
    codigoPais,
    destino
  ) {
    if (paisesMapa[codigoPais]) {
      return paisesMapa[codigoPais].centro
    }

    if (
      typeof destino.latitude === "number" &&
      typeof destino.longitude === "number"
    ) {
      return [
        destino.latitude,
        destino.longitude,
      ]
    }

    if (
      typeof destino.lat === "number" &&
      typeof destino.lon === "number"
    ) {
      return [
        destino.lat,
        destino.lon,
      ]
    }

    return [0, 0]
  }

  function explorarPais(id) {
    navigate(`/destinos/${id}`)
  }

  function explorarDestino(id) {
    navigate(`/destinos/${id}`)
  }

  return (
    <section className="world-map-section">

      <div className="world-map-heading">

        <div>
          <p className="home-eyebrow">
            Personal Atlas
          </p>

          <h1>
            O mundo que
            <br />
            eu quero viver.
          </h1>
        </div>

        <div className="world-map-counter">

          <span>
            {paisesComDestinos.length +
              destinosAvulsos.length}
          </span>

          <p>
            países
            <br />
            no atlas
          </p>

        </div>

      </div>

      <div className="world-map-container">

        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={7}
          zoomControl={false}
          scrollWheelZoom={true}
          className="world-map"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ZoomControl position="bottomright" />

          <MapController
            paisSelecionado={paisSelecionado}
          />

          {paisesComDestinos.map((pais) => {
            const codigo = pais.codigo

            const configuracao =
              paisesMapa[codigo]

            /*
              Se o país está no paises.js,
              mas ainda não possui coordenadas
              no mapa, não derrubamos o componente.
            */
            if (!configuracao) {
              return null
            }

            return (
              <Marker
                key={`pais-${codigo}`}
                position={configuracao.centro}
                icon={criarIconePais(codigo)}
                eventHandlers={{
                  click: () =>
                    setPaisSelecionado(codigo),
                }}
              >

                <Popup>

                  <div className="map-popup">

                    <div className="map-popup-flag">

                      <img
                        src={`https://flagcdn.com/w80/${codigo.toLowerCase()}.png`}
                        alt={configuracao.nome}
                      />

                    </div>

                    <div className="map-popup-content">

                      <span className="map-popup-code">
                        {codigo}
                      </span>

                      <h3>
                        {configuracao.nome}
                      </h3>

                      {pais.lugares?.length >
                        0 && (
                        <p>
                          {pais.lugares.length}{" "}
                          {pais.lugares.length ===
                          1
                            ? "lugar"
                            : "lugares"}{" "}
                          no atlas
                        </p>
                      )}

                      {pais.destinosUsuario
                        ?.length > 0 && (
                        <p className="map-popup-user-destination">
                          +{" "}
                          {
                            pais
                              .destinosUsuario
                              .length
                          }{" "}
                          destino
                          {pais.destinosUsuario
                            .length > 1
                            ? "s"
                            : ""}{" "}
                          adicionado
                          {pais.destinosUsuario
                            .length > 1
                            ? "s"
                            : ""}{" "}
                          por você
                        </p>
                      )}

                      <button
                        type="button"
                        className="map-popup-button"
                        onClick={() =>
                          explorarPais(
                            pais.id
                          )
                        }
                      >
                        Explorar país →
                      </button>

                    </div>

                  </div>

                </Popup>

              </Marker>
            )
          })}

          {destinosAvulsos.map(
            ({ codigo, destinos }) => {
              const primeiroDestino =
                destinos[0]

              const centro =
                obterCentroPais(
                  codigo,
                  primeiroDestino
                )

              const nomePais =
                paisesMapa[codigo]?.nome ||
                obterNomePais(
                  primeiroDestino.pais
                ) ||
                codigo

              return (
                <Marker
                  key={`usuario-${codigo}`}
                  position={centro}
                  icon={criarIconePais(codigo)}
                >

                  <Popup>

                    <div className="map-popup">

                      <div className="map-popup-flag">

                        <img
                          src={`https://flagcdn.com/w80/${codigo.toLowerCase()}.png`}
                          alt={nomePais}
                        />

                      </div>

                      <div className="map-popup-content">

                        <span className="map-popup-code">
                          {codigo}
                        </span>

                        <h3>
                          {nomePais}
                        </h3>

                        <p>
                          {destinos.length}{" "}
                          {destinos.length ===
                          1
                            ? "destino"
                            : "destinos"}{" "}
                          adicionado
                          {destinos.length ===
                          1
                            ? ""
                            : "s"}{" "}
                          por você.
                        </p>

                        <div className="map-popup-user-list">

                          {destinos.map(
                            (destino) => (
                              <button
                                type="button"
                                key={destino.id}
                                className="map-user-destination-button"
                                onClick={() =>
                                  explorarDestino(
                                    destino.id
                                  )
                                }
                              >
                                {destino.cidade}
                                <span>
                                  →
                                </span>
                              </button>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </Popup>

                </Marker>
              )
            }
          )}

        </MapContainer>

        {paisSelecionado && (
          <aside className="map-country-panel">

            <button
              type="button"
              className="map-panel-close"
              onClick={() =>
                setPaisSelecionado(null)
              }
            >
              ×
            </button>

            <div className="map-selected-country">

              <div className="map-selected-flag">

                <img
                  src={`https://flagcdn.com/w160/${paisSelecionado.toLowerCase()}.png`}
                  alt=""
                />

              </div>

              <span>
                {paisSelecionado}
              </span>

              <h2>
                {
                  paisesMapa[paisSelecionado]
                    ?.nome
                }
              </h2>

            </div>

            {paisesComDestinos
              .filter(
                (pais) =>
                  pais.codigo ===
                  paisSelecionado
              )
              .map((pais) => (
                <div
                  key={pais.codigo}
                  className="map-country-places"
                >

                  {pais.lugares?.map(
                    (lugar) => (
                      <div
                        key={lugar.id}
                        className="map-country-place"
                      >

                        <span>
                          Lugar
                        </span>

                        <h3>
                          {lugar.nome}
                        </h3>

                        <button
                          type="button"
                          className="map-place-button"
                          onClick={() =>
                            explorarPais(
                              pais.id
                            )
                          }
                        >
                          Explorar →
                        </button>

                      </div>
                    )
                  )}

                  {pais.destinosUsuario?.map(
                    (destino) => (
                      <div
                        key={destino.id}
                        className="map-country-place map-country-place-user"
                      >

                        <span>
                          Meu destino
                        </span>

                        <h3>
                          {destino.cidade}
                        </h3>

                        <button
                          type="button"
                          className="map-place-button"
                          onClick={() =>
                            explorarDestino(
                              destino.id
                            )
                          }
                        >
                          Explorar →
                        </button>

                      </div>
                    )
                  )}

                </div>
              ))}

          </aside>
        )}

      </div>

    </section>
  )
}

export default WorldMap