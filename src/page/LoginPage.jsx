import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import './styles/LoginPage.css'

const LoginPage = () => {


    const { register, reset, handleSubmit } = useForm()
    const { loginUser } = useAuth()

    const submit = data => {
        loginUser(data)
        reset({
            email: '',
            password: ''
        })
    }

    return (
        <div className="home__page">
            <article className="login__page">
                <div className="login">
                    <h1 className="title">Surprise Spotify</h1>
                    <h2 className="login__title">Login</h2>
                    <form className="login__form" onSubmit={handleSubmit(submit)}>
                        <div className="login__div">
                            <h3 className="login__label" htmlFor="email">Email</h3>
                            <input className="login__input" {...register('email')} type="email" id="email" />
                        </div>
                        <div className="login__passaword">
                            <h3 className="title__password" htmlFor="password">Password</h3>
                            <input className="input__password" {...register('password')} type="password" id="password" />
                        </div>
                        <button className="button__search">Submit</button>
                    </form>
                    <h3 className="register__login">Do you have an account? <Link to='/auth/register'>Go you to register</Link></h3>
                </div>
            </article>
        </div>
    )
}

export default LoginPage