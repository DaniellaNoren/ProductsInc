import { Component, Fragment } from 'react';

export default class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
            /*pollInterval: 2000*/
        }
    }

    loadDataFromServer = e => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', "api/product", true)
        xhr.onload = () => {
            const productlist = JSON.parse(xhr.responseText)
            //console.log(productlist)
            this.setState({ products: productlist })
           
        }
        xhr.send()

    }

    componentDidMount = () => {
        this.loadDataFromServer();
        //window.setInterval(this.loadDataFromServer(), this.state.pollInterval)
    }


    addProduct = product => {
        let shoppingCartProduct = {
            product, amount: 1, productId: product.productId
        };
        $.ajax({      
            url: "/api/shoppingcart/products",
            type: "POST",
            data: JSON.stringify(shoppingCartProduct),
            Accept: "application/json",
            contentType: "application/json", 
            dataType: "json",
            success: function(res) {
                //console.log(res);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                
            }
        });
    } 

    render() {
        return (
            <div>
                <h4><b>All Products:</b></h4>

                <div className="products-holder d-flex p-2 justify-content-center flex-wrap overflow-auto">

                    { this.state.products.map(p => (
                       
                        <div key={p.productId.toString()} className="product w-2 m-2">
                            <div>
                                <br />
                                <br />

                                <img src={p.imgPath} className="text-center product-img" alt="Product image"></img>

                                <h4>{p.productName}</h4>
                                <p>{p.productPrice} kr</p>
                                <p>{p.productDescription}</p>

                                <div className="d-flex align-items-end justify-content-end">
                                    <button className="btn btn-success" onClick={() => this.addProduct(p)}>ADD</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

        
    


function Product({ product, addProductEvent }) {
    return (
        <div className="product w-2 m-2">
            <div classNmae="img-hover-zoom">
                <img src={product.ImgPath} className="text-center product-img" alt="Product image"></img>
            </div>
            <div className="box">
                <div className="contents">
                    <h4>{product.ProductName}</h4>
                    <p>{product.Price}kr</p>
                    <p>{product.Description}</p>
                </div>
                <div className="addButton d-flex align-items-end justify-content-end">
                    <button className="btn" onClick={() => addProductEvent(product)}>ADD</button>
                </div>
            </div>
  
        </div>
    ) 
}         

