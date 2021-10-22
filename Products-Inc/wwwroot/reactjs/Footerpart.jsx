import { Component, Fragment } from 'react';
import React from 'React'


export default class Footer extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <footer className="item-footer border-top foot text-dark">
                <div className="container">
                    &copy; 2021 - Products_Inc - <a>Privacy no link</a>
                </div>
            </footer>
        )

    }


} // class end tag



