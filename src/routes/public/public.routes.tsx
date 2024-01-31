import { LandingView } from "../../views/public/landing/LandingView";
import { LoginView } from "../../views/public/login/LoginView";
import { NotFoundView } from "../../views/public/notFound/NotFoundView";

export const generalPublicRoutes = [
    {
        path: "/",
        element: <LandingView/>,
    },
    {
        path: "/login",
        element: <LoginView/>,
    },
    {
        path: '*',
        element: <NotFoundView/>
    }
];
