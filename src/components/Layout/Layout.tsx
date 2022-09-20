import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './layout.modules.css'

const Layout: FC = () => {
    return (
        <div className={'footer'}>
            <div className={'footer-layout'}>
                <div className={'footer-left-nav-menu'}>
                    <NavLink to={'/'}>Home</NavLink>
                    <img src="https://cdn1.iconfinder.com/data/icons/music-media-2/512/614731-cinema-512.png" alt="cinema_icon"/>
                </div>
                <div className={'footer-right-nav-menu'}>
                    <NavLink to={'/movies'}>Movies</NavLink>
                    <NavLink to={'/search'}>Search</NavLink>
                    <NavLink to={'/trending'}>Trending</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Layout;