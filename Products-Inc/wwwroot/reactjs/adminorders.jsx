import { Component, Fragment } from 'react';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect
} from 'react-router-dom';

export default class AdminOrders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allorders: []
        }
    }


        loadDataFromServer = e => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', "api/order", true)
            xhr.onload = () => {
                const allorderslist = JSON.parse(xhr.responseText)
                //console.log(allorderslist)
                this.setState({ allorders: allorderslist })

            }
            xhr.send()

        }

        componentDidMount = () => {
            this.loadDataFromServer();
            //window.setInterval(this.loadDataFromServer(), this.state.pollInterval)
        }

        orderDetails = () => {

        }

        render() {
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
                        </div>

                    </div>
                    <div> {/*this div is content of the selected tab*/}
                        <ul>
                            {this.state.allorders.map(ao => (
                                <li key={ao.orderId.toString()} className="allorders">

                                    <div className="btn btn-success" onClick={() => orderDetails(ao)}>
                                        console.log(ao)
                                        <p>{ao.orderId}</p>
                                        <p>{ao.productId}</p>
                                        <p>{ao.products}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }
