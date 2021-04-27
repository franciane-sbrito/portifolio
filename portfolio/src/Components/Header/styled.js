import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

export const ContainerHeader = styled.div`
font-family: 'Roboto', sans-serif;
position: fixed;
width: 100vw;
height: 100px;
background-color: rgb(33, 37, 41, 0.7);
color: #EEE;
display: flex;
justify-content: space-around;
align-items: center;
font-weight: bold;
@media screen and (max-width: 600px) {
    width: 100vw;
    justify-content: space-between;
    height: 75px;
}
`

export const ContainerName = styled.div`
padding-left: 100px;
position: relative;
color: #E3557D;
@media screen and (max-width: 600px) {
    padding-left: 70px;

    font-size: 14px;
}
`

export const ContainerButton = styled.div`
display: flex;
justify-content: space-around;
width: 43vw;
font-size: 18px;
@media screen and (max-width: 600px) {
    display: none;
width: 0;
padding-right: 0; 
font-size: 0;
}
`

export const Button = styled.a`
padding: 20px 20px;
color: #EEE;
text-decoration: none;
&:hover {
    color: #E3557D;
}

`

export const ButtonDiferent = styled.a`
border: 1px solid #FFF;
padding: 10px 20px;
width: 260px;
height: 28px;
border-radius: 3px;
display: flex;
color: #EEE;
text-decoration: none;
justify-content: center;
align-items: center;
&:hover {
    background-color: #FFF;
    color: #333;
}
`

/* DropDown ContainerMenu, ContainerButton2, ButtonMedia*/

export const ContainerMenu = styled.div`
width: 0;

@media screen and (max-width: 600px) {
display: flex;
/* justify-content: space-between; */
flex-direction: column;
margin: 16px 16px 0 0;
height: 20vh;
width: 100vw;
position: absolute;
/* 
i{
font-size:40px;
height: 40px;
margin: 40px 20px 0 0;
display: flex;
justify-content: flex-end;
align-items: center;
border: 2px solid #EEEEEE;
color: white;
border: none;
} */
}
`
export const ContainerButton2 = styled.div`
display: none;
@media screen and (max-width: 600px) {

min-width: 50vw;
min-height: 100vh;
display: flex;
flex-direction: column;
margin-top: 15px;
position: relative;
}
`

export const ButtonMedia = styled.a`
display: none;
@media screen and (max-width: 600px) {

display: flex;
flex-direction: column;
 color: #EEE;
padding: 20px;
text-decoration: none;
 border-top: 0.5px solid rgb(200, 200, 200, 0.5);
background-color: rgb(20, 20, 40, 0.85);
height: 1.5vh;
transition: 5
}
`
export const StyledCloseIcon = styled(CloseIcon)`
    color: rgb(33, 37, 41, 0.0);
    @media screen and (max-width: 600px) {

color: white;
border: none;
font-size:40px;
height: 40px;
margin: 45px 20px 0 20px;
display: flex;
justify-content: flex-end;

/* width: 10vw; */
/* align-items: center; */
/* border: 2px solid #EEEEEE; */
    }
`

export const StyledMenuIcon = styled(MenuIcon)`
    color: rgb(33, 37, 41, 0.0);
    display: none;
@media screen and (max-width: 600px) {
font-size:40px;
height: 40px;
margin: 45px 20px 0 20px;
display: flex;
justify-content: flex-end;
align-items: center;
border: 2px solid #EEEEEE;
color: white;
border: none;
}
`