import { Client } from "../types/Interfaces"

export const createClientAdapter = (client: Client): any => {return {
    numberDocument: client.identification,
    name: client.name,
    dateBirth: client.dateBirth,
    phone: client.phoneNumber,
    email: client.email,
  }
}

export const getClientsAdapter = (response: any[]): Client[] => {
  return response.map((item) => {
    return {
      type: 'Cliente',
      id: item.id,
      name: item.name,
      dateBirth: item.date_birth,
      email: item.email,
      identification: item.number_document,
      phoneNumber: item.phone,
      ratingCinema: item.rating_cinepacho,
      salaryPoints: item.salaryPoints
    };
  });
};