import css from "./LoginForm.module.scss"
import { logIn } from "../../redux/auth/operation"
import { useDispatch } from 'react-redux'

const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.elemnt.email.value
        const password = form.elements.password.value

        dispatch(logIn({ email, password }))
        form.reset()
    }
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Enter your password" />
            <button type="submit" className={css.button}>Log In</button>
        </form>
    )
}

export default LoginForm