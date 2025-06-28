import React from 'react'
import Logo from '../../assets/logo.svg'

function LogoImage() {
    return (
        <a href="./index.html">
            <img className="h-9" src={Logo} alt="Weather App" />
        </a>
    )
}

export default LogoImage