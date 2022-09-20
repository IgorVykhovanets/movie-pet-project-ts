import React, {FC, useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getAllMoviesByGenreCurrentPagePopularityDescThunk} from "../../store/slices/genres.slice";
import MovieCurrentPage from "../../components/MovieCurrentPage/MovieCurrentPage";
import {IMovieCurrentPage} from "../../interfaces/movie.interface/movie.current.page.interface";
import GenresPage from "../genres.page/genres.page";

const GenreMoviesPopularityDescPage: FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const {state} = useLocation();

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

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMoviesByGenreCurrentPagePopularityDescThunk({id: state, currentPage}))
    }, [currentPage])


    // @ts-ignore
    const {genreMoviesCurrentPage: {results}} = useAppSelector(state1 => state1.genresReducer);

    return (
        <div>
            <div className={'movies-genres-list'}>
                <GenresPage/>
            </div>
            <div className={'movies-popularity-nav-menu'}>
                <NavLink to={`/movies/genres/${state}/popularity_asc`} state={state}>Popularity Ascending</NavLink>
                <NavLink to={`/movies/genres/${state}/popularity_desc`} state={state}>Popularity Descending</NavLink>
            </div>
            <div className={'button-menu-pagination'}>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
            <div className={'movies-card-box'}>{results && results.map((movie: IMovieCurrentPage) => <MovieCurrentPage
                key={movie.id}
                movie={movie}/>)}</div>
        </div>
    );
};

export default GenreMoviesPopularityDescPage;