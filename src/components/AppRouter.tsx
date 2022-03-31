import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoutes } from '../route';




const AppRouter = () => {
    return (
        <>
        <Routes>
            {PublicRoutes.map(route =>
                <Route
                    element={<route.element />}
                    path={route.path}
                    key={route.path}
                />)}
            <Route
                path="*"
                element={<Navigate to="/" replace
                 />}
            />
        </Routes>
        </>
    )
}

export default AppRouter