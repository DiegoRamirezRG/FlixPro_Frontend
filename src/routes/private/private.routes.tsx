import { MainboardView } from "../../views/private/mainboard/MainboardView";
import { ProtectedRouteMiddleware } from '../middleware/protected/ProtectedRouteMiddleware';

export const generalPrivateRoutes = [
    {
        path: "/dashboard", //Mainboard
        element: <ProtectedRouteMiddleware>
            <MainboardView/>
        </ProtectedRouteMiddleware>,
    },
];