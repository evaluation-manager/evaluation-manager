import React from 'react';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import * as C from './style';

export const Perfil = ({handleSubmit}) => {
   const handleButton=(e)=>{

    e.preventDefault()
    handleSubmit()
    }
    return(
        <C.Container>
              <div className="perfil">
            <form onSubmit={handleButton}>
              
                    <h2>Perfil</h2>
                    <p>Edite alguma informação</p>
         <Input text="Email"
        name="email"
        placeholder="Informe seu email"
        />
        <Input text="Senha"
        placeholder="Informe a senha"
                    />
                     <Input text="Confirmar Senha"
        placeholder="Informe a senha"
                    />
                   
                    
        <Button  text="Salvar"
                    />
                   
        </form>
        </div>
        </C.Container>
    )
}