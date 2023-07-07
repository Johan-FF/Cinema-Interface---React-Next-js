import { Movie } from "../types/Interfaces"

export const movieAdapter = (response: any): Movie => {return {
    type: 'movie',
    id:response.data.id,
    title: response.data.title,
    duration: response.data.duration,
    age: response.data.year_allowed,
    synopsis: response.data.synopsis,
    imgUrl: response.data.url
  }
}

export const manyMoviesAdapter = (response: any[]): Movie[] => {
    return response.map((item) => {
      return {
        type: 'movie',
        id:item.data.id,
        title: item.data.title,
        duration: item.data.duration,
        age: item.data.year_allowed,
        synopsis: item.data.synopsis,
        imgUrl: item.data.url
      };
    });
  };
