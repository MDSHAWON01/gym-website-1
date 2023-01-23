import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-link">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                </div>

                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur1-f"></div>
            <div className="blur blur2-f"></div>
        </div>
    );
};

export default Footer;