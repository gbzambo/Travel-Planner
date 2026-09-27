import { useEffect, useState } from "react"

import paises from "../data/paises"
import { buscarDestinos } from "../services/destinos"

import WorldMap from "../components/WorldMap"

function Destinos() {
  const [destinosUsuario, setDestinosUsuario] = useState([])

  useEffect(() => {
    setDestinosUsuario(buscarDestinos())
  }, [])

  return (
    <main className="destinations-page">
      <WorldMap
        paises={paises}
        destinosUsuario={destinosUsuario}
      />
    </main>
  )
}

export default Destinos