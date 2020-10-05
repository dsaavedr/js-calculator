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
            display: "Hello from display!",
            fullExp: "Hi from full expression",
            currentExp: "Hi from current expression"
        }
    }

    setDisplay(s) {
        this.setState({

        });
    }

    render() {
        let { functions, numbers, fullExp, currentExp } = this.state;

        return (
            <div id="calc">

                <Display fe={fullExp} ce={currentExp} />

                <Panel btns={{ functions, numbers }} />

            </div>
        )
    }
}