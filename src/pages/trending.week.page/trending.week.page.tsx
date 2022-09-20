import React, {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getAllMoviesByTrendingWeekThunk} from "../../store/slices/trending.slice";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import {ITrending} from "../../interfaces/trending.interface/trending.interface";
import {NavLink} from "react-router-dom";


const TrendingWeekPage:FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMoviesByTrendingWeekThunk(currentPage));
    },[currentPage])


    const nextPage = () => {
        if (currentPage > 0 && currentPage < 999) {
            setCurrentPage(currentPage + 1);
        }

    }

    const prevPage = () => {
        if (currentPage < 999 && currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    // @ts-ignore
    const {trendingMoviesCurrentPage: {results}} = useAppSelector(state => state.trendingReducer);

    return (
        <div>
            <div className={'trending-nav-links-menu'}>
                <NavLink to={'/trending/day'}>Trend of the day</NavLink>
                <NavLink to={'/trending/week'}>Trend of the week</NavLink>
            </div>
            <div className={'button-menu-pagination'}>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
            <div className={'movies-card-box'}>
                {results && results.map((movie: ITrending) => <TrendingMovies key={movie.id}
                                                                             movieTrending={movie}/>)}
            </div>
        </div>
    );
};

export default TrendingWeekPage;