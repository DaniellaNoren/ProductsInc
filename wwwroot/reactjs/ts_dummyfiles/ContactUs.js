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
var ContactUs = /** @class */ (function (_super) {
    __extends(ContactUs, _super);
    function ContactUs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactUs.prototype.render = function () {
        $(window).scrollTop(0);
        return (<div>
                <h4><b>Contact Us at:</b></h4>
                <br />
           <p>Products Inc</p>
                <p>Diddly Shop</p>
                <p>5-12 Chipping Norton Road BB8</p>
                <p>Chipping Norton BB8 3NR</p>
                <p>UK</p>

            </div>);
    };
    return ContactUs;
}(react_1.Component));
exports.default = ContactUs;
//# sourceMappingURL=ContactUs.js.map