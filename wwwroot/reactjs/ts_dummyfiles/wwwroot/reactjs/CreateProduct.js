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
var CreateProduct = /** @class */ (function (_super) {
    __extends(CreateProduct, _super);
    function CreateProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            createdProduct: {
                ProductName: '',
                ProductDescription: '',
                ImgPath: '',
                ImgData: '',
                ProductPrice: 0
            },
            errorMsg: ''
        };
        _this.checkData = function () {
            var product = _this.state.createdProduct;
            var errorMsg = '';
            if (!product.ProductName) {
                _this.setState({ errorMsg: "Productname cannot be empty." });
                return false;
            }
            else if (!product.ProductDescription) {
                _this.setState({ errorMsg: "Productdescription cannot be empty." });
                return false;
            }
            else if (!product.ImgData) {
                _this.setState({ errorMsg: "Image not chosen." });
                return false;
            }
            else if (product.ProductPrice <= 0) {
                _this.setState({ errorMsg: "Price not set." });
                return false;
            }
            return true;
        };
        _this.postProduct = function () {
            if (_this.checkData()) {
                var t_1 = _this;
                $.ajax({
                    url: "/api/product",
                    type: "POST",
                    data: JSON.stringify(_this.state.createdProduct),
                    Accept: "application/json",
                    contentType: "application/json",
                    dataType: "json",
                    success: function (res) {
                        t_1.setState({ createdProduct: {
                                ProductName: '',
                                ProductDescription: '',
                                ImgPath: '',
                                ImgData: '',
                                ProductPrice: 0
                            },
                            errorMsg: '' });
                        $("#IMG-input").val(null);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        t_1.setState({ errorMsg: errorThrown });
                    }
                });
            }
        };
        _this.setFile = function (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.setState({ createdProduct: __assign(__assign({}, _this.state.createdProduct), { ImgData: btoa(String.fromCharCode.apply(null, new Uint8Array(e.target.result))) }) });
            };
            reader.readAsArrayBuffer(file);
        };
        return _this;
    }
    CreateProduct.prototype.render = function () {
        var _this = this;
        return (<div>
                 <p className="text-danger">{this.state.errorMsg}</p>
            <form className="form" onSubmit={function (e) { e.preventDefault(); _this.postProduct(); }}>
                <div className="form-group">
                    <label for="name-input">Product-name</label>
                    <input value={this.state.createdProduct.ProductName} className="form-control" type="text" id="name-input" onChange={function (e) { return _this.setState({ createdProduct: __assign(__assign({}, _this.state.createdProduct), { ProductName: e.target.value }) }); }}/>
                </div>
                <div className="form-group">
                    <label for="description-input">Description</label>
                    <input className="form-control" value={this.state.createdProduct.ProductDescription} type="text" id="description-input" onChange={function (e) { return _this.setState({ createdProduct: __assign(__assign({}, _this.state.createdProduct), { ProductDescription: e.target.value }) }); }}/>
                </div>
                <div className="form-group">
                    <label for="price-input">Price</label>
                    <input className="form-control" type="number" id="price-input" value={this.state.createdProduct.ProductPrice} onChange={function (e) { return _this.setState({ createdProduct: __assign(__assign({}, _this.state.createdProduct), { ProductPrice: Number(e.target.value) }) }); }}/>
                </div>
                <div className="form-group">
                    <label for="IMG-input">IMG</label>
                    <input className="form-control" type="file" id="IMG-input" onChange={function (e) { _this.setFile(e.target.files[0]); }}/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>);
    };
    return CreateProduct;
}(react_1.Component));
exports.default = CreateProduct;
