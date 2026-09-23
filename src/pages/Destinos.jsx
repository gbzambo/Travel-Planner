import { Link } from "react-router-dom"
import destinos from "../data/destinos"

function Destinos() {
  return (
    <main className="min-h-screen bg-[#e8f0ed] px-8 py-16">
      <section className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Destinos
          </p>

          <h1 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-[-0.04em] text-gray-900">
            Lugares que fazem parte da minha viagem.
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {destinos.map((destino) => (
            <Link
              key={destino.id}
              to={`/destinos/${destino.id}`}
              className="group overflow-hidden rounded-[2rem] bg-white"
            >
              <img
                src={destino.imagens[0]}
                alt={destino.cidade}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-6">

                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  {destino.continente}
                </p>

                <h2 className="mt-2 text-3xl font-medium text-gray-900">
                  {destino.cidade}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {destino.pais}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  {destino.informacoes.descricao}
                </p>

                <p className="mt-6 text-sm font-medium text-gray-900">
                  Explorar destino →
                </p>

              </div>
            </Link>
          ))}

        </div>

      </section>
    </main>
  )
}

export default Destinos