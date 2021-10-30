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
var Logout = /** @class */ (function (_super) {
    __extends(Logout, _super);
    function Logout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.runlogout = function () {
            var t = _this;
            $.ajax({
                url: "/user/logout",
                type: "POST",
                contentType: "application/json",
                success: function (res) {
                    /*this.props.history.push('/') change back to -/ when successfully logged in*/
                    //console.log("yes we are logged in")
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
    Logout.prototype.render = function () {
        return (<button onClick={this.runlogout}>Logout</button>);
    };
    return Logout;
}(react_1.Component));
exports.default = Logout;
