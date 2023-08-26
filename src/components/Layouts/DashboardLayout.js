import React from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">{children}</div>
        </div>
    );
}
