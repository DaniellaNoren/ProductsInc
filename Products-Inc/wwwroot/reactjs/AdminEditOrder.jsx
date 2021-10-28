import { Component, Fragment } from 'react';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect,
    useLocation
} from 'react-router-dom';


export default class AdminEditOrder extends Component {



    constructor(props) {
        super(props)
        //this.state = {
        //    dtprops: ""
        //}
    }


    render() {
        console.log(this.props.location.ao)
        return (
            <div>
                <h4><b>AdminEditOrder & Details:</b></h4>
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
                    <div>
                        {this.props.location.ao.orderProductViewModel.map((ap, index) => (
                            <div key={index + 200}>
                                <p>{ap.productId}, {ap.product.productName}, {ap.product.productDescription},
                                    {ap.product.productPrice}, {ao.products.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
