import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import './App.modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home.page/home.page";
import NotFoundPage from "./pages/not.found.page/not.found.page";
import MoviesPage from "./pages/movies.page/movies.page";
import DetailsMoviePage from "./pages/details.movie.page/details.movie.page";
import SearchMoviePage from "./pages/search.movies.page/search.movie.page";
import GenresPage from "./pages/genres.page/genres.page";
import GenreMoviesPage from "./pages/genre.movies.page/genre.movies.page";
import GenreMovieDetailsPage from "./pages/genre.movie.details.page/genre.movie.details.page";
import MoviesPopularityAscPage from "./pages/movies.popularity.asc.page/movies.popularity.asc.page";
import MoviesPopularityDescPage from "./pages/movies.popularity.desc.page/movies.popularity.desc.page";
import GenreMoviesPopularityAsc from "./pages/genre.movies.popularity.asc.page/genre.movies.popularity.asc";
import GenreMoviesPopularityDescPage from "./pages/genre.movies.popularity.desc.page/genre.movies.popularity.desc.page";
import TrendingMoviesPage from "./pages/trending.movies.page/trending.movies.page";
import TrendingDayPage from "./pages/trending.day.page/trending.day.page";
import TrendingWeekPage from "./pages/trending.week.page/trending.week.page";

const App:FC = () => {
    return (
        <div>
          <Routes>
              <Route path={'/'} element={<HomePage/>}>
                  <Route path={'/movies'} element={<MoviesPage/>}/>
                  <Route path={'/movies/genres/:id'} element={<GenreMoviesPage/>}/>
                  <Route path={'/movies/popularity_asc'} element={<MoviesPopularityAscPage/>}/>
                  <Route path={'/movies/popularity_asc/:name'} element={<DetailsMoviePage/>}/>
                  <Route path={'/movies/popularity_desc'} element={<MoviesPopularityDescPage/>}/>
                  <Route path={'/movies/popularity_desc/:name'} element={<DetailsMoviePage/>}/>
                  <Route path={'/movies/genres/:id/popularity_asc'} element={<GenreMoviesPopularityAsc/>}/>
                  <Route path={'/movies/genres/:id/popularity_asc/:movie'} element={<GenreMovieDetailsPage/>}/>
                  <Route path={'/movies/genres/:id/popularity_desc'} element={<GenreMoviesPopularityDescPage/>}/>
                  <Route path={'/movies/genres/:id/popularity_desc/:movie'} element={<GenreMovieDetailsPage/>}/>
                  <Route path={'/movies/genres/:id/:movie'} element={<GenreMovieDetailsPage/>}/>
                  <Route path={'/movies/:name'} element={<DetailsMoviePage/>}/>
                  <Route path={'/search'} element={<SearchMoviePage/>}/>
                  <Route path={'/search/:name'} element={<DetailsMoviePage/>}/>
                  <Route path={'/genres'} element={<GenresPage/>}/>
                  <Route path={'/trending'} element={<TrendingMoviesPage/>}/>
                  <Route path={'/trending/day'} element={<TrendingDayPage/>}/>
                  <Route path={'/trending/:name'} element={<DetailsMoviePage/>}/>
                  <Route path={'/trending/week'} element={<TrendingWeekPage/>}/>
                  <Route path={'*'} element={<NotFoundPage/>}/>
              </Route>
          </Routes>
        </div>
    );
};

export default App;