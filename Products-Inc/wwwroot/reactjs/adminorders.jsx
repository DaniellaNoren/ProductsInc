import { Component, Fragment } from 'react';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect
} from 'react-router-dom';

export default class AdminOrders extends Component {

    render() {
        return (
            <div>
                <h4><b>AdminOrders:</b></h4>
                <br />
                <div> {/*this div is sidemenu-tab*/}

                    <div className="nav-item">
                        <button className="nav-link text-dark">ALL Orders</button>
                    </div>
                    <div>
                        <button className="nav-link text-dark">Users Orders</button>
                    </div>

                </div>
                <div> {/*this div is content of the selected tab*/}
                    <ul>
                        <li>
                            A list of all orders in system, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all orders in system, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all orders in system, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all orders in system, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all orders in system, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all orders in system, that will be clickable to edit them.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}