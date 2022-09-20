import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovies} from "../../interfaces/movies.interface/movies.interface";
import {trendingService} from "../../services/trending.service/trending.service";

export const getAllMoviesByTrendingDayThunk = createAsyncThunk<any, number>(
    'trendingSlice/getAllMoviesByTrendingDayThunk',
    async (currentPage, {dispatch}) => {
        const {data} = await trendingService.getAllByDayTrendingCurrentPage(currentPage);
        dispatch(getAllMoviesByTrending(data));
    }
);

export const getAllMoviesByTrendingWeekThunk = createAsyncThunk<any, number>(
    'trendingSlice/getAllMoviesByTrendingWeekThunk',
    async (currentPage, {dispatch}) => {
        const {data} = await trendingService.getAllByWeekTrendingCurrentPage(currentPage);
        dispatch(getAllMoviesByTrending(data));
    }
);



interface ITrendingState {
    trendingMoviesCurrentPage: [] | IMovies;
}

const initialState: ITrendingState = {
    trendingMoviesCurrentPage: [],
}

const trendingSlice = createSlice({
    name: 'trendingSlice',
    initialState: initialState,
    reducers: {
        getAllMoviesByTrending: (state, action: PayloadAction<IMovies>) => {
            state.trendingMoviesCurrentPage = action.payload;
        }
    }
})

export const trendingReducer = trendingSlice.reducer;

export const {getAllMoviesByTrending} = trendingSlice.actions;