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

    constructor(props) {
        super(props)
        this.state = {
            userDetailsModel: { userName: "", password: "" },
            changePasswordModel: { password: "", passwordAgain: ""}
        }
    }

        loadDataFromServer = e => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', "api/product", true)
            xhr.onload = () => {
                const user = JSON.parse(xhr.responseText)
                //console.log(productlist)
                this.setState({ userdetails: user })

            }
            xhr.send()

        }

        componentDidMount = () => {
            this.loadDataFromServer();
            //window.setInterval(this.loadDataFromServer(), this.state.pollInterval)
        }


        // this is not complete
        changeUserDetails = e => { 
            e.preventDefault();
        //    console.log(this.state.userDetailsModel);
        //    console.log(JSON.stringify(this.state.userDetailsModel));

        //    const xhr = new XMLHttpRequest();
        //    xhr.open('post', "api/product", true)
        //    xhr.onload = () => {
        //        const user = JSON.parse(xhr.responseText)
        //        //console.log(productlist)
        //        this.setState({ userdetails: user })

        //    }
        //    xhr.send()
        };


    changeUserPassword = e => {
        e.preventDefault()

/*        If-else to make sure password match before savning new password  /ER  */
            if (this.state.changePasswordModel.password === this.state.changePasswordModel.passwordAgain) {
                document.getElementById('passwordmatchmessage').textContent = "Password match!";
            } else {
                document.getElementById('passwordmatchmessage').textContent = "Password do not match";
            }
        
        }


        render() {
            return (
                <div>
                    <h4><b>UserDetails:</b></h4>
                    <br />
                    <div>
                        <form className="formlogin" onSubmit={this.changeUserDetails}>
                            <div className="form-group">
                                <label for="username-input">Username</label>
                                <input value={this.state.userDetailsModel.userName} onChange={e => this.setState({ userDetailsModel: { ...this.state.userDetailsModel, userName: e.target.value } })} className="form-control" id="username-input" type="text" />
                            </div>
                            <button type="submit" className="btn btn-primary">Save Details</button>
                        </form>
                    </div>
                    <br />
                    <form className="formlogin" onSubmit={this.changeUserPassword}>
                        <p id="passwordmatchmessage" ref="passwordmatchmessage"></p>
                        <div className="form-group">
                            <label for="password-input">Password</label>
                            <input value={this.state.changePasswordModel.password} onChange={e => this.setState({ changePasswordModel: { ...this.state.changePasswordModel, password: e.target.value } })} className="form-control" id="password-input" type="password" />
                        </div>
                        <div className="form-group">
                            <label for="password-again">Password again</label>
                            <input value={this.state.changePasswordModel.passwordAgain} onChange={e => this.setState({ changePasswordModel: { ...this.state.changePasswordModel, passwordAgain: e.target.value } })} className="form-control" id="password-again" type="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save New Password</button>
                    </form>


                </div>
            )
        }
    }
