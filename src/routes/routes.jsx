import { createBrowserRouter } from "react-router-dom";
import Movies from "../pages/Movies";
import RegistrationForm from "../pages/RegistrationForm";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter([
    { path: "/", element: <RegistrationForm /> },
    { path: "/movies", element: <Movies /> },
    { path: "/profile", element: <UserProfile />},
    { path: "*", element: <h1>Not Found</h1> },

],
);
export default router;