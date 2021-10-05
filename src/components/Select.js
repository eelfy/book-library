import React from 'react';
import '../theme/Select.css'

const Select = (props) => {
    return (
        <>
            <select name={props.name} className='Select'>
                {props.options && props.options.map(opt => {
                    return <option key={opt} value={opt}>{opt} </option>
                })}
            </select>
        </>
    )
}

export default Select