/** @format */

import React, { useState, useEffect } from "react";
import * as C from "./style";
import Charts from "../../components/grafico/Chart";
import Pies from "../../components/grafico/Pie";
import Area from '../../components/grafico/Area';
import Collumn from "../../components/grafico/Collumn";
import CadNum from "../../components/card/CardNum";
import Card from "../../components/card/Card";
export const Dashboard = () => {
  const urlR = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes";
  //const urlR = "http://localhost:5000/avaliacoes";
  const urlL = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions";
  //const urlL = "http://localhost:5000/questions";
  const urlS = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services";
  //const urlS = "http://localhost:5000/services";
  const urlT = "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services_type";
  //const urlT = "http://localhost:5000/services_type";
const nota="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/grades"

  const [evalution, setEvalution] = useState([]);
  const [notas, SetNotas] = useState([]);
  const [servicoType, setServiceType] = useState([]);
  const [service, setService] = useState([]);
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    async function fetchDataAvaliacoes() {
      const res = await fetch(urlR);
      const data = await res.json();
      setEvalution(data)
}
    fetchDataAvaliacoes();
    async function fetchDataQuestion() {
      const res = await fetch(urlL);
      const data = await res.json();
      setQuestions(data)
}
    fetchDataQuestion();

    async function fetchDataService() {
      const res = await fetch(urlS);
      const data = await res.json();
      setService(data)
}
    fetchDataService();
    async function fetchDataServiceT() {
      const res = await fetch(urlT);
      const data = await res.json();
      setServiceType(data)
}
    fetchDataServiceT();
    
    async function fetchDataServiceNota() {
      const res = await fetch(nota);
      const data = await res.json();
      SetNotas(data)
}
    fetchDataServiceNota();
  }, []);

  //console.log(evalution);
  const servicoT = servicoType
  const services=service
  const dataQuestoes = questions
 const notasV=notas

//const nameNota=notasV;
  //console.log(notas)
 const status=[
  {
   
    "positivo":5,
    "nagativo":1,
    "media":3
  },
  {
   
    "positivo":5,
    "nagativo":1,
    "media":3
  },
  {
   
    "positivo":5,
    "nagativo":1,
    "media":3
  },

 ]
  return (
    <C.Container>
      <div className="Cards1">
        <CadNum text="Serviços" num={service.length} />
        <CadNum text="Tipos de serviços" num={servicoT.length} />
        <CadNum text="Perguntas" num={questions.length} />
        
     
      <CadNum text="Avaliações" num={evalution.length} />
        <CadNum text="Questionarios" num={questions.length} />
       
      </div>
      <div className="container1">
      <div className="container">

     <Charts 
     text={"Avaliação dos orgãos"} 
       data={status}
        assunto="Lista de orgãos avaliados" />
                
              <Area 
              text={"Perguntas"} 
              data={evalution}
              assunto="Lista de peguntas respondidas" 
              />
          
        </div>

        <Pies text={"Melhor atendimento"} 
         assunto="forma de atendimento"
        data={services} /> 
        </div>
    </C.Container>
  );
};
/*
   <Pies text={"Avaliação de serviços"} 
        data={services} /> 
         <Collumn text="Perguntas avaliadas" 
        data={dataQuestoes}/>
*/