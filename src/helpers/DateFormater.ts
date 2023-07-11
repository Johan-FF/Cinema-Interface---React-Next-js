import { Snack } from "../modules/shop/types/Interfaces"

// '12-45-00'
export const completeHourFormater = (hour: string, minute: string) => hour+':'+minute+':00' 

// ['12','45','00']
export const divideHourFormater = (schedule: string) => schedule.split(':')

export const divideChairFormater = (chairs: string) => chairs.split(',')

export const divideDayFormater = (day: string) => {
  const listDay = day.split('/')
  return listDay[0]+"-"+listDay[1]+"-"+listDay[2]
}

export const splitByComma = (hours: string) => {
  return hours.split(",").map((timeString) => {
    const [hours, minutes] = timeString.split(":").slice(0, 2)
    return `${hours}:${minutes}:00`
  })
}

export const initChairsFormater = (chairs: string[]) => {
  let result: string = ''
  chairs.map(chair => {
    result+=chair+","
  })
  return result
}

export const productFormater = (products: Snack[]) => {
  return products.map(value => {
    return {
      idSnack: value.id,
      quantitySnack: (value.count).toString()
    }
  })
}