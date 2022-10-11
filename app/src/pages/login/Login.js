import React, { useState } from 'react';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import * as C from './style';
import Photo from './Astronauta.png'
import ButtonCad from '../../components/button/ButtonCad';

export const Login = ({handleSubmit}) => {

    const [user,setUser] = useState({
       // name:"carlos"',
     /*   email: '',
        password:''
*/

email: 'email@email.com',
password:'123456'
})

      const [status,setStatus] =useState({
        type:'',
        messagem:''
      })

   const handleValidar=(e)=>{

    e.preventDefault()   
  //  handleSubmit()
 if(!validation()) return  ;
 handleSubmit()
}

          
        function validation (){
          
             if(!user.email)
             return setStatus({
               type:'error',
              messagem: 'Necessário preencher o campo email'});
          
              if(!user.password)
              return setStatus({
                type:'error',
               messagem: 'Necessário preencher o campo senha'});
          
             return true;
          }

    return(
        <C.Container>
            <div className='login'>

            <div className='dados'>
                
                    <h2>Realize o login</h2>
    <div className='mensagem'>
    {status.type==='sucess' ? <p>
    {status.messagem}</p> : ''}
    {status.type==='error' ? <p>
    {status.messagem}</p> : ''}
    </div>
         <Input text="Email"
        name="email"
        value={user.email}
        placeholder="Informe seu email"
       
        />

        <Input text="Senha"
        placeholder="Informe a senha"
        value={user.password}
        name="passwrod"
       
        />
        <Button  handleButton={handleValidar} text="Entrar"
                    />
             {/*    <div className='Esquece'> 
                    <span>Esquece senha</span> 
                    <ButtonCad text={"Cadastra-se"}/>
                    </div>
                 */}       
                    </div>
       
        <img src={Photo} alt='astronalta'/>
       
        </div>
        </C.Container>
    )
}