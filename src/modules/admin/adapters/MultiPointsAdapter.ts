import { MultiplexPoints} from "../types/Interfaces"

export const createMultiplexPointsAdapter = (points: MultiplexPoints): any => {return {
    point_ticket: points.pointsTicket,
    point_snack: points.pointsSnack
  }
}
export const getMultiplexPointsAdapter = (response: any[]): MultiplexPoints[] => {
  return response.map((item) => {
    return {
        type: "multiplexPoints",
        pointsTicket:item.point_ticket, 
        pointsSnack:item.point_snack 
    }
  })
}
