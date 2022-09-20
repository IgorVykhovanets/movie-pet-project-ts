import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovies} from "../../interfaces/movies.interface/movies.interface";
import {movieService} from "../../services/movie.service/movie.service";
import {IMovieDetails} from "../../interfaces/movie.details.interface/movie.details.interface";


export const getAllMoviesThunk = createAsyncThunk<any , number> (
    'movieSlice/getAllMoviesThunk',
    async (page, {dispatch}) => {
        let {data} = await movieService.getAllCurrentPage(page);
        dispatch(getAllMovies(data));
    });

export const getMovieByIdThunk = createAsyncThunk<any, any>(
    'movieSlice/getMovieById',
    async (id, {dispatch}) => {
        const {data} = await movieService.getById(id);
        dispatch(getMovieById(data));
    }
);

export const getMovieByDataThunk = createAsyncThunk<any, string>(
    'movieSlice/getMovieByDataThunk',
    async (searchData, {dispatch}) => {
        const {data} = await movieService.getByData(searchData);
        dispatch(getMovieByData(data));
    }
);

export const getMoviePopularityAscThunk = createAsyncThunk<any, number>(
    'movieSlice/getMoviePopularityAsc',
    async (currentPage, {dispatch}) => {
        const {data} = await movieService.getPopularityAsk(currentPage);
        dispatch(getMoviePopularityAsc(data));
    }
);

export const getMoviePopularityDescThunk = createAsyncThunk<any, number>(
    'movieSlice/getMoviePopularityAsc',
    async (currentPage, {dispatch}) => {
        const {data} = await movieService.getPupularityDesk(currentPage);
        dispatch(getMoviePopularityDesc(data));
    }
);

interface IMovieState {
    movies: IMovies | any;
    movie: IMovieDetails | null;
    searchMovie : IMovies | null
}

const initialState: IMovieState = {
    movies: [],
    movie: null,
    searchMovie: null,
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialState,
    reducers: {
        getAllMovies: (state, action: PayloadAction<IMovies>) => {
            state.movies = action.payload;
        },
        getMovieById: (state, action: PayloadAction<IMovieDetails>) => {
            state.movie = action.payload;
        },
        getMovieByData: (state, action: PayloadAction<IMovies>) => {
            state.searchMovie = action.payload;
        },
        getMoviePopularityAsc: (state, action: PayloadAction<IMovies>) => {
            state.movies = action.payload;
        },
        getMoviePopularityDesc: (state, action:PayloadAction<IMovies>) => {
            state.movies = action.payload;
        },
        },
})

export const movieReducer = movieSlice.reducer;

export const {
    getAllMovies,
    getMovieById,
    getMovieByData,
    getMoviePopularityAsc,
    getMoviePopularityDesc
} = movieSlice.actions;