import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import destinos from "../data/destinos"
import { buscarDestinos } from "../services/destinos"

function DestinoDetalhes() {
  const { id } = useParams()
  const [destino, setDestino] = useState(null)

  useEffect(() => {
    const destinosSalvos = buscarDestinos()

    const todosOsDestinos = [
      ...destinos,
      ...destinosSalvos,
    ]

    const destinoEncontrado = todosOsDestinos.find(
      (destino) => destino.id === Number(id)
    )

    setDestino(destinoEncontrado)
  }, [id])

  if (!destino) {
    return (
      <main className="min-h-screen bg-[#e8f0ed] px-8 py-16">
        <section className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Destino não encontrado
          </p>

          <h1 className="mt-4 text-6xl font-medium tracking-[-0.04em] text-gray-900">
            Esse destino não existe.
          </h1>

          <Link
            to="/destinos"
            className="mt-8 inline-flex items-center gap-2 border-b border-gray-900 pb-2 text-sm font-medium text-gray-900"
          >
            <span>←</span>
            Voltar para destinos
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#e8f0ed] px-8 py-16">
      <section className="mx-auto max-w-7xl">
        <Link
          to="/destinos"
          className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          <span>←</span>
          Voltar para destinos
        </Link>

        {/* Cabeçalho */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            {destino.continente} · {destino.pais}
          </p>

          <h1 className="mt-4 text-7xl font-medium leading-none tracking-[-0.04em] text-gray-900">
            {destino.cidade}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            {destino.informacoes.descricao}
          </p>
        </div>

        {/* Imagem principal */}
        <div className="h-[600px] overflow-hidden rounded-[2rem]">
          <img
            src={
              destino.imagemOriginal ||
              destino.imagens[0]
            }
            alt={destino.cidade}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Informações do destino */}
        <section className="mt-20 grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Localização
            </p>

            <p className="mt-3 text-xl text-gray-900">
              {destino.informacoes.localizacao}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              País
            </p>

            <p className="mt-3 text-xl text-gray-900">
              {destino.pais}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Clima
            </p>

            <p className="mt-3 text-xl text-gray-900">
              {destino.informacoes.clima}
            </p>
          </div>
        </section>

        {/* Filme */}
        <section className="mt-32">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Um filme que representa o destino
            </p>

            <h2 className="mt-3 text-5xl font-medium tracking-[-0.03em] text-gray-900">
              {destino.filme.titulo}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={destino.filme.imagem}
                alt={destino.filme.titulo}
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                {destino.filme.ano}
              </p>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {destino.filme.descricao}
              </p>

              <p className="mt-8 text-lg leading-relaxed text-gray-900">
                {destino.filme.relacaoComDestino}
              </p>
            </div>
          </div>
        </section>

        {/* Experiências */}
        <section className="mt-32">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Experiências
            </p>

            <h2 className="mt-3 text-5xl font-medium tracking-[-0.03em] text-gray-900">
              Quero viver isso.
            </h2>
          </div>

          <div className="space-y-16">
            {destino.experiencias.map((experiencia) => (
              <article
                key={experiencia.id}
                className="grid gap-10 md:grid-cols-2 md:items-center"
              >
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={experiencia.imagem}
                    alt={experiencia.titulo}
                    className="h-[450px] w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-4xl font-medium tracking-[-0.03em] text-gray-900">
                    {experiencia.titulo}
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                    {experiencia.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default DestinoDetalhes

