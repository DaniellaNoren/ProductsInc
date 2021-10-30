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
var CreateProduct_jsx_1 = require("./CreateProduct.jsx");
var AdminProducts = /** @class */ (function (_super) {
    __extends(AdminProducts, _super);
    function AdminProducts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showCreateProduct: false
        };
        return _this;
    }
    AdminProducts.prototype.render = function () {
        var _this = this;
        return (<div>
                <h4><b>AdminProducts:</b></h4>
                <br />
                <div> {/*this div is sidemenu-tab*/}

                    <div className="nav-item">
                        <button className="nav-link text-dark">ALL Products</button>
                    </div>
                    <div>
                        <button onClick={function () { return _this.setState({ showCreateProduct: !_this.state.showCreateProduct }); }} className="nav-link text-dark">CREATE Product</button>
                    </div>

                </div>
                {this.state.showCreateProduct ? <CreateProduct_jsx_1.default /> :
                <div> {/*this div is content of the selected tab*/}
                    <ul>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                    </ul>
                </div>}
            </div>);
    };
    return AdminProducts;
}(react_1.Component));
exports.default = AdminProducts;
//# sourceMappingURL=AdminProducts.js.map