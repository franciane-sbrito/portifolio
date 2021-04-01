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
display: flex;
justify-content: center;
align-items: center;
width: 80vw;
@media screen and (max-width: 600px) {
flex-direction: column;
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
/* position: relative; */
background-image: url('imagehome.png');
background-repeat: space;
background-size: 85vw 35vh;

&:hover div{
    visibility: visible;
    background-color: rgb(03, 09, 27, 0.7);
    transition: all 2s;
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
 /*  position: absolute; */
 bottom: 239px;
 width: 80vw;
}
`


export const Image = styled.img`
/* background-image: url('imagehome.png'); */
/* background-repeat: space; */
background-size: 85vw 35vh;
width: 25vw;
/* border: 2px solid rgb(30, 32, 48); */
height: 35vh;
transform: scale(0.9);

@media screen and (max-width: 600px) {
  
  width: 80vw;
}
`

