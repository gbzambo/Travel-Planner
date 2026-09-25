import { Link } from "react-router-dom"
import destinos from "../data/destinos"

function Home() {
  const destino = destinos[0]

  return (
    <main className="min-h-[calc(100vh-88px)] bg-[#e8f0ed] px-8 py-16">
      <section className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Travel Planner
          </p>

          <h1 className="max-w-2xl text-6xl font-medium leading-[0.95] tracking-[-0.04em] text-gray-900 md:text-7xl">
            Lugares que eu quero conhecer.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-600">
            Um mapa pessoal de lugares, filmes e experiências
            que fazem cada destino ter um significado.
          </p>

          <Link
            to="/destinos"
            className="mt-10 inline-flex items-center gap-3 border-b border-gray-900 pb-2 text-sm font-medium text-gray-900 transition-opacity hover:opacity-50"
          >
            Explorar destinos
            <span>→</span>
          </Link>
        </div>

        <div className="relative h-[520px] overflow-hidden rounded-[2rem]">
          <img
            src={destino.imagens[0]}
            alt={destino.cidade}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.25em]">
              Destino em destaque
            </p>

            <h2 className="mt-2 text-4xl font-medium">
              {destino.cidade}
            </h2>

            <p className="mt-1 text-sm text-white/80">
              {destino.pais} · {destino.continente}
            </p>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Home