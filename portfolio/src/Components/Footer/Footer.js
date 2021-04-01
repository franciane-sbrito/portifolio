import React from 'react';
import { ContainerNetworks, ContainerNetwork, ContainerFooter, Text, Image } from './styled'
import imageFooter from '../../images/footer.png'
const Footer = () => {
  return (
    <ContainerFooter>
    {/*   <Image src={imageFooter} alt='' /> */}
      <ContainerNetworks>
        <ContainerNetwork href="#">
          <i class="fas fa-envelope-square"></i>
        </ContainerNetwork>

        <ContainerNetwork href="#">
          <i class="fab fa-github-square"></i>
        </ContainerNetwork>

        <ContainerNetwork href="#">
          <i class="fab fa-instagram-square"></i>
        </ContainerNetwork>

        <ContainerNetwork href="#">
          <i class="fab fa-linkedin"></i>
        </ContainerNetwork>

        <ContainerNetwork href="#">
          <i class="fab fa-whatsapp-square"></i>
        </ContainerNetwork>
      </ContainerNetworks>
      <Text>2021 © Todos os direitos reservados.</Text>
    </ContainerFooter>
  );
}

export default Footer;