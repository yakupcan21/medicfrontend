import { createBrowserRouter } from "react-router-dom"

import LoginPage from "../pages/loginpage/LoginPage"
import ProfilePage from "../pages/profilepage/ProfilePage"
import AboutPage from "../pages/aboutpage/AboutPage"
import HomePage from "../pages/homepage/HomePage"
import ReportPage from "../pages/reportspage/ReportPage"
import PatientPage from "../pages/patientspage/PatientsPage"
import ReportsViewPage from "../pages/reportsviewpage/ReportsViewPage"
import ReportsCreatePage from "../pages/reportscreatepage/ReportsCreatePage"
import AdminPage from "../pages/adminpage/AdminPage"
import AdminLoginPage from "../pages/adminloginpage/AdminLoginPage"
import AdminDoctorsPage from "../pages/admindoctorspage/AdminDoctorsPage"

export const router = createBrowserRouter([
    { path: "", element: <LoginPage /> },
    { path: "profile", element: <ProfilePage /> },
    { path: "home", element: <HomePage/> },
    { path: "about", element: <AboutPage /> },
    { path: "reports", element: <ReportPage /> },
    { path: "patients", element: <PatientPage /> },
    { path: "reports/:id", element: <ReportsViewPage /> },
    { path: "reports/create", element: <ReportsCreatePage /> },
    { path: "admin/login", element: <AdminLoginPage /> },
    { path: "admin/", element: <AdminPage /> },
    { path: "admin/doctors", element: <AdminPage /> },
    { path: "admin/doctors/:id", element: <AdminDoctorsPage /> },
])