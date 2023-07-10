import { MultiplexPoints} from "../types/Interfaces"

export const updateMultiplexPointsAdapter = (points: MultiplexPoints): any => {return {
    pointTicket: points.pointsTicket,
    pointSnack: points.pointsSnack
  }
}
export const getMultiplexPointsAdapter = (response: any): MultiplexPoints => {
  return ({
        type: "Puntos",
        pointsTicket:response.pointTicket, 
        pointsSnack:response.pointSnack 
    })
}
