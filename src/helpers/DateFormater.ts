import { Snack } from "../modules/shop/types/Interfaces"

// '12-45-00'
export const completeHourFormater = (hour: string, minute: string) => hour+':'+minute+':00' 

// ['12','45','00']
export const divideHourFormater = (schedule: string) => schedule.split(':')

export const divideChairFormater = (chairs: string) => chairs.split(',')

export const splitByComma = (hours: string) => {
  return hours.split(",").map((timeString) => {
    const [hours, minutes] = timeString.split("-").slice(0, 2)
    return `${hours}:${minutes}`
  })
}

export const productFormater = (products: Snack[]) => {
  return products.map(value => {
    return {
      idSnack: value.id,
      quantitySnack: (value.count).toString()
    }
  })
}