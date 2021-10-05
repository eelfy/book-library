import React from 'react';
import '../theme/Card.css'
import { observer } from "mobx-react-lite";

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Card = observer((props) => {
    return (
        <div className='Card' key={props.id}>
            <Link
                src={props.img}
                to={`/book-${props.id}`}
                className='cardBody'>
                <img
                    className='cardImg'
                    src={props.img}
                    alt={props.imgAlt}
                />
                <div className='cardDescription'>
                    <h3>{props.title}</h3>
                    <p>{props.categories}</p>
                    {props.authors && props.authors.join(', ')}
                </div>
            </Link>
        </div >
    )
})

export default Card