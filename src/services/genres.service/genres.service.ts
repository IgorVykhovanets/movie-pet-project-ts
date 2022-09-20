import {axiosService} from "../axios.service/axios.service";
import {apiKey, urls} from "../../configs/urls/urls";
import {IGenres} from "../../interfaces/genres.interface/genres.interface";
import {IMovies} from "../../interfaces/movies.interface/movies.interface";

export const genresService = {
    getAll: () => axiosService.get<IGenres[]>(`${urls.genres}?${apiKey}`),
    getMovieByGenreId: (id: number, currentPage: number) => axiosService.get<IMovies>(`${urls.movies}?${apiKey}&page=${currentPage}&with_genres=${id}`),
    getMovieByGenreIdPopularityAsc: (id: number, currentPage: number) => axiosService.get<IMovies>(`${urls.movies}?${apiKey}&page=${currentPage}&with_genres=${id}&sort_by=popularity.asc`),
    getMovieByGenreIdPopularityDesc: (id: number, currentPage: number) => axiosService.get<IMovies>(`${urls.movies}?${apiKey}&page=${currentPage}&with_genres=${id}&sort_by=popularity.desc`),
}