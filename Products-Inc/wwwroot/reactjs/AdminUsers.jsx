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
    state = {
        users: []
    }
    componentDidMount(){
        let t = this;
        $.get("/api/user", function(res){ console.log(res); t.setState({users: res})})
        .done(r => console.log(r))
        .fail(e => console.log(e));
    }
    render(){
        return (
            <div>
                <h4>Users</h4>
            
                <div> 
                    <div>
                        <Link className="btn btn-primary" to={{pathname:"/admincreateuser"}}></Link>
                    </div>

                </div>
                <div> 
                    <UserTable users={this.state.users}/>
                </div>

            </div>
        )
    }
}

function UserTable({users}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(u => <UserInfo key={u.id} user={u}/>)}
            </tbody>
        </table>
    )
}

function UserInfo({user}){
    return (
            <tr>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                         
                <td><Link className="btn btn-primary" to={{pathname:"/adminedituser", user}}>Edit user</Link></td>
                <td><Link className="btn btn-primary" to={{pathname:"/adminedituserroles", user}}>Edit roles</Link></td>
            </tr>
    )}
