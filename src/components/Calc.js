import React, { Component } from 'react';

import Display from './Display';
import Panel from './Panel';

import functions from '../data/functions';
import numbers from '../data/numbers';

export default class Calc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            functions: functions,
            numbers: numbers,
            fullExp: "Hi from full expression",
            currentExp: "Hi from current expression"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    clear() {
        this.setState({
            fullExp: "",
            currentExp: "0"
        });
    }

    handleClick(e) {
        let type = e.target.classList[0];
        let value = e.target.innerText;

        type === "number" ? this.handleNumber(value) : this.handleSymbol(value);
    }

    handleNumber(val) {
        console.log(val);
    }

    handleSymbol(val) {
        console.log(val);
    }

    render() {
        let { functions, numbers, fullExp, currentExp } = this.state;

        return (
            <div id="calc">

                <Display fe={fullExp} ce={currentExp} />

                <Panel btns={{ functions, numbers }} click={this.handleClick} />

            </div>
        )
    }
}