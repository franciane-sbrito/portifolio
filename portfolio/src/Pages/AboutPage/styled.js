import styled from 'styled-components'

export const ContainerPage = styled.div`
min-height: 100vh;
height: auto;
max-width: 100vw;
background-color: rgb(33, 37, 41);
background-color: #2b314f;
color: #EEE;
font-family: 'Oswald', sans-serif;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const ContainerDescription = styled.div`
width: 75vw;
margin: 55px 15px;
padding: 20px;
box-shadow: 2px 2px 12px -4px rgba(10,10,10,0.52);
border-radius: 8px;
height: 400px;
/* background-color: #030927; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 120px 0px 120px 20px;

`

export const Description = styled.p`
font-size: 25px;
text-align: center;
width: 45vw;
word-spacing: 2px;
@media screen and (max-width: 600px) {
  width: 70vw;
  font-size: 20px;
  word-spacing: 1px;

}
`
export const Title = styled.h3`
font-family: 'Special Elite', cursive;
margin: 15px 0px;
font-size: 35px;
@media screen and (max-width: 600px) {
  font-size: 30px;

}
`


export const ContainerImage = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 40vw;
border-radius: 50px;
`

export const TitleAbilities = styled.h3`
font-family: 'Special Elite', cursive;
margin: 13px 0px;
font-size: 25px;
`

export const ContentAbilities = styled.p`
width: 300px;
margin: 5px;
text-align: center;

`

export const ContainerAbilities = styled.div`
width: 70vw;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
/* grid-template-rows: 1fr 1fr;  */
align-items: center;
justify-items: center;
margin: 50px 0 100px 0;
@media screen and (max-width: 600px) {
  font-size: 30px;
  grid-template-columns: 1fr;
  align-items: flex-start;
  width: 90vw;

}

`
export const Abilities = styled.div`
margin: 20px;
height: 335px;
width: 350px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 20px;
border-bottom: 4px solid #232847;
border-right: 4px solid #232847;
-webkit-box-shadow: -4px -2px 10px 4px rgba(10,10,10,0.42); 
box-shadow: -4px -2px 10px 4px rgba(10,10,10,0.42);
&:hover {
  /*   background: linear-gradient(0, #222, #000); */

}
@media screen and (max-width: 600px) {
  margin: 10px 0;
  border-right: none;
  width: 85vw;

}
`
export const Image = styled.img`
border-radius: 50px;
width: 100px;
border: 2px solid rgb(30, 32, 48);
`

