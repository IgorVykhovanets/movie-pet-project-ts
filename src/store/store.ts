import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movie.slice";
import {genresReducer} from "./slices/genres.slice";
import {trendingReducer} from "./slices/trending.slice";

const rootReducers = combineReducers({
    movieReducer,
    genresReducer,
    trendingReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
