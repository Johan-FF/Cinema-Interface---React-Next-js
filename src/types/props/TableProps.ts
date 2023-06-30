import { Employee } from "../interfaces/User"
import { Schedule } from "../interfaces/Schedule"
import { Movie } from "../interfaces/Movie"

export default interface tableProps {
  headers: string[],
  filteredData: Employee[] | Schedule[] | Movie[]
}