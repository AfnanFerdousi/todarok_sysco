import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

export default function page() {
    return <div>page</div>;
}

Page.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
