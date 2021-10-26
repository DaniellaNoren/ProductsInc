﻿import { Component } from 'react';

export default class CreateProduct extends Component {
    state = {
        createdProduct: {
            ProductName: '',
            ProductDescription: '',
            ImgPath: '',
            ImgData: '',
            ProductPrice: 0
        },
        errorMsg: ''
    }
    postProduct = () => {
        let t = this;
        $.ajax({      
            url: "/api/product",
            type: "POST",
            data: JSON.stringify(this.state.createdProduct),
            Accept: "application/json",
            contentType: "application/json", 
            dataType: "json",
            success: function(res) {
                t.setState({createdProduct: { 
                    ProductName: '',
                    ProductDescription: '',
                    ImgPath: '',
                    ImgData: '',
                    ProductPrice: 0}
                , errorMsg: ''})
                $("#IMG-input").val(null)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                t.setState({errorMsg: errorThrown});
            }
        });
    }
    setFile = file => {
        const reader = new FileReader();
        reader.onload = e => {
            this.setState({createdProduct: {...this.state.createdProduct, ImgData: btoa(String.fromCharCode.apply(null, new Uint8Array(e.target.result)))}}) 
        }

        reader.readAsArrayBuffer(file); 
    }
    render() {
        return (
             <div>
                 <p className="text-danger">{this.state.errorMsg}</p>
            <form className="form" onSubmit={e => { e.preventDefault(); this.postProduct(); }}>
                <div className="form-group">
                    <label for="name-input">Product-name</label>
                    <input value={this.state.createdProduct.ProductName} className="form-control" type="text" id="name-input" onChange={e =>this.setState({createdProduct: { ...this.state.createdProduct, ProductName: e.target.value}})}/>
                </div>
                <div className="form-group">
                    <label for="description-input">Description</label>
                    <input className="form-control"  value={this.state.createdProduct.ProductDescription} type="text" id="description-input" onChange={e => this.setState({createdProduct: { ...this.state.createdProduct, ProductDescription: e.target.value}})}/>
                </div>
                <div className="form-group">
                    <label for="price-input">Price</label>
                    <input className="form-control" type="number" id="price-input"  value={this.state.createdProduct.ProductPrice} onChange={e => this.setState({createdProduct: { ...this.state.createdProduct, ProductPrice: Number(e.target.value)}})}/>
                </div>
                <div className="form-group">
                    <label for="IMG-input">IMG</label>
                    <input className="form-control" type="file" id="IMG-input" onChange={e => { this.setFile(e.target.files[0]); }}/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
        )
    }
}