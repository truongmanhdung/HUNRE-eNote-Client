import React from "react";
import Home from "./components/home";

const routes = [
    {
        path: "/sinhvien/",
        exact: false,
        component: () => <Home/>,
    },
];

export default routes;