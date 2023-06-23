import Silla from "./Chair"

const getList = (max: number) => {
  let list = []
  for(let i=0; i<max; i++)
    list.push(i)
  return list
}
const rowLimit: number[] = getList(10)
const preferencial: number[] = getList(20)
const general: number[] = getList(40)
const rowCode: string[] = ['A','B','C','D','E','F']

export default function () {
  return (
    <div className="h-[100%] w-[100%] md:w-[70%] pr-3 flex flex-col justify-evenly items-center rounded-xl shadow-2xl bg-secondary-opacity">
      <h3 className="font-bold text-5xl w-[100%] text-center border-b-2 rounded-lg text-primary mb-10 shadow-2xl shadow-black py-2 ml-3">Sala 2</h3>
      <div className="h-[60%] w-[100%] flex">
        <span className="flex flex-col justify-between h-[100%] w-[10%] pt-[8%] pb-[2%]">
          {
            rowCode.map(value => {
              return(
                <span className="w-[100%] h-[9%] flex justify-center items-center font-bold text-primary">{value}</span>
              )
            })
          }
        </span>
        <div className="h-[100%] w-[90%] flex flex-col">
          <span className="flex justify-between w-[100%] h-[10%]">
            {
              rowLimit.map(value => {
                return (
                  <span className="w-[10%] flex justify-center text-primary font-bold">{value+1}</span>
                )
              })
            }
          </span>
          <span className="h-[100%] w-[100%] ">
            {
              preferencial.map(value => {
                return (
                  <Silla key={value} />
                )
              })
            }
            {
              general.map(value => {
                return (
                  <Silla key={value} />
                )
              })
            }
          </span>
        </div>
      </div>
      <span className="h-[5%] w-[80%] rounded-lg bg-tertiary-opacity mt-5"></span>
    </div>
  )
}