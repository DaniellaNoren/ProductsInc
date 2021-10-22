import { Component, Fragment } from 'react';
import React from 'React'

export default class Logout extends Component {
    constructor(props) {
        super(props)
    }

    runlogout = () => {

    $.ajax({
        url: "/user/logout",
        type: "POST",
        Accept: "application/json",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log("succeeded");
            /*this.props.history.push('/') change back to -/ when successfully logged in*/
            console.log("yes we are logged in")
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

