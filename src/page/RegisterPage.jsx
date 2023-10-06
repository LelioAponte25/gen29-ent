import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import './styles/RegisterPage.css'

const RegisterPage = () => {

    const { reset, handleSubmit, register } = useForm()
    const { registerUser } = useAuth()

    const submit = data => {
        registerUser(data)
        reset({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className="home__register">
            <div className="register__page">
                <div className="register">
                <h1 className="register__title">GIFT SPOTIFY</h1>
                    <form className="register__form" onSubmit={handleSubmit(submit)}>
                        <div className="register__email">
                            <h4 className="register__h4" htmlFor="email">Email</h4>
                            <input className="register__input" {...register('email')} type="email" id="email" />
                        </div>
                        <div className="register__email">
                            <h4 className="register__h4" htmlFor="name">Name</h4>
                            <input className="register__input" {...register('name')} type="text" id="name" />
                        </div>
                        <div className="register__email">
                            <h4 className="register__h4" htmlFor="password">Password</h4>
                            <input className="register__input" {...register('password')} type="password" id="password" />
                        </div>
                        <button className="button__submit">Submit</button>
                        <p className="register__p">Are your register? <Link to='/auth/login'>Go to login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage