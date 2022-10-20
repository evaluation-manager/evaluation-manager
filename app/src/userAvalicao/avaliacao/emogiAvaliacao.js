/** @format */

import React, { useEffect, useState } from "react";
import * as C from "./style.js";
//import { BiHappyAlt, BiHappyBeaming, BiSad } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { InfoAvalicao } from "../Info/Info.js";
//import PhotoSatisfeito from './happy.png'
//import PhotoFeliz from './fine.png'
//import PhotoTriste from './sad.png'

export const UserAvaliacao = () => {
  const { id } = useParams();
 // const url = "http://localhost:5000/notas";
 const url="http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/grades";

  const [totlle, setToglle] = useState(true);

  const [grades, setGrades] = useState("");
  const [theme_id] = useState(id);
  const [localization] = useState("48");
  //testes
  const [notas, setNotas] = useState([]);
  const [theme, setTheme]=useState([]);

  useEffect(() => {
    async function fetchDataNotas() {
       await fetch(url)
       .then((Response)=>Response.json())
       .then((ResponseJson)=>(
       //console.log(ResponseJson)    
        setNotas(ResponseJson)
       ))
//console.log(notas)    
    }
    fetchDataNotas()

    const getThemeQuestions= async()=>{
      await fetch('http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/'+id)
         //  await fetch('http://localhost:5000/themes/'+id) 
         .then((Response)=>Response.json())
         .then((ResponseJson)=>(
          
         setTheme(ResponseJson)
         ))
        }
        
        getThemeQuestions()
  }, [id]);

  const handleSumit = async (e) => {
    e.preventDefault();

    const gradess = {
      //
      grades,
      theme_id,
      localization,
    };

    const req = await fetch(url, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gradess)
    })

    const addNotas = await req.json();
    //carregamento de forma dinamica
    setNotas((prevOrgans) => [...prevOrgans, addNotas]);
    setToglle(false);
    
  };
  
  const status1 = () => {
    
    setGrades(5);
    
  };
  const status2 = () => {
    setGrades(3);
    
  };
  const status3 = () => {
    setGrades(1);
   
  };

  let arrayNotas = notas.map((nota) => nota.grades);

  function bigsatisfeito(value) {
    return value === 5;
  }
  function biglegal(value) {
    return value === 3;
  }
  function bigruim(value) {
    return value === 1;
  }
  let filtlegal = arrayNotas.filter(biglegal);
  let filtsatisfeito = arrayNotas.filter(bigsatisfeito);
  let filtlruim = arrayNotas.filter(bigruim);

  let name=theme.map((names)=>(
    names.name
  ))
  //console.log(name)
  //console.log(notas)
  return (
    <C.Container>
      {totlle === true ? (
       <div className="notas">
        <form onSubmit={handleSumit}>
        <span name="theme_id" 
        value={theme_id}>
          O tema em que voce esta dando nota é {name}
          </span>
          <div className="conteudo">
            <div className="satisfeito">
              <button name="grades" value={grades} onClick={status1}>
                   {/**  <img alt="Satisfeito" src={PhotoSatisfeito} />*/}
                <p>Satisfeito {filtsatisfeito.length}</p>
              </button>
            </div>

            <div className="legal">
              <button name="legal" value={grades} onClick={status2}>
             {/**  <img alt="Legal" src={PhotoFeliz} />*/}
                <p>Legal {filtlegal.length} </p>
              </button>
            </div>

            <div className="ruim">
              <button name="ruim" value={grades} onClick={status3}>
            {/**   <img alt="Triste" src={PhotoTriste} />*/}
                <p>Ruim {filtlruim.length} </p>
              </button>
            </div>
          </div>
        </form>
        </div>
      ) : (
        <InfoAvalicao grades={23}/>
      )}
    </C.Container>
  );
};
//{totlle ===true ?
//<Comments/>
/*{filtlruim.length}
{filtlegal.length}
{filtsatisfeito.length}
*/