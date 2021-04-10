import styled from 'styled-components'

export const ContainerNetworks = styled.div`
position: fixed;
width: 65px;
margin-top: 200px;
color: white;
@media screen and (max-width: 600px) {
margin-top: 330px;
width: 60px;

cursor: unset;
}
`

export const ContainerNetwork = styled.a`
display: flex;
justify-content: center;
align-items: center;
box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.4);
margin: 2px 0;
text-decoration: none;
position: relative;
height: 60px;
width: 50px;
line-height: 60px;
padding-left: 25%;
&:hover{
    margin-left: 35px;
transition: all 1s;

}
&:before{
    position: absolute;
    content: '';
    top: 500px;
    left: -8px;
    height: 18px;
    width: 18px;
    transform: translateY(-50%) rotate(45deg);
}
/* Icones redes sociais */
i {
    font-size: 30px;

position: absolute;
letter-spacing: 1px;
text-transform: uppercase;
color:  #E3557D;
padding: 0 13px;
border-radius: 3px;
transition: all .14s;
}

@media screen and (max-width: 600px) {
padding-left: 5%;

}
`











