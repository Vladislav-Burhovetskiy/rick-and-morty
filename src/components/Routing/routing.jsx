import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Main } from '../Pages/Main.page';
import { CardDetails } from '../Pages/CardDetails.page';

export const routing = createBrowserRouter([
  {
    path: "/rick-and-morty",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: < Main />
      },
      {
        path: "/rick-and-morty/carddetails/:id",
        element: <CardDetails />
      }
    ],
  },
]);
