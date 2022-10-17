import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as C from "../layort/grid/Grid";
//importando a barra de navegação
import Navbar from "../layort/navbar/Navbar";
import Sideber from "../layort/sidebar/Sidebar";
//importando as páginas
import { VerCadastro } from "../pages/cadastro/Cadastro";
import Feedback from "../pages/feedbacks/Feedback";

import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/relatorio/Dashboar";
import { Relatorio } from "../pages/relatorio/Relatorio";
import { Respostas } from "../pages/survey/respostas/Respostas";
import { Suporte } from "../pages/suporte/Suporte";
import { CriarOrgan } from "../pages/cadastro/Organ/OrganCad";
import { ServiceCad } from "../pages/cadastro/Servico/ServiceCad";
import { CriarCad } from "../pages/cadastro/Setor/SectorCad";
import { ServiceTypeCad } from "../pages/cadastro/ServicoTipo/ServiceTypeCad";
import { CriarTheme } from "../pages/survey/Theme/Theme";
import { PerguntasGet } from "../pages/survey/questions/PerguntasGet";
import { Perfil } from "../pages/login/perfil";
import { Editar } from "../pages/cadastro/Organ/EditOrgan";
import { Envio } from "../pages/survey/envio/Envio";
import { EditarSetor } from "../pages/cadastro/Setor/EditSetor";
import { EditService } from "../pages/cadastro/Servico/EditService";
import { EditarServiceType } from "../pages/cadastro/ServicoTipo/EditServiceType";
import { EditarAnswers } from "../pages/survey/respostas/EditAnswer";
import { EditarTheme } from "../pages/survey/Theme/EditTheme";
import { EditarQuestins } from "../pages/survey/questions/Editquestions";
import { UserAvaliacao } from "../userAvalicao/avaliacao/emogiAvaliacao";
import { InfoAvalicao } from "../userAvalicao/Info/Info";
import { Notfound } from "../userAvalicao/Info/NotFound";
import { Comments } from "../userAvalicao/Info/comments";
import { Thanks } from "../userAvalicao/Info/thanks";
//import PrivateRoute from "./PrivateRouter";
//privando rotas

export const Router = () => {
  const [avaliacao, setAvaliacao] = useState(true);

  const [sistema, setSistema] = useState(false);

  const [login, logado] = useState(false);

  const [status,setStatus]=useState("Login")
  //const navbar=useNavigate();
  function setar() {
    setAvaliacao(false);
    setSistema(true);
    logado(false)
  }

  function logar(){
    logado(true)
    setAvaliacao(true);
    setSistema(false);
    setStatus("Sair")
   // Alterar()
  }
 

 /* function Alterar(){
  
   navbar("/perfil")
  }*/
  return (
    <C.Container>
        <>
       
     {/**  <button className="buttonVisible" onClick={logar}>
          Login
        </button>
         */}  
        <Navbar AlterarValor={logar}
         Status={status}
          />
        {login === true ?  <Login handleSubmit={setar}/> : ''}
      </>
      <BrowserRouter>
        <div className="container">
          {sistema === false ? (
            ""
          ) : (
            <>
              <div className="itemnav">
           {/** <Navbar />*/}     
              </div>

              <div className="itemsid">
                <Sideber />
              </div>
            </>
          )}
          <div className="itemmain">
            <Routes>
              {avaliacao === true ? (
                <>
                  <Route path="/survey/:id" element={<UserAvaliacao />} />
                  <Route path="Info" element={<InfoAvalicao />} />
                  <Route path="*" element={<Notfound />} />

                  <Route path="/grades/comments" element={<Comments />} />
                  <Route path="/agradecimento" element={<Thanks />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Dashboard />} />

                 {/**<Route path="/Login" element={<Login />} /> */} 
                  <Route path="/Perfil" element={<Perfil />} />

                  <Route path="/Cadastro" element={<VerCadastro />} />
                  <Route path="/Cadastro/Organ" element={<CriarOrgan />} />
                  <Route
                    path="/Cadastro/Organ/Editar/:id"
                    element={<Editar />}
                  />

                  <Route path="/Cadastro/Setor" element={<CriarCad />} />
                  <Route
                    path="/Cadastro/Setor/Editar/:id"
                    element={<EditarSetor />}
                  />

                  <Route path="/Cadastro/Servico" element={<ServiceCad />} />
                  <Route
                    path="/Cadastro/Servico/Editar/:id"
                    element={<EditService />}
                  />

                  <Route
                    path="/Cadastro/Servico_tipo"
                    element={<ServiceTypeCad />}
                  />
                  <Route
                    path="/Cadastro/Servico_tipo/Editar/:id"
                    element={<EditarServiceType />}
                  />

                  <Route path="/Perguntas/Answers" element={<Respostas />} />
                  <Route
                    path="/Perguntas/Answers/Editar/:id"
                    element={<EditarAnswers />}
                  />

                  <Route path="/Perguntas/Themes" element={<CriarTheme />} />
                  <Route
                    path="/Perguntas/Themes/Editar/:id"
                    element={<EditarTheme />}
                  />

                  <Route
                    path="/Perguntas/Questions"
                    element={<PerguntasGet />}
                  />
                  <Route
                    path="/Perguntas/Questions/Editar/:id"
                    element={<EditarQuestins />}
                  />

                  <Route path="/Perguntas/Envio" element={<Envio />} />

                  <Route path="/Relatorio" element={<Relatorio />} />
                  <Route path="/Suporte" element={<Suporte />} />
                  <Route path="/Feedback" element={<Feedback />} />

                  <Route
                    path="/Cadastro/Organ/Editar/:id"
                    element={<Editar />}
                  />
                </>
              )}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    
    </C.Container>
  );
};
