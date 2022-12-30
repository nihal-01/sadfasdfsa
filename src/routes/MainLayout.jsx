import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Layouts";
import { Footer } from "../components";
import { FloatIcon } from "../components";

export default function MainLayout() {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />

            <FloatIcon />
        </main>
    );
}
