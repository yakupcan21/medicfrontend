import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from "./routes/Routes"
import { Routes, Route, useParams } from 'react-router-dom';
import { RouterProvider } from "react-router-dom"
import { AuthProvider } from './components/AuthContext';
import { ReportProvider } from './components/reportContext';



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ReportProvider>
        <RouterProvider router={router} />
      </ReportProvider>
    </AuthProvider>
  </React.StrictMode>
)


