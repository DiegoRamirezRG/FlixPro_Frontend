import { MainboardView } from "../../views/private/mainboard/MainboardView";
import { ProtectedRouteMiddleware } from '../middleware/protected/ProtectedRouteMiddleware';

export const generalPrivateRoutes = [
    {
        path: "/mainboard",
        element: <ProtectedRouteMiddleware>
            <MainboardView/>
        </ProtectedRouteMiddleware>,
    },
];