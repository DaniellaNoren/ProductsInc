import { Component, Fragment } from 'react';
import React from 'React'
import {
    Redirect
} from 'react-router-dom';
import Cookies from 'js-cookies';

export default class Login extends Component {
    state = {
        loginModel: {userName: "", password: "", rememberMe: false},
        redirect: false
    }
    componentDidMount(){
        this.setState({redirect: false})
    }
    tryToLogin = e => {
        e.preventDefault();
        let t = this;

        $.ajax({      
            url: "/user/login",
            type: "POST",
            data: JSON.stringify(this.state.loginModel),
            Accept : "application/json",
            contentType: "application/json", 
            dataType: "json",
            success: function(res) {
                console.log("succeeded");
                let shoppingCart = JSON.parse(Cookies.getItem("shopping-cart"));
                if(shoppingCart){

                    if(!shoppingCart.shoppingCartId || !shoppingCart.UserId){
                        $.ajax({      
                            url: "/api/shoppingcart",
                            type: "POST",
                            data: JSON.stringify(shoppingCart),
                            Accept : "application/json",
                            contentType: "application/json", 
                            dataType: "json",
                            success: function(res) {
                                console.log(res)
                            },
                            error: function(res) {
                                    console.log(res);
                            }
                        })
                    }
                }else{
                    $.get(`/api/shoppingcart/users`, function(r){ console.log(r); console.log("yay")})
                    .done(r => console.log(r)).fail(e => console.log(e));
                }

                t.setState({redirect: true})
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                  console.log(textStatus);
                  console.log(errorThrown);
            }
          });

    }
    render() {
        
             if(this.state.redirect){
                return <Redirect to="/"/>
            }else
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

