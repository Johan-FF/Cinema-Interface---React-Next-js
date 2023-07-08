import { Employee } from "@/app/types/Interfaces"

export const createAdminAdapter = (admin: Employee): any => {return {
    number_document: admin.identification,
    name: admin.name,
    date_birth: admin.dateBirth,
    phone: admin.phoneNumber,
    email: admin.email,
    salary: admin.salary,
    date_contract: admin.startDate,
    multiplex: admin.multiplex,
    password: admin.password,
  }
}

export const getAdminsAdapter = (response: any[]): Employee[] => {
  return response.map((item) => {
    return {
      type: 'Administrador',
      id: item.id,
      identification: item.number_document,
      name: item.name,
      dateBirth: item.date_birth,
      phoneNumber: item.phone,
      email: item.email,
      codeEmployee: item.code_employee,
      salary: item.salary,
      startDate: item.date_contract,
      multiplex: item.multiplex,
      password: item.password,
      conPassword:''
    }
  })
}
