import React, { Component } from 'react';
import imgLogo from '../img/logo-casandra-lopez.png';
import Nav from './Nav.js';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    
    render(){
        return (
            <header className="header">
                <div>
                    <a href="/"><img src={imgLogo} className="logo" alt="Frontend Casandra López" /></a>
                    <Nav />
                </div>
            </header>
        );
    }
}

export default Header;