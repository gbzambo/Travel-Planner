const CHAVE_DESTINOS = "travel-planner-destinos"

export function buscarDestinos() {
  const destinosSalvos = localStorage.getItem(CHAVE_DESTINOS)

  if (!destinosSalvos) {
    return []
  }

  try {
    return JSON.parse(destinosSalvos)
  } catch {
    return []
  }
}

export function salvarDestino(destino) {
  const destinosAtuais = buscarDestinos()

  const novosDestinos = [
    ...destinosAtuais,
    destino,
  ]

  localStorage.setItem(
    CHAVE_DESTINOS,
    JSON.stringify(novosDestinos)
  )
}