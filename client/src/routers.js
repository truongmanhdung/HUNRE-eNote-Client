import React from "react";
import Home from "./components/home";

const routes = [
    {
        path: "/sinhvien",
        exact: false,
        component: () => <Home/>,
    },
    {
        path: "/login",
        exact: false,
        component: () => <Home/>,
    },
];

export default routes;