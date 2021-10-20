﻿class Register extends React.Component {
    state = {
        registerModel: {userName: "", password: "", confirmPassword: "", email: ""}
    }
    register = e => {

        e.preventDefault();

        $.ajax({      
            url: "/user/register",
            type: "POST",
            data: JSON.stringify(this.state.registerModel),
            Accept : "application/json",
            contentType: "application/json", 
            dataType: "json",
            success: function(response, textStatus, jqXHR) {
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
                <form className="form" onSubmit={this.register}>
                    <div className="form-group">
                        <label for="username-input">Username</label>
                        <input value={this.state.registerModel.userName} onChange={e => this.setState({registerModel: {...this.state.registerModel, userName: e.target.value}})} className="form-control" id="username-input" type="text" />
                    </div>
                    <div className="form-group">
                        <label for="email-input">Email</label>
                        <input value={this.state.registerModel.email} onChange={e => this.setState({registerModel: {...this.state.registerModel, email: e.target.value}})} className="form-control" id="email-input" type="email" />
                    </div>
                    <div className="form-group">
                        <label for="password-input">Password</label>
                        <input value={this.state.registerModel.password} onChange={e => this.setState({registerModel: {...this.state.registerModel, password: e.target.value}})} className="form-control" id="password-input" type="password" />
                    </div>
                    <div className="form-group">
                        <label for="confirm-password-input">Repeat Password</label>
                        <input value={this.state.registerModel.confirmPassword} onChange={e => this.setState({registerModel: {...this.state.registerModel, confirmPassword: e.target.value}})} className="form-control" id="confirm-password-input" type="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Register />, document.getElementById('content'));