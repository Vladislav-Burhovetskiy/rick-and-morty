import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Main } from '../Pages/Main.page';
import { CardDetails } from '../Pages/CardDetails.page';

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: < Main />
      },
      {
        path: "/carddetails/:id",
        element: <CardDetails />
      }
    ],
  },
]);
