import { Component, Fragment } from 'react';

export default class Checkout extends Component {
    state = {
        viewReceipt: false,
        products: [
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 1,
                ImgPath: "/img/toothpaste.jpg"
            },
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 2,
                ImgPath: "/img/toothpaste.jpg"
            },
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 3,
                ImgPath: "/img/toothpaste.jpg"
            }
        ],
        order: {
            Price: 0.0,
            UserId: 0,
            Products: [],
            Id: 0,
            OrderNr: ""
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

        console.log(this.state.products)
        this.setState({
            order: {
                Price: this.totalPrice,
                UserId: 0,
                Products: this.state.products,
                OrderNr: "1875360286-57382699",
                Id: 0
            }
        })

        console.log("Products have been bought")
        console.log("Order: " + this.state.order)

        this.setState(oldState => ({ viewReceipt: !oldState.viewReceipt }))

    }
    removeProduct = id => {
        this.setState(oldState => ({ products: oldState.products.filter(p => p.Id !== id) }))
        this.totalPrice();
    }
    totalPrice = () => Math.round(this.state.products.reduce((prevPr, nextPr) => { return prevPr + nextPr.Price }, 0) * 100) / 100;

    render() {
        return (
            <div>

                {!this.state.viewReceipt ?
                    <div>
                        <ProductList products={this.state.products} removeProductMethod={this.removeProduct} />
                        <div className="d-flex align-items-end justify-content-end">
                            <h3 className="border border-dark m-3 p-2" >Total Price: {this.totalPrice}kr</h3>
                        </div>
                        <button onClick={this.checkoutOrder} className="p-2 m-3 btn btn-primary">BUY</button>
                        <button onClick={this.cancelOrder} className="p-2 m-3 btn btn-secondary">CANCEL</button>
                    </div>
                    :
                    <div>
                        <Receipt order={this.state.order} user={{ UserName: "user", Id: 1 }} />
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
                <h2>{user.UserName}, your order has been placed!</h2>

                {/*<h3>OrderNr: #{order.OrderNr}</h3>*/}
                <h4>Products Inc</h4>
                <ul>
                    {order.Products.map(p => <li key={p.Id}>{p.ProductName}, {p.Price}kr</li>)}
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

function Product({ product, removeMe }) {
    return (
        <tr>
            <td colSpan={5}>{product.ProductName}</td>
            <td colSpan={4}>{product.Price}</td>
            <td colSpan={1}><button className="btn btn-danger" onClick={() => removeMe(product.Id)}>-</button></td>
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
                {products.map(p => <Product product={p} key={p.Id} removeMe={removeProductMethod} />)}
            </tbody>
        </table>
    )
}