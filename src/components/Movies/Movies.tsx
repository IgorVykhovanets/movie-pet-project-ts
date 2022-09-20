import React, {FC, useEffect, useState} from 'react';

import './movies.modules.css'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import { IMovieCurrentPage } from '../../interfaces/movie.interface/movie.current.page.interface';
import {getAllMoviesThunk} from "../../store/slices/movie.slice";
import MovieCurrentPage from "../MovieCurrentPage/MovieCurrentPage";

const Movies: FC = () => {

    let [currentPage,setCurrentPage] = useState<number>(1);

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

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMoviesThunk(currentPage));
    }, [currentPage])

    const {movies: {results}} = useAppSelector(state => state.movieReducer);


    return (
        <div>
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

export default Movies;