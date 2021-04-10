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
import imagem from '../../images/css.png'

const PortifolioPage = () => {
    return (
        <ContainerPage id={"portifolio"}>
            <Title>Meus Projetos :D</Title>
            <ContainerProjects>
                <CardProjetos href={"http://symptomatic-look.surge.sh"}>
                    <Image src={Lab1} />
                    <ContainerDescription>
                        <Description>Projeto feito com ReactJS, Meterial UI, Integração de API feita usando axios.
                    </Description>
                    </ContainerDescription>

                </CardProjetos>

                <CardProjetos href={""}>
                    <Image src={Food1} />
                    <ContainerDescription>
                        <Description>Lorem ipsum lorem ipsum outras coisas já que não deu certo iso sera mais raápido.
                    </Description>
                    </ContainerDescription>
                </CardProjetos>

                <CardProjetos href={""}>
                    <Image src={imagem} />
                    <ContainerDescription>
                        <Description>Lorem ipsum lorem ipsum outras coisas já que não deu certo iso sera mais raápido. */}
                     </Description>
                    </ContainerDescription>
                </CardProjetos>
                <ContainerButton>
                    <Button>Ver Projeto1</Button>
                    <Button>Código GitHub1</Button>
                </ContainerButton>
                <ContainerButton>
                    <Button>Ver Projeto2</Button>
                    <Button>Código GitHub2</Button>
                </ContainerButton>
                
                <ContainerButton>
                    <Button>Ver Projeto3</Button>
                    <Button>Código GitHub3</Button>
                </ContainerButton>
            </ContainerProjects>
        </ContainerPage>
    );
}

export default PortifolioPage;