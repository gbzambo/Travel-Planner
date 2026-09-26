import { getCountryData } from "countries-list"

export function buscarContinente(codigoPais) {
  const pais = getCountryData(codigoPais)

  if (!pais) {
    return ""
  }

  return pais.continent
}