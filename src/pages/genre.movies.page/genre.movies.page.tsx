import React, {FC, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getAllMoviesByGenreCurrentPageThunk} from "../../store/slices/genres.slice";
import MovieCurrentPage from "../../components/MovieCurrentPage/MovieCurrentPage";
import {IMovieCurrentPage} from "../../interfaces/movie.interface/movie.current.page.interface";
import GenresPage from "../genres.page/genres.page";

const GenreMoviesPage: FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const nextPage = () => {
        if (currentPage > 0 && currentPage < 500) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage < 500 && currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const {state} = useLocation();

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getAllMoviesByGenreCurrentPageThunk({id: state, currentPage: currentPage}));
    }, [currentPage, state]);

    // @ts-ignore
    const {genreMoviesCurrentPage: {results}} = useAppSelector(state1 => state1.genresReducer);

    return (
        <div>
            <div className={'movies-genres-list'}>
                <GenresPage/>
            </div>
            <div className={'movies-popularity-nav-menu'}>
                <Link to={'popularity_asc'} state={state}>Popularity Ascending</Link>
                <Link to={'popularity_desc'} state={state}>Popularity Descending</Link>
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

export default GenreMoviesPage;