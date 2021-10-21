import { Component, Fragment } from 'react';
import React from 'React'


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
                                <img alt="logo" src="./img/logo.png"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                    <li className="nav-item">
                                    <a className="nav-link" onClick={() => index()}>partial view index</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" onClick={() => getAllProductsView()}>partial view to React</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-dark" > <img src="./img/cart.jpg" width="30" height="30" /> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" >My Page</a>
                                    </li>
                                    {/*<li className="nav-item">*/}
                                    {/*    */}{/*<partial name="_LoginPartial" />*/}
                                    {/*</li>*/}
                                </ul>
                            </div>

                            {/*<partial name="_LoginPartial" />*/}
                        </div>
                </nav>
            </header>

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
