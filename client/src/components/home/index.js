// create by DungTMc on 15/9/2021

import React from 'react';
import { Link, Route, Switch,useParams } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routesSinhvien from '../../routers.sinhvien';
import './style/index.css';
import Navbar from '../navbar';
const Home = (props) => {
    let { slug } = useParams();
    console.log(slug);
  const showContent = (routes) => {
    let result = null;
    if (routesSinhvien.length > 0) {
        result = routesSinhvien.map((route, index) => {
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
        
        <div className="content-list">
            <Navbar/>
            {showContent(routesSinhvien)}
        </div>
    </div>
  );
};

export default Home;
