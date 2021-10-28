import { Component, Fragment } from 'react';


import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect,
} from 'react-router-dom';



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
                <Link to="/userdetails">My details</Link>
                <Link to="/userorders">My orders</Link>


            </div>
        )
    }

}
