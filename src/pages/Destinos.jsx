import { Link } from "react-router-dom"

import paises from "../data/paises"

function Destinos() {
  return (
    <main className="page">

      <div className="page-inner">

        <section className="mb-24">

          <p className="eyebrow">
            Atlas · Destinos
          </p>

          <h1 className="display-title display-title-lg mt-5">
            O mundo que
            <br />
            quero conhecer.
          </h1>

          <p className="body-text mt-8 max-w-2xl text-base">
            Países, cidades e lugares que quero conhecer,
            cada um associado a experiências e referências
            pessoais diferentes.
          </p>

        </section>

        <section>

          <div className="section-heading">

            <div>
              <p className="eyebrow">
                Continentes
              </p>

              <h2 className="section-title">
                Meus destinos.
              </h2>
            </div>

            <p className="hidden text-xs uppercase tracking-[0.18em] text-white/40 md:block">
              {paises.length} países
            </p>

          </div>

          <div className="destinations-grid">

            {paises.map((pais, index) => {

              const lugarPrincipal = pais.lugares?.[0]

              return (
                <Link
                  key={pais.id}
                  to={`/destinos/${pais.id}`}
                  className="country-card"
                >

                  {lugarPrincipal?.imagem && (
                    <img
                      src={lugarPrincipal.imagem}
                      alt={pais.nome}
                      className="country-card-image"
                    />
                  )}

                  <div className="country-card-content">

                    <p className="country-number">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="country-name">
                      {pais.nome}
                    </h2>

                    <div className="country-meta">

                      <span>
                        {pais.continente}
                      </span>

                      <span>
                        {pais.lugares.length}{" "}
                        {pais.lugares.length === 1
                          ? "lugar"
                          : "lugares"}
                      </span>

                    </div>

                  </div>

                  <span className="country-arrow">
                    →
                  </span>

                </Link>
              )
            })}

          </div>

        </section>

      </div>

    </main>
  )
}

export default Destinos