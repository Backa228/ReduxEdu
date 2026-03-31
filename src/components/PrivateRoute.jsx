import { selectIsLoggedIn } from '../redux/auth/selectors'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ redirectTo = "/", component }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return isLoggedIn ? component: <Navigate to={redirectTo}/>
}