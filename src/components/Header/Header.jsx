import React from "react";

import './Header.css';

import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
            <img src = {logo} alt = "Logo do seriado rick and morty" />
        </header>
    );
};

export { Header };