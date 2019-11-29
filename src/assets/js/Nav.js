import React, { Component } from 'react';
//import icoHamburguesa from '../img/ico-hamburguesa.svg';

class Nav extends Component {
    constructor(props){
        super(props);

        ["desplegarClick",].forEach((method) => {
            this[method] = this[method].bind(this);
        });

        this.state = {
            addClassMenu: false, 
            addClassNav: false,
            showtabs: this.props.showtabs
        }

        this.timer = null
    }

    desplegarClick(){
    //cierra el menu
        this.setState({
            showfstmenu: false,
            showdesplegar: false,
        });
    }

    render(){
        return(
        <nav id="nav" className={"nav" +( this.state.showdesplegar ? ' active' : '')}>
            <ul className="list">
                <li><a href="/ApiWeather">ApiWeather</a></li>
                <li><a href="/ApiParking">ApiParking</a></li>
            </ul>
            {/*<img onClick="openHamburguer(event)" className="menu" src={icoHamburguesa} alt="menu hamburguesa"></img>*/}
        </nav>
        )
    }
}
export default Nav;