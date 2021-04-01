import styled from 'styled-components'

export const ContainerNetworks = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 100vw;
height: 30vh;
@media screen and (max-width: 600px) {
    height: 10vh;
}
`

export const Image = styled.img`
max-width: 100vw;
position: absolute;
`


export const ContainerNetwork = styled.a`
display: flex;  
justify-content: center;
align-items: center;
margin: 0px 0;
text-decoration: none;
height: 60px;
/* Icones redes sociais */
i {
height: 60px;
font-size: 60px;
color:  #EEE;
padding: 13px;
border-radius: 3px;
transform: scale(0.9);
}
i:hover{
transform: scale(1.1);
transition: all 0.5s;
}
@media screen and (max-width: 600px) {
    display: none; 
}
`
export const ContainerFooter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4);
background-color: #030826;
color: #EEE;
`
export const Text = styled.p`
margin: 0 0 25px;
position: relative;
`