import { Multiplex } from "../types/Interfaces";

export const createMultiplexAdapter = (multiplex:Multiplex): any => {return {
    name:multiplex.name,
    num_sala: multiplex.numSala,
    point_snack: multiplex.pointSnack,
    point_ticket: multiplex.pointTicket
  }
}

export const getMultiplexAdapter = (response: any[]): Multiplex[] => {
    return response.map((item) => {
      return {
        type: 'multiplex',
        id:item.id,
        name: item.name,
        numSala: item.num_sala,
        pointSnack: item.point_snack,
        pointTicket: item.point_ticket
      };
    });
  };