import React from 'react';
import { Button } from 'react-bootstrap';

export default function Panel(props) {
    const { functions, numbers } = props.btns;

    const funcs = functions.map((item, idx) => {
        return <Button id={item.id} className="function" key={idx}>{item.symbol}</Button>
    });

    const nums = numbers.map((item, idx) => {
        return <Button id={item.id} className="number" key={idx}>{item.value}</Button>
    });

    return (
        <div>
            Hello from panel!
            {funcs}
            {nums}
        </div>
    )
}
