import { Routes, Route} from 'react-router-dom';
import { PublicRoutes} from '../route';
const AppRouter = () => {
    return (
            <Routes>
                {PublicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={route.path}
                    />)}
            </Routes>     
    )
}

export default AppRouter