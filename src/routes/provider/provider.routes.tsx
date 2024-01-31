import { createBrowserRouter } from "react-router-dom";
import { generalPublicRoutes } from "../public/public.routes";
import { generalPrivateRoutes } from "../private/private.routes";

export const routesProvider = createBrowserRouter([
    ...generalPublicRoutes,
    ...generalPrivateRoutes
]);