import React, {FC} from 'react';

import {ITrending} from "../../interfaces/trending.interface/trending.interface";

const CarouselMovie: FC<{ carouselMovie: ITrending; }> = ({carouselMovie: {title, overview, poster_path}}) => {

    const imgApi = 'https://image.tmdb.org/t/p/original/';

    return (
        <div>
                <img src={imgApi + poster_path} alt={title}/>
                <h2>{title}</h2>
        </div>
    );
};

export default CarouselMovie;