import { useEffect, useState } from "react";

import * as C from "./style";
import { useParams } from "react-router-dom";
import { Comments } from "./comments";
import Button from "../../components/button/button";
import Input from "../../components/input/input";

export const InfoAvalicao = () => {
  //  const urlA= "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes"
  const urlA = "http://localhost:5000/avaliacoes";

  const [theme, setTheme] = useState([]);
  const [totlle, setToglle] = useState(true);
  // const [avaliacoes,setAvaliacoes]=useState([])
  //enviando para o post
  const { id } = useParams();
  const [question_id, setQuestion_id] = useState("");

  const [answer_id, setAnswers_id] = useState("1");

  const [grades_id] = useState(id);


  //teste

  useEffect(() => {
    const getThemeQuestions = async () => {
      await fetch(
        "http://local.api.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions/" +
          id
      )
        // await fetch('http://localhost:5000/themes/'+id)
        .then((Response) => Response.json())
        .then((ResponseJson) =>
          //console.log(ResponseJson)
          setTheme(ResponseJson)
        );
    };

    getThemeQuestions();
  }, [id]);
  //console.log("r",answer_id)
  //console.log("d",question_id)

  const handleSumit = async (e) => {
    e.preventDefault();
    //let convertQuestion=question_id.toString()

    const avaliacao = {
      question_id: question_id,
      answer_id: answer_id,
      grades_id: grades_id,
    };

   const res = await fetch(urlA, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(avaliacao),
    });
  };

  function handleValue(id) {
    //console.log("oi",id)
    setQuestion_id(id);
   // className="active"

  }

  function AtualizarToglles() {
    setToglle(!totlle);

    //console.log("oi")
  }
 
  return (
    <C.Container>
      {totlle === false ? (
        <Comments grades={grades_id} />
      ) : (
        <form onSubmit={handleSumit}>
          <div className="survey">
            {theme.map((tema, index) => (
              <>
                <span value={tema.id} key={index}>
                  {tema.name}
                </span>

                {tema.questions.map((pergunta, index) => (
                  <fieldset>
                    <div className="Questions">
                      <h2
                         onChange={e=>setQuestion_id(pergunta.id)}
                        name="question_id"
                        key={index}
                      >
                        {pergunta.name} - {pergunta.id}
                      </h2>

                      <div className="respostas">
                        {pergunta.answers.map((resposta) => (
                          
                          <div className="Answers">
                           
                            <input 
                            
                              name={answer_id}
                              key={resposta.id}
                              id={resposta.id}
                              value={answer_id[resposta.id]}
                              //  value={resposta.id}
                              type="checkbox"
                             // text={resposta.name}
                              // onChange={e=>setAnswers_id((prevState) => ({...prevState, [pergunta.id] : resposta.id }))}
                              onChange={(e) => setAnswers_id(resposta.id)}
                         />
                              
                           <label htmlFor="answer_id">{resposta.name}</label>
                          
                          </div>
                          
                        ))}
                     
                         <Button
                                handleButton={() => handleValue(pergunta.id)}
                                text="Enviar" 
                                />
                      </div>
                    </div>
                  </fieldset>
                ))}
              </>
            ))}
          </div>
          <Button
        handleButton={AtualizarToglles}
        //onClick={handleValue}
        text="Finalizar"
      />
        </form>
        
      )}
      
    </C.Container>
  );
};
/**value={answer_id}
 * onChange={e=>setQuestion_id("oi")}
     // name="answer_id"
      // opcoes={respostas.answers}
      // onChange={(e)=>setAnswers_id(e.target.value)}
        <Submit
    //onClick={() => handleValue(respostas.id )}
    text="Enviar" />
        <Button
    onClick={() => handleValue( )}
    text="Enviar" />
    
      */
