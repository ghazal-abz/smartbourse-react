import styled from 'styled-components';


export const Firstdiv = styled.div`



h1{
  text-align: center;
  color:#2e3774;
  margin: 25px 0;
}

p{
    width: 40%;
    margin: 0 auto;
    text-align: center;
}
h2{
text-align: center;
border-bottom: 3px solid #9773dd;
width: 35%;
margin: 25px auto;
border-radius: 100px;
padding: 15px;
}

.card{
  border:none;
  margin:15px 20%;
}

  
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #555;
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}


`;

export const ArrowSVG = styled.div`
{
    float:left;
}
svg {
  width: 15px;
  height: 15px;
  float: left;
  transform: rotate(180deg);
}
.arrowte{
  transform: rotate(0deg) !important;
  width: 15px;
  height: 15px;
  float: left;
}




`;
