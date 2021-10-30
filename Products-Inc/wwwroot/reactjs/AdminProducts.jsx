import { Component, Fragment } from 'react';
import CreateProduct from './CreateProduct.jsx';
import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect
} from 'react-router-dom';

export default class AdminProducts extends Component{
    state = {
        showCreateProduct: false
    }
    render(){
        return (
            <div>
                <h4><b>AdminProducts:</b></h4>
                <br />
                <div> {/*this div is sidemenu-tab*/}

                    <div className="nav-item">
                        <button className="nav-link text-dark">ALL Products</button>
                    </div>
                    <div>
                        <button onClick={() => this.setState({showCreateProduct: !this.state.showCreateProduct})}className="nav-link text-dark">CREATE Product</button>
                    </div>

                </div>
                {this.state.showCreateProduct ? <CreateProduct/> : 
                <div> {/*this div is content of the selected tab*/}
                    <ul>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                        <li>
                            A list of all products will be here, that will be clickable to edit them.
                        </li>
                    </ul>
                </div>
                }
            </div>
        )
    }
}
