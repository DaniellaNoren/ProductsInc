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
function OrderList(_a) {
    var orders = _a.orders, editable = _a.editable;
    return (<div>
            {orders.map(function (o) { return <Order editable={editable} order={o} key={o.orderId}/>; })}
        </div>);
}
function OrderProduct(_a) {
    var product = _a.product, editable = _a.editable, onDelete = _a.onDelete;
    return (<div>
            {product.name}
            {editable ? <button onClick={function () { return onDelete(product); }}>Delete</button> : null}
        </div>);
}
function OrderProducts(_a) {
    var products = _a.products, editable = _a.editable, onDelete = _a.onDelete;
    return (<div>
            {products.map(function (p) { return <OrderProduct onDelete={onDelete} editable={editable} product={p} key={p.name}/>; })}
            
        </div>);
}
function Order(_a) {
    var order = _a.order, editable = _a.editable, onDelete = _a.onDelete;
    var deleteDetected = function (p) {
        onDelete(order, p);
    };
    return (<div className="row">
            <p>{order.orderId}</p>
            <OrderProduct onDelete={deleteDetected} editable={editable} products={order.products}/>
          
        </div>);
}
var Orders = /** @class */ (function (_super) {
    __extends(Orders, _super);
    function Orders() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            orders: [
                { products: [{ name: "test" }], orderId: "234784834", userId: 1 },
                { products: [{ name: "test" }], orderId: "2342334029834", userId: 1 },
                { products: [{ name: "test" }], orderId: "23423945645", userId: 2 },
                { products: [{ name: "test" }], orderId: "2342361234", userId: 3 },
            ]
        };
        _this.deleteProductFromOrder = function (order, p) {
            console.log(order);
            console.log(p);
            //ajax call to delete order from product
        };
        return _this;
    }
    Orders.prototype.render = function () {
        $(window).scrollTop(0);
        return (<div>

               <h1>From order component in a different fiiiile</h1>
               {/*<OrderList onDelete={deleteProductFromOrder} orders={this.props.orders.orders} editable={this.props.editable}/>     */}
            </div>);
    };
    return Orders;
}(react_1.Component));
exports.default = Orders;
