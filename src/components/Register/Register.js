import React, { useContext } from 'react';
import { UserAuthContext } from '../../Context/AuthContext';

const Register = () => {
    const { createNewAccount } = useContext(UserAuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        await createNewAccount(email, password)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type={'email'} name='email' placeholder='Enter Email' required />
            <input type={'password'} name="password" placeholder='Enter Password' required />
            <button type='submit'>SUBMIT</button>
        </form>
    );
};

export default Register;