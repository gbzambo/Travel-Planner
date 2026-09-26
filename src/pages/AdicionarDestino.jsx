import { useState } from "react"

import { buscarCidade } from "../services/geocoding"
import { buscarContinente } from "../services/countries"

function AdicionarDestino() {
  const [cidadeDigitada, setCidadeDigitada] = useState("")

  const [pais, setPais] = useState("")
  const [continente, setContinente] = useState("")
  const [regiao, setRegiao] = useState("")

  // Dados usados futuramente pelo mapa
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const [destinoEncontrado, setDestinoEncontrado] = useState(false)

  async function buscarDestino() {
    if (!cidadeDigitada.trim()) {
      return
    }

    const dados = await buscarCidade(cidadeDigitada)

    if (!dados.results || dados.results.length === 0) {
      console.log("Cidade não encontrada.")
      setDestinoEncontrado(false)
      return
    }

    const cidade = dados.results[0]

    const continenteEncontrado = buscarContinente(
      cidade.country_code
    )

    setCidadeDigitada(cidade.name)
    setPais(cidade.country)
    setContinente(continenteEncontrado)
    setRegiao(cidade.admin1)

    setLatitude(cidade.latitude)
    setLongitude(cidade.longitude)

    setDestinoEncontrado(true)

    console.log("Cidade:", cidade.name)
    console.log("País:", cidade.country)
    console.log("Continente:", continenteEncontrado)
    console.log("Região:", cidade.admin1)
    console.log("Latitude:", cidade.latitude)
    console.log("Longitude:", cidade.longitude)
  }

  return (
    <main className="min-h-screen bg-[#e8f0ed] px-8 py-16">
      <section className="mx-auto max-w-4xl">

        {/* Cabeçalho */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Travel Planner
          </p>

          <h1 className="mt-4 text-6xl font-medium tracking-[-0.04em] text-gray-900">
            Adicionar destino
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Adicione um lugar que você quer conhecer e conte o que
            gostaria de viver nesse destino.
          </p>
        </div>

        {/* Informações básicas */}
        <section className="mb-20">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Informações básicas
            </p>

            <h2 className="mt-2 text-3xl font-medium text-gray-900">
              Sobre o destino
            </h2>
          </div>

          <div className="space-y-8">

            {/* Cidade */}
            <div>
              <label className="text-sm text-gray-500">
                Cidade
              </label>

              <input
                type="text"
                value={cidadeDigitada}
                onChange={(event) => {
                  setCidadeDigitada(event.target.value)
                  setDestinoEncontrado(false)
                }}
                placeholder="Ex: Paris"
                className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-gray-900"
              />
            </div>

            {/* Dados encontrados */}
            {destinoEncontrado && (
              <>
                {/* País */}
                <div>
                  <label className="text-sm text-gray-500">
                    País
                  </label>

                  <input
                    type="text"
                    value={pais}
                    readOnly
                    className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 text-lg outline-none"
                  />
                </div>

                {/* Continente */}
                <div>
                  <label className="text-sm text-gray-500">
                    Continente
                  </label>

                  <input
                    type="text"
                    value={continente}
                    readOnly
                    className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 text-lg outline-none"
                  />
                </div>

                {/* Região */}
                <div>
                  <label className="text-sm text-gray-500">
                    Localização / Região
                  </label>

                  <input
                    type="text"
                    value={regiao}
                    readOnly
                    className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 text-lg outline-none"
                  />
                </div>

                {/* Descrição */}
                <div>
                  <label className="text-sm text-gray-500">
                    Descrição
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Conte um pouco sobre esse destino."
                    className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-gray-900"
                  />
                </div>
              </>
            )}

          </div>

          {/* Buscar destino */}
          <button
            type="button"
            onClick={buscarDestino}
            className="mt-10 border-b border-gray-900 pb-2 text-sm font-medium text-gray-900 transition-opacity hover:opacity-50"
          >
            Buscar destino →
          </button>

        </section>

        {/* Quero viver isso */}
        <section className="mb-20">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Experiência
            </p>

            <h2 className="mt-2 text-3xl font-medium text-gray-900">
              Quero viver isso.
            </h2>
          </div>

          <div className="space-y-8">

            <div>
              <label className="text-sm text-gray-500">
                Título da experiência
              </label>

              <input
                type="text"
                placeholder="Ex: Caminhar por Paris de manhã"
                className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-gray-900"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Descrição da experiência
              </label>

              <textarea
                rows="4"
                placeholder="O que você gostaria de viver nesse lugar?"
                className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-gray-900"
              />
            </div>

          </div>

        </section>

        {/* Filme */}
        <section className="mb-20">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Filme
            </p>

            <h2 className="mt-2 text-3xl font-medium text-gray-900">
              Um filme que representa o destino.
            </h2>
          </div>

          <div className="space-y-8">

            <div>
              <label className="text-sm text-gray-500">
                Título do filme
              </label>

              <input
                type="text"
                placeholder="Ex: Meia-Noite em Paris"
                className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-gray-900"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Ano
              </label>

              <input
                type="number"
                placeholder="Ex: 2011"
                className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-gray-900"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Por que esse filme representa o destino?
              </label>

              <textarea
                rows="5"
                placeholder="Explique a relação entre o filme e o lugar."
                className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent py-3 text-lg outline-none transition-colors focus:border-gray-900"
              />
            </div>

          </div>

        </section>

        {/* Botão final */}
        <button
          type="button"
          className="border-b border-gray-900 pb-2 text-sm font-medium text-gray-900 transition-opacity hover:opacity-50"
        >
          Adicionar destino →
        </button>

      </section>
    </main>
  )
}

export default AdicionarDestino