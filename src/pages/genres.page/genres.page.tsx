import React, {FC, useEffect} from 'react';

import './genres.modules.page.css'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getAllGenresThunk} from "../../store/slices/genres.slice";
import Genre from "../../components/Genre/Genre";
import { IGenres } from '../../interfaces/genres.interface/genres.interface';

const GenresPage: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllGenresThunk());
    }, []);

    const {genre: {genres}} = useAppSelector(state => state.genresReducer);


    return (
        <div>
            {genres && genres.map((genre: IGenres) => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresPage;