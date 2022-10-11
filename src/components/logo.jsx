import React, { Component } from 'react';
import imagen from '../assets/logo.jpeg'
const Logo = () =>{
    return (
        <div className="row">
            <div className="logo">
                <img src={imagen} width="100%" height="50%" />
            </div>
        </div>
    );
}

export default Logo;