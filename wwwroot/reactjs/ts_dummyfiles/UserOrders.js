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
function UserOrderTable(_a) {
    var orders = _a.orders;
    return (<div>
            {orders.map(function (o) { return <UserOrder key={o.orderId} order={o}/>; })}
        </div>);
}
function UserOrder(_a) {
    var order = _a.order;
    return (<div className="row text-primary">
        <react_router_dom_1.Link className="text-primary" to={{ pathname: "/orderdetails", order: order, msg: "Receipt" }}>Ordernr: {order.orderId} </react_router_dom_1.Link>
    </div>);
}
var UserOrders = /** @class */ (function (_super) {
    __extends(UserOrders, _super);
    function UserOrders() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            orders: []
        };
        return _this;
    }
    UserOrders.prototype.componentDidMount = function () {
        var t = this;
        $.get("/api/order/users", function () { })
            .done(function (res) { return t.setState({ orders: res }); })
            .fail(function (e) { return console.log(e); });
    };
    UserOrders.prototype.render = function () {
        return (<div>
                <h4>UserOrders:</h4>
                <react_router_dom_1.Link className="btn btn-primary" to="/userpage">Back</react_router_dom_1.Link>
                <UserOrderTable orders={this.state.orders}/>
            </div>);
    };
    return UserOrders;
}(react_1.Component));
exports.default = UserOrders;
//# sourceMappingURL=UserOrders.js.map