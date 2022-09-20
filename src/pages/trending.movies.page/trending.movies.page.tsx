import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './trending.movies.page.modules.css'

const TrendingMoviesPage:FC = () => {
    return (
        <div className={'trending-nav-links-menu'}>
            <NavLink to={'/trending/day'}>Trend of the day</NavLink>
            <NavLink to={'/trending/week'}>Trend of the week</NavLink>
        </div>
    );
};

export default TrendingMoviesPage;