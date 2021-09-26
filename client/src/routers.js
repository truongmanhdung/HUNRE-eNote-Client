import React from "react";
import Home from "./components/home";
import Notification from "./components/notification";

import Login from "./components/Login/index.js";

const routes = [
    {
        path: "/sinh-vien",
        exact: false,
        component: () => <Home/>,
    },
    {
        path: "/Login",
        exact: false,
        component: () => <Login/>,
    },
];

export default routes;