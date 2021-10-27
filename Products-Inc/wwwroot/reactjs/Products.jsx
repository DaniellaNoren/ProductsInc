import { Component, Fragment } from 'react';

export default class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
            /*pollInterval: 2000*/
            //products: [
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 1,
            //        ImgPath: "/img/toothpaste.jpg"
            //    },
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 2,
            //        ImgPath: "/img/toothpaste.jpg"
            //    },
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 3,
            //        ImgPath: "/img/toothpaste.jpg"
            //    },
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 4,
            //        ImgPath: "/img/toothpaste.jpg"
            //    },
            //    ,
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 5,
            //        ImgPath: "/img/toothpaste.jpg"
            //    },
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 6,
            //        ImgPath: "/img/toothpaste.jpg"
            //    }
            //    ,
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 7,
            //        ImgPath: "/img/toothpaste.jpg"
            //    },
            //    {
            //        ProductName: "Toothpaste",
            //        Price: 17.90,
            //        Description: "Nice for your teeth",
            //        Id: 8,
            //        ImgPath: "/img/toothpaste.jpg"
            //    }
            //]
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
        console.log(`Product with id ${product.Id} added`)
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


               {/* display of produtcs code goes here*/}
                <h4><b>All Products:</b></h4>

                <div className="products-holder d-flex p-2 justify-content-center flex-wrap overflow-auto">

                    {this.state.products.map(p => (
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
                                        <button className="btn" onClick={() => addProductEvent(p)}>ADD</button>
                                     </div>
                                </div>
                            </div>
                            {/*<Product product={p} addProductEvent={this.addProduct} />*/}
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}


//function Product(product, addProductEvent) {
//    console.log(product.productName)
//    return (
//        <div>
//            <br/>
//            <br/>
//            <img src="./img/toothpaste.jpg" className="text-center product-img" alt="Product image"></img>
//            <p>{/*{product.productId.toString()}*/}</p>
//            <h4>{product.productName}namn</h4>
//            <p>{product.productPrice}kr</p>
//            <p>{product.productDescription}desc</p>

//            <div className="d-flex align-items-end justify-content-end">
//                <button className="btn btn-success" onClick={() => addProductEvent(product)}>ADD</button>
//            </div>
//        </div>
//    )
//}