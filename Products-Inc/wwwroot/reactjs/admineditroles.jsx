import { Component } from 'react'

export default class AddRoles extends Component{
    state = {
        roles: [],
        user: {
            userName: "",
            roles: []
        }
    }
    
    componentDidMount = () => {
        
        let t = this;
        this.setState({user: this.props.user ? this.props.user : this.props.location.user})
        console.log(t.state.user.userName)
        $.get("/api/user/roles", function(res){ t.setState({roles: res})})
.done(r => $.get(`/api/user/roles/${t.state.user.userName}`, 
        function(res){t.setState({user: {...user, roles: res}})}))
        .fail(e => console.log(e));
    }
    addRole = roles => {
        console.log("roles in state: ")
        console.log(this.state.roles)
        $.ajax({      
            url: `api/user/${this.state.user.userName}/roles`,
            type: "PUT",
            data: JSON.stringify(["Admin", "User"]),
            Accept: "application/json",
            contentType: "application/json", 
            dataType: "json",
            success: function(res) {
                console.log(res);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    }
    render() { return (
        <div>
            <p> {this.state.user.roles}</p>
            <h3>{this.state.user.userName}</h3>
            <form>
               
            {
                this.state.roles.map(r => {
                   
                    <div key={r}>
                        <p>{r}</p>
                         <input type="checkbox" id={r} name={r}/> 
                        <label for={r}>{r}</label>
                    </div>
                })
            }
            </form>
        </div>
        )
        }

}