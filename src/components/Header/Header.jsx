import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = false;
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            {user ? <Link to='/dashboard'>Dashboard</Link> :
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>}

        </div>
    );
};

export default Header;