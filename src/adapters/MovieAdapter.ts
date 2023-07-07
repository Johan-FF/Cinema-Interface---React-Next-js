import { Movie } from "@/app/types/Interfaces"

export const createMovieAdapter = (movie: Movie): any => {
  return {
    title: movie.title,
    duration: movie.duration,
    year_allowed: movie.age,
    synopsis: movie.synopsis,
    url: movie.imgUrl,  }
}

export const getMoviesAdapter = (response: any[]): Movie[] => {
  return response.map((item) => {
    return {
      type: 'movie',
      id: item.id,
      title: item.title,
      duration: item.duration,
      age: item.year_allowed,
      synopsis: item.synopsis,
      imgUrl: item.url
    }
  })
}
