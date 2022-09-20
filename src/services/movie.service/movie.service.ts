import {axiosService} from "../axios.service/axios.service";
import {apiKey, urls} from "../../configs/urls/urls";
import {IMovies} from "../../interfaces/movies.interface/movies.interface";
import {IMovieDetails} from "../../interfaces/movie.details.interface/movie.details.interface";

export const movieService = {
    getAllCurrentPage: (currentPage: number) => axiosService.get<IMovies>(`${urls.movies}?${apiKey}&page=${currentPage}`),
    getById: (id: number) => axiosService.get<IMovieDetails>(`${urls.details}/${id}?${apiKey}`),
    getByData: (data: string) => axiosService.get<IMovies>(`${urls.search}?${apiKey}&query=${data}`),
    getPopularityAsk: (currentPage: number) => axiosService.get<IMovies>(`${urls.movies}?${apiKey}&page=${currentPage}&sort_by=popularity.asc`),
    getPupularityDesk: (currentPage: number) => axiosService.get<IMovies>(`${urls.movies}?${apiKey}&page=${currentPage}&sort_by=popularity.desc`),
};