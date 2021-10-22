﻿import { Component, Fragment } from 'react';
import React from 'React'
import Logout from './Logout.jsx';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect
} from 'react-router-dom';


export default class Headerpart extends Component {

    constructor(props) {
        super(props)
    }

    changeViewMenu = (viewpage) => {
        //console.log(viewpage)
        this.props.setViewPage({ viewpagestate: viewpage })
    }


    render() {
        return (
            <header className="item-header">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-info" id="menulogo" alt="Company Logo">
                            <Link to="/"><img alt="logo" src="./img/logo.png" /></Link>
                            
                        </a>
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

                                <li className="nav-item">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin Menu
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><Link to="/adminproducts">Products</Link></li>
                                            <li><Link to="/adminusers">Users</Link></li>
                                            <li><Link to="/adminorders">Orders</Link></li>
                                        </ul>
                                    </li>
                                </li>
                                <li className="nav-item">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            My Page
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><Link to="/userorders">My Order History</Link></li>
                                            <li><Link to="/userdetails">Edit My Details</Link></li>
                                            <li><Link to="/userpage">UserPage</Link></li>

                                        </ul>
                                    </li>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" ><Link to="/checkout"><img src="./img/cart.jpg" width="30" height="30" /></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to="/register"><button>Register</button></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to="/login"><button>Login</button></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Logout /></a>
                                </li>
                            </ul>
                    </div>

                    </div>
                </nav>
            </header >

        )

    }


} // class end tag   

function index() {
    $.get("/Home/Index", function (data) {
        //console.log("reacts index!")
        /*$("#peopleviewlist").html(data);*/
    });
    //document.getElementById("jsmessage").textContent = "List of All People fetched.";
}

function getAllProductsView() {
    $.get("/Home/AllProducts", function (data) {
        //console.log("products view !")
        $("#peopleviewlist").html(data);
    });
    //document.getElementById("jsmessage").textContent = "List of All People fetched.";
}
