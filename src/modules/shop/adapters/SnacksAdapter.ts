import {Snack} from "../types/Interfaces"

export const createSnackAdapter = (snack:Snack): any => {return {
    name: snack.name,
    price: snack.price,
    url: snack.url,
    count:0
  }
}

export const getSnacksAdapter = (response: any[]): Snack[] => {
    return response.map((item) => {
      return {
        type: 'snack',
        id:item.id,
        name: item.name,
        price: item.price,
        url: item.url,
        count:0
      };
    });
  };