import React from 'react';
import * as C from "./style";
import Photo from './NotFound.png'
export const Notfound=()=>{
   
    return(
        <C.Container>
        <div className='notfound'>
            <h2>Página 404</h2>
            <img src={Photo} alt='Página não encontrada'/>
        </div>
        </C.Container>
    )
}