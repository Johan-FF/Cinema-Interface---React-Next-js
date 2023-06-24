import { tables } from "@/app/types/data/TableData"

interface props {
  searchTerm: string,
}

export default function Table({ searchTerm }: props ) {
  const headers: string[] = ['Rol', 'Código', 'Cédula', 'Cargo', 'Nombre', 'Número de telefono', 'Fecha inicio de contrato', 'Salario', 'Múltiple']

  const filteredData = tables.users.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.multiple.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.identification.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <table className="rounded-lg bg-secondary">
      <thead>
        <tr>
          {headers.map((value, index) => {
              return (
                <th key={index}>{value}</th>
              )
          })}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr className="bg-secondary-opacity hover:bg-tertiary-opacity p-1" key={index}>
            {Object.values(item).map((value, key) => {
              return (
                <td className="text-center p-1 rounded-xl border-2 border-primary"
                  key={key}> {value} </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table >
  )
}