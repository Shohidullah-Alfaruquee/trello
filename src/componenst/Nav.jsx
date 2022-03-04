import React from 'react';
import {NavLink} from 'react-router-dom';
 
const NavBar = () => {
    const NavLinkStyle = ({isActive}) => {

        return isActive?'nav-link-active': 'nav-link'
    }

    return(
        <div>
            <NavLink to="/"  className={NavLinkStyle}>Home</NavLink>
            <NavLink to="/about"  className={NavLinkStyle} >About</NavLink>
        </div>
    )
};
export default NavBar