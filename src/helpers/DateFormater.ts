
// '12-45-00'
export const completeHourFormater = (hour: string, minute: string) => hour+'-'+minute+'-00' 
// ['12','45','00']
export const divideHourFormater = (schedule: string) => schedule.split('-')