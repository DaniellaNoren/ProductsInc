import { Component, Fragment } from 'react';
import Orders from './Orders.jsx';
import Products from './Products.jsx';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect,
} from 'react-router-dom';

//class OrderPage extends Component{
//    //get the orders by calling the partialview with user orders. render the html 
//    // getOrders = () => {
//    //     $.get("url")
//    //     .done(r => $(".orders").html = r.data)
//    // }


//    render(){
//        return (
//            <div>
//                <Orders/>
//            </div>
//        )
//    }
//}

//function SideMenu({viewOrders, location, context}) {
//    const logOut = () => {
//        $.ajax({      
//            url: "/user/logout",
//            type: "POST",
//            success: function(res) {
//                console.log("succeeded");
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                console.log(jqXHR);
//                console.log(textStatus);
//                 console.log(errorThrown);
//            }
//          });
//    }
//    const showOrders = () => {
//        let id = "";

//        $.ajax({      
//            url: `/user/${id}/orders`,
//            type: "GET",
//            success: function(res) {
//                console.log("succeeded");
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                console.log(jqXHR);
//                console.log(textStatus);
//                 console.log(errorThrown);
//            }
//          });
//    }
//    return (
//        <ul className="nav flex-column">

//            <li className="nav-item">


//            </li>
//            <li className="nav-item">
//                <button onClick={() => viewOrders()}>My Orders</button>
//            </li>
//            <li className="nav-item">
//                <a onClick={() => console.log("edit profile")} className="nav-link" href="#">Edit profile</a>
//            </li>
//            <li className="nav-item">
//                <a onClick={() => console.log("edit profile")} className="nav-link" href="#">Logout</a>
//            </li>
//        </ul>
//    )
//}

export default class UserPage extends Component {
    state = {
        viewOrders: false
    }

    render() {
        //const app = (
        //    <div>
        //        {/*{this.props.location}*/}


        //            <ul>
        //                <li>
        //                    <a>Userpage now</a>
        //                </li>
        //            </ul>

        return (
            <div>
                <h4><b>Userpage now</b></h4>
                <br />


            </div>
        )
    }

}