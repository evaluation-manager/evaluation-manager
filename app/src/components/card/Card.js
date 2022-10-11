import React from 'react';
import * as C from './style';

function Card({ text, title,answer,email }) {
    return (
        <C.Container>
            <main className="Container">
            <article className='card'>         
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span>{ email}</span>
                    <button>{answer}</button>
                </article>
            </main>
           
            
        </C.Container>
    )
}

export default Card;