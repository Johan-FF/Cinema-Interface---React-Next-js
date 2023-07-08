import { Snack } from "../types/Interfaces"

export const getSnacksAdapter = (response: any[]): Snack[] => {
  return response.map((item) => {
    return {
      type: 'Comida',
      id: item.id,
      name: item.name,
      price: item.price,
      url: item.url,
      count: 0
    }
  })
}