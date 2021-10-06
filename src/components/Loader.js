import React from 'react';
import '../theme/loader/Loader.css'
import SpinnerSvg from '../theme/loader/Spinner.svg'
import SpinnerPng from '../theme/loader/Spinner.png'
const Loader = (props) => {
    return (
        <>
            <img className='Loader' src={SpinnerPng} alt="loader" srcSet={SpinnerSvg}></img>
        </>
    )
}

export default Loader