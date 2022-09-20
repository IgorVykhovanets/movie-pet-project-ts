import {axiosService} from "../axios.service/axios.service";
import {apiKey, urls} from "../../configs/urls/urls";

export const trendingService = {
    getAllByDayTrendingCurrentPage: (currentPage: number) => axiosService.get(`${urls.trending}/all/day?${apiKey}&page=${currentPage}`),
    getAllByWeekTrendingCurrentPage: (currentPage: number) => axiosService.get(`${urls.trending}/all/week?${apiKey}&page=${currentPage}`),
}