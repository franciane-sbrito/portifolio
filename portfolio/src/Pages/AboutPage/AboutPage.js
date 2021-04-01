import React from 'react';
import { ContainerPage, Description, Title, Abilities, Image, ContainerAbilities, ContainerDescription, ContainerImage, ContentAbilities, TitleAbilities } from './styled';
import imagem from '../../images/imagehome.png'
import imageHTML from '../../images/html.png'
import imageCSS from '../../images/css.png'
import imageJs from '../../images/js.png'
import imageReact from '../../images/react.png'
import imageLinux from '../../images/linux.png'
import imageGit from '../../images/git.png'

const AboutPage = () => {
  return (
    <ContainerPage id={"sobre"}>
      <ContainerDescription>

      <Title>SOBRE MIM</Title>
      <Description>Meu nome é Franciane e sou desenvolvedora Front-end JR. Gosto muito de aprender sobre novas tecnologias por isso comecei a participar de um bootcamp de programação onde aprendi as soft skills e as hards skills mais procuradas no mercado. Espero poder te ajudar e se sim entre em contato comigo através de alguma das minhas redes sociais. :)</Description>
      </ContainerDescription>
      <Title>Minhas Habilidades</Title>
      <ContainerAbilities>
        <Abilities>
          <ContainerImage><Image src={imageHTML} alt='' /></ContainerImage>
          <TitleAbilities>HTML</TitleAbilities>
          <ContentAbilities>Linguagem de marcação de páginas Web.</ContentAbilities>
        </Abilities>
        <Abilities>
          <ContainerImage><Image src={imageCSS} alt='' /></ContainerImage>
          <TitleAbilities>CSS</TitleAbilities>
          <ContentAbilities>Mecanismo para adicionar estilo.</ContentAbilities>
        </Abilities>
        <Abilities>
          <ContainerImage><Image src={imageReact} alt='' /></ContainerImage>
          <TitleAbilities>React.js</TitleAbilities>
          <ContentAbilities>Biblioteca JavaScript com foco em criar interfaces de usuário.</ContentAbilities>
        </Abilities>
        <Abilities>
          <ContainerImage><Image src={imageJs} alt='' /></ContainerImage>
          <TitleAbilities>Javascript</TitleAbilities>
          <ContentAbilities>Linguagem de programação interpretada estruturada, de script em alto nível.</ContentAbilities>
        </Abilities>
        <Abilities>
          <ContainerImage><Image src={imageLinux} alt='' /></ContainerImage>
          <TitleAbilities>Linux</TitleAbilities>
          <ContentAbilities>Sistema operacional.</ContentAbilities>
        </Abilities>
        <Abilities>
          <ContainerImage><Image src={imageGit} alt='' /></ContainerImage>
          <TitleAbilities>Git</TitleAbilities>
          <ContentAbilities>Sistema de controle de versões distribuído.</ContentAbilities>
        </Abilities>

      </ContainerAbilities>
    </ContainerPage>
  );
}

export default AboutPage;