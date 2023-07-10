import { User } from "./Interfaces"
import { Schedule, MultiplexPoints } from "../modules/multiplex/types/Interfaces"
import { Employee } from "./Interfaces"
import { Multiplex } from "../modules/director/types/Interfaces"
import { Movie } from "./Interfaces"
import { Client } from "../modules/shop/types/Interfaces"

/**
 *  Valid data types to store the data of each form (all are interfaces)
 */
export type typeSchedule = Schedule 

export type typeMovie = Movie

export type typeUser = Client | User | Employee

export type typeMultiplex = Multiplex | MultiplexPoints

export type typeModel = typeUser | typeSchedule | typeMovie | typeMultiplex

/**
 *  String data types that describe the attributes of each form
 */
export type valuesLoginInput =  "identification" | "password"

export type valuesScheduleInput = "movie" | "hour" | "minute" | "idTheater" | "day"

export type valuesMovieInput = "title" | "duration" | "age" | "synopsis" | "imgUrl"

export type valuesMultiplexInput= "name" | "numSala" | "pointSnack" | "pointTicket"

export type valuesMultiplexPointsInput = "pointsSnack" | "pointsTicket"

export type valuesEmployeeInput = "name"| "identification" | "dateBirth" | "email" | "salary" | "startDate" | "multiplex" | "phoneNumber" | "password" | "conPassword"

export type valuesClientInput = "name" | "identification" | "dateBirth" | "phoneNumber" | "email"

export type valuesInput = valuesLoginInput |valuesEmployeeInput | valuesClientInput| valuesScheduleInput | valuesMovieInput | valuesMultiplexInput | valuesMultiplexPointsInput

/**
 *  String data types that describe the valid web pages for each type of user:
 *   Shop -> Employee
 *   Gene -> Director
 *   Mul -> Administrator
 *  This in order to display each page in the navigation menu
 */
export type valuesShoppingNavBar = "ShopSnacks" | "ShopMovies" | "ShopQualification"

export type valuesGeneralNavBar = "GenEmployee" | "GenMovie" | "GenMultiplex" | "Dashboard"

export type valuesMultiplexNavBar = "MulSchedule" | "MulPoints"

export type valuesNavBar = valuesGeneralNavBar | valuesMultiplexNavBar | valuesShoppingNavBar
