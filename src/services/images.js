export async function buscarImagem(cidade, pais = "") {
  const cidadeNormalizada = cidade
    .trim()
    .toLowerCase()

  const termosBusca = [
    `${cidade} ${pais} skyline`,
    `${cidade} ${pais} cityscape`,
    `${cidade} ${pais} aerial view`,
    `${cidade} ${pais} panorama`,
    `${cidade} ${pais} city landmark`,
  ]

  console.log("Buscando imagens para:", cidade, pais)

  for (const termoBusca of termosBusca) {
    console.log("Tentando busca:", termoBusca)

    const resposta = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        termoBusca
      )}&per_page=10&orientation=landscape&size=large`,
      {
        headers: {
          Authorization:
            import.meta.env.VITE_PEXELS_API_KEY,
        },
      }
    )

    console.log(
      "Status Pexels:",
      resposta.status,
      "Busca:",
      termoBusca
    )

    if (!resposta.ok) {
      continue
    }

    const dados = await resposta.json()

    if (dados.photos && dados.photos.length > 0) {
      console.log(
        "Imagens encontradas:",
        dados.photos.length
      )

      return dados
    }
  }

  console.log(
    `Nenhuma imagem encontrada para ${cidadeNormalizada}`
  )

  return {
    photos: [],
  }
}