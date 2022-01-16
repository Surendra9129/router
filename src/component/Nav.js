import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <Link to='/'>home</Link>
            <Link style={{marginLeft:'20px'}} to='/product'>Product</Link>
        </div>
    );
};

export default Nav;