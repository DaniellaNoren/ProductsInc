// Content/components/expose-components.js

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import ReactRouter from 'react-router-dom';

import UserPage from './UserPage.jsx';
import Products from './Products.jsx';
import Orders from './Orders.jsx';
import Router from './Router.jsx';
import Index from './Index.jsx';
import CreateProduct from './CreateProduct.jsx'

// any css-in-js or other libraries you want to use server-side
import { ServerStyleSheet } from 'styled-components';
import { renderStylesToString } from 'emotion-server';
import Helmet from 'react-helmet';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.Styled = { ServerStyleSheet };
global.Helmet = Helmet;

global.Components = { CreateProduct, Index, Router, UserPage, Products, Orders };