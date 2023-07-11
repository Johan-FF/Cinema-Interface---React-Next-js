'use client'

import { useEffect, useState } from "react"
import Chair from "./Chair"
import { getChairsOccupiedProxy } from "@/app/services/MoviesService"
import { useClient } from "../hooks/useClient"
import { useCart } from "../hooks/useCart"
import Account from "@/app/services/Account"
import { divideChairFormater, divideDayFormater, divideHourFormater } from "@/app/helpers/DateFormater"

const getList = (max: number) => {
  let list = []
  for(let i=1; i<=max; i++)
    list.push(i)
  return list
}
const rowLimit: number[] = getList(10)
const preferencial: number[] = getList(20)
const general: number[] = getList(40)
const rowCode: string[] = ['F','E','D','C','B','A']

export default function Cinema() {
  const { schedule, day } = useClient()
  const { movie } = useCart()
  const [generalOccupied, setGeneralOccupied] = useState<string[]>([])
  const [preferentialOccupied, setPreferentialOccupied] = useState<string[]>([])

  useEffect(() => {
    const idMultiplex = Account.getInstance().getIDMultiplex()
    async function fetch() {
      const dayFormated = divideDayFormater(day)
      await getChairsOccupiedProxy(movie.id, idMultiplex, dayFormated, schedule)
        .then(response => {
          setGeneralOccupied(divideChairFormater(response.chairGeneral))
          setPreferentialOccupied(divideChairFormater(response.chairPreferential))
        })
    }
    fetch()
  }, [schedule])

  return (
    <div className="size-all md:w-[70%] pr-3 flex flex-col justify-evenly items-center shadow-big bg-secondary-opacity">
      <h3 className="font-bold text-5xl w-[100%] text-center border-b-2 text-primary mb-10 shadow-big py-2 ml-3">Sala 2</h3>
      <div className="h-[60%] w-[100%] flex">
        <span className="flex flex-col justify-between h-[100%] w-[10%] pt-[8%] pb-[2%]">
          {
            rowCode.map((value, index) => {
              return(
                <span key={index+value} className="w-[100%] h-[9%] flex-center font-bold text-primary">{value}</span>
              )
            })
          }
        </span>
        <div className="h-[100%] w-[90%] flex flex-col">
          <span className="flex justify-between w-[100%] h-[10%]">
            {
              rowLimit.map((value, index) => {
                return (
                  <span key={index+value*10} className="w-[10%] flex justify-center text-primary font-bold">{value}</span>
                )
              })
            }
          </span>
          <span className="size-all ">
            {
              preferencial.map(value => {
                return (
                  <Chair 
                    key={value}
                    id={value.toString()}
                    isGeneral={false}
                    chairs={generalOccupied}
                  />
                )
              })
            }
            {
              general.map(value => {
                return (
                  <Chair
                    key={value*50}
                    id={value.toString()}
                    isGeneral={true}
                    chairs={preferentialOccupied}
                  />
                )
              })
            }
          </span>
        </div>
      </div>
      <span className="h-[5%] w-[80%] shadow-big bg-tertiary-opacity mt-5"></span>
    </div>
  )
}