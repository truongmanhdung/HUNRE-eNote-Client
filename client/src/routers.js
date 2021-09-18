import React from "react";
import Home from "./components/home";
import Login from "./components/Login/index.js";

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Home/>,
    },
    {
        path: "/Login",
        exact: true,
        component: () => <Login/>,
    },
];

export default routes;