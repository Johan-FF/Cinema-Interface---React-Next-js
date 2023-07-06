import {Snack} from "../types/Interfaces"

export const snackAdapter = (response: any): Snack => {return {
    type: 'snack',
    id:response.data.id,
    name: response.data.name,
    price: response.data.price,
    url: response.data.url,
    count:0
  }
}

export const manyMultiplexAdapter = (response: any[]): Snack[] => {
    return response.map((item) => {
      return {
        type: 'snack',
        id:item.data.id,
        name: item.data.name,
        price: item.data.price,
        url: item.data.url,
        count:0
      };
    });
  };