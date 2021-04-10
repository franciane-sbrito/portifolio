import React from 'react';

import {
    Abilities,
    ContainerImage,
    Image,
    TitleAbilities,
    ContentAbilities
} from './styled'


const CardSkills = (props) => {
    return (
        <Abilities>
            <ContainerImage><Image src={props.src} alt='' /></ContainerImage>
            <TitleAbilities>{props.language}</TitleAbilities>
            <ContentAbilities>{props.description}</ContentAbilities>
        </Abilities>
    )
}
export default CardSkills;
