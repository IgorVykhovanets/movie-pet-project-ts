import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import './home.modules.page.css'
import Layout from "../../components/Layout/Layout";

const HomePage: FC = () => {

    return (
        <div>
            <Layout/>
            <div className={'outlet'}>
                    <Outlet/>
            </div>
        </div>
    );
};

export default HomePage;