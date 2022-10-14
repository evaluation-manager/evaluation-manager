import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as C from './style';

function Navbar(){
const [logar, deslogar]=useState(true)
function setar(){
    deslogar(!logar)
}
    return (
        <C.Container>
            <div className='navbar'>
            <p>Sistema de survey</p>
      {logar===true ? (
        <Link to="/">
           <button onClick={setar}>Sair</button>
        </Link>
      ):(
        <>
    <Link to="/login">
           <button onClick={setar} >Login</button>
        </Link>
      
        </>
      )}
        
        </div>

        </C.Container>
    )
}

export default Navbar;