import React, { useState,useEffect } from 'react';
import Card from '../../components/card/Card';
import * as C from './style';

export const Feedback=()=> {
    const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/comments";
//const url ='http://localhost:5000/comentarios'
    const [coment, setComent]=useState([]);

    const GetFeedBack=async()=>{
        fetch(url)
        .then((Response)=>Response.json())
        .then((ResponseJson)=>(
            setComent(ResponseJson)
    ))
}
          useEffect(() => {
            GetFeedBack()
          }, []);

    return (
        <C.Container>       
          <h2>Comentários dos último 30 dias</h2>
             {coment.map((comentarios,index)=>(
              <Card
                value={index}
                key={index}
                text={comentarios.name}
                title={comentarios.content}
                email={comentarios.email}
                nota={comentarios.grades_id}
                />
                
              ))}
                
        </C.Container>
    )
}
export default Feedback;