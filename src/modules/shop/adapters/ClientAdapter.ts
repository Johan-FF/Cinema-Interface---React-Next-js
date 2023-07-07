import { Client } from "../types/Interfaces"

export const createClientAdapter = (client: Client): any => {return {
    number_document: client.identification,
    name: client.name,
    date_birth: client.dateBirth,
    phone: client.phoneNumber,
    email: client.email,
    rating_cinepacho: client.ratingCinema,
    salaryPoints: client.salaryPoints,
  }
}

export const manyMultiplexAdapter = (response: any[]): Client[] => {
  return response.map((item) => {
    return {
      type: 'client',
      id: item.data.id,
      name: item.data.name,
      numSala: item.data.num_sala,
      pointSnack: item.data.point_snack,
      pointTicket: item.data.point_ticket
    };
  });
};