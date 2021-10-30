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
var UserPage_jsx_1 = require("./UserPage.jsx");
var Products_jsx_1 = require("./Products.jsx");
var react_router_dom_1 = require("react-router-dom");
function handleClick(whatever) {
    console.log(whatever);
    react_router_dom_1.browserHistory.push(whatever);
}
var RouterNav = /** @class */ (function (_super) {
    __extends(RouterNav, _super);
    function RouterNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouterNav.prototype.render = function () {
        var app = (<div>
                <h1>{this.props.someProp}</h1>
                <react_router_dom_1.Switch>
                    <react_router_dom_1.Route path="/products"><Products_jsx_1.default name={this.props.name}/></react_router_dom_1.Route>
                    <react_router_dom_1.Route path="/mypage">
                        <UserPage_jsx_1.default />
                    </react_router_dom_1.Route>
                  
                </react_router_dom_1.Switch>


       
            </div>);
        if (typeof window === 'undefined') {
            return (<react_router_dom_1.StaticRouter history={react_router_dom_1.browserHistory} context={this.props.context} location={this.props.location}>
                    {app}
                </react_router_dom_1.StaticRouter>);
        }
        return <react_router_dom_1.BrowserRouter history={react_router_dom_1.browserHistory}>{app}</react_router_dom_1.BrowserRouter>;
    };
    return RouterNav;
}(react_1.Component));
exports.default = RouterNav;
