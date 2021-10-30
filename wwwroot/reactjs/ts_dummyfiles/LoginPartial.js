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
var LoginPartial = /** @class */ (function (_super) {
    __extends(LoginPartial, _super);
    function LoginPartial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loginModel: { userName: "", password: "", rememberMe: false }
        };
        _this.tryToLogin = function (e) {
            e.preventDefault();
            console.log(_this.state.loginModel);
            console.log(JSON.stringify(_this.state.loginModel));
            $.ajax({
                url: "/user/login",
                type: "POST",
                data: JSON.stringify(_this.state.loginModel),
                Accept: "application/json",
                contentType: "application/json",
                dataType: "json",
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
        return _this;
    }
    LoginPartial.prototype.render = function () {
        var _this = this;
        return (<div>
                <form className="formlogin" onSubmit={this.tryToLogin}>
                    <div className="form-group">
                        <label for="username-input">Username</label>
                        <input value={this.state.loginModel.userName} onChange={function (e) { return _this.setState({ loginModel: __assign(__assign({}, _this.state.loginModel), { userName: e.target.value }) }); }} className="form-control" id="username-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <label for="password-input">Password</label>
                        <input value={this.state.loginModel.password} onChange={function (e) { return _this.setState({ loginModel: __assign(__assign({}, _this.state.loginModel), { password: e.target.value }) }); }} className="form-control" id="password-input" type="password"/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" for="remember-me-check">Remember me</label>
                        <input value={this.state.loginModel.rememberMe} onChange={function (e) { return _this.setState({ loginModel: __assign(__assign({}, _this.state.loginModel), { rememberMe: e.target.value }) }); }} id="remember-me-check" className="form-check-input" type="checkbox"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>);
    };
    return LoginPartial;
}(react_1.Component));
exports.default = LoginPartial;
//# sourceMappingURL=LoginPartial.js.map