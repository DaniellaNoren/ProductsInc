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
var AdminUsers = /** @class */ (function (_super) {
    __extends(AdminUsers, _super);
    function AdminUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminUsers.prototype.render = function () {
        return (<div>
                <h4><b>AdminUsers:</b></h4>
                <br />
                <div> {/*this div is sidemenu-tab*/}

                    <div className="nav-item">
                        <button className="nav-link text-dark">ALL Users</button>
                    </div>
                    <div>
                        <button className="nav-link text-dark">CREATE User(redirect to register to reuse)</button>
                    </div>

                </div>
                <div> {/*this div is content of the selected tab*/}
                    <ul>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                    </ul>
                </div>

            </div>);
    };
    return AdminUsers;
}(react_1.Component));
exports.default = AdminUsers;
//# sourceMappingURL=AdminUsers.js.map