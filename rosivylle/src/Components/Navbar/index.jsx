import React, { useRef, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <header>
             <h3 data-aos="fade-right" data-aos-easing="linear"
                 data-aos-duration="1500">Rosivylle</h3>
             <nav ref={navRef}>
                 <a href="/src/Pages#" onClick={showNavbar} className="linkUnderline" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">Community Crowdfunding</a>
                 <a href="/src/Pages#" onClick={showNavbar} className="linkUnderline" data-aos="fade-left" data-aos-duration="1500">Translate</a>
                 <a href="/src/Pages#" onClick={showNavbar} className="linkUnderline" data-aos="fade-right" data-aos-duration="1500">English</a>
                 <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <CloseIcon />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar} data-aos="fade-left">
                <MenuIcon />
            </button>
        </header>
        </div>
    );
}

export default Navbar;