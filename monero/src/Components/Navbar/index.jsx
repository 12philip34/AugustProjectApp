import React, { useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../Images/moneroBg.png"
import "./style.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>
                <img src={Logo} alt="monera.png"/>
            </h3>
            <nav ref={navRef}>
                <a href="/#" onClick={showNavbar} className="linkUnderline">Community Crowdfunding</a>
                <a href="/#" onClick={showNavbar} className="linkUnderline">Vulnerability Response</a>
                <a href="/#" onClick={showNavbar} className="linkUnderline">Translate</a>
                <a href="/#" onClick={showNavbar} className="linkUnderline">English</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <CloseIcon />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <MenuIcon />
            </button>
        </header>
    );
}

export default Navbar;