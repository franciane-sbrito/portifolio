import styled from 'styled-components'

export const ContainerPage = styled.div`
min-height: 100vh;
max-width: 100vw;
background-color: #030927;
color: #EEE;
font-family: 'Oswald', sans-serif;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
`
export const ContainerProjects = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
width: 80vw;
@media screen and (max-width: 600px) {
flex-direction: column;
grid-template-columns: 1fr;

}
`

export const CardProjetos = styled.a`
text-decoration: none;
width: 25vw;
margin: 5px;
height: 35vh;
text-align: center;
background-color: #030927;
margin: 20px;

&:hover div{
    visibility: visible;
    background-color: rgb(03, 09, 27, 0.7);
    transition: all 2s;
    border-radius: 8px;
}
&:hover img{
transform: scale(1);
transition: all 1s;
}
@media screen and (max-width: 600px) {
  width: 80vw;
  margin: 0;
}

`

export const Description = styled.p`
font-size: 25px;
word-spacing: 2px;
color: white;
border: none;
@media screen and (max-width: 600px) {
  /* width: 100vw; */
}
`
export const Title = styled.h3`
font-family: 'Special Elite', cursive;
font-size: 35px;
`

export const ContainerDescription = styled.div`
position: relative;
width: 25vw;
bottom: 270.5px;
height: 35vh;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
visibility: hidden;
@media screen and (max-width: 600px) {
 bottom: 239px;
 width: 80vw;
}
`


export const Image = styled.img`
/* background-image: url('imagehome.png'); */
background-repeat: space;
background-size: 85vw 35vh;
width: 25vw;
max-width: 25vw;
/* border: 2px solid rgb(30, 32, 48); */
max-height: 35vh;
height: 35vh;
border-radius: 8px;
transform: scale(0.9);

@media screen and (max-width: 600px) {
  width: 80vw;
}
`
export const ContainerButton = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const Button = styled.a`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
height: 50px;
width: 70%;
margin: 5px;
border-radius: 10px;
font-size: 22px;
box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.9);
border-bottom: 3px solid #000;
cursor: inherit;
background-color: #030927;
color: #E3557D;
&:hover {
  box-shadow: 2px 2px 12px -94px rgba(10,10,10,0.92);
border: 2px solid #2B314F;
border-bottom: 6px solid #2B314F;

} 
&:focus{
  outline: 0px;
}
@media screen and (max-width: 600px) {
  display: none;
}

`
