import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../Context/AuthContext';

const Login = () => {
    const { logIn } = useContext(UserAuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password).then(result => {
            // console.log(result)
            navigate(from, { replace: true })
        }).catch(err => console.log(err))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type={'email'} name='email' placeholder='Enter Email' required />
            <input type={'password'} name="password" placeholder='Enter Password' required />
            <button type='submit'>SUBMIT</button>
        </form>
    );
};

export default Login;