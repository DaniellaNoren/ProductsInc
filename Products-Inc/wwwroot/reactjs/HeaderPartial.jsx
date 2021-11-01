import { Component, Fragment } from 'react';
import React from 'React'
import Logout from './Logout.jsx';
import {
    Link
} from 'react-router-dom';
import LoginPartial from './LoginPartial.jsx';


export default class Headerpart extends Component {



    render() {
        console.log(this.props.userNameIs)
        return (
            <header className="item-header">
                <LoginPartial userIsAuthenticated={this.props.userIsAuthenticated} userNameIs={this.props.userNameIs}
                    isUserAdmin={this.props.userIsAdmin} />
                {this.props.userIsAuthenticated}
                {this.props.userIsAdmin}
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <div className="navbar-brand text-info" id="menulogo" alt="Company Logo">
                            <Link to="/"><img alt="logo" src="./img/logo.png" /></Link>

                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mainmenu
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link to="/products">Products</Link></li>
                                        <li><Link to="/contactus">Contact Us</Link></li>
                                    </ul>
                                </li>
                                {this.props.userIsAuthenticated ?
                                    this.props.userIsAdmin ?
                                <li className="nav-item">
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin Menu
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><Link to="/adminproducts">Products</Link></li>
                                            <li><Link to="/adminusers">Users</Link></li>
                                            <li><Link to="/adminorders">Orders</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                :
                                <li className="nav-item">
                                    <div className="nav-item dropdown">

                                        <Link className="btn btn-primary" to="/userpage" id="navbarDarkDropdownMenuLink" role="button" >
                                            My Page
                                        </Link>
                                    </div>
                                </li>
                                : null }
                                <li className="nav-item">
                                    <Link to="/checkout" className="nav-link text-dark"><img src="./img/cart.jpg" width="30" height="30" /></Link>
                                </li>
                                {!this.props.userIsAuthenticated ?
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to={{pathname: "/register", redirectUrl: "/login"}} className="nav-link">Register</Link>
                                </li> : null
                                }
                                {!this.props.userIsAuthenticated ?
                                <li className="nav-item">
                                    <Link className="btn btn-primary" to={{pathname: "/login", loggedInCallback: this.props.setLoggedIn}} className="nav-link" >Login</Link>
                                </li> : null
                                }
                                {this.props.userIsAuthenticated ?
                                <li className="nav-item">
                                   <Logout logoutCallback={this.props.setLoggedOut}/>
                                </li> : null
                                }

                            </ul>
                    </div>

                    </div>
                </nav>
            </header >

        )

    }


} // class end tag

