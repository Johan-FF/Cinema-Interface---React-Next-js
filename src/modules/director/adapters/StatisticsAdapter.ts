import { StatisticsMovie, StatisticsSales } from "../types/Interfaces"

export const getStatisticsMovieAdapter = (response: any[]): StatisticsMovie[] => {
  return response.map((item) => {
    return {
      type: 'Estadísticas',
      movie: item.movie,
      qualification: item.qualification
    }
  })
}

export const getStatisticsSalesAdapter = (response: any[]): StatisticsSales[] => {
    return response.map((item) => {
        return {
        type: 'Estadísticas',
        multiplex: item.multiplex,
        sales: item.sales
      }
    })
  }