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
        $.get("/api/user/roles", function(res){ console.log(res); t.setState({roles: res})})
        .done(r => {
            $.get(`/api/user/roles/${t.props.location.user.userName}`, 
            function(res){ t.setState({user: {...t.props.location.user, roles: res.roles}})})
            .fail(e => console.log(e));
        }).fail(e => console.log(e))
      
            console.log(this.state)
      
    }
   
    addRole = roles => {
        console.log(roles)
        $.ajax({      
            url: `api/user/roles/${this.state.user.userName}`,
            type: "PUT",
            data: JSON.stringify(roles),
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
            <p>roles</p>
            <p> {this.props.location.user.roles}</p>
            <h3>{this.props.location.user.userName}</h3>
            <Roles roles={this.state.roles} userroles={this.state.user.roles} submitMethod={this.addRole}/>
        </div>
        )
        }

}

function Roles({roles, userroles, submitMethod}){
    console.log(userroles) 
    const editRole = r => { if(userroles.includes(r)) { userroles = userroles.filter(role => role !== r) } else { userroles.push(r) } console.log(userroles)}
    const checked = r => userroles.includes(r)
    return (
        
        <div>
          
            <p></p>
            <form onSubmit={e => { e.preventDefault(); submitMethod(userroles); }}>
            { roles.map(r => <label key={r}>{r} <input type="checkbox"  defaultChecked={checked(r)} onChange={() => editRole(r)}/></label>)}
            <button type="submit">edit</button>
            </form>
        </div>
    )
}