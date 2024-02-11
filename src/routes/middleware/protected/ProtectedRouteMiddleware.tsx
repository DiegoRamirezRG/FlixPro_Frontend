import { ReactNode } from "react"

export const ProtectedRouteMiddleware = ( { children } : { children: ReactNode }) => {
    return (
        <div>ProtectedRouteMiddleware</div>
    )
}
