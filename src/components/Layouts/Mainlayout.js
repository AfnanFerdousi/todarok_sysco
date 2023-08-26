import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
    return <div className="h-screen">{children}</div>;
};

export default MainLayout;
