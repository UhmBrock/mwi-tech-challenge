import './Navbar.css';

import React from 'react';

type NavbarProps = {
    linkAddress: string;
    linkDisplayName: string;
};

const Navbar = ({ linkAddress, linkDisplayName}: NavbarProps): JSX.Element => {


    return (
        <nav className="navbar pt-md-5">
            <img src={process.env.PUBLIC_URL+"/Logo.png"} className="navbar-brand" width="350px" alt="Midwestern Interactive Logo"></img>
            <a className="nav-item nav-link" href={linkAddress}>{linkDisplayName}</a>
        </nav>
    )
}

export default Navbar;
