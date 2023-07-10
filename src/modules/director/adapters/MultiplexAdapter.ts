import { Multiplex } from "../types/Interfaces";

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
      };
    });
  };