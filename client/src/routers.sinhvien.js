import React from "react";
import Notification from "./components/notification";
import Attendance from "./components/attendance";

const routesSinhvien = [
    {
        path: "/sinhvien/thong-bao",
        exact: false,
        component: () => <Notification/>,
    },
    {
        path: "/sinhvien/diem-danh",
        exact: false,
        component: () => <Attendance/>,
    }
];

export default routesSinhvien;