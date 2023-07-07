import { User, NewUser } from "./Interfaces"
import { Movie, Schedule, Employee } from "../modules/admin/types/Interfaces"

/**
 *  Valid data types to store the data of each form (all are interfaces)
 */
export type typeSchedule = Schedule 

export type typeMovie = Movie

export type typeUser = NewUser | User | Employee

export type typeModel = typeUser | typeSchedule | typeMovie

/**
 *  String data types that describe the attributes of each form
 */
export type valuesLoginInput =  "identification" | "password" | "conPassword" | "name" | "position" | "phoneNumber"

export type valuesScheduleInput = "movie" | "hour" | "minute"

export type valuesMovieInput = "title" | "duration" | "age" | "synopsis" | "imgUrl"

export type valuesInput = valuesLoginInput | valuesScheduleInput | valuesMovieInput

/**
 *  String data types that describe the valid web pages for each type of user:
 *   Shop -> Employee
 *   Gene -> Director
 *   Mul -> Administrator
 *  This in order to display each page in the navigation menu
 */
export type valuesShoppingNavBar = "ShopSnacks" | "ShopMovies" | "ShopQualification"

export type valuesGeneralNavBar = "GenEmployee" | "GenMovie"

export type valuesMultiplexNavBar = "MulEmployee" | "MulSchedule"

export type valuesNavBar = valuesGeneralNavBar | valuesMultiplexNavBar | valuesShoppingNavBar
