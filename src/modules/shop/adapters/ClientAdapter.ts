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

export const getClientsAdapter = (response: any[]): Client[] => {
  return response.map((item) => {
    return {
      type: 'client',
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