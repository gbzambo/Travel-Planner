export async function buscarCidade(nomeCidade) {
  const resposta = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      nomeCidade
    )}&count=1&language=pt&format=json`
  )

  const dados = await resposta.json()

  return dados
}