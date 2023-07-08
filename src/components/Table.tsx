'use client'

import { tableProps } from "../../admin/types/Props"

export default function Table({ filteredData, headers }: tableProps ) {

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