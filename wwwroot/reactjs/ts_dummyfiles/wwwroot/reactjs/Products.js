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
var Products = /** @class */ (function (_super) {
    __extends(Products, _super);
    function Products(props) {
        var _this = _super.call(this, props) || this;
        _this.loadDataFromServer = function (e) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', "api/product", true);
            xhr.onload = function () {
                var productlist = JSON.parse(xhr.responseText);
                //console.log(productlist)
                _this.setState({ products: productlist });
            };
            xhr.send();
        };
        _this.componentDidMount = function () {
            _this.loadDataFromServer();
            //window.setInterval(this.loadDataFromServer(), this.state.pollInterval)
        };
        _this.addProduct = function (product) {
            var shoppingCartProduct = {
                product: product,
                amount: 1, productId: product.productId
            };
            $.ajax({
                url: "/api/shoppingcart/products",
                type: "POST",
                data: JSON.stringify(shoppingCartProduct),
                Accept: "application/json",
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    //console.log(res);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        };
        _this.state = {
            products: []
            /*pollInterval: 2000*/
        };
        return _this;
    }
    Products.prototype.render = function () {
        var _this = this;
        return (<div>
                <h4><b>All Products:</b></h4>

                <div className="products-holder d-flex p-2 justify-content-center flex-wrap overflow-auto">

                    {this.state.products.map(function (p) { return (<div key={p.productId.toString()} className="product w-2 m-2">
                            <div>
                                <br />
                                <br />

                                <img src={p.imgPath} className="text-center product-img" alt="Product image"></img>

                                <h4>{p.productName}</h4>
                                <p>{p.productPrice} kr</p>
                                <p>{p.productDescription}</p>

                                <div className="d-flex align-items-end justify-content-end">
                                    <button className="btn btn-success" onClick={function () { return _this.addProduct(p); }}>ADD</button>
                                </div>
                            </div>
                        </div>); })}
                </div>
            </div>);
    };
    return Products;
}(react_1.Component));
exports.default = Products;
function Product(_a) {
    var product = _a.product, addProductEvent = _a.addProductEvent;
    return (<div className="product w-2 m-2">
            <div classNmae="img-hover-zoom">
                <img src={product.ImgPath} className="text-center product-img" alt="Product image"></img>
            </div>
            <div className="box">
                <div className="contents">
                    <h4>{product.ProductName}</h4>
                    <p>{product.Price}kr</p>
                    <p>{product.Description}</p>
                </div>
                <div className="addButton d-flex align-items-end justify-content-end">
                    <button className="btn" onClick={function () { return addProductEvent(product); }}>ADD</button>
                </div>
            </div>
  
        </div>);
}
