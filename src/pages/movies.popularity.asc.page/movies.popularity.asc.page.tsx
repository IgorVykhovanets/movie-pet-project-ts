import React, {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getMoviePopularityAscThunk} from "../../store/slices/movie.slice";
import MovieCurrentPage from "../../components/MovieCurrentPage/MovieCurrentPage";
import {IMovieCurrentPage} from '../../interfaces/movie.interface/movie.current.page.interface';
import GenresPage from "../genres.page/genres.page";
import {NavLink} from "react-router-dom";

const MoviesPopularityAscPage: FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMoviePopularityAscThunk(currentPage));
    }, [currentPage]);

    const {movies: {results}} = useAppSelector(state => state.movieReducer);

    const nextPage = () => {
        if (currentPage > 0 && currentPage < 500) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage < 500 && currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }


    return (
        <div>
            <div className={'movies-genres-list'}>
                <GenresPage/>
            </div>
            <div className={'movies-popularity-nav-menu'}>
                <NavLink to={`/movies/popularity_asc`}>Popularity Ascending</NavLink>
                <NavLink to={`/movies/popularity_desc`}>Popularity Descending</NavLink>
            </div>
            <div className={'button-menu-pagination'}>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
            <div className={'movies-card-box'}>
                {results && results.map((movie: IMovieCurrentPage) => <MovieCurrentPage key={movie.id}
                                                                                         movie={movie}/>)}
            </div>
        </div>
    );
};

export default MoviesPopularityAscPage;