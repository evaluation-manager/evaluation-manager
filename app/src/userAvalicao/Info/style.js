import styled from "styled-components";

export const Container = styled.div`
  * {
   
    background: #fff;
    //margin: 0;
    width:100%;
  }
  .survey {
    width: 50%;
    margin: 100px auto;
    border: 1px solid #cdd0e8;
    padding: 25px;
    color: #55A4F3;
    border-radius: 20px;
  }
  .survey button{
    padding:20px;
    border-radius:10px;
    margin: 5px;
    background:#55A4F3;
    border: none;
    color: #fff;
    width:100%;
  }
  fieldset{
    margin: 10px;
  }
  fieldset:hover{
   // background:#55A4F3;
  //  color:#fff;
    cursor: pointer;
  }
  .InputNone,
  .labelNone {
    display: none;
  }
  .input-radio {
    padding: 10px;
    margin: 15px;
color:#55A4F3;

  }
  
.labelInput{
  // color: #55A4F3;
    font-size:16px;
  }

  h1 {
    color: #4d4d4d;
  }

  span,
  p {
    text-align: center;
    color: #4d4d4d;
    font-size: 20px;
  }

  .comments {
    display: flex;
    margin: 10px;
   //width:100%;
  // background-color: #55A4F3;
  }
  .comments form {
    border: solid #cdd0e8 1px;
    margin: 20px;
  }

  .notfound {
    margin: 150px;
  }
  .notfound h2 {
    text-align: center;
  }
  img {
    width: 600px;
  }

  canvas {
    width: 220px;
    height: 60px;
    border: 2px solid #4d4d4d;
  }
  @media (max-width: 600px) {
    .comments{

    // background-color: #55A4F3;
    }
    .survey {
      width: 100%;
      //padding: 5px;
      margin: 2px;
    }
    .survey button{
      width: 50%;
    }
    .qrcode {
      display: none;
    }
    img {
      width: 300px;
    }
   
    .comments span,
    p {
      display: none;
    }
  }
`;
