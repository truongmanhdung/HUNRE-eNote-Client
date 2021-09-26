import React from "react";
import Notification from "./components/notification";
import Attendance from "./components/attendance";

const routesSinhvien = [
    {
        path: "/sinh-vien/thong-bao",
        exact: false,
        component: () => <Notification/>,
    },
    {
        path: "/sinh-vien/diem-danh",
        exact: false,
        component: () => <Attendance/>,
    }
];

export default routesSinhvien;