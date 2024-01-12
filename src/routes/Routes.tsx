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
import DiseasePage from "../pages/diseasepage/DiseasePage"
import AdminDoctorsCreatePage from "../pages/admindoctorcreatepage/AdminDoctorsCreatePage"

export const router = createBrowserRouter([
    { path: "", element: <LoginPage /> },
    { path: "patient/home", element: <HomePage/> },
    { path: "doctor/home", element: <HomePage/> },
    { path: "patient/profile", element: <ProfilePage/> },
    { path: "doctor/profile", element: <ProfilePage/> },
    { path: "patient/about", element: <AboutPage/> },
    { path: "doctor/about", element: <AboutPage/> },
    { path: "patient/reports", element: <ReportPage/> },
    { path: "doctor/reports", element: <ReportPage/> },
    { path: "doctor/patients", element: <PatientPage/> },
    { path: "patient/reports/:id", element: <ReportsViewPage/> },
    { path: "doctor/reports/:id", element: <ReportsViewPage/> },
    { path: "doctor/reports/create", element: <ReportsCreatePage/> },
    { path: "doctor/diseases", element: <DiseasePage/> },
    { path: "patient/diseases", element: <DiseasePage/> },
    { path: "admin/login", element: <AdminLoginPage /> },
    { path: "admin/", element: <AdminPage /> },
    { path: "admin/doctors", element: <AdminPage /> },
    { path: "admin/doctors/create", element: <AdminDoctorsCreatePage /> },
    { path: "admin/doctors/:id", element: <AdminDoctorsPage /> },
])