import './Navbar.css';

import React from 'react';

type NavbarProps = {
    linkAddress: string;
    linkDisplayName: string;
};

const Navbar = ({ linkAddress, linkDisplayName}: NavbarProps): JSX.Element => {


    return (
        <nav className="navbar fixed-top pt-5 px-5">
            <div className="container">
                <img src={process.env.PUBLIC_URL+"/Logo.png"} className="navbar-brand" width="350px" alt="Midwestern Interactive Logo"></img>
                <a className="nav-item nav-link" href={linkAddress}>{linkDisplayName}</a>
            </div>
        </nav>
    )
}

export default Navbar;
