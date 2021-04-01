import React from 'react';
import {
    ContainerPage,
    Image,
    Title,
    Description,
    CardProjetos,
    ContainerProjects,
    ContainerDescription
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
                    <Image src={Lab1}/>
                    <ContainerDescription>
                        <Description>Projeto feito com ReactJS, Meterial UI, Integração de API feita usando axios.
                    </Description>
                    </ContainerDescription>
                </CardProjetos>
                <CardProjetos href={""}>
                    <Image src={Food1}/>
                    <ContainerDescription>

                        <Description>Lorem ipsum lorem ipsum outras coisas já que não deu certo iso sera mais raápido.
                    </Description>
                    </ContainerDescription>
                </CardProjetos>
                <CardProjetos href={""}>
                    <Image src={imagem}/>
                    <ContainerDescription>
                        <Description>Lorem ipsum lorem ipsum outras coisas já que não deu certo iso sera mais raápido. */}
                     </Description>
                    </ContainerDescription>
                </CardProjetos>
            </ContainerProjects>
        </ContainerPage>
    );
}

export default PortifolioPage;