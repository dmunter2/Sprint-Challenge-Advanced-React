import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import style from 'styled-components'

const NAV = style.nav`
margin: 2%;
width: 50%;
display: flex;
justify-content: space-between;
`
const H1 = style.h1`
margin: 2%;
`

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <NAV className="navbar">
            <H1>Womans Soccer</H1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </NAV>
    );
};

export default Navbar;

