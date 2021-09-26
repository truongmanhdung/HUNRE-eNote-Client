import React from "react";
import Notification from "./components/notification";

const routesSinhvien = [
    {
        path: "/sinh-vien/thong-bao",
        exact: false,
        component: () => <Notification/>,
    },
];

export default routesSinhvien;