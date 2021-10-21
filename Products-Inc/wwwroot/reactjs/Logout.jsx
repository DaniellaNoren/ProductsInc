import { Component, Fragment } from 'react';
import React from 'React'

export default class Logout extends Component {


    runlogout = () => {
    $.ajax({
        url: "/user/logout",
        type: "POST",
        Accept: "application/json",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log("succeeded");
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

            <div>
                <button onClick={this.runlogout}>LogOUT here</button>
                
            </div>
        )
    }
}

