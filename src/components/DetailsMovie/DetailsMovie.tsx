import React, {FC} from 'react';

import './details.movie.modules.css'
import {IMovieDetails} from "../../interfaces/movie.details.interface/movie.details.interface";
import GenresInMovie from "../GenresInMovie/GenresInMovie";

const DetailsMovie: FC<{ movie: IMovieDetails; }> = ({movie}) => {

    const {title, poster_path, overview, release_date, genres} = movie;

    const imgApi = 'https://image.tmdb.org/t/p/original/';

    return (
        <div className={'movie-details-element'}>
            <div>
                <img src={imgApi + poster_path} alt={title}/>
            </div>
            <div className={'description-movie-element'}>
                <h1>{title}</h1>
                <span className={'release-date-element'}>{release_date}</span>
                <div>
                    Genre: {genres && genres.map(genre => <GenresInMovie key={genre.id} genre={genre}/>)}
                </div>
                <p>Overview: {overview}</p>
            </div>
        </div>
    );
};

export default DetailsMovie;