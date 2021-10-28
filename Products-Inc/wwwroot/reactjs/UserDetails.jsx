import { Component, Fragment } from 'react';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect
} from 'react-router-dom';

export default class UserDetails extends Component{
    state = {
        user: { userName: "", id: "", email: ""},
        updateUserDetailsModel: { userName: "", email: "", password: "", confirmPassword: "" }
    }
    loadDataFromServer = () => {
        let t = this;
        $.get("/user/me", function(r){ t.setState({user: r, updateUserDetailsModel: {userName: r.userName, email: r.email, ...t.state.updateUserDetailsModel}})})
    }
    componentDidMount = () => {
        this.loadDataFromServer();
    }
    changeUserDetails = () => { 
        
        let updateUserModel = this.state.updateUserDetailsModel;
        let t = this;

        if(updateUserModel.password && updateUserModel.password !== updateUserModel.confirmPassword){
            //error
        }
    
        $.ajax({      
            url: `/user/${this.state.user.id}`,
            type: "PUT",
            data: JSON.stringify(updateUserModel),
            Accept: "application/json",
            contentType: "application/json", 
            dataType: "json",
            success: function(res) {
                console.log(res)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus)
            }
        });
    }
    stateMethod = (newDetail) => {
        this.setState({updateUserDetailsModel: {...this.state.updateUserDetailsModel, ...newDetail}})
        console.log(this.state.updateUserDetailsModel);
    }
     render() {
            return (
                <div>
                    <h4><b>UserDetails:</b></h4>
                   <UserForm user={this.state.user} updateUserModel={this.state.updateUserDetailsModel} stateMethod={this.stateMethod} updateUserMethod={this.changeUserDetails}/> 
                </div>
            )
        }
    }

function UserForm({user, updateUserModel, stateMethod, updateUserMethod}){
    return (
        <form className="form" onSubmit={e => {e.preventDefault(); updateUserMethod()}}>
            {user.userName}
              <div className="form-group">
                    <label htmlFor="username-input">Username</label>
                    <input className="form-control" placeholder={user.userName} value={updateUserModel.userName} type="text" id="username-input" onChange={e => stateMethod({ userName: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email-input">Email</label>
                    <input className="form-control"  placeholder={user.email} value={updateUserModel.email} type="email" id="email-input" onChange={e => stateMethod({ email: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password-input">New password:</label>
                    <input className="form-control" value={updateUserModel.password} type="password" id="password-input" onChange={e => stateMethod({ password: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password-input">Confirm new password:</label>
                    <input className="form-control"  value={updateUserModel.confirmPassword} type="password" id="confirm-password-input" onChange={e => stateMethod({ confirmPassword: e.target.value})}/>
                </div>
                <button type="submit">Edit</button>
        </form>
    )
}    
