import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Politicas from './components/Politicas/Politicas';

const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    exact: true,
  },
  {
    path: '/politicas-privacidad/',
    element: <Politicas />,
    exact: true,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
