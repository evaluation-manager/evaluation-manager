import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
//import {Link} from 'react-router-dom';
//import {AiOutlineHome, AiOutlineUser, AiOutlineUnorderedList,AiOutlineStock,AiOutlineComment} from 'react-icons/ai'
//import {BrowserRouter as Router} from 'react-router-dom';

function Navbar(){

    return (
        <C.Container>
            <div className='navbar'>
            <p>sistema de survey</p>
      
        <Link to="/">
            Sair
        </Link>
        </div>

        </C.Container>
    )
}

export default Navbar;