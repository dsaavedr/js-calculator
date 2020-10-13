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
            numbers: numbers.reverse(),
            addedDecimal: false,
            addedOperator: false,
            showingResult: false,
            fullExp: "0",
            currentExp: "0"
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSymbol = this.handleSymbol.bind(this);
    }

    clear() {
        this.setState({
            addedDecimal: false,
            addedOperator: false,
            showingResult: false,
            fullExp: "0",
            currentExp: "0"
        });
    }

    handleClick(e) {
        let type = e.target.classList[0];
        let value = e.target.innerText;

        type === "number" ? this.handleNumber(value) : this.handleSymbol(value);
    }

    handleNumber(val) {
        if (this.state.showingResult) {
            this.clear();
        }
        if (this.state.currentExp === "0" && val !== "0") {
            if (this.state.fullExp === "0") {
                this.setState(state => ({
                    fullExp: val,
                    currentExp: val
                }));
            } else {
                this.setState(state => ({
                    fullExp: state.fullExp + val,
                    currentExp: val
                }));
            }
        } else if (this.state.currentExp !== "0") {
            this.setState(state => ({
                fullExp: state.fullExp + val,
                currentExp: state.currentExp + val
            }));
        }
    }

    handleSymbol(val) {
        if (this.state.showingResult) {
            this.setState(state => ({
                showingResult: false,
                fullExp: "" + state.currentExp
            }));
        }
        switch (val) {
            case "AC":
                this.clear();
                break;
            case "/":
            case "x":
            case "-":
            case "+":
                this.handleOperator(val);
                break;
            case ".":
                this.handlePeriod();
                break;
            case "=":
                this.equals();
                break;
            default:
                break;
        }
    }

    handleOperator(val) {
        let { fullExp } = this.state;

        if (this.state.addedOperator && val !== "-") {
            if (!/\d/.test(fullExp.substring(fullExp.length - 1))) {
                this.setState(state => ({
                    fullExp: state.fullExp.slice(0, -1) + val,
                    currentExp: val
                }));
            } else {
                this.equals();
                // this.equals(this.handleSymbol, val);
            }
        } else if (fullExp.substring(fullExp.length - 1) !== "-") {
            this.setState(state => ({
                fullExp: state.fullExp + val,
                currentExp: val,
                addedOperator: true,
                addedDecimal: false
            }));
        }
    }

    handlePeriod() {
        if (!this.state.addedDecimal) {
            if (/\d/.test(this.state.fullExp.slice(-1))) {
                this.setState(state => ({
                    addedDecimal: true,
                    fullExp: state.fullExp + ".",
                    currentExp: state.currentExp + "."
                }));
            } else {
                if (this.state.fullExp !== "0") {
                    this.setState(state => ({
                        addedDecimal: true,
                        fullExp: state.fullExp + "0.",
                        currentExp: state.currentExp + "0."
                    }));
                } else {
                    this.setState(state => ({
                        addedDecimal: true,
                        fullExp: state.fullExp + ".",
                        currentExp: state.currentExp + "."
                    }));
                }
            }
        }
    }

    equals(callback, val) {
        const s = this.state.fullExp;
        let res;

        let numbers = s.match(/-{0,1}\d+\.*\d*/g);
        const op = s.match(/[^-.\d]/g) || [];

        if (op.length < 2 && op[0] === "-") {
            op[0] = "+";
        }

        numbers = numbers.map(n => parseFloat(n));

        if (numbers.length > 1) {
            res = this.operate(numbers[0], numbers[1], op[0]);
        } else {
            res = numbers[0];
        }
        res = parseFloat(res.toFixed(6));

        this.setState(state => ({
            fullExp: state.fullExp + "=" + res,
            currentExp: res,
            showingResult: true,
            addedOperator: false,
            addedDecimal: false
        }), callback ? callback(val) : null);
    }

    operate(n1, n2, op) {
        switch (op) {
            case "/":
                return n1 / n2;
            case "x":
                return n1 * n2;
            case "-":
                return n1 - n2;
            case "+":
                return n1 + n2;
            default:
                return n1 + n2;
        }
    }

    render() {
        let { functions, numbers, fullExp, currentExp } = this.state;

        return (
            <div id="calc">

                <Display fe={fullExp === "0" ? null : fullExp} ce={currentExp} />

                <Panel btns={{ functions, numbers }} click={this.handleClick} />

            </div>
        )
    }
}