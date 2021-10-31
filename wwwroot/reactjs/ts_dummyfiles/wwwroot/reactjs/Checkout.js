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
exports.Receipt = exports.Checkout = void 0;
var react_1 = require("react");
var js_cookies_1 = require("js-cookies");
var react_router_dom_1 = require("react-router-dom");
var Checkout = /** @class */ (function (_super) {
    __extends(Checkout, _super);
    function Checkout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            viewReceipt: false,
            shoppingCart: {
                Products: [],
                ShoppingCartId: ''
            },
            order: {
                Price: 0.0,
                UserId: 0,
                Products: [],
                Id: 0,
                OrderNr: ""
            },
            redirect: false,
            redirectUrl: "/products"
        };
        _this.cancelOrder = function () {
            _this.setState({
                order: {
                    Price: 0.0,
                    UserId: 0,
                    Products: [],
                    Id: 0,
                    OrderNr: ""
                }
            });
            _this.setState({ redirectUrl: "/products", redirect: true });
        };
        _this.checkoutOrder = function () {
            var t = _this;
            $.ajax({
                url: "/api/shoppingcart/buy",
                type: "POST",
                data: JSON.stringify(_this.state.shoppingCart),
                Accept: "application/json",
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    t.setState(function (oldState) { return ({ viewReceipt: !oldState.viewReceipt, order: res }); });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    t.setState({ redirectUrl: "/login", redirect: true });
                }
            });
        };
        _this.removeProduct = function (id) {
            _this.setState(function (oldState) { return ({ shoppingCart: __assign(__assign({}, _this.state.shoppingCart), { Products: oldState.shoppingCart.Products.filter(function (p) { return p.ProductId !== id; }) }) }); });
            _this.totalPrice();
        };
        _this.totalPrice = function () { return Math.round(this.state.shoppingCart.Products.reduce(function (prevPr, nextPr) { return prevPr + nextPr.Product.ProductPrice; }, 0) * 100) / 100; };
        return _this;
    }
    Checkout.prototype.componentDidMount = function () {
        this.setState({ redirect: false });
        var cookie = js_cookies_1.default.getItem('shopping-cart');
        if (cookie) {
            this.setState({ shoppingCart: JSON.parse(cookie) });
        }
    };
    Checkout.prototype.render = function () {
        if (this.state.redirect)
            return (<div>
                    <RedirectTo url={this.state.redirectUrl}/>
                </div>);
        else
            return (<div>
                    {!this.state.viewReceipt ?
                    <div>
                            <ProductList products={this.state.shoppingCart.Products} removeProductMethod={this.removeProduct}/>
                            <div className="d-flex align-items-end justify-content-end">
                                <h3 className="border border-dark m-3 p-2">Total Price: {this.totalPrice()}kr</h3>
                            </div>
                            <button onClick={this.checkoutOrder} className="p-2 m-3 btn btn-primary">BUY</button>
                            <button onClick={this.cancelOrder} className="p-2 m-3 btn btn-secondary">CANCEL</button>
                        </div>
                    :
                        <div>
                            <Receipt propMsg={"Your order has been placed!"} propOrder={this.state.order}/>
                        </div>}

                </div>);
    };
    return Checkout;
}(react_1.Component));
exports.Checkout = Checkout;
function Receipt(_a) {
    var propOrder = _a.propOrder, propMsg = _a.propMsg, user = _a.user, location = _a.location;
    var printReceipt = function () {
        var divContents = document.getElementById("receipt").innerHTML;
        var receiptWindow = window.open('', '', 'height=500, width=500');
        receiptWindow.document.write('<html>');
        receiptWindow.document.write('<body >');
        receiptWindow.document.write(divContents);
        receiptWindow.document.write('</body></html>');
        receiptWindow.document.close();
        receiptWindow.print();
    };
    var order = propOrder ? propOrder : location.order;
    var msg = propMsg ? propMsg : location.msg;
    return (<div id="receipt" className="d-flex align-items-center justify-content-center">
            <div>
            <h2>{msg}</h2>
            
            {/*<h3>OrderNr: #{order.OrderNr}</h3>*/}
            <h4>Ordernr: {order.orderId}</h4>
            <ul>
                    {order.products.map(function (p, index) { return <li key={index + 10}>{p.product.productName}, {p.product.productPrice}kr</li>; })}
            </ul>
            {/*<h3>{order.Price}kr</h3>*/}

            <h4>Thank you for ordering!</h4>

            <div className="d-flex align-items-end justify-content-end">
                <button className="p-2 m-2 btn btn-success" onClick={printReceipt}>PRINT RECEIPT</button>
                </div>
                

            </div>
        </div>);
}
exports.Receipt = Receipt;
function RedirectTo(_a) {
    var url = _a.url;
    return <react_router_dom_1.Redirect to={url}></react_router_dom_1.Redirect>;
}
function Product(_a) {
    var product = _a.product, removeMe = _a.removeMe;
    return (<tr>
           <td colSpan={5}>{product.ProductName}</td>
           <td colSpan={4}>{product.ProductPrice}</td>    
           <td colSpan={1}><button className="btn btn-danger" onClick={function () { return removeMe(product.ProductId); }}>-</button></td>
        </tr>);
}
function ProductList(_a) {
    var products = _a.products, removeProductMethod = _a.removeProductMethod;
    return (<table className="table">
           <thead>
                <tr>
                    <th colSpan={5}>Product</th>
                    <th colSpan={5}>Price</th>
                </tr>
            </thead>     
            <tbody>
                {products.map(function (p, index) { return <Product product={p.Product} key={index + 50} removeMe={removeProductMethod}/>; })}
            </tbody>
        </table>);
}
