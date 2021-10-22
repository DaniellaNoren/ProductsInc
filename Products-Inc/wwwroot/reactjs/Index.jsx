
import { Component, Fragment } from 'react';
import Orders from './Orders.jsx';
import Products from './Products.jsx';
import HeaderPartial from './HeaderPartial.jsx';
import FooterPartial from './FooterPartial.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Logout from './Logout.jsx';
import ContactUs from './ContactUs.jsx';
import UserPage from './UserPage.jsx';
import Checkout from './Checkout.jsx';
import AdminOrders from './AdminOrders.jsx';
import AdminProducts from './AdminProducts.jsx';
import AdminUsers from './AdminUsers.jsx';
import UserOrders from './UserOrders.jsx';
import UserDetails from './UserDetails.jsx';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect
} from 'react-router-dom';


class OrderPage extends Component{
    //get the orders by calling the partialview with user orders. render the html 
    // getOrders = () => {
    //     $.get("url")
    //     .done(r => $(".orders").html = r.data)
    // }

    
    render(){
        return (
            <div>
                <Orders />
            </div>
        )
    }
}

function SideMenu({viewOrders, location, context}) {
    const logOut = () => {
        $.ajax({      
            url: "/user/logout",
            type: "POST",
            success: function(res) {
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
            url: `/user/${id}/orders`,
            type: "GET",
            success: function(res) {
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

export default class Index extends Component {
   state = {
       viewOrders: false,
       isUserAuthenticated: false
    }
    render() {
        const app = (

            <div className="pagewrapper">
                <HeaderPartial />  {/*Header component*/}

                <div className="item-reactcontent">
                    <p>
                        {(() => {
                            switch (this.state.isUserAuthenticated) {
                                case false: return "No user is NOT logged in";
                                case true: return "Yes user is logged in";
                                default: return "this is default not true of fale if logged in";
                            }
                        })()}
                    </p>



                    <a></a>

                    <br />
                    {/*<p>{this.props.someProp}</p>*/}
                    {/*<br/>*/}


                    <Switch>
                        <Route exact path="/"><Redirect to="/products" /></Route>

                        <Route path="/login"><Login /></Route>
                        <Route path="/register"><Register /></Route>
                        <Route path="/logout"><Logout /></Route>

                        <Route path="/products"><Products /></Route>
                        <Route path="/orders"><Orders /></Route>
                        <Route path="/contactus"><ContactUs /></Route>

                        <Route path="/userpage"><UserPage /></Route>
                        <Route path="/userorders"><UserOrders /></Route>
                        <Route path="/userdetails"><UserDetails /></Route>
                        <Route path="/checkout"><Checkout /></Route>


                        <Route path="/adminorders"><AdminOrders /></Route>
                        <Route path="/adminusers"><AdminUsers /></Route>
                        <Route path="/adminproducts"><AdminProducts /></Route>


                    </Switch>


                    {/*<h1>{this.props.test}</h1>*/}
                    {/*<SideMenu viewOrders={() => {*/}
                    {/*    this.setState({ viewOrders: !this.state.viewOrders });*/}
                    {/*}} />*/}

                    {/*<div>*/}
                    {/*    {this.state.viewOrders ? <OrderPage /> : null}*/}
                    {/*</div>*/}

                </div>

                <FooterPartial />  {/*Footer component*/}

            </div> 

        );


        if (typeof window === 'undefined') {
            return (
                <StaticRouter
                    context={this.props.context}
                    location={this.props.location}
                >
                    {app}
                </StaticRouter>
            )
        }
        return (<BrowserRouter>{app}</BrowserRouter>)
        
    }
}



