import { LoginView } from "../../views/public/login/LoginView";
import { NotFoundView } from "../../views/public/notFound/NotFoundView";
import { ShowtimesView } from "../../views/public/showtimes/ShowtimesView";

export const generalPublicRoutes = [
    {
        path: "/",
        element: <LoginView/>,
    },
    {
        path: "/showtimes",
        element: <ShowtimesView/>,
    },
    {
        path: '*',
        element: <NotFoundView/>
    }
];
