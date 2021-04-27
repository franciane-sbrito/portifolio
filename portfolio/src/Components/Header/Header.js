import React, { useState } from 'react';


import {
    ContainerHeader,
    ContainerName,
    ContainerButton,
    Button,
    ButtonDiferent,
    ContainerMenu,
    ContainerButton2,
    ButtonMedia,
    StyledMenuIcon,
    StyledCloseIcon
} from './styled'

const Header = () => {
    const [dropDrow, setDropDrow] = useState(true)
    const openDropDrow = () => {
        setDropDrow(!dropDrow)
    }

    return (
        <ContainerHeader>
            <ContainerName>
                <h2>Franciane Brito</h2>
            </ContainerName>


            <ContainerButton>
                <Button href="#">Home</Button>
                <Button href="#sobre">Sobre</Button>
                <Button href="#habilities">Habilidades</Button>
                <Button href="#portifolio">Experiências</Button>
                <ButtonDiferent href="https://api.whatsapp.com/send?phone=5531992164866">Fale comigo</ButtonDiferent>
            </ContainerButton>


            <ContainerMenu>

                {dropDrow ? <StyledMenuIcon fontSize="large" onClick={openDropDrow}/> : <StyledCloseIcon onClick={openDropDrow}/>}
                {dropDrow ? <div></div> : <ContainerButton2>
                    <ButtonMedia href="home">Home</ButtonMedia>
                    <ButtonMedia href="#sobre">Sobre</ButtonMedia>
                    <ButtonMedia href="experiencias">Experiências</ButtonMedia>
                    <ButtonMedia href="habilidades">Habilidades</ButtonMedia>
                    <ButtonMedia href="https://api.whatsapp.com/send?phone=5531992164866">Fale comigo</ButtonMedia>
                </ContainerButton2>}

            </ContainerMenu>
        </ContainerHeader>

    );
}

export default Header;


