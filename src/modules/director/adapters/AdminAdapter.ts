import { Employee } from "@/app/types/Interfaces"

export const createAdminAdapter = (admin: Employee): any => {return {
    numberDocument: admin.identification,
    name: admin.name,
    dateBirth: admin.dateBirth,
    phone: admin.phoneNumber,
    email: admin.email,
    salary: admin.salary,
    dateContract: admin.startDate,
    idMultiplex: admin.multiplex,
    password: admin.password,
  }
}

export const getAdminsAdapter = (response: any[]): Employee[] => {
  return response.map((item) => {
    return {
      type: 'Administrador',
      id: item.idAdmin,
      identification: item.numberDocument,
      name: item.name,
      dateBirth: item.dateBirth,
      phoneNumber: item.phone,
      email: item.email,
      codeEmployee: item.codeEmployee,
      salary: item.salary,
      startDate: item.dateContract,
      multiplex: item.idMultiplex,
      password: '',
      conPassword:''
    }
  })
}
