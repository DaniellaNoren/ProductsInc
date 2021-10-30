"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AdminOrders = /** @class */ (function (_super) {
    __extends(AdminOrders, _super);
    function AdminOrders(props) {
        var _this = _super.call(this, props) || this;
        //    orderDetails(orderdetails) {
        //        this.props.history.push("/admineditorder", { state: orderdetails });
        //}
        _this.loadDataFromServer = function (e) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', "api/order", true);
            xhr.onload = function () {
                var allorderslist = JSON.parse(xhr.responseText);
                console.log(allorderslist);
                _this.setState({ allorders: allorderslist });
            };
            xhr.send();
        };
        _this.componentDidMount = function () {
            _this.loadDataFromServer();
            //window.setInterval(this.loadDataFromServer(), this.state.pollInterval)
        };
        _this.state = {
            allorders: []
        };
        return _this;
    }
    AdminOrders.prototype.render = function () {
        $(window).scrollTop(0);
        return (<div>
                    <h4><b>AdminOrders:</b></h4>
                    <br />
                    <div> {/*this div is sidemenu-tab*/}
                        <div className="nav-item">
                            <button className="nav-link text-dark">ALL Orders</button>
                        </div>
                        <div>
                            <button className="nav-link text-dark">Users Orders</button>
                            {/*<p>isuserlogged: {this.props.propstest}</p>*/}
                        </div>

                    </div>
                    <div> {/*this div is content of the selected tab*/}
                        
                        <table className="table" id="adminorderslist">
                            <thead>
                                <tr>
                                    <th scope="col">OrderID</th>
                                    <th scope="col">UserID</th>
                                    <th scope="col">UserName</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*onClick={() => this.orderDetails(ao)}*/}
                                        {this.state.allorders.map(function (ao) { return (<tr key={ao.orderId} className="allorders">
                                                <td scope="row">{ao.orderId}</td>
                                                <td scope="row">{ao.user.id}</td>
                                                <td scope="row">{ao.user.userName}</td>
                                                <td><button className="optionBtnGreen">
                                                    <react_router_dom_1.Link to={{ pathname: "/admineditorder", ao: ao }}>SHOW / EDIT</react_router_dom_1.Link>
                                                </button></td>

                                            </tr>); })}
                            </tbody>
                        </table>
                    </div>
                </div>);
    };
    return AdminOrders;
}(react_1.Component));
exports.default = AdminOrders;
//function orderDetails(orderdetails) {
//    const editorder = {
//        pathname: '/admineditorder',
//        state: { orderdetailprops: orderdetails }
//    }
//    /*let history = useHistory();*/
//    /*<AdminEditOrder orderobj={ao} />*/
//    /*console.log(ao)*/
//    /*<Redirect push to="/admineditorder" />*/
//    //this.props.history.push('/products')
//    //console.log(this.props.hist)
//    //function orderDetails(ao) {
//    //    history.push("/admineditorder");
//    //}
//    this.props.history.push(editorder)
//}
//# sourceMappingURL=AdminOrders.js.map