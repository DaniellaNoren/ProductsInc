
import { Component, Fragment } from 'react';
import OrderThingy from './Orders.jsx';
import Products from './Products.jsx';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect,
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
           <OrderThingy/>
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
            <li className="nav-item">
                <button onClick={() => viewOrders()}>My Orders</button>
            </li>
            <li className="nav-item">
                <a onClick={() => console.log("edit profile")} className="nav-link" href="#">Edit profile</a>
            </li>
            <li className="nav-item">
                <a onClick={() => console.log("edit profile")} className="nav-link" href="#">Logout</a>
            </li>
        </ul>
    )
}

export default class Index extends Component {
   state = {
       viewOrders: false
    }
    render() {
        const app = (
            <div>
              
                <p>{this.props.someProp}</p>
                
                    <ul>
                    <li>
                        
                            <Link to="/orders">Router test</Link>
                        </li>
                        <li>
                            <Link to="/admin">Router test bleh</Link>
                    </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/orders"><OrderThingy /></Route>
                        <Route
                            path="/bleh"><h1>test</h1></Route>
                        <Route
                            path="/products"
                       
                    ><Products/>
                    </Route>
                        {/*<Route*/}
                        {/*        path="*"*/}
                        {/*        component={() => {*/}


                        {/*        return <h1>Not Found </h1>;*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </Switch>
            

                <h1>{this.props.test}</h1>
                <SideMenu viewOrders={() => {
                    this.setState({ viewOrders: !this.state.viewOrders });
                }} />

                <div>
                    {this.state.viewOrders ? <OrderPage /> : null}
                </div>
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
            );
        }
        return <BrowserRouter>{app}</BrowserRouter>;
        
    }
}

