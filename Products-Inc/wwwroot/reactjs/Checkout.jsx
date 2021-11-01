
import { Component, Fragment } from 'react';
import Cookies from 'js-cookies'
import {
    Redirect
} from "react-router-dom";

class Checkout extends Component {
    state = {
        viewReceipt: false,
        shoppingCart: {
            Products: [],
            ShoppingCartId: ''
        },
        order: {
            Price: 0.0,
            UserId: 0,
            Products: [],
            Id: 0,
            OrderNr: ""
        },
        redirect: false,
        redirectUrl: "/products"
    }
    componentDidMount() {
        this.setState({ redirect: false })

        let cookie = Cookies.getItem('shopping-cart');
        if (cookie) {
            this.setState({ shoppingCart: JSON.parse(cookie) })
        }
    }
    cancelOrder = () => {

        this.setState({
            order: {
                Price: 0.0,
                UserId: 0,
                Products: [],
                Id: 0,
                OrderNr: ""
            }
        })

        this.setState({ redirectUrl: "/products", redirect: true })

    }
    checkoutOrder = () => {
        let t = this;

        $.ajax({
            url: "/api/shoppingcart/buy",
            method: "POST",
            data: JSON.stringify(this.state.shoppingCart),
            accepts: { json: "application/json" },
            contentType: "application/json",
            dataType: "json",
            success: function(res) {
                
                t.setState(oldState => ({ viewReceipt: !oldState.viewReceipt, order: res }))
            },
            error: function (jqXHR, textStatus, errorThrown) {

                t.setState({ redirectUrl: "/login", redirect: true })

            }
        });

    }
    removeProduct = id => {
        this.setState(oldState => ({ shoppingCart: { ...this.state.shoppingCart, Products: oldState.shoppingCart.Products.filter(p => p.ProductId !== id) } }))
        this.totalPrice();
    }
    totalPrice = function () { return Math.round(this.state.shoppingCart.Products.reduce((prevPr, nextPr) => { return prevPr + nextPr.Product.ProductPrice }, 0) * 100) / 100 };

    render() {
        $(window).scrollTop(0)

        if (this.state.redirect)
            return (
                <div>
                    <RedirectTo url={this.state.redirectUrl} />
                </div>
            )
        else
            return (
                <div>
                    {
                        !this.state.viewReceipt ?
                            <div>
                                <ProductList products={this.state.shoppingCart.Products} removeProductMethod={this.removeProduct} />
                                <div className="d-flex align-items-end justify-content-end totalPriceCheckoutDiv">
                                    <h3 className="border border-white m-3 p-2" >Total Price: {this.totalPrice()}kr</h3>
                                </div>
                                <button onClick={this.checkoutOrder} className="p-2 m-3 btn">BUY</button>
                                <button onClick={this.cancelOrder} className="p-2 m-3 btn">CANCEL</button>
                            </div>
                            :
                            <div>
                                <Receipt propMsg={"Your order has been placed!"} propOrder={this.state.order} />
                            </div>
                    }

                </div>
            )
    }
}



function Receipt({ propOrder, propMsg, user, location }) {
    const printReceipt = () => {

        var divContents = document.getElementById("receipt").innerHTML;
        var receiptWindow = window.open('', '', 'height=500, width=500');
        receiptWindow.document.write('<html>');
        receiptWindow.document.write('<body >');
        receiptWindow.document.write(divContents);
        receiptWindow.document.write('</body></html>');
        receiptWindow.document.close();
        receiptWindow.print();


    };
    const order = propOrder ? propOrder : location.order
    const msg = propMsg ? propMsg : location.msg

    return (
        <div id="receipt" className="d-flex align-items-center justify-content-center">
            <div>
                <h2>{msg}</h2>

            {/*<h3>OrderNr: #{order.OrderNr}</h3>*/}
            <h4>Ordernr: {order.orderId}</h4>
            <ul>
                    {order.orderProducts.map((p, index) => <li key={index+10}>{p.product.productName}, {p.product.productPrice}kr</li>)}
            </ul>
            {/*<h3>{order.Price}kr</h3>*/}

                <h4>Thank you for ordering!</h4>

                <div className="d-flex align-items-end justify-content-end">
                    <button className="p-2 m-2 btn btn-success" onClick={printReceipt}>PRINT RECEIPT</button>
                </div>


            </div>
        </div>
    )
}

function RedirectTo({ url }) {

    return <Redirect to={url}></Redirect>
}


function Product({ product, removeMe }) {
    return (
        <tr>
            <td colSpan={5}>{product.ProductName}</td>
            <td colSpan={4}>{product.ProductPrice}</td>
            <td colSpan={1}><button className="btn btn-danger" onClick={() => removeMe(product.ProductId)}>-</button></td>
        </tr>
    )
}

function ProductList({ products, removeProductMethod }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan={5}>Product</th>
                    <th colSpan={5}>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p, index) => <Product product={p.Product} key={index + 50} removeMe={removeProductMethod} />)}
            </tbody>
        </table>
    )
}

export { Checkout, Receipt }