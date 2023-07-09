
// '12-45-00'
export const completeHourFormater = (hour: string, minute: string) => hour+'-'+minute+'-00' 

// ['12','45','00']
export const divideHourFormater = (schedule: string) => schedule.split('-')

export const splitByComma = (hours: string) => {
  return hours.split(",").map((timeString) => {
    const [hours, minutes] = timeString.split("-").slice(0, 2)
    return `${hours}:${minutes}`
  })
}