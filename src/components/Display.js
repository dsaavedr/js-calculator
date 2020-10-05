import React from 'react';

export default function Display(props) {
    return (
        <div id="display">
            <div id="fe">
                {props.fe}
            </div>
            <div id="ce">
                {props.ce}
            </div>
        </div>
    )
}
