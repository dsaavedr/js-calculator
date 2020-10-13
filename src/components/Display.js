import React from 'react';

export default function Display(props) {
    return (
        <div className="display">
            <div id="fe">
                {props.fe}
            </div>
            <div id="display">
                {props.ce}
            </div>
        </div>
    )
}
