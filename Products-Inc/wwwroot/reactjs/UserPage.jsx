

class OrderPage extends React.Component{
    //get the orders by calling the partialview with user orders. render the html 
    // getOrders = () => {
    //     $.get("url")
    //     .done(r => $(".orders").html = r.data)
    // }

    componentDidMount(){
        $.get("/user/orders").done(r => $("#orders").html(r))
    }
    render(){
        return (
            
                <div id="orders"></div>
          
        )
    }
}

function SideMenu({viewOrders}) {
    const logOut = () => {
        $.ajax({      
            url: "/user/logout",
            type: "POST",
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
    const showOrders = () => {
        let id = "";

        $.ajax({      
            url: `/user/${id}/orders`,
            type: "GET",
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
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
               
                <a onClick={() => viewOrders()} className="nav-link active" href="#">My Orders</a>
                
            </li>
            <li className="nav-item">
                <a onClick={() => console.log("edit profile")} className="nav-link" href="#">Edit profile</a>
            </li>
            <li className="nav-item">
                <a onClick={() => console.log("edit profile")} className="nav-link" href="#">Logout</a>
            </li>
        </ul>
    )
}

class UserPage extends React.Component {
   state = {
       viewOrders: false
   }
    render() {
        return (
            <div>
                <SideMenu viewOrders={() => this.setState({viewOrders: !this.state.viewOrders})}/>
                <div>
                    {this.state.viewOrders ? <OrderPage/> : null}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<UserPage />, document.getElementById('content'));