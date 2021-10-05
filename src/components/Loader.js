import React from 'react';
// import '../theme/Loader.css'
import SpinnerSvg from '../theme/loader/Spinner.svg'
import SpinnerPng from '../theme/loader/Spinner.png'
const Loader = (props) => {
    return (
        <>
            <img src={SpinnerPng} alt="loader" srcSet={SpinnerSvg}></img>

        </>
    )
}

export default Loader