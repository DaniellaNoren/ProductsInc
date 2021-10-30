"use strict";
// Content/components/expose-components.js
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var server_1 = require("react-dom/server");
var react_router_dom_1 = require("react-router-dom");
var Router_jsx_1 = require("./Router.jsx");
var Index_jsx_1 = require("./Index.jsx");
// any css-in-js or other libraries you want to use server-side
var styled_components_1 = require("styled-components");
var react_helmet_1 = require("react-helmet");
global.React = react_1.default;
global.ReactDOM = react_dom_1.default;
global.ReactDOMServer = server_1.default;
global.ReactRouter = react_router_dom_1.default;
global.Styled = { ServerStyleSheet: styled_components_1.ServerStyleSheet };
global.Helmet = react_helmet_1.default;
global.Components = { Index: Index_jsx_1.default, Router: Router_jsx_1.default };
//# sourceMappingURL=expose-components.js.map