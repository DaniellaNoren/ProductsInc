import { Component, Fragment } from 'react';
import React from 'React'
import {
    Redirect
} from 'react-router-dom';

export default class Logout extends Component {
    constructor(props) {
        super(props)
        //state = {
        //    redirect: false
        //}
    }

    //componentDidMount() {
    //    this.setState({ redirect: false })
    //}


    runlogout = () => {
        $(window).scrollTop(0)

        let t = this;
        $.ajax({
            url: "/api/user/logout",
            method: "POST",
            //contentType: "application/json",
            success: function (res) {
            /*this.setState({ redirect: true })*/

            },
            error: function (jqXHR, textStatus, errorThrown) {
                //console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        })

    }


        render() {

            //if (this.state.redirect) {
            //    return <Redirect to="/yourareloggedout" />
            //} else

            return (
                    <button onClick={this.runlogout}>Logout</button>
            )
         }
}

