import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import DetailsMovie from "../../components/DetailsMovie/DetailsMovie";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getMovieByIdThunk} from "../../store/slices/movie.slice";

const DetailsMoviePage:FC = () => {

    const {state} = useLocation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMovieByIdThunk(state));
    } ,[])

    const {movie} = useAppSelector(state1 => state1.movieReducer);

    return (
        <div className={'movie-details-box-element'}>
            {movie && <DetailsMovie movie={movie}/>}
        </div>
    );
};

export default DetailsMoviePage;