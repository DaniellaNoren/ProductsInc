import { Component, Fragment } from 'react';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect
} from 'react-router-dom';

export default class AdminUsers extends Component{
    
    render() {
        $(window).scrollTop(0)
        return (
            <div>
                <h4><b>AdminUsers:</b></h4>
                <br />
                <div> {/*this div is sidemenu-tab*/}

                    <div className="nav-item">
                        <button className="nav-link text-dark">ALL Users</button>
                    </div>
                    <div>
                        <button className="nav-link text-dark">CREATE User(redirect to register to reuse)</button>
                    </div>

                </div>
                <div> {/*this div is content of the selected tab*/}
                    <ul>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all users will be here, that will be clickable to edit them.
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
