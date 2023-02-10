import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../Context/AuthContext';

const Header = () => {
    const { user, googleSignIn, logOut } = useContext(UserAuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn().then(result => {
            navigate(from, { replace: true })
        }).catch(err => console.log(err))
    }
    return (
        <div>
            {user && <Link to='/'>{user?.email}</Link>}
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            {user ? <>
                <Link to='/dashboard'>Dashboard</Link>
                <button onClick={logOut}>LOGOUT</button>
            </> :
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <button onClick={handleGoogleSignIn}>GoogleSignIn</button>
                </>}

        </div>
    );
};

export default Header;