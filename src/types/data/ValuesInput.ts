export type valuesLoginInput =  "identification" | "password" | "conPassword" | "name" | "position" | "phoneNumber"

export type valuesScheduleInput = "movie" | "hour" | "minute"

export type valuesMovieInput = "title" | "duration" | "age" | "synopsis" | "imgUrl"

export type valuesInput = valuesLoginInput | valuesScheduleInput | valuesMovieInput



export type valuesShoppingNavBar = "ShopSnacks" | "ShopMovies" | "ShopQualification"

export type valuesGeneralNavBar = "GenEmployee" | "GenMovie"

export type valuesMultiplexNavBar = "MulEmployee" | "MulSchedule"

export type valuesNavBar = valuesGeneralNavBar | valuesMultiplexNavBar | valuesShoppingNavBar