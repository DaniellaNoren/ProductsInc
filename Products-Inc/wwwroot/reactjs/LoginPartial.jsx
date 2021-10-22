import { Component, Fragment } from 'react';
import React from 'React'

export default class LoginPartial extends Component {
    state = {
        loginModel: {userName: "", password: "", rememberMe: false}
    }
    tryToLogin = e => {
        e.preventDefault();
        console.log(this.state.loginModel);
        console.log(JSON.stringify(this.state.loginModel));

        $.ajax({      
            url: "/user/login",
            type: "POST",
            data: JSON.stringify(this.state.loginModel),
            Accept : "application/json",
            contentType: "application/json", 
            dataType: "json",
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
    render() {
        return (
            <div>
                <form className="formlogin" onSubmit={this.tryToLogin}>
                    <div className="form-group">
                        <label for="username-input">Username</label>
                        <input value={this.state.loginModel.userName} onChange={e => this.setState({loginModel: {...this.state.loginModel, userName: e.target.value}})} className="form-control" id="username-input" type="text" />
                    </div>
                    <div className="form-group">
                        <label for="password-input">Password</label>
                        <input value={this.state.loginModel.password} onChange={e => this.setState({loginModel: {...this.state.loginModel, password: e.target.value}})} className="form-control" id="password-input" type="password" />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" for="remember-me-check">Remember me</label>
                        <input value={this.state.loginModel.rememberMe} onChange={e => this.setState({loginModel: {...this.state.loginModel, rememberMe: e.target.value}})} id="remember-me-check" className="form-check-input" type="checkbox" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

