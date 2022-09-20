import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './movie.current.page.modules.css'
import {IMovieCurrentPage} from "../../interfaces/movie.interface/movie.current.page.interface";

const MovieCurrentPage: FC<{ movie: IMovieCurrentPage; }> = ({movie}) => {

    const {title, poster_path, release_date, id} = movie;

    const imgApi = 'https://image.tmdb.org/t/p/original/';

    return (
        <div className={'movie-card'}>
            <div>
                <img src={imgApi + poster_path} alt={title}/>
            </div>
            <div className={'title-card-movie'}>
                {title}
            </div>
            <div className={'release-card-movie'}>
                {release_date}
            </div>
            <div className={'button-movie-details'}>
                <Link to={title.toLowerCase()} state={id}>
                    <button>details</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieCurrentPage;