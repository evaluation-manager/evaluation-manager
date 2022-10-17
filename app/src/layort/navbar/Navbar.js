import React, { useState } from 'react';
//import { Link, useNavigate } from 'react-router-dom';

import * as C from './style';

function Navbar({AlterarValor,Status}){


 /* const navbar=useNavigate();

function Alterar(){

 navbar("/perfil")
}*/

    return (
        <C.Container>
            <div className='navbar'>
            <p>Bem-vindo ao sistema de survey</p>
   
        
           <button onClick={AlterarValor}  >
           {Status}
          {/* <Link to="/Dashboard">  </Link> */}
           </button>
        </div>

        </C.Container>
    )
}

export default Navbar;