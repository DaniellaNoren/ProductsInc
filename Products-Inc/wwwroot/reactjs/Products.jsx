import { Component, Fragment } from 'react';

export default class Products extends Component {
    state = {
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
            },
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 4,
                ImgPath: "/img/toothpaste.jpg"
            },
            ,
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 5,
                ImgPath: "/img/toothpaste.jpg"
            },
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 6,
                ImgPath: "/img/toothpaste.jpg"
            }
            ,
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 7,
                ImgPath: "/img/toothpaste.jpg"
            },
            {
                ProductName: "Toothpaste",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 8,
                ImgPath: "/img/toothpaste.jpg"
            }
        ]
    }
    addProduct = product => {
        console.log(`Product with id ${product.Id} added`)
    } 
    render() {
        return (
            <div className="products-holder d-flex p-2 justify-content-center flex-wrap overflow-auto">
                {this.state.products.map(p => <Product product={p} key={p.Id} addProductEvent={this.addProduct}/> )}
            </div>
        );
    }
}


function Product({ product, addProductEvent }) {
    return (
        <div className="product w-2 m-2">
            <img src={product.ImgPath} className="text-center product-img" alt="Product image"></img>
            <h4>{product.ProductName}</h4>
            <p>{product.Price}kr</p>
            <p>{product.Description}</p>

            <div className="d-flex align-items-end justify-content-end">
                <button className="btn btn-success" onClick={() => addProductEvent(product)}>ADD</button>
            </div>
        </div>
    )
}

//ReactDOM.render(<Products />, document.getElementById('reactcontainer'));