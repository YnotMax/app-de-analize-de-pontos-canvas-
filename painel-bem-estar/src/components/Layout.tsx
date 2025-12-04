import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <Sidebar />
            <main className="flex-1 ml-20 p-8 overflow-y-auto h-screen">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
