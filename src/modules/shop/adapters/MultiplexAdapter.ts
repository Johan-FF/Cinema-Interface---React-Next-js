import {Multiplex } from "../types/Interfaces"

export const multiplexAdapter = (response: any): Multiplex => {return {
    type: 'multiplex',
    id:response.data.id,
    name: response.data.name,
    numSala: response.data.num_sala,
    pointSnack: response.data.point_snack,
    pointTicket: response.data.point_ticket
  }
}

export const manyMultiplexAdapter = (response: any[]): Multiplex[] => {
    return response.map((item) => {
      return {
        type: 'multiplex',
        id:item.data.id,
        name: item.data.name,
        numSala: item.data.num_sala,
        pointSnack: item.data.point_snack,
        pointTicket: item.data.point_ticket
      };
    });
  };