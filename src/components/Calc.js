import React, { Component } from 'react';

import Display from './Display';
import Panel from './Panel';

export default class Calc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            functions: functions,
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }

    render() {
        let { functions, numbers } = this.state;

        return (
            <div id="calc">
                <Display />
                <Panel btns={{ functions, numbers }} />
            </div>
        )
    }
}

const functions = [
    {
        id: "delete",
        symbol: "AC"
    },
    {
        id: "divide",
        symbol: "/"
    },
    {
        id: "mult",
        symbol: "X"
    },
    {
        id: "sub",
        symbol: "-"
    },
    {
        id: "add",
        symbol: "+"
    },
    {
        id: "equals",
        symbol: "="
    },
    {
        id: "period",
        symbol: "."
    }
];