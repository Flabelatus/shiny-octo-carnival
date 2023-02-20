import React, { Component } from "react";
import './AppClass.css'
import { Fragment } from "react";

export default class AppClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myVariable: false,
        };
    }

    toggle = () => {
        if (this.state.myVariable) {
            this.setState ({
                myVariable: false,
            });
            return
        }
        this.setState({
            myVariable: true
        });
    }

    render() {
        return (
            <>
                <hr />
                <h1 className="h1-red">{this.props.msg}</h1>
                <p>Using the functional Component version</p>
                <hr />

                {/* Conditional statement for checking the state of the button */}
                {this.state.myVariable && 
                    <Fragment>
                        <p>The current value of isTrue is true</p>
                        <hr />
                    </Fragment>
                }
                <hr />
                
                {/* Alternative way of conditional statement */}
                {this.state.myVariable
                ? <p>The value of the toggle is true</p>
                : <p>The value of the toggle is false</p>
                }

                <hr />
                {/* Button */}
                <a href="#!" className="btn btn-outline-secondary" onClick={this.toggle}>Toggle</a>
            </>
        );
    }
}