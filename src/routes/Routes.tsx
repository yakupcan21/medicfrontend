import { createBrowserRouter } from "react-router-dom"

import LoginPage from "../pages/loginpage/LoginPage"
import ProfilePage from "../pages/profilepage/ProfilePage"
import AboutPage from "../pages/aboutpage/AboutPage"
import HomePage from "../pages/homepage/HomePage"
import DoctorView from "../pages/doctorview/DoctorView"
import YapayZeka from "../pages/YapayZeka/YapayZeka"
import ReportPage from "../pages/reportspage/ReportPage"
import PatientPage from "../pages/patientspage/PatientsPage"

export const router = createBrowserRouter([
    { path: "", element: <LoginPage /> },
    { path: "profile", element: <ProfilePage /> },
    { path: "home", element: <HomePage/> },
    { path: "about", element: <AboutPage /> },
    { path: "reports", element: <ReportPage /> },
    { path: "patients", element: <PatientPage /> },
    { path: "reports/:id", element: <DoctorView /> },
    { path: "yapayzeka", element: <YapayZeka /> }
])