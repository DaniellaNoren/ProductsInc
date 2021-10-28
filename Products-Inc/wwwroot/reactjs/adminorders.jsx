import { Component, Fragment } from 'react';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect,
    browserHistory
} from 'react-router-dom';



export default class AdminOrders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allorders: []
        }
    }


//    orderDetails(orderdetails) {
//        this.props.history.push("/admineditorder", { state: orderdetails });
//}



        loadDataFromServer = e => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', "api/order", true)
            xhr.onload = () => {
                const allorderslist = JSON.parse(xhr.responseText)
                console.log(allorderslist)
                this.setState({ allorders: allorderslist })

            }
            xhr.send()

            //const xhruser = new XMLHttpRequest();
            //xhruser.open('get', "api/user", true)
            //xhruser.onload = () => {
            //    const userdata = JSON.parse(xhruser.responseText)
            //    //console.log(allorderslist)
            //    this.setState({ user: userdata })
            //}
            //xhruser.send()

        }

    componentDidMount = () => {
            this.loadDataFromServer();
            //window.setInterval(this.loadDataFromServer(), this.state.pollInterval)
        }



    
    render() {
       $(window).scrollTop(0)
            return (
                <div>
                    <h4><b>AdminOrders:</b></h4>
                    <br />
                    <div> {/*this div is sidemenu-tab*/}
                        <div className="nav-item">
                            <button className="nav-link text-dark">ALL Orders</button>
                        </div>
                        <div>
                            <button className="nav-link text-dark">Users Orders</button>
                            {/*<p>isuserlogged: {this.props.propstest}</p>*/}
                        </div>

                    </div>
                    <div> {/*this div is content of the selected tab*/}
                        
                        <table className="table" id="adminorderslist">
                            <thead>
                                <tr>
                                    <th>Option</th>
                                    <th scope="col">OrderID</th>
                                    <th scope="col">UserID, UserName</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*onClick={() => this.orderDetails(ao)}*/}
                                {console.log(this.state.allorders)}
                                        {this.state.allorders.map(ao => (
                                            <tr key={ao.orderId} className="allorders" id="clickabletablerow">
                                                <td><button className="optionBtnGreen"><Link to={{pathname: "/admineditorder", ao}}>SHOW/EDIT</Link></button></td>
                                                <td scope="row">{ao.orderId}</td>
                                                <td scope="row">{ao.user.id}, {ao.user.userName}
                                            
                                                    {/*{ao.orderProductViewModel.map((ap, index) => (*/}
                                            {/*    <div key={"22" + index}>*/}
                                            {/*        */}{/*<p>{ap.productId}, {ap.product.productName}, {ap.product.productDescription},*/}
                                            {/*        */}{/*    {ap.product.productPrice}, {ao.products.amount}</p>*/}
                                            {/*        */}{/*{console.log(ap)}*/}
                                            {/*    </div>*/}
                                            {/*))}*/}
                                                    
                                            </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                    </div>
                </div>
        )

    }
}



//function orderDetails(orderdetails) {
//    const editorder = {
//        pathname: '/admineditorder',
//        state: { orderdetailprops: orderdetails }
//    }
//    /*let history = useHistory();*/
//    /*<AdminEditOrder orderobj={ao} />*/
//    /*console.log(ao)*/
//    /*<Redirect push to="/admineditorder" />*/
//    //this.props.history.push('/products')
//    //console.log(this.props.hist)
//    //function orderDetails(ao) {
//    //    history.push("/admineditorder");
//    //}
//    this.props.history.push(editorder)
//}
