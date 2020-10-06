import React from 'react';
import { Button } from 'react-bootstrap';

export default function Panel(props) {
    const { functions, numbers } = props.btns;

    const funcs = functions.map((item, idx) => {
        return <Button id={item.id} className="function" key={idx} onClick={props.click} >{item.symbol}</Button>
    });

    const nums = numbers.map((item, idx) => {
        return <Button id={item.id} className="number" key={idx} onClick={props.click} >{item.value}</Button>
    });

    return (
        <div id="panel">
            {funcs}
            {nums}
        </div>
    )
}
