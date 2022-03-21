import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoutes, RouteNames } from '../route';
const AppRouter = () => {
    return (
        <Routes>
            {PublicRoutes.map(route =>
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={route.path}
                />)}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}

export default AppRouter