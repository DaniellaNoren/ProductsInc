import { Component } from 'react';

export default class CreateProduct extends Component {
    state = {
        createdProduct: {
            ProductName: '',
            ProductDescription: '',
            ImgPath: '',
            ProductPrice: 0
        }
    }
    postProduct = (p) => {
            console.log(p);
    }
    render() {
        return ( <div>
            <img id="imageResult"/>
            <ProductForm createdProduct={this.state.createdProduct} postProduct={this.postProduct}/>
        </div>)
    }
}



function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        // reader.onload = function (e) {
        //     $('#imageResult')
        //         .attr('src', e.target.result);
        // };
        
            let binary; 
            
            reader.onload = e => {
                binary = e.target.result;
                console.log(e.target.result)
                var obj = {
                    data: btoa(String.fromCharCode.apply(null, new Uint8Array(e.target.result)))
                }        
                console.log(obj)            
                
                $.ajax({      
                    url: "/api/product/img",
                    type: "POST",
                    data: JSON.stringify(
                        obj
                    ),
                    Accept : "application/json",
                    contentType: "application/json", 
                    dataType: "json",
                    success: function(res) {
                        console.log("succeeded");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            }
            reader.readAsArrayBuffer(input.files[0]);
        }
    }
    
    function ProductForm({createdProduct, postProduct}) {

    return <form className="form" onSubmit={e => { e.preventDefault(); postProduct(createdProduct); }}>
        <div className="form-group">
                        <label for="name-input">Product-name</label>
        <input className="form-control" type="text" id="name-input" onChange={e => createdProduct.ProductName = e.target.value}/>
        </div>
        <div className="form-group">
                        <label for="description-input">Description</label>
        <input className="form-control" type="text" id="description-input" onChange={e => createdProduct.ProductDescription = e.target.value}/>
        </div>
        <div className="form-group">
                        <label for="price-input">Price</label>
        <input className="form-control" type="number" id="price-input" onChange={e => createdProduct.ProductPrice = e.target.value}/>
        </div>
        <div className="form-group">
                        <label for="IMG-input">IMG</label>
        <input className="form-control" type="file" id="IMG-input" onChange={e => { console.log(e.target.files); readURL(e.target); }}/>
        </div>
            <button type="submit" className="btn btn-primary">Create</button>
    </form>
}