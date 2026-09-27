import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { buscarFilme } from "../services/movies"
import { buscarCidade } from "../services/geocoding"
import { buscarContinente } from "../services/countries"
import { salvarDestino } from "../services/destinos"
import { buscarImagem } from "../services/images"

function lerImagemComoDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = () => {
      reject(
        new Error("Não foi possível ler a imagem.")
      )
    }

    reader.readAsDataURL(file)
  })
}

function AdicionarDestino() {
  const navigate = useNavigate()

  const [cidadeDigitada, setCidadeDigitada] =
    useState("")

  const [pais, setPais] =
    useState("")

  const [continente, setContinente] =
    useState("")

  const [codigoPais, setCodigoPais] =
    useState("")

  const [regiao, setRegiao] =
    useState("")

  const [latitude, setLatitude] =
    useState("")

  const [longitude, setLongitude] =
    useState("")

  const [imagemDestino, setImagemDestino] =
    useState("")

  const [imagemDestinoOriginal, setImagemDestinoOriginal] =
    useState("")

  const [descricao, setDescricao] =
    useState("")

  const [experienciaTitulo, setExperienciaTitulo] =
    useState("")

  const [experienciaTexto, setExperienciaTexto] =
    useState("")

  const [imagemExperiencia, setImagemExperiencia] =
    useState("")

  const [filmeTitulo, setFilmeTitulo] =
    useState("")

  const [filmeAno, setFilmeAno] =
    useState("")

  const [filmeRelacao, setFilmeRelacao] =
    useState("")

  const [filmeEncontrado, setFilmeEncontrado] =
    useState(null)

  const [destinoEncontrado, setDestinoEncontrado] =
    useState(false)

  const [buscandoDestino, setBuscandoDestino] =
    useState(false)

  const [erro, setErro] =
    useState("")

  async function buscarDestino() {
    if (!cidadeDigitada.trim()) {
      setErro("Digite uma cidade ou local.")
      return
    }

    setBuscandoDestino(true)
    setErro("")

    try {
      const dados =
        await buscarCidade(cidadeDigitada)

      if (
        !dados.results ||
        dados.results.length === 0
      ) {
        setDestinoEncontrado(false)
        setErro(
          "Não encontramos esse destino. Tente outro nome."
        )
        return
      }

      const cidade = dados.results[0]

      const continenteEncontrado =
        buscarContinente(
          cidade.country_code
        )

      setCidadeDigitada(cidade.name)
      setPais(cidade.country)
      setCodigoPais(cidade.country_code)
      setContinente(continenteEncontrado)
      setRegiao(cidade.admin1 || "")
      setLatitude(cidade.latitude)
      setLongitude(cidade.longitude)
      setDestinoEncontrado(true)

      const imagem =
        await buscarImagem(
          cidade.name,
          cidade.country
        )

      const urlImagem =
        imagem?.photos?.[0]?.src?.large2x || ""

      const urlImagemOriginal =
        imagem?.photos?.[0]?.src?.original || ""

      setImagemDestino(urlImagem)

      setImagemDestinoOriginal(
        urlImagemOriginal
      )

    } catch (error) {
      console.error(error)

      setDestinoEncontrado(false)

      setErro(
        "Não foi possível buscar esse destino agora."
      )
    } finally {
      setBuscandoDestino(false)
    }
  }

  async function selecionarImagemExperiencia(
    event
  ) {
    const file =
      event.target.files?.[0]

    if (!file) {
      return
    }

    try {
      const imagem =
        await lerImagemComoDataUrl(file)

      setImagemExperiencia(imagem)
    } catch (error) {
      console.error(error)

      setErro(
        "Não foi possível carregar essa imagem."
      )
    }
  }

  async function buscarReferenciaFilme() {
    if (!filmeTitulo.trim()) {
      setErro("Digite o título de um filme.")
      return
    }

    setErro("")

    try {
      const filme =
        await buscarFilme(
          filmeTitulo,
          filmeAno
        )

      if (!filme) {
        setFilmeEncontrado(null)

        setErro(
          "Não encontramos esse filme no TMDB."
        )

        return
      }

      setFilmeEncontrado(filme)

      setFilmeTitulo(filme.titulo)

      if (filme.ano) {
        setFilmeAno(
          String(filme.ano)
        )
      }

    } catch (error) {
      console.error(error)

      setFilmeEncontrado(null)

      setErro(
        "Não foi possível buscar esse filme agora."
      )
    }
  }

  function adicionarDestino() {
    if (!destinoEncontrado) {
      setErro(
        "Busque um destino antes de adicionar."
      )
      return
    }

    const novoDestino = {
      id: Date.now(),

      cidade: cidadeDigitada,

      pais,

      codigoPais,

      continente,

      informacoes: {
        descricao,
        clima: "",
        localizacao: regiao,
      },

      latitude,

      longitude,

      imagens: imagemDestino
        ? [imagemDestino]
        : [],

      imagemOriginal:
        imagemDestinoOriginal,

      filme: {
        id:
          filmeEncontrado?.id ||
          null,

        titulo:
          filmeEncontrado?.titulo ||
          filmeTitulo,

        ano:
          filmeEncontrado?.ano ||
          (
            filmeAno
              ? Number(filmeAno)
              : null
          ),

        imagem:
          filmeEncontrado?.imagem ||
          "",

        descricao:
          filmeEncontrado?.descricao ||
          "",

        relacaoComDestino:
          filmeRelacao,
      },

      experiencias: [
        {
          id: 1,
          titulo: experienciaTitulo,
          texto: experienciaTexto,
          imagem: imagemExperiencia,
        },
      ],

      elementosVisuais: [],
    }

    salvarDestino(novoDestino)

    navigate("/destinos")
  }

  return (
    <main className="add-destination-page">

      <section className="add-destination-container">

        <div className="add-destination-heading">

          <p className="destination-eyebrow">
            Travel Planner
          </p>

          <h1>
            Adicionar
            <br />
            destino.
          </h1>

          <p>
            Adicione um lugar que você quer conhecer
            e conte o que gostaria de viver nesse destino.
          </p>

        </div>

        {erro && (
          <div className="form-error">
            {erro}
          </div>
        )}

        <section className="destination-form-section">

          <div className="destination-form-heading">

            <p>
              01 · Informações básicas
            </p>

            <h2>
              Sobre o destino
            </h2>

          </div>

          <div className="destination-form">

            <div className="form-field">

              <label htmlFor="cidade">
                Cidade ou local
              </label>

              <input
                id="cidade"
                type="text"
                value={cidadeDigitada}
                onChange={(event) => {
                  setCidadeDigitada(
                    event.target.value
                  )

                  setDestinoEncontrado(false)
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    buscarDestino()
                  }
                }}
                placeholder="Ex: Paris"
              />

            </div>

            <button
              type="button"
              onClick={buscarDestino}
              disabled={buscandoDestino}
              className="form-action-button"
            >
              {buscandoDestino
                ? "Buscando..."
                : "Buscar destino →"}
            </button>

            {destinoEncontrado && (
              <div className="destination-result">

                <div className="destination-result-image">

                  {imagemDestino ? (
                    <img
                      src={imagemDestino}
                      alt={cidadeDigitada}
                    />
                  ) : (
                    <div>
                      Imagem não encontrada
                    </div>
                  )}

                </div>

                <div className="destination-result-info">

                  <p className="destination-result-label">
                    Destino encontrado
                  </p>

                  <h3>
                    {cidadeDigitada}
                  </h3>

                  <p>
                    {pais}
                    {regiao
                      ? ` · ${regiao}`
                      : ""}
                  </p>

                  <span>
                    {continente}
                  </span>

                </div>

              </div>
            )}

            {destinoEncontrado && (
              <>

                <div className="form-grid">

                  <div className="form-field">

                    <label>
                      País
                    </label>

                    <input
                      type="text"
                      value={pais}
                      readOnly
                    />

                  </div>

                  <div className="form-field">

                    <label>
                      Continente
                    </label>

                    <input
                      type="text"
                      value={continente}
                      readOnly
                    />

                  </div>

                </div>

                <div className="form-field">

                  <label>
                    Localização / Região
                  </label>

                  <input
                    type="text"
                    value={regiao}
                    readOnly
                  />

                </div>

                <div className="form-field">

                  <label>
                    Descrição
                  </label>

                  <textarea
                    rows="5"
                    value={descricao}
                    onChange={(event) =>
                      setDescricao(
                        event.target.value
                      )
                    }
                    placeholder="Conte um pouco sobre esse destino."
                  />

                </div>

              </>
            )}

          </div>

        </section>

        <section className="destination-form-section">

          <div className="destination-form-heading">

            <p>
              02 · Experiência
            </p>

            <h2>
              Quero viver isso.
            </h2>

          </div>

          <div className="destination-form">

            <div className="form-field">

              <label>
                Título da experiência
              </label>

              <input
                type="text"
                value={experienciaTitulo}
                onChange={(event) =>
                  setExperienciaTitulo(
                    event.target.value
                  )
                }
                placeholder="Ex: Caminhar por Paris de manhã"
              />

            </div>

            <div className="form-field">

              <label>
                O que você quer viver?
              </label>

              <textarea
                rows="6"
                value={experienciaTexto}
                onChange={(event) =>
                  setExperienciaTexto(
                    event.target.value
                  )
                }
                placeholder="Descreva a experiência que você imagina viver nesse lugar."
              />

            </div>

            <div className="form-field">

              <label>
                Imagem da experiência
              </label>

              <label className="image-upload">

                <input
                  type="file"
                  accept="image/*"
                  onChange={
                    selecionarImagemExperiencia
                  }
                />

                <span className="image-upload-icon">
                  +
                </span>

                <span>
                  {imagemExperiencia
                    ? "Trocar imagem"
                    : "Escolher uma imagem"}
                </span>

                <small>
                  JPG, PNG ou WEBP
                </small>

              </label>

            </div>

            {imagemExperiencia && (
              <div className="experience-preview">

                <img
                  src={imagemExperiencia}
                  alt="Prévia da experiência"
                />

                <div>

                  <span>
                    Prévia
                  </span>

                  <p>
                    Essa imagem ficará associada
                    à experiência que você quer viver.
                  </p>

                </div>

              </div>
            )}

          </div>

        </section>

        <section className="destination-form-section">

          <div className="destination-form-heading">

            <p>
              03 · Referência
            </p>

            <h2>
              Um filme que representa o destino.
            </h2>

          </div>

          <div className="destination-form">

            <div className="form-grid">

              <div className="form-field">

                <label>
                  Título do filme
                </label>

                <input
                  type="text"
                  value={filmeTitulo}
                  onChange={(event) => {
                    setFilmeTitulo(
                      event.target.value
                    )

                    setFilmeEncontrado(null)
                  }}
                  placeholder="Ex: Meia-Noite em Paris"
                />

              </div>

              <div className="form-field">

                <label>
                  Ano
                </label>

                <input
                  type="number"
                  value={filmeAno}
                  onChange={(event) => {
                    setFilmeAno(
                      event.target.value
                    )

                    setFilmeEncontrado(null)
                  }}
                  placeholder="2011"
                />

              </div>

            </div>

            <button
              type="button"
              onClick={buscarReferenciaFilme}
              className="form-action-button"
            >
              Buscar filme →
            </button>

            {filmeEncontrado && (
              <div className="movie-result">

                {filmeEncontrado.imagem && (
                  <img
                    src={filmeEncontrado.imagem}
                    alt={filmeEncontrado.titulo}
                  />
                )}

                <div>

                  <p className="destination-result-label">
                    Filme encontrado
                  </p>

                  <h3>
                    {filmeEncontrado.titulo}
                  </h3>

                  <p>
                    {filmeEncontrado.ano ||
                      "Ano desconhecido"}
                  </p>

                </div>

              </div>
            )}

            <div className="form-field">

              <label>
                Por que esse filme representa o destino?
              </label>

              <textarea
                rows="6"
                value={filmeRelacao}
                onChange={(event) =>
                  setFilmeRelacao(
                    event.target.value
                  )
                }
                placeholder="Explique a relação entre o filme e o lugar."
              />

            </div>

          </div>

        </section>

        <div className="destination-form-submit">

          <button
            type="button"
            onClick={adicionarDestino}
          >
            Adicionar destino
            <span>→</span>
          </button>

        </div>

      </section>

    </main>
  )
}

export default AdicionarDestino