import { Multiplex } from "../modules/director/types/Interfaces"
import { MultiplexPoints } from "../modules/multiplex/types/Interfaces"

export const createMultiplexAdapter = (multiplex:Multiplex): any => {return {
    name:multiplex.name,
    numSala: multiplex.numSala,
    pointSnack: multiplex.pointSnack,
    pointTicket: multiplex.pointTicket
  }
}

export const getMultiplexAdapter = (response: any[]): Multiplex[] => {
    return response.map((item) => {
      return {
        type: 'Multiplex',
        id:item.id,
        name: item.name,
        numSala: item.numSala,
        pointSnack: item.pointSnack,
        pointTicket: item.pointTicket
      }
    })
  }

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