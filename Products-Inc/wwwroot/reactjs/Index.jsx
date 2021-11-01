
import { Component, Fragment } from 'react';
import Cookies from 'js-cookies'
import Orders from './Orders.jsx';
import Products from './Products.jsx';
import HeaderPartial from './HeaderPartial.jsx';
import FooterPartial from './FooterPartial.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Logout from './Logout.jsx';
import YouAreLoggedOut from './YouAreLoggedOut.jsx';
import ContactUs from './ContactUs.jsx';
import UserPage from './UserPage.jsx';
import { Checkout, Receipt } from './Checkout.jsx';
import AdminOrders from './AdminOrders.jsx';
import AdminEditOrder from './AdminEditOrder.jsx';
import AddRoles from './admineditroles.jsx';
import AdminCreateUser from './Adminuserscreate.jsx';
import AdminProducts  from './AdminProducts.jsx';
import AdminRegister from './AdminRegister.jsx';
import AdminUsers from './AdminUsers.jsx';
import UserOrders from './UserOrders.jsx';
import UserDetails  from './UserDetails.jsx';

import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect,
    browserHistory,
    useLocation,
    useHistory
} from 'react-router-dom';
import React, { useEffect } from 'react';




export default class Index extends Component {
   state = {
       viewOrders: false,
       isUserAuthenticated: false,
       isUserAdmin: false,
       nrOfProducts: 0
    }
    componentDidMount(){
        let t = this;

        this.setState({isUserAuthenticated: this.props.userIsAuthenticated, isUserAdmin: this.props.userIsAdmin})
        if(!Cookies.hasItem("shopping-cart") && this.props.userIsAuthenticated){   
            $.get(`/api/shoppingcart/users`, function(r){ if(r.products) t.setState({nrOfProducts: r.products.length})})
                .fail(e => console.log(e));
        }else if(Cookies.hasItem("shopping-cart")){
            let shoppingCart = JSON.parse(Cookies.getItem("shopping-cart"))
          
            t.setState({nrOfProducts: shoppingCart.Products ? shoppingCart.Products.length : 0})
        }
    }
    setNrOfProducts = (nr) => {
        this.setState(oldState => ({nrOfProducts: oldState.nrOfProducts + nr}))
    }
    resetNrOfProducts = () => {
        this.setState(oldState => ({nrOfProducts: 0}))
    }
    loggedIn = (user) => {
        this.setState({isUserAuthenticated: true, isUserAdmin: user.roles.includes("Admin") || user.roles.includes("ADMIN") || user.roles.includes("admin")})
    }
    loggedOut= () => {
        this.setState({isUserAuthenticated: false, isUserAdmin: false})
    }


    render() {
        /*$.(window).scrollTop(0)*/

        const app = (
            
            <div className="pagewrapper">
                <HeaderPartial setNrOfProducts={this.setNrOfProducts} nrOfProducts={this.state.nrOfProducts} setLoggedIn={this.loggedIn} setLoggedOut={this.loggedOut} userIsAdmin={this.state.isUserAdmin} userIsAuthenticated={this.state.isUserAuthenticated}/>  {/*Header component*/}


                <div className="item-reactcontent">
                    <p>
                        {/*{(() => {    this is for later .. when checking userlogged in role and hide show buttons and elements /ER */}
                        {/*    switch (this.state.isUserAuthenticated) {*/}
                        {/*        case false: return "No user is logged in";*/}
                        {/*        case true: return "Yes user is logged in";*/}
                        {/*        default: return "this is default not true of fale if logged in";*/}
                        {/*    }*/}
                        {/*})()}*/}
                    </p>



                    <Switch>
                        <Route exact path="/" render={(props) => <Redirect to={{pathname: "/products", ...props, setNrOfProducts: this.setNrOfProducts}} />}/>
                       {/* // <Route exact path="/"></Route> */}
                        <Route path="/login" render={(props) => <Login {...props } />}/>
                        <Route path="/logout" render={(props) => <Logout {...props } />}/>
                       
                        <Route path="/youareloggedout"><YouAreLoggedOut /></Route>

                        <Route path="/register" render={(props) => <Register {...props } />}/>

                        
                        <Route path="/products" render={(props) => <Products { ...props } setNrOfProducts={this.setNrOfProducts}/>}/>
                        <Route path="/orders"><Orders /></Route>
                        <Route path="/contactus"><ContactUs /></Route>

                        <Route path="/userpage"><UserPage /></Route>
                        <Route path="/userorders"><UserOrders /></Route>
                        <Route path="/userdetails" render={(props) => <UserDetails {...props}/>}/>
                        <Route path="/checkout"><Checkout resetNrOfProducts={this.resetNrOfProducts} /></Route>
                        <Route path="/orderdetails" render={(props) => <Receipt {...props}/>}/>

                        <Route path="/adminorders"><AdminOrders history={useHistory} location={useLocation}/></Route>
                        <Route path="/admineditorder" render={(props) => <AdminEditOrder {...props}/>}/>
                        <Route path="/adminregister" render={(props) => <AdminRegister {...props}/>}/>
                        <Route path="/adminusers"><AdminUsers /></Route>
                      
                        <Route path="/adminproducts" render={(props) => <AdminProducts {...props}/>}/>
                        <Route path="/adminedituser" render={(props) => <UserDetails {...props}/>}/>
                

                        <Route path="/admincreateuser" render={(props) => <AdminCreateUser {...props}/>}/>
                        <Route path="/adminedituserroles" render={(props) => <AddRoles {...props}/>}/>
                    </Switch>



                </div>

                <FooterPartial />  {/*Footer component*/}
            </div>

        );



        if (typeof window === 'undefined') {
            return (
                <StaticRouter>
                    {app}
                </StaticRouter>
            )
        }


        return (
            <BrowserRouter>
                {app}
            </BrowserRouter>
        )


    }
}



class OrderPage extends Component {
    //get the orders by calling the partialview with user orders. render the html
    // getOrders = () => {
    //     $.get("url")
    //     .done(r => $(".orders").html = r.data)
    // }


    render() {
        return (
            <div>
                <Orders />
            </div>
        )
    }
}

function SideMenu({ viewOrders, location, context }) {
    const logOut = () => {
        $.ajax({
            url: "api/user/logout",
            type: "POST",
            success: function (res) {
                console.log("succeeded");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    }
    const showOrders = () => {
        let id = "";

        $.ajax({
            url: `api/user/${id}/orders`,
            type: "GET",
            success: function (res) {
                console.log("succeeded");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    }
    return (
        <ul className="nav flex-column">

            <li className="nav-item">


            </li>
        </ul>
    )
}




