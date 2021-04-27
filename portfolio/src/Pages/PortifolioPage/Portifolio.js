import React from 'react';
import {
    ContainerPage,
    Image,
    Title,
    Description,
    CardProjetos,
    ContainerProjects,
    ContainerDescription,
    ContainerButton,
    Button
} from './styled';
import Lab1 from '../../images/lab1.png'
import Food1 from '../../images/food1.png'
import tractian from '../../images/tractian.png'

const PortifolioPage = () => {
    return (
        <ContainerPage id={"portifolio"}>
            <Title>Meus Projetos :D</Title>
            <ContainerProjects>
                <CardProjetos>
                    <Image src={Lab1} />
                    <ContainerDescription>
                        <Description>Projeto feito com React.js, Meterial UI, Integração de API feita usando axios.
                    </Description>
                    </ContainerDescription>

                </CardProjetos>

                <CardProjetos href={""}>
                    <Image src={Food1} />
                    <ContainerDescription>
                        <Description>Projeto Mobile feito com React, Styled Components, Axios.
                    </Description>
                    </ContainerDescription>
                </CardProjetos>
                <CardProjetos href={""}>
                    <Image src={tractian} />
                    <ContainerDescription>
                        <Description>Projeto feito em React, Material UI e highcharts.
                     </Description>
                    </ContainerDescription>
                </CardProjetos>
                <ContainerButton>
                    <Button href={"http://symptomatic-look.surge.sh"}>Ver Projeto1</Button>
                    <Button href={"https://github.com/franciane-sbrito/labeddit"}>Código GitHub1</Button>
                </ContainerButton>
                <ContainerButton>
                    <Button href={"http://near-bottle.surge.sh"}>Ver Projeto2</Button>
                    <Button href={"https://github.com/franciane-brito/futere-eats"}>Código GitHub2</Button>
                </ContainerButton>

                <ContainerButton>
                    <Button href={"http://cheap-chess.surge.sh"}>Ver Projeto3</Button>
                    <Button href={"https://github.com/franciane-brito/tractian-challenge"}>Código GitHub3</Button>
                </ContainerButton>
            </ContainerProjects>
        </ContainerPage>
    );
}

export default PortifolioPage;