import React from "react";
import Home from "./components/home";
import Notification from "./components/notification";

const routes = [
    {
        path: "/sinhvien",
        exact: false,
        component: () => <Home/>,
    },
    {
        path: "/sinhvien/thongbao",
        exact: false,
        component: () => <Notification/>,
    },
];

export default routes;