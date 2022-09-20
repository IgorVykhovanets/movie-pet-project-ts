import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import './search.form.modules.css';
import {ISearchMovie} from "../../interfaces/search.movie.interface/search.movie.interface";
import {useAppDispatch} from "../../hooks/hooks";
import {getMovieByDataThunk} from "../../store/slices/movie.slice";
import {joiResolver} from "@hookform/resolvers/joi";
import {searchValidation} from "../../validations/search.validation/search.validation";

const SearchFormMovies: FC = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ISearchMovie>({resolver: joiResolver(searchValidation), mode: 'onTouched'});

    const dispatch = useAppDispatch();

    const submit = (data: ISearchMovie) => {
        dispatch(getMovieByDataThunk(data.data));
        reset();
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={'search-form-element'}>
                <div className={'msg-form-element'}>
                    {errors.data && <span>{errors.data.message}</span>}
                </div>
                <div><input type="text" placeholder={'movie'} {...register('data')}/>
                    <button className={'search-button'}>search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchFormMovies;