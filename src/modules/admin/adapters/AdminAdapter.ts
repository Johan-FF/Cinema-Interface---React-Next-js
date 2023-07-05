import { Employee } from "../types/Interfaces"

export const adminAdapter = (response: any): Employee => {return {
    type: 'employee',
    id: response.data.id,
    name: response.data.name,
    position: response.data.position,
    phoneNumber: response.data.phoneNumber,
    identification: response.data.identification,
    startDate: response.data.startDate,
    salary: response.data.salary,
    multiple: response.data.multiple
  }
}