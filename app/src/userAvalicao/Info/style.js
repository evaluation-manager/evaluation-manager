import styled from 'styled-components';

export const Container = styled.div`
*{
   
align-items:center;
text-align: center;
justify-content: center;
background: #fff;
//margin: 0;

}
.survey{
  width:500px;
 margin:100px auto;
  border:1px solid #CDD0E8;
 padding:25px;
  border-radius:20px;

}
h1{
    color:#4D4D4D; 
}
.container-select{
    margin:30px;
    padding:30px;
    display:flex;
}
.qrcode{
    margin:30px;
}

span,p{
    text-align: center;
    color:#4D4D4D;
    font-size:20px;
}
.comments{
    display:flex;
    margin: 150px;
   
}
.comments form {
 
border: solid #CDD0E8 1px;
 
}
.comments input {
width: 500px;
display: block;
padding: 10px;
margin: 15px;

}

.comments textarea{
    width: 500px;
    height: 80px;
    display: block;
    margin: 15px;
    padding: 10px;
  
}
.comments button{
margin: 10px;
padding: 20px;
}

.notfound{
margin: 150px;

}
.notfound h2{
    text-align:center;
}
img{
    width: 600px;
}

canvas{
    width:220px;
     height:60px;
     border: 2px solid #4D4D4D;
}
@media (max-width: 600px){
    .survey{
        width:300px;
       padding:10px;
    }
        .qrcode{
            display:none;
        }
        img{
    width: 300px;

}
.comments{
    margin: 12px;
    
}
.comments input{
    width: 300px;
margin:22px;
  
}
.comments textarea{
   // display: inline-block;
    width: 300px;
    height: 40px;
    margin:22px;
}
.comments button{
    padding: 10px;
}
.comments span, p{
display: none;
}

}
`;