import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {ITrending} from "../../interfaces/trending.interface/trending.interface";

const TrendingMovies: FC<{ movieTrending: ITrending; }> = ({movieTrending}) => {

    const {title, id, poster_path, popularity, release_date} = movieTrending;

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
            <div className={'button-movie-details'}><Link to={`/trending/${title}`} state={id}>
                <button>details</button>
            </Link></div>
        </div>
    );
};

export default TrendingMovies;