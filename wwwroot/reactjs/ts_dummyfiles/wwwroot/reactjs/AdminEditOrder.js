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
var AdminEditOrder = /** @class */ (function (_super) {
    __extends(AdminEditOrder, _super);
    function AdminEditOrder(props) {
        var _this = _super.call(this, props) || this;
        _this.removeProduct = function (id) {
            _this.setState(function (oldState) { return ({
                products: __assign(__assign({}, _this.state.products), { products: oldState.products.filter(function (p) { return p.productId !== id; }) })
            }); });
            _this.totalPrice();
        };
        _this.totalPrice = function () { return Math.round(_this.state.shoppingCart.products.reduce(function (prevPr, nextPr) {
            return prevPr + nextPr.ProductPrice;
        }, 0) * 100) / 100; };
        _this.saveEditedOrder = function () {
            /*orderobject*/
        };
        _this.state = {
            orderId: 0,
            products: {
                productId: 0,
                amount: 0
            }
        };
        return _this;
    }
    /*delete o �ndra amount setState....sedan vid onclick save so post till backend*/
    //removeProduct = id => {
    //        this.setState(oldState => ({ shoppingCart: { ...this.state.shoppingCart, Products: oldState.shoppingCart.Products.filter(p => p.ProductId !== id) } }))
    //        this.totalPrice();
    //    }
    //    totalPrice = function(){ return Math.round(this.state.shoppingCart.Products.reduce((prevPr, nextPr) => { return prevPr + nextPr.Product.ProductPrice }, 0) * 100) / 100 };
    //    }
    AdminEditOrder.prototype.render = function () {
        var _this = this;
        console.log(this.props.location.ao);
        return (<div>
                <h4><b>AdminEditOrder & Details:</b></h4>
                <br />
                <div> {/*this div is sidemenu-tab*/}
                    <div className="nav-item">
                        <button className="nav-link text-dark">ALL Orders</button>
                    </div>
                    <div>
                        <button className="nav-link text-dark">Users Orders</button>
                    </div>

                </div>
                <div> {/*this div is content of the selected tab*/}
                    <div className="row">
                        <p>OrderID: {this.props.location.ao.orderId}</p>
                        <p>UserID: {this.props.location.ao.id}</p>
                        <p>Users Name: {this.props.location.ao.user.userName}</p>
                    </div>
                    <table className="table" id="adminorderslist">
                        <thead>
                            <tr>
                                <th scope="col">Product Image</th>
                                <th scope="col">ArtNr</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th className="productamount" scope="col">Amount</th>
                                <th scope="col">Price</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.location.ao.orderProducts.map(function (ap, index) { return (<tr key={index + 300} className="admineditorder">
                                <td><img src={ap.product.imgPath} className="admineditorder_img" alt="logo"/></td>
                                <td>{ap.productId}</td>
                                <td>{ap.product.productName}</td>
                                <td>{ap.product.productDescription}</td>

                                <td><input className="productamount" type="number" name="inputproductamount" value={ap.amount} onChange={function (e) { return _this.setState({ orderobject: __assign(__assign({}, _this.state.orderobject), { password: e.target.value }) }); }}/></td>

                                <td>{ap.product.productPrice}</td>
                                <td><button className="optionBtnRed">Delete</button></td>
                            </tr>); })}
                        </tbody>
                    </table>
                    <br />
                    <div><button onClick={function () { return _this.saveEditedOrder; }} className="optionBtnGreen">SAVE</button></div>
                    <br />
                    <div><button className="optionBtnGray"><react_router_dom_1.Link to={{ pathname: "/adminorders" }}>BACK</react_router_dom_1.Link></button></div>
                </div>
            </div>);
    };
    return AdminEditOrder;
}(react_1.Component));
exports.default = AdminEditOrder;
