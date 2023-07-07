import { Movie, Schedule, Employee, MultiplexPoints } from "@/app/modules/admin/types/Interfaces"
import { Multiplex } from "../modules/shop/types/Interfaces"
import {User, NewUser} from "@/app/types/Interfaces"

/**
 *  Valid data types to store the data of each form (all are interfaces)
 */
export type typeSchedule = Schedule 

export type typeMovie = Movie

export type typeUser = NewUser | User | Employee

export type typeMultiplex = Multiplex

export type typeMultiplexPoints = MultiplexPoints

export type typeModel = typeUser | typeSchedule | typeMovie | typeMultiplex | typeMultiplexPoints



/**
 *  String data types that describe the attributes of each form
 */
export type valuesLoginInput =  "identification" | "password" | "conPassword" | "name" | "position" | "phoneNumber"

export type valuesScheduleInput = "movie" | "hour" | "minute"

export type valuesMovieInput = "title" | "duration" | "age" | "synopsis" | "imgUrl"

export type valuesMultiplexInput= "name" | "numSala" | "pointSnack" | "pointTicket"

export type valuesMultiplexPointsInput = "pointsSnack" | "pointsTicket"

export type valuesInput = valuesLoginInput | valuesScheduleInput | valuesMovieInput | valuesMultiplexInput | valuesMultiplexPointsInput

/**
 *  String data types that describe the valid web pages for each type of user:
 *   Shop -> Employee
 *   Gene -> Director
 *   Mul -> Administrator
 *  This in order to display each page in the navigation menu
 */
export type valuesShoppingNavBar = "ShopSnacks" | "ShopMovies" | "ShopQualification"

export type valuesGeneralNavBar = "GenEmployee" | "GenMovie" | "GenMultiplex"

export type valuesMultiplexNavBar = "MulSchedule" | "MulPoints"

export type valuesNavBar = valuesGeneralNavBar | valuesMultiplexNavBar | valuesShoppingNavBar
