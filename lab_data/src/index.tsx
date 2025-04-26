import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./main/Main";
import Building from "./building/Building";
import List from "./list/List";
import Chart from "./charts/Chart";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "",
        element: <Main/>,
    },
    {
        path: "/list",
        element: <List/>,
    },
    {
        path: "/building/:id",
        element: <Building/>,
    },
    {
        path: "/chart",
        element: <Chart/>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        <Footer/>
    </React.StrictMode>
);

reportWebVitals();
