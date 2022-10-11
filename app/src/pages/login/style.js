import styled from 'styled-components';

export const Container = styled.div`

.perfil{
   // display:inline;
 
    background:#fff;
align-items: center;

justify-content:center;
margin:15px;
width:500px;
padding: 20px;

}
.login{
    margin:auto;
    width: 1000px;
 background-color: #fff;
display: flex;
margin-top:150px;
justify-content:center;
border:solid #B0C4DE 1px;
}
.dados {
    display: inline;
  /*  padding:100px;
    margin:auto;
    width:50%;
    background:#fff;
align-items: center;
margin-top:150px;
c
display: flex;
*/
}
.Esquece{
display: flex;

}
.mensagem{
background:#ff0000;
color:#fff;
box-shadow: 1px 5px 5px #ff0000;
text-align:center;

}
span{
    color:#B0C4DE;
    padding: 10px;
    
}
img{
    margin: 12px;
   // width: 300px;
   display: none;
}

@media (max-width: 600px) {
img{
    background:none;
}
}
`;