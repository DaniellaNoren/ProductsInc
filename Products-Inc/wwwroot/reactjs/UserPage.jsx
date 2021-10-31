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
       user: {}
    }
    componentDidMount(){
        let t = this;
        $.get("api/user/me", function(r){ t.setState({user: r})})
    }
    render() {
        $(window).scrollTop(0)
        return (
            <div>
                <h4>Userpage now</h4>
                <div className="row">
                <td><Link className="btn btn-primary" to={{pathname:"/userdetails", user: this.state.user, back: "/userpage"}}>My details</Link></td>
                <Link className="btn btn-primary" to="/userorders">My orders</Link>
                </div>
            </div>
        )
    }

}