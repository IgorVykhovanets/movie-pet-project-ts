import React, {FC} from 'react';

import './search.movie.modules.page.css'
import {useAppSelector} from "../../hooks/hooks";
import MovieCurrentPage from "../../components/MovieCurrentPage/MovieCurrentPage";
import SearchFormMovies from "../../components/SearchFormMovies/SearchFormMovies";

const SearchMoviePage: FC = () => {

    const {searchMovie} = useAppSelector(state => state.movieReducer);


    return (
        <div>
            <div className={'search-form-block'}>
                <SearchFormMovies/>
            </div>
            <div className={'movies-card-box'}>{searchMovie && searchMovie.results.map(movie => <MovieCurrentPage
                key={movie.id}
                movie={movie}/>)}</div>
        </div>
    );
};

export default SearchMoviePage;