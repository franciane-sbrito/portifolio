import React from 'react';
import { ContainerPage, Title, Stars, Stars2} from './styled';

const HomePage = () => {
    return (
        <ContainerPage id={"home"}>
            <Stars/>
            <Stars2/>
            <Title>Desenvolvedora Front End :)</Title>
        </ContainerPage>
    );
}

export default HomePage;