
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

class Products extends React.Component {
    state = {
        products: [
            {
                ProductName: "Orange",
                Price: 26.99,
                Description: "Nice for your health",
                Id: 1,
                ImgPath: "/img/img4.jpg"
            },
            {
                ProductName: "Banana",
                Price: 14.99,
                Description: "Nice for your health",
                Id: 2,
                ImgPath: "/img/img1.png"
            },
            {
                ProductName: "Pomegranate",
                Price: 35.55,
                Description: "Nice for your health",
                Id: 3,
                ImgPath: "/img/img2.jpg"
            },
            {
                ProductName: "Tooth Cleaner",
                Price: 17.90,
                Description: "Nice for your teeth",
                Id: 4,
                ImgPath: "/img/img3.jpg"
            },
            ,
            {
                ProductName: "Coca Cola",
                Price: 17.90,
                Description: "Nice to drink",
                Id: 5,
                ImgPath: "/img/img6.jpg"
            },
            {
                ProductName: "Oreo",
                Price: 17.90,
                Description: "Nice to eat",
                Id: 6,
                ImgPath: "/img/img7.jpg"
            }
            ,
            {
                ProductName: "Crn Flakes",
                Price: 17.90,
                Description: "Nice for healthy breakfast",
                Id: 7,
                ImgPath: "/img/img8.jpg"
            },
            {
                ProductName: "Salt",
                Price: 17.90,
                Description: "Niceto make food",
                Id: 8,
                ImgPath: "/img/img9.jpg"
            },
            {
                ProductName: "Tomato",
                Price: 17.90,
                Description: "Fresh Tomatos",
                Id: 8,
                ImgPath: "/img/img11.jpg"
            },
            {
                ProductName: "Avocado",
                Price: 17.90,
                Description: "Nice for your health",
                Id: 8,
                ImgPath: "/img/img12.jpg"
            },
            {
                ProductName: "Eggo",
                Price: 17.90,
                Description: "Nice to eat",
                Id: 8,
                ImgPath: "/img/img14.jpg"
            },
            {
                ProductName: "SunButter",
                Price: 17.90,
                Description: "Creamy sun butter",
                Id: 8,
                ImgPath: "/img/img16.png"
            }

        ]
    }
    addProduct = product => {
        console.log(`Product with id ${product.Id} added`)
    }
    render() {
        return (
            <div className="products-holder d-flex p-2 justify-content-center flex-wrap overflow-auto">
                {this.state.products.map(p => <Product product={p} key={p.Id} addProductEvent={this.addProduct} />)}
            </div>
        );
    }
}

ReactDOM.render(<Products />, document.getElementById('content'));