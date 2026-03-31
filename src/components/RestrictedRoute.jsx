import { selectIsLoggedIn } from '../redux/auth/selectors'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const RestrictedRoute = ({ redirectTo = "/", component }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return isLoggedIn ? <Navigate to={redirectTo}/> : component
}