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
var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            registerModel: { userName: "", password: "", confirmPassword: "", email: "" },
            redirect: false
        };
        _this.register = function (e) {
            var t = _this;
            e.preventDefault();
            $.ajax({
                url: "/user/register",
                type: "POST",
                data: JSON.stringify(_this.state.registerModel),
                accepts: { json: "application/json" },
                contentType: "application/json",
                dataType: "json",
                success: function (response, textStatus, jqXHR) {
                    console.log("succeeded");
                    t.setState({ redirect: true });
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
    Register.prototype.componentDidMount = function () {
        this.setState({ redirect: false });
    };
    Register.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return <react_router_dom_1.Redirect to="/login"/>;
        }
        else
            return (<div>
                <form className="form" onSubmit={this.register}>
                    <div className="form-group">
                        <label htmlFor="username-input">Username</label>
                        <input value={this.state.registerModel.userName} onChange={function (e) { return _this.setState({ registerModel: __assign(__assign({}, _this.state.registerModel), { userName: e.target.value }) }); }} className="form-control" id="username-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email-input">Email</label>
                        <input value={this.state.registerModel.email} onChange={function (e) { return _this.setState({ registerModel: __assign(__assign({}, _this.state.registerModel), { email: e.target.value }) }); }} className="form-control" id="email-input" type="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-input">Password</label>
                        <input value={this.state.registerModel.password} onChange={function (e) { return _this.setState({ registerModel: __assign(__assign({}, _this.state.registerModel), { password: e.target.value }) }); }} className="form-control" id="password-input" type="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password-input">Repeat Password</label>
                        <input value={this.state.registerModel.confirmPassword} onChange={function (e) { return _this.setState({ registerModel: __assign(__assign({}, _this.state.registerModel), { confirmPassword: e.target.value }) }); }} className="form-control" id="confirm-password-input" type="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>);
    };
    return Register;
}(react_1.Component));
exports.default = Register;
