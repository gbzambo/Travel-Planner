import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import paises from "../data/paises"
import { buscarDestinos } from "../services/destinos"

function DestinoDetalhes() {
  const { id } = useParams()

  const [destinoUsuario, setDestinoUsuario] =
    useState(null)

  useEffect(() => {
    const destinosSalvos =
      buscarDestinos()

    const destinoEncontrado =
      destinosSalvos.find(
        (destino) =>
          destino.id === Number(id)
      )

    setDestinoUsuario(
      destinoEncontrado || null
    )
  }, [id])

  const pais =
    paises.find(
      (pais) =>
        pais.id === Number(id)
    )

  const destino =
    pais || destinoUsuario

  if (!destino) {
    return (
      <main className="destination-detail-page destination-not-found">

        <section className="destination-detail-container">

          <p className="destination-eyebrow">
            Travel Planner
          </p>

          <h1>
            Esse destino
            <br />
            não existe.
          </h1>

          <Link
            to="/destinos"
            className="destination-back-link"
          >
            <span>←</span>
            Voltar para o mapa
          </Link>

        </section>

      </main>
    )
  }

  if (destinoUsuario && !pais) {
    return (
      <main className="destination-detail-page">

        <section className="destination-detail-container">

          <Link
            to="/destinos"
            className="destination-back-link"
          >
            <span>←</span>
            Voltar para o mapa
          </Link>

          <header className="destination-detail-header">

            <p className="destination-eyebrow">
              {destino.continente}
            </p>

            <h1>
              {destino.cidade}
            </h1>

            <p className="destination-description">
              {destino.pais}
              {destino.informacoes?.localizacao
                ? ` · ${destino.informacoes.localizacao}`
                : ""}
            </p>

          </header>

          {destino.imagens?.length > 0 && (
            <section className="destination-user-hero">

              <img
                src={destino.imagens[0]}
                alt={destino.cidade}
              />

              <div className="destination-user-hero-caption">

                <span>
                  Meu destino
                </span>

                <p>
                  {destino.pais}
                </p>

              </div>

            </section>
          )}

          {destino.informacoes?.descricao && (
            <section className="destination-user-description">

              <p className="destination-content-label">
                Sobre o destino
              </p>

              <p>
                {destino.informacoes.descricao}
              </p>

            </section>
          )}

          {destino.experiencias?.length > 0 && (
            <section className="destination-references-section">

              <div className="destination-section-heading">

                <p className="destination-content-label">
                  Experiência
                </p>

                <h2>
                  Quero viver isso.
                </h2>

              </div>

              <div className="user-experience-grid">

                {destino.experiencias.map(
                  (experiencia) => (
                    <article
                      key={experiencia.id}
                      className="user-experience-card"
                    >

                      {experiencia.imagem && (
                        <div className="user-experience-image">

                          <img
                            src={experiencia.imagem}
                            alt={
                              experiencia.titulo ||
                              destino.cidade
                            }
                          />

                        </div>
                      )}

                      <div className="user-experience-content">

                        <p>
                          Experiência
                        </p>

                        {experiencia.titulo && (
                          <h3>
                            {experiencia.titulo}
                          </h3>
                        )}

                        {experiencia.texto && (
                          <span>
                            {experiencia.texto}
                          </span>
                        )}

                      </div>

                    </article>
                  )
                )}

              </div>

            </section>
          )}

          {destino.filme?.titulo && (
            <section className="destination-references-section">

              <div className="destination-section-heading">

                <p className="destination-content-label">
                  Referência pessoal
                </p>

                <h2>
                  O que representa este lugar.
                </h2>

              </div>

              <article className="destination-reference-card">

                <div className="destination-reference-film">

                  <div className="film-placeholder">

                    {destino.filme.imagem ? (
                      <img
                        src={destino.filme.imagem}
                        alt={`Pôster de ${destino.filme.titulo}`}
                      />
                    ) : (
                      <span>
                        FILME
                      </span>
                    )}

                  </div>

                  <div className="destination-reference-content">

                    <p className="destination-reference-type">
                      Referência cinematográfica
                    </p>

                    <h3>
                      {destino.filme.titulo}
                    </h3>

                    {destino.filme.ano && (
                      <span className="destination-film-year">
                        {destino.filme.ano}
                      </span>
                    )}

                    {destino.filme.descricao && (
                      <p className="destination-reference-synopsis">
                        {destino.filme.descricao}
                      </p>
                    )}

                    {destino.filme.relacaoComDestino && (
                      <p className="destination-reference-reason">
                        {destino.filme.relacaoComDestino}
                      </p>
                    )}

                  </div>

                </div>

              </article>

            </section>
          )}

        </section>

      </main>
    )
  }

  return (
    <main className="destination-detail-page">

      <section className="destination-detail-container">

        <Link
          to="/destinos"
          className="destination-back-link"
        >
          <span>←</span>
          Voltar para o mapa
        </Link>

        <header className="destination-detail-header">

          <p className="destination-eyebrow">
            {pais.continente}
          </p>

          <h1>
            {pais.nome}
          </h1>

          <p className="destination-description">
            Lugares que quero conhecer e experiências
            que quero viver em {pais.nome}.
          </p>

        </header>

        <section className="destination-places-section">

          <div className="destination-section-heading">

            <p className="destination-content-label">
              Lugares
            </p>

            <h2>
              Onde quero ir.
            </h2>

          </div>

          <div className="destination-places-grid">

            {pais.lugares.map(
              (lugar) => (
                <article
                  key={lugar.id}
                  className="destination-place-card"
                >

                  <div className="destination-place-image">

                    {lugar.imagem ? (
                      <img
                        src={lugar.imagem}
                        alt={lugar.nome}
                      />
                    ) : (
                      <div className="destination-no-image">
                        Sem imagem
                      </div>
                    )}

                    <div className="destination-place-image-overlay" />

                    <div className="destination-place-image-info">

                      <p>
                        {pais.nome}
                      </p>

                      <h3>
                        {lugar.nome}
                      </h3>

                    </div>

                  </div>

                  <div className="destination-place-content">

                    <p className="destination-content-label">
                      Quero viver isso
                    </p>

                    <div className="destination-experiences">

                      {lugar.experiencias?.map(
                        (
                          experiencia,
                          index
                        ) => {

                          const experienciaTexto =
                            typeof experiencia === "string"
                              ? experiencia
                              : experiencia.texto

                          const experienciaTitulo =
                            typeof experiencia === "string"
                              ? null
                              : experiencia.titulo

                          const experienciaImagem =
                            typeof experiencia === "string"
                              ? null
                              : experiencia.imagem

                          return (
                            <div
                              key={index}
                              className="destination-experience"
                            >

                              {experienciaImagem && (
                                <img
                                  src={experienciaImagem}
                                  alt={
                                    experienciaTitulo ||
                                    experienciaTexto
                                  }
                                />
                              )}

                              {experienciaTitulo && (
                                <h4>
                                  {experienciaTitulo}
                                </h4>
                              )}

                              <p>
                                {experienciaTexto}
                              </p>

                            </div>
                          )
                        }
                      )}

                    </div>

                  </div>

                </article>
              )
            )}

          </div>

        </section>

        {pais.referencias?.length > 0 && (
          <section className="destination-references-section">

            <div className="destination-section-heading">

              <p className="destination-content-label">
                Referência
              </p>

              <h2>
                O que representa este lugar.
              </h2>

            </div>

            <div className="destination-references">

              {pais.referencias.map(
                (
                  referencia,
                  index
                ) => {

                  const imagensReferencia =
                    referencia.imagens?.length > 0
                      ? referencia.imagens
                      : referencia.imagem
                        ? [referencia.imagem]
                        : []

                  return (
                    <article
                      key={index}
                      className="destination-reference-card"
                    >

                      {imagensReferencia.length > 0 && (
                        <div
                          className={
                            imagensReferencia.length === 1
                              ? "destination-reference-images single"
                              : "destination-reference-images"
                          }
                        >

                          {imagensReferencia.map(
                            (
                              imagem,
                              imagemIndex
                            ) => (
                              <img
                                key={imagemIndex}
                                src={imagem}
                                alt={`${referencia.titulo} - imagem ${imagemIndex + 1}`}
                              />
                            )
                          )}

                        </div>
                      )}

                      <div className="destination-reference-content">

                        <p className="destination-reference-type">
                          {referencia.tipo}
                        </p>

                        <h3>
                          {referencia.titulo}
                        </h3>

                        {referencia.sinopse && (
                          <p className="destination-reference-synopsis">
                            {referencia.sinopse}
                          </p>
                        )}

                        {referencia.motivo && (
                          <p className="destination-reference-reason">
                            {referencia.motivo}
                          </p>
                        )}

                      </div>

                    </article>
                  )
                }
              )}

            </div>

          </section>
        )}

      </section>

    </main>
  )
}

export default DestinoDetalhes