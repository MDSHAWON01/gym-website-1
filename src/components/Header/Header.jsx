import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menu, setMenu] = useState(false)
    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />
            {menu === false && mobile === true ? (
                <div style={{
                    backgroundColor: "var(--appColor)",
                    padding: '0.5rem',
                    borderRadius: '5px'
                }}>
                    <img src={Bars} alt="" style={{ width: '1rem', height: '1rem' }}
                        onClick={() => setMenu(true)}
                    />
                </div>
            ) : (
                <ul className="header-menu">
                    <li onClick={() => setMenu(false)}>
                        <Link
                            onClick={() => setMenu(false)}
                            to='home'
                            activeClass='active'
                            span={true}
                            smooth={true}
                        >Home</Link>
                    </li>

                    <li onClick={() => setMenu(false)}>
                        <Link
                            onClick={() => setMenu(false)}
                            to='programs'
                            span={true}
                            smooth={true}
                        >Programs</Link>
                    </li>

                    <li onClick={() => setMenu(false)}>
                        <Link
                            onClick={() => setMenu(false)}
                            to='reasons'
                            span={true}
                            smooth={true}
                        >Why Us</Link>
                    </li>

                    <li onClick={() => setMenu(false)}>
                        <Link
                            onClick={() => setMenu(false)}
                            to='plans'
                            span={true}
                            smooth={true}
                        >Plans</Link>
                    </li>

                    <li onClick={() => setMenu(false)}><Link
                        onClick={() => setMenu(false)}
                        to='testimonials'
                        span={true}
                        smooth={true}
                    >Testimonial</Link></li>
                </ul>
            )}

        </div>
    );
};

export default Header;