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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React_1 = require("React");
var react_router_dom_1 = require("react-router-dom");
var js_cookies_1 = require("js-cookies");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loginModel: { userName: "", password: "", rememberMe: false },
            redirect: false
        };
        _this.tryToLogin = function (e) {
            e.preventDefault();
            console.log(_this.state.loginModel);
            var t = _this;
            $.ajax({
                url: "/api/user/login",
                type: "POST",
                data: JSON.stringify(_this.state.loginModel),
                //accepts: { json: "application/json" },
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    var shoppingCart = JSON.parse(js_cookies_1.default.getItem("shopping-cart"));
                    if (shoppingCart) {
                        if (!shoppingCart.shoppingCartId || !shoppingCart.UserId) {
                            $.ajax({
                                url: "/api/shoppingcart",
                                type: "POST",
                                data: JSON.stringify(shoppingCart),
                                //accepts: {json: "application/json" },
                                contentType: "application/json",
                                dataType: "json",
                                success: function (res) {
                                    console.log(res);
                                },
                                error: function (res) {
                                    console.log(res);
                                }
                            });
                        }
                    }
                    else {
                        $.get("/api/shoppingcart/users", function (r) { console.log(r); console.log("yay"); })
                            .done(function (r) { return console.log(r); }).fail(function (e) { return console.log(e); });
                    }
                    t.props.location.loggedInCallback(res);
                    t.setState({ redirect: true });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    /*console.log(jqXHR);*/
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        };
        return _this;
    }
    Login.prototype.componentDidMount = function () {
        this.setState({ redirect: false });
    };
    Login.prototype.render = function () {
        var _this = this;
        $(window).scrollTop(0);
        if (this.state.redirect) {
            return <react_router_dom_1.Redirect to="/"/>;
        }
        else
            return (<div>
                    <form className="formlogin" onSubmit={this.tryToLogin}>
                        <div className="form-group">
                            <label htmlFor="username-input">Username</label>
                            <input value={this.state.loginModel.userName} onChange={function (e) {
                    return _this.setState({ loginModel: __assign(__assign({}, _this.state.loginModel), { userName: e.target.value })
                    });
                }} className="form-control" id="username-input" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-input">Password</label>
                            <input value={this.state.loginModel.password} onChange={function (e) {
                    return _this.setState({ loginModel: __assign(__assign({}, _this.state.loginModel), { password: e.target.value })
                    });
                }} className="form-control" id="password-input" type="password"/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="remember-me-check">Remember me</label>
                            <input value={this.state.loginModel.rememberMe} onChange={function (e) {
                    return _this.setState({ loginModel: __assign(__assign({}, _this.state.loginModel), { rememberMe: e.target.value })
                    });
                }} id="remember-me-check" className="form-check-input" type="checkbox"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>);
    };
    return Login;
}(react_1.Component));
exports.default = Login;
//# sourceMappingURL=Login.js.map