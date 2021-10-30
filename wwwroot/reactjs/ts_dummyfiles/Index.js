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
var js_cookies_1 = require("js-cookies");
var Orders_jsx_1 = require("./Orders.jsx");
var Products_jsx_1 = require("./Products.jsx");
var HeaderPartial_jsx_1 = require("./HeaderPartial.jsx");
var FooterPartial_jsx_1 = require("./FooterPartial.jsx");
var Login_jsx_1 = require("./Login.jsx");
var Register_jsx_1 = require("./Register.jsx");
var Logout_jsx_1 = require("./Logout.jsx");
var ContactUs_jsx_1 = require("./ContactUs.jsx");
var UserPage_jsx_1 = require("./UserPage.jsx");
var Checkout_jsx_1 = require("./Checkout.jsx");
var AdminOrders_jsx_1 = require("./AdminOrders.jsx");
var AdminEditOrder_jsx_1 = require("./AdminEditOrder.jsx");
var Adminproducts_jsx_1 = require("./Adminproducts.jsx");
var AdminUsers_jsx_1 = require("./AdminUsers.jsx");
var UserOrders_jsx_1 = require("./UserOrders.jsx");
var UserDetails_jsx_1 = require("./UserDetails.jsx");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            viewOrders: false,
            isUserAuthenticated: false
        };
        return _this;
    }
    Index.prototype.componentDidMount = function () {
        console.log(this.props.userIsAuthenticated);
        if (!js_cookies_1.default.hasItem("shopping-cart") && this.props.userIsAuthenticated) {
            $.get("/api/shoppingcart/users", function (r) { console.log(r); console.log("yay"); })
                .done(function (r) { return console.log(r); }).fail(function (e) { return console.log(e); });
        }
    };
    Index.prototype.render = function () {
        var app = (<div className="pagewrapper">
                <HeaderPartial_jsx_1.default />  {/*Header component*/}


                <div className="item-reactcontent">
                    <p>
                        {/*{(() => {    this is for later .. when checking userlogged in role and hide show buttons and elements /ER */}
                        {/*    switch (this.state.isUserAuthenticated) {*/}
                        {/*        case false: return "No user is logged in";*/}
                        {/*        case true: return "Yes user is logged in";*/}
                        {/*        default: return "this is default not true of fale if logged in";*/}
                        {/*    }*/}
                        {/*})()}*/}
                    </p>



                    <react_router_dom_1.Switch>
                        <react_router_dom_1.Route exact path="/"><react_router_dom_1.Redirect to="/products"/></react_router_dom_1.Route>


                        <react_router_dom_1.Route path="/login"><Login_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/register"><Register_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/logout"><Logout_jsx_1.default /></react_router_dom_1.Route>

                        <react_router_dom_1.Route path="/products"><Products_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/orders"><Orders_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/contactus"><ContactUs_jsx_1.default /></react_router_dom_1.Route>

                        <react_router_dom_1.Route path="/userpage"><UserPage_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/userorders"><UserOrders_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/userdetails"><UserDetails_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/checkout"><Checkout_jsx_1.Checkout /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/orderdetails" render={function (props) { return <Checkout_jsx_1.Receipt {...props}/>; }}/>

                        <react_router_dom_1.Route path="/adminorders"><AdminOrders_jsx_1.default history={react_router_dom_1.useHistory} location={react_router_dom_1.useLocation}/></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/admineditorder" render={function (props) { return <AdminEditOrder_jsx_1.default {...props}/>; }}/>
                        <react_router_dom_1.Route path="/adminusers"><AdminUsers_jsx_1.default /></react_router_dom_1.Route>
                        <react_router_dom_1.Route path="/adminproducts"><Adminproducts_jsx_1.default /></react_router_dom_1.Route>

                    </react_router_dom_1.Switch>



                </div>

                <FooterPartial_jsx_1.default />  {/*Footer component*/}
            </div>);
        if (typeof window === 'undefined') {
            return (<react_router_dom_1.StaticRouter>
                    {app}
                </react_router_dom_1.StaticRouter>);
        }
        return (<react_router_dom_1.BrowserRouter>
                {app}
            </react_router_dom_1.BrowserRouter>);
    };
    return Index;
}(react_1.Component));
exports.default = Index;
var OrderPage = /** @class */ (function (_super) {
    __extends(OrderPage, _super);
    function OrderPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //get the orders by calling the partialview with user orders. render the html 
    // getOrders = () => {
    //     $.get("url")
    //     .done(r => $(".orders").html = r.data)
    // }
    OrderPage.prototype.render = function () {
        return (<div>
                <Orders_jsx_1.default />
            </div>);
    };
    return OrderPage;
}(react_1.Component));
function SideMenu(_a) {
    var viewOrders = _a.viewOrders, location = _a.location, context = _a.context;
    var logOut = function () {
        $.ajax({
            url: "/user/logout",
            type: "POST",
            success: function (res) {
                console.log("succeeded");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    };
    var showOrders = function () {
        var id = "";
        $.ajax({
            url: "/user/" + id + "/orders",
            type: "GET",
            success: function (res) {
                console.log("succeeded");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    };
    return (<ul className="nav flex-column">

            <li className="nav-item">


            </li>
        </ul>);
}
//# sourceMappingURL=Index.js.map