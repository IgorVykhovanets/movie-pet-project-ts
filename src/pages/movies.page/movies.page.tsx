import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './movies.modules.page.css'
import Movies from "../../components/Movies/Movies";
import GenresPage from "../genres.page/genres.page";

const MoviesPage:FC = () => {
    return (
        <div>
            <div className={'movies-genres-list'}>
                <GenresPage/>
            </div>
            <div className={'movies-popularity-nav-menu'}>
                <Link to={'popularity_asc'}>Popularity Ascending</Link>
                <Link to={'popularity_desc'}>Popularity Descending</Link>
            </div>
            <div>
                <Movies/>
            </div>
        </div>
    );
};

export default MoviesPage;