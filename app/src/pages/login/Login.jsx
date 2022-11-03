import React, {useContext } from 'react';
import { AuthContext } from '../../context/ContextAuth';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import * as C from './style';
//import Photo from './Astronauta.png'


export const Login = () => {
//alterando valor
    const {logado,setLogado} = useContext(AuthContext)

   const handleValidar=()=>{
setLogado(true)
}
          
    return(
        <C.Container>
            <div className='login'>

            <div className='dados'>
                
                    <h2>Realize o login</h2>

         <Input text="Email"
        name="email"
       // value={user.email}
        placeholder="Informe seu email"
       
        />

        <Input text="Senha"
        placeholder="Informe a senha"
       // value={user.password}
        name="passwrod"
       
        />
        <Button  handleButton={handleValidar} text="Entrar"
                    />
              
                    </div>
       
        </div>
        </C.Container>
    )
}