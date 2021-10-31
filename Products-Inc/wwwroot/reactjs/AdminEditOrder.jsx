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
            orderproducts: this.props.location.ao.orderProducts,
            orderId: 0,
            products: {
                productId: 0,
                amount: 0
            }
        }
    }

    //totalPrice = () => Math.round(this.state.products.reduce((prevPr, nextPr) => {
    //    return prevPr + nextPr.ProductPrice
    //}, 0) * 100) / 100;  // this need some rewrite /ER



    removeProduct = (id) => {

        this.setState(oldState => ({
            products: {
                ...this.state.products,
                orderproducts: oldState.orderproducts.filter(p => p.productId !== id)  //this line in not quite right /ER
            }
        }))
        this.totalPrice();
    }




    saveEditedOrder = (id) => {

        /*unfinished function /ER */



    /*    this.setState(oldState => ({ products: { ...this.state.products, productId: oldState.shoppingCart.Products.filter(p => p.ProductId !== id) } }))*/
//        this.totalPrice();

        /*orderobject*/
    }




    render() {
        $(window).scrollTop(0)

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
                            {this.state.orderproducts.map((ap, index) => (
                            <tr key={index + 300} className="admineditorder">
                                <td><img src={ap.product.imgPath} className="admineditorder_img" alt="logo"  /></td>
                                <td>{ap.productId}</td>
                                <td>{ap.product.productName}</td>
                                <td>{ap.product.productDescription}</td>

                                <td><input className="productamount" type="number" name="inputproductamount" value={ap.amount}
                                        onChange={e => this.setState({ orderproducts: { ...this.state.orderproducts, amount: e.target.value } })}
                                // dont know right now how to change the amount on 1 specific product in the array of orderproducts  /ER
                                /></td>

                                <td>{ap.product.productPrice}</td>
                                <td><button className="optionBtnRed" onClick={() => removeMe(ap.product.ProductId)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <br/>
                    <div><button onClick={() => this.saveEditedOrder} className="optionBtnGreen">SAVE</button></div>
                    <br/>
                    <div><button className="optionBtnGray"><Link to={{ pathname: "/adminorders"}}>BACK</Link></button></div>
                </div>
            </div>
        )
    }
}
