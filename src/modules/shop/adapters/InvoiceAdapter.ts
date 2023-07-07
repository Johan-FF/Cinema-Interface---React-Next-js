import {Invoice} from "../types/Interfaces"

export const invoiceAdapter = (response: any): Invoice => {return {
    type: 'invoice',
    id:response.data.id,
    chairGeneral: response.data.chair_general,
    chairPreferential: response.data.chair_preferential,
    idClient: response.data.id_client,
    snacks:response.data.snacks
  }
}

export const manyMultiplexAdapter = (response: any[]): Invoice[] => {
    return response.map((item) => {
      return {
        type: 'invoice',
        id:item.data.id,
        chairGeneral: item.data.chair_general,
        chairPreferential: item.data.chair_preferential,
        idClient: item.data.id_client,
        snacks:item.data.snacks
      };
    });
  };