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
        this.state = {
            orderId: 0,
            products: {
                productId: 0,
                amount: 0
            },


        }
    }


    removeProduct = id => {

        this.setState(oldState => ({
            products: {
                ...this.state.products,
                products: oldState.products.filter(p => p.productId !== id)
            }
        }))
        this.totalPrice();
    }


    totalPrice = () => Math.round(this.state.shoppingCart.products.reduce((prevPr, nextPr) => {
        return prevPr + nextPr.ProductPrice
    }, 0) * 100) / 100;


    saveeditedorder = () => {
        orderobject
    }
        /*delete o ändra amount setState....sedan vid onclick save so post till backend*/

//removeProduct = id => {
//        this.setState(oldState => ({ shoppingCart: { ...this.state.shoppingCart, Products: oldState.shoppingCart.Products.filter(p => p.ProductId !== id) } }))
//        this.totalPrice();
//    }
//    totalPrice = function(){ return Math.round(this.state.shoppingCart.Products.reduce((prevPr, nextPr) => { return prevPr + nextPr.Product.ProductPrice }, 0) * 100) / 100 };
   
      
//    }


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
                    <div className="row">
                        <p>OrderID: {this.props.location.ao.orderId}</p>
                        <p>UserID: {this.props.location.ao.id}</p>
                        <p>Users Name: {this.props.location.ao.user.userName}</p>
                    </div>
                    <table className="table" id="adminorderslist">
                        <thead>
                            <tr>
                                <th scope="col">Product Image</th>
                                <th scope="col">ArtNr</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th className="productamount" scope="col">Amount</th>
                                <th scope="col">Price</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.location.ao.orderProducts.map((ap, index) => (
                            <tr key={index + 300} className="admineditorder">
                                <td><img src={ap.product.imgPath} className="admineditorder_img" alt="logo"  /></td>
                                <td>{ap.productId}</td>
                                <td>{ap.product.productName}</td>
                                <td>{ap.product.productDescription}</td>

                                <td><input className="productamount" type="number" name="inputproductamount" value={ap.amount}
                                    onChange={e => this.setState({ orderobject: { ...this.state.orderobject, password: e.target.value } })}
                                /></td>

                                <td>{ap.product.productPrice}</td>
                                <td><button className="optionBtnRed">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <br/>
                    <div><button onClick={() => this.saveeditedorder} className="optionBtnGreen">SAVE</button></div>
                    <br/>
                    <div><button className="optionBtnGray"><Link to={{ pathname: "/adminorders"}}>BACK</Link></button></div>
                </div>
            </div>
        )
    }
}
