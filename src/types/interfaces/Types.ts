import { User, NewUser, Employee } from "./User"
import { Schedule } from "./Schedule"
import { Movie } from "./Movie"

export type typeSchedule = Schedule 

export type typeMovie = Movie

export type typeUser = NewUser | User | Employee


export type typeModel = typeUser | typeSchedule | typeMovie
