import React from 'react';
import '../theme/Input.css'

const Input = (props) => {
    return (
        <>
            <input
                className='Input'
                {...props}
            />
        </>
    )
}

export default Input