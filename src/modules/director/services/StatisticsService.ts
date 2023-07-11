import { get, generateAuthHeader } from "@/app/services/HttpService"
import { API_URL_MULTIPLEX } from "@/app/environment"
import { getStatisticsMovieAdapter, getStatisticsSalesAdapter } from "../adapters/StatisticsAdapter"

// Operación GET para obtener todos los administradores
async function getStatisticsMovie(): Promise<any[]> {
  const url = `${API_URL_MULTIPLEX}/statistics/movie`
  return get(url,generateAuthHeader())
}
export async function getStatisticsMovieProxy(): Promise<any[]> {
  let list: any = []
  await getStatisticsMovie()
    .then(response => {
      console.log("estadisticas:",response)
      list = getStatisticsMovieAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (statisticsMovie): ${error}`)
    })
  return list
}

// Operación GET para obtener todos los administradores
async function getStatisticsSales(): Promise<any[]> {
    const url = `${API_URL_MULTIPLEX}/statistics/sales`
    return get(url,generateAuthHeader())
  }
  export async function getStatisticsSalesProxy(): Promise<any[]> {
    let list: any = []
    await getStatisticsSales()
      .then(response => {
        list = getStatisticsSalesAdapter(response)
      })
      .catch(error => {
        throw new Error(`Error request (statisticsSales): ${error}`)
      })
    return list
  }
  