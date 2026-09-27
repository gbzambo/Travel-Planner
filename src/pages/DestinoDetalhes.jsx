import { Link, useParams } from "react-router-dom"

import paises from "../data/paises"

function DestinoDetalhes() {
  const { id } = useParams()

  const pais = paises.find(
    (pais) => pais.id === Number(id)
  )

  if (!pais) {
    return (
      <main className="page">

        <div className="page-inner">

          <p className="eyebrow">
            Atlas
          </p>

          <h1 className="display-title display-title-lg mt-5">
            Destino não encontrado.
          </h1>

          <Link
            to="/destinos"
            className="back-link mt-10"
          >
            ← Voltar para destinos
          </Link>

        </div>

      </main>
    )
  }

  return (
    <main className="page">

      <div className="page-inner">

        <Link
          to="/destinos"
          className="back-link"
        >
          ← Voltar para destinos
        </Link>

        {/* HERO DO PAÍS */}

        <section className="country-hero">

          <p className="eyebrow">
            {pais.continente}
          </p>

          <h1 className="country-hero-title">
            {pais.nome}
          </h1>

          <p className="country-hero-description">
            Lugares que quero conhecer e experiências que
            quero viver em {pais.nome}.
          </p>

        </section>

        {/* LUGARES */}

        <section className="mt-28">

          <div className="section-heading">

            <div>
              <p className="eyebrow">
                Lugares
              </p>

              <h2 className="section-title">
                Onde quero ir.
              </h2>
            </div>

          </div>

          <div className="places-grid">

            {pais.lugares.map((lugar) => (

              <article
                key={lugar.id}
                className="place-card"
              >

                <div className="place-image-wrap">

                  {lugar.imagem ? (
                    <img
                      src={lugar.imagem}
                      alt={lugar.nome}
                      className="place-image"
                    />
                  ) : (
                    <div className="h-full bg-[#263a35]" />
                  )}

                  <div className="place-image-overlay" />

                  <div className="place-image-info">

                    <p className="place-country">
                      {pais.nome}
                    </p>

                    <h3 className="place-name">
                      {lugar.nome}
                    </h3>

                  </div>

                </div>

                {/* EXPERIÊNCIAS */}

                <div className="experience-section">

                  <p className="experience-label">
                    Quero viver isso
                  </p>

                  {lugar.experiencias?.map(
                    (experiencia, index) => {

                      const texto =
                        typeof experiencia === "string"
                          ? experiencia
                          : experiencia.texto

                      const titulo =
                        typeof experiencia === "string"
                          ? null
                          : experiencia.titulo

                      const imagem =
                        typeof experiencia === "string"
                          ? null
                          : experiencia.imagem

                      return (
                        <div
                          key={index}
                          className="experience-item"
                        >

                          {imagem && (
                            <img
                              src={imagem}
                              alt={titulo || texto}
                              className="experience-image"
                            />
                          )}

                          {titulo && (
                            <h4 className="experience-title">
                              {titulo}
                            </h4>
                          )}

                          <p className="experience-text">
                            {texto}
                          </p>

                        </div>
                      )
                    }
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* REFERÊNCIAS */}

        {pais.referencias?.length > 0 && (

          <section className="reference-section">

            <div className="section-heading">

              <div>

                <p className="eyebrow">
                  Cinema · Memória · Atmosfera
                </p>

                <h2 className="section-title">
                  Referências.
                </h2>

              </div>

            </div>

            <div className="space-y-8">

              {pais.referencias.map(
                (referencia, index) => {

                  const imagens =
                    referencia.imagens?.length > 0
                      ? referencia.imagens
                      : referencia.imagem
                        ? [referencia.imagem]
                        : []

                  const multiple =
                    imagens.length > 1

                  return (
                    <article
                      key={index}
                      className="reference-card"
                    >

                      {imagens.length > 0 && (

                        <div
                          className={
                            multiple
                              ? "reference-gallery multiple"
                              : "reference-gallery single"
                          }
                        >

                          {imagens.map(
                            (imagem, imagemIndex) => (

                              <img
                                key={imagemIndex}
                                src={imagem}
                                alt={`${referencia.titulo} - imagem ${imagemIndex + 1}`}
                                className="reference-image"
                              />

                            )
                          )}

                        </div>

                      )}

                      <div className="reference-content">

                        <p className="reference-type">
                          {referencia.tipo}
                        </p>

                        <h3 className="reference-title">
                          {referencia.titulo}
                        </h3>

                        {referencia.sinopse && (
                          <p className="reference-description">
                            {referencia.sinopse}
                          </p>
                        )}

                        {referencia.motivo && (
                          <p className="reference-reason">
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

      </div>

    </main>
  )
}

export default DestinoDetalhes