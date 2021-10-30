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
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        return _super.call(this, props) || this;
    }
    Footer.prototype.render = function () {
        return (<footer className="item-footer border-top foot text-dark">
                <div className="container">
                    &copy; 2021 - Products Inc
                </div>
            </footer>);
    };
    return Footer;
}(react_1.Component)); // class end tag
exports.default = Footer;
