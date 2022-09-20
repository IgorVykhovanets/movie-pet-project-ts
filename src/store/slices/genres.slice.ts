import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenres} from "../../interfaces/genres.interface/genres.interface";
import {genresService} from "../../services/genres.service/genres.service";
import {IMovies} from "../../interfaces/movies.interface/movies.interface";

export const getAllGenresThunk = createAsyncThunk<object, IGenres>(
    'genresSlice/getAllGenresThunk',
    async (_, {dispatch}) => {
        const {data} = await genresService.getAll();
        dispatch(getAllGenres(data));
    }
);

export const getAllMoviesByGenreCurrentPageThunk = createAsyncThunk<any, any>(
    'genresSlice/getAllMoviesByGenreCurrentPage',
    async ({id, currentPage}, {dispatch}) => {
        const {data} = await genresService.getMovieByGenreId(id, currentPage);
        dispatch(getAllMovieCurrentPage(data));
    }
);

export const getAllMoviesByGenreCurrentPagePopularityAscThunk = createAsyncThunk<any, any>(
    'genresSlice/getAllMoviesByGenreCurrentPagePopularityAscThunk',
    async ({id, currentPage}, {dispatch}) => {
        const {data} = await genresService.getMovieByGenreIdPopularityAsc(id, currentPage);
        dispatch(getAllMovieCurrentPagePopularityAsc(data));
    }
);

export const getAllMoviesByGenreCurrentPagePopularityDescThunk = createAsyncThunk<any, any>(
    'genresSlice/getAllMoviesByGenreCurrentPagePopularityAscThunk',
    async ({id, currentPage}, {dispatch}) => {
        const {data} = await genresService.getMovieByGenreIdPopularityDesc(id, currentPage);
        dispatch(getAllMovieCurrentPagePopularityDesc(data));
    }
);

interface IGenresState {
    genre: any | IGenres;
    genreMoviesCurrentPage: {} | IMovies;
}

const initialState: IGenresState = {
    genre: {},
    genreMoviesCurrentPage: {},
}

export const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: initialState,
    reducers: {
        getAllGenres: (state, action: PayloadAction<IGenres[]>) => {
            state.genre = action.payload;
        },
        getAllMovieCurrentPage: (state, action: PayloadAction<IMovies>) => {
            state.genreMoviesCurrentPage = action.payload;
        },
        getAllMovieCurrentPagePopularityAsc: (state, action: PayloadAction<IMovies>) => {
            state.genreMoviesCurrentPage = action.payload;
        },
        getAllMovieCurrentPagePopularityDesc: (state, action: PayloadAction<IMovies>) => {
            state.genreMoviesCurrentPage = action.payload;
        },
    }
})

const {
    getAllGenres,
    getAllMovieCurrentPage,
    getAllMovieCurrentPagePopularityAsc,
    getAllMovieCurrentPagePopularityDesc
} = genresSlice.actions;

export const genresReducer = genresSlice.reducer;


