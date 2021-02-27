import React, { Component } from 'react';
import { Button } from "../Navbar/Button";
import { MenuItems } from "../Navbar/MenuItems";
import "../../style/Navbar.css";

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = { clicked: false }
    }

    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">MoviePlex <i className="fas fa-video"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button><i class="fas fa-user"></i> LogIn</Button>
            </nav>
        )
    }
}

export default Navbar