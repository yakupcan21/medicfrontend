import { createBrowserRouter } from "react-router-dom"

import LoginPage from "../pages/loginpage/LoginPage"
import ProfilePage from "../pages/profilepage/ProfilePage"

export const router = createBrowserRouter([
    { path: "", element: <LoginPage /> },
    { path: "profile", element: <ProfilePage /> },
    { path: "about", element: <ProfilePage /> }
])