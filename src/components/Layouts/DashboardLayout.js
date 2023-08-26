import React from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="">{children}</div>
        </div>
    );
}
