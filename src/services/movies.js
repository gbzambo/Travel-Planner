const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function buscarFilme(titulo, ano = "") {
  if (!titulo.trim()) {
    return null
  }

  const parametros = new URLSearchParams({
    api_key: API_KEY,
    query: titulo,
    language: "pt-BR",
    include_adult: "false",
  })

  if (ano) {
    parametros.set("year", ano)
  }

  const resposta = await fetch(
    `https://api.themoviedb.org/3/search/movie?${parametros.toString()}`
  )

  if (!resposta.ok) {
    const erro = await resposta.text()

    console.error(
      "Erro TMDB:",
      resposta.status,
      erro
    )

    throw new Error(
      "Não foi possível buscar o filme."
    )
  }

  const dados = await resposta.json()

  if (
    !dados.results ||
    dados.results.length === 0
  ) {
    return null
  }

  const filme = dados.results[0]

  return {
    id: filme.id,
    titulo: filme.title,
    ano: filme.release_date
      ? Number(filme.release_date.slice(0, 4))
      : null,
    imagem: filme.poster_path
      ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
      : "",
    descricao: filme.overview || "",
  }
}