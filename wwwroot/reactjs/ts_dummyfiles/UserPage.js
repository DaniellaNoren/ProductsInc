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
var react_router_dom_1 = require("react-router-dom");
var UserPage = /** @class */ (function (_super) {
    __extends(UserPage, _super);
    function UserPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    UserPage.prototype.render = function () {
        return (<div>
                <h4>Userpage now</h4>
                <div className="row">
                    <react_router_dom_1.Link className="btn btn-primary" to="/userdetails">My details</react_router_dom_1.Link>
                    <react_router_dom_1.Link className="btn btn-primary" to="/userorders">My orders</react_router_dom_1.Link>
                </div>
            </div>);
    };
    return UserPage;
}(react_1.Component));
exports.default = UserPage;
//# sourceMappingURL=UserPage.js.map