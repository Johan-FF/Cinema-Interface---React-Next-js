import { Movie } from "@/app/types/Interfaces"

export const createMovieAdapter = (movie: Movie): any => {
  return {
    title: movie.title,
    duration: movie.duration,
    yearAllowed: movie.age,
    synopsis: movie.synopsis,
    url: movie.imgUrl,
  }
}

export const getMoviesAdapter = (response: any[]): Movie[] => {
  return response.map((item) => {
    return {
      type: 'Película',
      id: item.id,
      title: item.title,
      duration: item.duration,
      age: item.yearAllowed,
      synopsis: item.synopsis,
      imgUrl: item.url
    }
  })
}
