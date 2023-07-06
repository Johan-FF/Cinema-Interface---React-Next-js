import {Snack} from "../types/Interfaces"

export const multiplexAdapter = (response: any): Snack => {return {
    type: 'snack',
    id:response.data.id,
    name: response.data.name,
    price: response.data.price,
    url: response.data.url
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