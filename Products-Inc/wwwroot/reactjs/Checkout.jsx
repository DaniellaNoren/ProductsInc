import { Component, Fragment } from 'react';
import Cookies from 'js-cookies'

export default class Checkout extends Component {
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
        }
    }
    componentDidMount(){
        let cookie = Cookies.getItem('shopping-cart');
        if(cookie){
            console.log(JSON.parse(cookie))
            this.setState({shoppingCart: JSON.parse(cookie)})
        }
    }
    cancelOrder = () => {
        console.log("Going back to homepage.")

        this.setState({
            order: {
                Price: 0.0,
                UserId: 0,
                Products: [],
                Id: 0,
                OrderNr: ""
            }
        })

    }
    checkoutOrder = () => {
        let t = this;
        $.ajax({      
            url: "/api/shoppingcart/buy",
            type: "POST",
            data: JSON.stringify(this.state.shoppingCart),
            Accept: "application/json",
            contentType: "application/json", 
            dataType: "json",
            success: function(res) {
        
                t.setState(oldState => ({ viewReceipt: !oldState.viewReceipt, order: res }))
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("need to login, bitch")
                //redirect to login/register
            }
        });

    }
    removeProduct = id => {
        this.setState(oldState => ({ shoppingCart: { ...this.state.shoppingCart, Products: oldState.shoppingCart.Products.filter(p => p.ProductId !== id) } }))
        this.totalPrice();
    }
    totalPrice = () => Math.round(this.state.shoppingCart.Products.reduce((prevPr, nextPr) => { return prevPr + nextPr.ProductPrice }, 0) * 100) / 100;

    render() {
        return (
            <div>

                {!this.state.viewReceipt ?
                    <div>
                        <ProductList products={this.state.shoppingCart.Products} removeProductMethod={this.removeProduct} />
                        <div className="d-flex align-items-end justify-content-end">
                            <h3 className="border border-dark m-3 p-2" >Total Price: {this.totalPrice}kr</h3>
                        </div>
                        <button onClick={this.checkoutOrder} className="p-2 m-3 btn btn-primary">BUY</button>
                        <button onClick={this.cancelOrder} className="p-2 m-3 btn btn-secondary">CANCEL</button>
                    </div>
                    :
                    <div>
                        <Receipt order={this.state.order} />
                    </div>
                }

            </div>
        )
    }
}



function Receipt({ order, user }) {
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

    return (
        <div id="receipt" className="d-flex align-items-center justify-content-center">
            <div>
            <h2>Your order has been placed!</h2>
            
            {/*<h3>OrderNr: #{order.OrderNr}</h3>*/}
            <h4>Ordernr: {order.orderId}</h4>
            <ul>
                {order.products.map(p => <li key={p.product.productId}>{p.product.productName}, {p.product.productPrice}kr</li>)}
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

function Product({product, removeMe}){
    return (
        <tr>
           <td colSpan={5}>{product.ProductName}</td>
           <td colSpan={4}>{product.ProductPrice}</td>    
           <td colSpan={1}><button className="btn btn-danger" onClick={() => removeMe(product.ProductId)}>-</button></td>
        </tr>
    )
}

function ProductList({products, removeProductMethod}){
    return (
        <table className="table">
           <thead>
                <tr>
                    <th colSpan={5}>Product</th>
                    <th colSpan={5}>Price</th>
                </tr>
            </thead>     
            <tbody>
                { products.map(p => <Product product={p.Product} key={p.ProductId} removeMe={removeProductMethod}/>) }
            </tbody>
        </table>
    )
}

