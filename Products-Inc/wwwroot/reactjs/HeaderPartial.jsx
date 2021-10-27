import { Component, Fragment } from 'react';
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
                        <div className="navbar-brand text-info" id="menulogo" alt="Company Logo">
                            <Link to="/"><img alt="logo" src="./img/logo.png" /></Link>

                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                <li className="nav-item dropdown"> 
                                    <a className="nav-link dropdown-toggle  dropbtn" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mainmenu
                                    </a>
                                    <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link to="/products">Products</Link></li>
                                        <li><Link to="/contactus">Contact Us</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle dropbtn" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin Menu
                                        </a>
                                        <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><Link to="/adminproducts">Products</Link></li>
                                            <li><Link to="/adminusers">Users</Link></li>
                                            <li><Link to="/adminorders">Orders</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle dropbtn" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            My Page
                                        </a>
                                        <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><Link to="/userorders">My Order History</Link></li>
                                            <li><Link to="/userdetails">Edit My Details</Link></li>
                                            {/*<li><Link to="/userpage">UserPage</Link></li>*/}

                                        </ul>
                                    </div>
                                </li>
                                <div className="headerRightSideMenu">
                                    <li className="nav-item">
                                        <Link to="/checkout" className="nav-link text-dark"><img src="./img/cart.jpg" width="35" height="3" /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link"><button className="headerButtons">Register</button></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link" ><button className="headerButtons">Login</button></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><Logout /></a>
                                    </li>
                                </div>
                            </ul>  {/*problem li after li,,,, and atag after atag (atag and link)*/}
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




