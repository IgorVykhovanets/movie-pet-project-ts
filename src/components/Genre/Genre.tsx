import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './genre.modules.css'
import {IGenres} from "../../interfaces/genres.interface/genres.interface";

const Genre: FC<{ genre: IGenres; }> = ({genre: {id,name}}) => {
    return (
        <div className={'genres-name-list'}>
            <NavLink to={`/movies/genres/${id}`} state={id}>{name}</NavLink>
        </div>
    );
};

export default Genre;