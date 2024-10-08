import React from 'react';
import Login from './Login';
import Header from './Header';
import Browse from './Browse'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,  // Default route for the homepage
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/header",
            element: <Header />,
        },
        
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
