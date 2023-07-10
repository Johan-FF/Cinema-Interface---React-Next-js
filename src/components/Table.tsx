'use client'

import { tableProps } from "../types/Props"

export default function Table({ filteredData, headers }: tableProps ) {

  return (
    <table className="size-all rounded-lg bg-secondary">
      <thead>
        <tr >
          {headers.map((value, index) => {
              return (
                <th className="px-3" key={index}>{value}</th>
              )
          })}
        </tr>
      </thead>
      <tbody className="h-full">
        {filteredData.map((item, index) => (
          <tr className="bg-secondary-opacity hover:bg-tertiary-opacity p-1" key={index}>
            {Object.values(item).map((value, key) => {
              return (
                <td className="text-center p-1 rounded-xl border-2 border-primary "
                  key={key}> {value} </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table >
  )
}