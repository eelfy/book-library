import React from 'react';
import '../theme/Counter.css'
import HeaderState from '../state/header'
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
    console.log(HeaderState.count)

    return (
        <p className='Counter'>
            Колличество книг <span className='blueText'>{HeaderState.totalBooks}</span>
        </p>
    )
})

export default Counter