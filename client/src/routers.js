import React from "react";
import Home from "./components/home";
import Login from "./components/Login/index.js";
import Notification from "./components/notification";

const routes = [
    {
        path: "/sinhvien",
        exact: false,
        component: () => <Home/>,
    },
    {
        path: "/Login",
        exact: true,
        component: () => <Login/>,
    },
    {
        path: "/sinhvien/thongbao",
        exact: false,
        component: () => <Notification/>,
    },
];

export default routes;