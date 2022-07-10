import React from 'react'
import './Card.css';

export default function Card(props) {
    return (
        <div className='card'>
            <div className='cardBody'>
                <h2>{props.title}</h2>
                <img src={props.img} alt='loading...' className='cardImage'></img>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
