import React, { useState,useEffect } from 'react';
import Card from '../../components/card/Card';
import * as C from './style';

export const Feedback=()=> {
    const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/comments";

    const [feedback, setFeedback]=useState();
  //  console.log(feedback)

    const GetFeedBack=async()=>{
        fetch(url)
        .then((Response)=>Response.json())
        .then((ResponseJson)=>(
            //console.log("oii",ResponseJson)
          setFeedback(ResponseJson)
        ))
          }

          useEffect(() => {
            GetFeedBack()
          }, []);

         //console.log(teste) 
    return (
        <C.Container>
            <div className='Card'>
                <h2>Ùltimos 30 dias do mes de </h2>
                <>
           {/**   {feedback.map((comentarios,index)=>(
            <>
            <p>{comentarios.name}</p>
             <p>{comentarios.content}</p>
             <p>{comentarios.email}</p>
             </>
             
              ))}
               */} 
                </>
               
        </div>
        </C.Container>
    )
}
export default Feedback;

  {/** <Card
                value={index}
                key={index}
                    text={comentarios.name}
                    title={comentarios.content}
                   // answer="Responder"
                    email={comentarios.email}
                />
                */}