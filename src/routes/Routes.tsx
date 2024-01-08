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
    { path: "patient/home", element: <HomePage isDoctor={false} isPatient={true} isAdmin={false}/> },
    { path: "doctor/home", element: <HomePage isDoctor={true} isPatient={false} isAdmin={false}/> },
    { path: "patient/profile", element: <ProfilePage isDoctor={false} isPatient={true} isAdmin={false} /> },
    { path: "doctor/profile", element: <ProfilePage isDoctor={true} isPatient={false} isAdmin={false} /> },
    { path: "patient/about", element: <AboutPage isDoctor={false} isPatient={true} isAdmin={false} /> },
    { path: "doctor/about", element: <AboutPage isDoctor={true} isPatient={false} isAdmin={false} /> },
    { path: "patient/reports", element: <ReportPage isDoctor={false} isPatient={true} isAdmin={false} /> },
    { path: "doctor/reports", element: <ReportPage isDoctor={true} isPatient={false} isAdmin={false} /> },
    { path: "doctor/patients", element: <PatientPage isDoctor={true} isPatient={false} isAdmin={false} /> },
    { path: "patient/reports/:id", element: <ReportsViewPage isDoctor={false} isPatient={true} isAdmin={false} /> },
    { path: "doctor/reports/:id", element: <ReportsViewPage isDoctor={true} isPatient={false} isAdmin={false} /> },
    { path: "doctor/reports/create", element: <ReportsCreatePage isDoctor={true} isPatient={false} isAdmin={false} /> },
    { path: "doctor/diseases", element: <DiseasePage isDoctor={true} isPatient={false} isAdmin={false} /> },
    { path: "patient/diseases", element: <DiseasePage isDoctor={false} isPatient={true} isAdmin={false} /> },
    { path: "admin/login", element: <AdminLoginPage /> },
    { path: "admin/", element: <AdminPage /> },
    { path: "admin/doctors", element: <AdminPage /> },
    { path: "admin/doctors/create", element: <AdminDoctorsCreatePage /> },
    { path: "admin/doctors/:id", element: <AdminDoctorsPage /> },
])