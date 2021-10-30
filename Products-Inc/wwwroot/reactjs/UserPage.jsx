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

    }
    render() {
        return (
            <div>
                <h4>Userpage now</h4>
                <div className="row">
                    <Link className="btn btn-primary" to="/userdetails">My details</Link>
                    <Link className="btn btn-primary" to="/userorders">My orders</Link>
                </div>
            </div>
        )
    }

}