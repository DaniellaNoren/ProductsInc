import { Component, Fragment } from 'react';
import React from 'React'
import {
    Redirect
} from 'react-router-dom';

export default class Logout extends Component {
    runlogout = () => {
    let t = this;
    $.ajax({
        url: "/user/logout",
        type: "POST",
        contentType: "application/json",
        success: function (res) {
            /*this.props.history.push('/') change back to -/ when successfully logged in*/
            //console.log("yes we are logged in")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })

        
    }


    render() {
        return (
                <button onClick={this.runlogout}>Logout</button>               
        )
    }
}

