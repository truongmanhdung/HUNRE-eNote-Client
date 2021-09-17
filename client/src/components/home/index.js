// create by DungTMc on 15/9/2021

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routes from '../../routers.sinhvien';
const Home = (props) => {
  const showContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            );
        });
    }
    return <Switch>{result}</Switch>;
};
  return (
    <div>
        <ToastContainer/>
        <div>
            {showContent(routes)}
        </div>
    </div>
  );
};

export default Home;
