"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React_1 = require("React");
var Logout_jsx_1 = require("./Logout.jsx");
var react_router_dom_1 = require("react-router-dom");
var Headerpart = /** @class */ (function (_super) {
    __extends(Headerpart, _super);
    function Headerpart(props) {
        var _this = _super.call(this, props) || this;
        _this.changeViewMenu = function (viewpage) {
            //console.log(viewpage)
            _this.props.setViewPage({ viewpagestate: viewpage });
        };
        return _this;
    }
    Headerpart.prototype.render = function () {
        return (<header className="item-header">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <div className="navbar-brand text-info" id="menulogo" alt="Company Logo">
                            <react_router_dom_1.Link to="/"><img alt="logo" src="./img/logo.png"/></react_router_dom_1.Link>
                            
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
                                        <li><react_router_dom_1.Link to="/products">Products</react_router_dom_1.Link></li>
                                        <li><react_router_dom_1.Link to="/contactus">Contact Us</react_router_dom_1.Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin Menu
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><react_router_dom_1.Link to="/adminproducts">Products</react_router_dom_1.Link></li>
                                            <li><react_router_dom_1.Link to="/adminusers">Users</react_router_dom_1.Link></li>
                                            <li><react_router_dom_1.Link to="/adminorders">Orders</react_router_dom_1.Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-item dropdown">
                                        
                                        <react_router_dom_1.Link className="nav-link" to="/userpage" id="navbarDarkDropdownMenuLink" role="button">
                                            My Page
                                        </react_router_dom_1.Link>
                                         <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            {/* <li><Link to="/userorders">My Order History</Link></li>
            <li><Link to="/userdetails">Edit My Details</Link></li>
            <li><Link to="/userpage">UserPage</Link></li> */}

                                        </ul> 
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <react_router_dom_1.Link to="/checkout" className="nav-link text-dark"><img src="./img/cart.jpg" width="30" height="30"/></react_router_dom_1.Link>
                                </li>
                                <li className="nav-item">
                                    <react_router_dom_1.Link to="/register" className="nav-link"><button>Register</button></react_router_dom_1.Link>
                                </li>
                                <li className="nav-item">
                                    <react_router_dom_1.Link to="/login" className="nav-link"><button>Login</button></react_router_dom_1.Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Logout_jsx_1.default /></a>
                                </li>
                            </ul>  {/*problem li after li,,,, and atag after atag (atag and link)*/}
                    </div>

                    </div>
                </nav>
            </header>);
    };
    return Headerpart;
}(react_1.Component)); // class end tag   
exports.default = Headerpart;
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
//# sourceMappingURL=HeaderPartial.js.map