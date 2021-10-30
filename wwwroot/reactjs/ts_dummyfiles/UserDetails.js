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
var react_router_dom_1 = require("react-router-dom");
var UserDetails = /** @class */ (function (_super) {
    __extends(UserDetails, _super);
    function UserDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            user: { userName: "", id: "", email: "" },
            updateUserDetailsModel: { userName: "", email: "", password: "", confirmPassword: "" },
            msgIsError: false,
            msg: ""
        };
        _this.loadDataFromServer = function () {
            var t = _this;
            $.get("/user/me", function (r) { t.setState({ user: r, updateUserDetailsModel: __assign({ userName: r.userName, email: r.email }, t.state.updateUserDetailsModel) }); });
        };
        _this.componentDidMount = function () {
            _this.loadDataFromServer();
        };
        _this.changeUserDetails = function () {
            _this.setState({ msgIsError: false, msg: "" });
            var updateUserModel = _this.state.updateUserDetailsModel;
            var t = _this;
            if (updateUserModel.password && updateUserModel.password !== updateUserModel.confirmPassword) {
                _this.setState({ msgIsError: true, msg: "Passwords do not match" });
            }
            $.ajax({
                url: "/user/" + _this.state.user.id,
                type: "PUT",
                data: JSON.stringify(updateUserModel),
                Accept: "application/json",
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    t.setState({ msgIsError: false, msg: "Details updated!" });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    t.setState({ msgIsError: true, msg: jqXHR.responseText });
                }
            });
        };
        _this.stateMethod = function (newDetail) {
            _this.setState({ updateUserDetailsModel: __assign(__assign({}, _this.state.updateUserDetailsModel), newDetail) });
        };
        return _this;
    }
    UserDetails.prototype.render = function () {
        return (<div>
                    <h4><b>UserDetails:</b></h4>
                    <react_router_dom_1.Link className="btn btn-primary" to="/userpage">Back</react_router_dom_1.Link>
                   {this.state.msgIsError ? <p className="text-danger">{this.state.msg}</p> : <p className="text-success">{this.state.msg}</p>}
                   <UserForm user={this.state.user} updateUserModel={this.state.updateUserDetailsModel} stateMethod={this.stateMethod} updateUserMethod={this.changeUserDetails}/> 
                </div>);
    };
    return UserDetails;
}(react_1.Component));
exports.default = UserDetails;
function UserForm(_a) {
    var user = _a.user, updateUserModel = _a.updateUserModel, stateMethod = _a.stateMethod, updateUserMethod = _a.updateUserMethod;
    return (<form className="form" onSubmit={function (e) { e.preventDefault(); updateUserMethod(); }}>
              <div className="form-group">
                    <label htmlFor="username-input">Username</label>
                    <input className="form-control" placeholder={user.userName} value={updateUserModel.userName} type="text" id="username-input" onChange={function (e) { return stateMethod({ userName: e.target.value }); }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email-input">Email</label>
                    <input className="form-control" placeholder={user.email} value={updateUserModel.email} type="email" id="email-input" onChange={function (e) { return stateMethod({ email: e.target.value }); }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password-input">New password:</label>
                    <input className="form-control" value={updateUserModel.password} type="password" id="password-input" onChange={function (e) { return stateMethod({ password: e.target.value }); }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password-input">Confirm new password:</label>
                    <input className="form-control" value={updateUserModel.confirmPassword} type="password" id="confirm-password-input" onChange={function (e) { return stateMethod({ confirmPassword: e.target.value }); }}/>
                </div>
                <button className="btn btn-primary" type="submit">Edit</button>
        </form>);
}
//# sourceMappingURL=UserDetails.js.map