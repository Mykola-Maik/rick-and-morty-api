import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from './App.tsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Typography } from '@mui/material';
import { BaseLayout } from './layout/BaseLaout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Typography>This is error page</Typography>,
    children: [
      {
        path: 'character-detail/:id',
        element: <BaseLayout />,
        children: [],
      },
      {
        path: 'location-detail/:id',
        element: <BaseLayout />,
        children: [],
      },
      {
        path: 'episode-detail/:id',
        element: <BaseLayout />,
        children: [],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
