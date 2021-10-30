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

                {/*carousel code goes here*/}
                <div className="content overflow-auto">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img className="carouselImage d-block" src="./img/img18.jpg" alt="Los Angeles" />
                                <div className="quotes carousel-caption">
                                    <p>EATING ORGANIC ISN't A TREND </p>
                                    <p>IT'S A RETURN TO TRADITION </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="carouselImage d-block" src="./img/img19.jpg" alt="Chicago" />
                                <div className="quotes carousel-caption">

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img className="carouselImage d-block" src="./img/img20.jpg" alt="New York" />
                                <div className="quotes carousel-caption">

                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                </div>







                <h4><b>All Productss:</b></h4>

                <div className="products-holder d-flex p-2 justify-content-center flex-wrap overflow-auto">

                    { this.state.products.map(p => (
                       
                        <div key={p.productId.toString()} className="product w-2 m-2">
                            <div>
                                <img src={p.imgPath} className="text-center product-img" alt="Product image"></img>
                                <div className="wrapper">
                                    <div>
                                        <h4>{p.productName}</h4>
                                        <p>{p.productPrice} kr</p>
                                         <p>{p.productDescription}</p>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-end">
                                         <button className="btn" onClick={() => this.addProduct(p)}>ADD</button>
                                    </div>
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

