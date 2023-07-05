'use client'

import BlueButton from "@/app/components/BlueButton"
import RedButton from "@/app/components/RedButton"
import { tableLayoutProps } from "../types/Props"

export default function TableLayout({type,children,setAction} : tableLayoutProps) {
  return (
    <div className="h-[90%] w-[100%] p-5 flex-col-center">
    <span className={`h-[90%] w-[90%] overflow-auto scrollbar-small ${type==='Schedule' ? 'flex-center' : 'flex justify-start'} shadow-big`}>
      {children}
    </span>
    <span className="bg-transparent h-[10%] w-[90%] flex-center">
      <span onClick={()=>{setAction("Add")}}>
      <BlueButton content="Añadir" leftRounded={true} rightRounded={false} />
      </span>
      <span onClick={()=>{setAction("View")}}>
      <RedButton content="Ver" leftRounded={false} rightRounded={true}/>
      </span>
    </span>
    </div>
  )
}