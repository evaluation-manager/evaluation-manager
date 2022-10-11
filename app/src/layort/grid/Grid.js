import styled from 'styled-components';

export const Container = styled.div`

.itemnav{grid-area: navbar;}
.itemsid{grid-area: sidebar;}
.itemmain{grid-area: main; }

.container{
display:grid; 
grid-template-columns:250px 0px;
grid-template-areas: 'navbar navbar navbar navbar' 
                        'sidebar main main main '
                        'sidebar main main main '
                        'sidebar main main main '
                    ;
                  //  gap: 10px;
                }

 @media(max-width:700px) {
  *{
  //background:pink;
  }
  .container{
  grid-template-areas: 'navbar navbar navbar' 
                        'sidebar main main'
                        'sidebar main main '
                        'sidebar main main'
                    ;
  }
                    
}
//celular
@media(max-width: 500px) {
  *{
   //background:green;
  }
}
`   