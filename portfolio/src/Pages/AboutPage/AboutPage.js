import React from 'react';
import { ContainerPage, Description, Title, Abilities, Image, ContainerAbilities, ContainerDescription, ContainerImage, ContentAbilities, TitleAbilities } from './styled';
import imagem from '../../images/imagehome.png'
import imageHTML from '../../images/html.png'
import imageCSS from '../../images/css.png'
import imageJs from '../../images/js.png'
import imageReact from '../../images/react.png'
import imageLinux from '../../images/linux.png'
import imageGit from '../../images/git.png'
import imageMysql from '../../images/mysql.png'
import imageNodejs from '../../images/nodejs.png'
import CardSkills from '../../Components/cardSkills/cardSkills';

const AboutPage = () => {
  return (
    <ContainerPage id={"sobre"}>
      <ContainerDescription>

        <Title>SOBRE MIM</Title>
        <Description>Meu nome é Franciane e sou desenvolvedora Front-end JR. Gosto muito de aprender sobre novas tecnologias por isso comecei a participar de um bootcamp de programação onde aprendi as soft skills e as hards skills mais procuradas no mercado. Espero poder te ajudar e se sim entre em contato comigo através de alguma das minhas redes sociais. :)</Description>
      </ContainerDescription>
      <Title id={"habilities"}>Minhas Habilidades</Title>

      <ContainerAbilities>

        <CardSkills
          src={imageHTML}
          language={"HTML"}
          description={"Linguagem de marcação de páginas Web."}
        />

        <CardSkills
          src={imageCSS}
          language={"CSS"}
          description={"Mecanismo para adicionar estilo."}
        />

        <CardSkills
          src={imageReact}
          language={"React.js"}
          description={"Biblioteca JavaScript com foco em criar interfaces de usuário."}
        />

        <CardSkills
          src={imageJs}
          language={"Javascript"}
          description={"Linguagem de programação interpretada estruturada, de script em alto nível."}
        />

        <CardSkills
          src={imageLinux}
          language={"Linux"}
          description={"Sistema operacional."}
        />

        <CardSkills
          src={imageGit}
          language={"Git"}
          description={"Sistema de controle de versões distribuído."}
        />

        <CardSkills
          src={imageNodejs}
          language={"Node.js"}
          description={"Node.js é um software que executa códigos JavaScript no backend e frontend"}
        />

        <CardSkills
          src={imageMysql}
          language={"MySQL"}
          description={"O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL."}
        />

        <CardSkills
          /* src={imageMysql}
          language={"MySQL"}
          description={"O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL."}
         *//>

      </ContainerAbilities>
    </ContainerPage>
  );
}

export default AboutPage;