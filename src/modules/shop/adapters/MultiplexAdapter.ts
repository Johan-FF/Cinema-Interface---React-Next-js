import {Multiplex } from "../types/Interfaces"

export const multiplexAdapter = (response: any): Multiplex => {return {
    type: 'multiplex',
    id:response.data.id,
    name: response.data.name
  }
}

export const manyMultiplexAdapter = (response: any[]): Multiplex[] => {
    return response.map((item) => {
      return {
        type: 'movie',
        id:item.data.id,
        name: item.data.name
      };
    });
  };