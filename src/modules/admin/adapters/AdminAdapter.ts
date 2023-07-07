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

export const adminsAdapter = (response: any[]): Employee[] => {
  return response.map((item) => {
    return {
      type: 'employee',
      id: item.data.id,
      name: item.data.name,
      position: item.data.position,
      phoneNumber: item.data.phoneNumber,
      identification: item.data.identification,
      startDate: item.data.startDate,
      salary: item.data.salary,
      multiple: item.data.multiple,
    };
  });
};

