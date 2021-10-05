import React from 'react';
import '../theme/Button.css'
import HeaderState from '../state/header'
import { observer } from "mobx-react-lite";


const Button = observer((props) => {
    console.log();
    return (
        <>
            <button
                style={props.visible ? { opacity: 1 } : { opacity: 0 }}
                onClick={props.onClick}
                className='Button'>{props.text}
            </button>
        </>
    )
})

export default Button