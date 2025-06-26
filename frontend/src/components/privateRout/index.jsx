import { useSelector } from 'react-redux';
import { Navigate, useLocation} from 'react-router';

const PrivateRoute = ( {children} ) => {
    const location = useLocation();

    const token = useSelector(state => state.auth.token) 

    if(!token) {
        return <Navigate to={'/login'} state={{ from: location }} replace/>

    }

    return children
}

export default PrivateRoute