import React from 'react';
import { ContainerNetworks, ContainerNetwork, Image } from './styled'
import ImageInstagram from '../../images/instagram.svg'
import ImageLinkedin from '../../images/linkedin.svg'
import ImageWhatsapp from '../../images/whatsapp.svg'
import ImageGithub from '../../images/github.svg'
import ImageEmail from '../../images/email.svg'

const Network = () => {
  return (
    <ContainerNetworks>
      <ContainerNetwork href="#">
        <i class="fas fa-envelope-square"></i>
      {/* <img src={ImageInstagram} alt={""} /> */}
      </ContainerNetwork>

      <ContainerNetwork href="https://github.com/franciane-sbrito">
        <i class="fab fa-github-square"></i>
      {/* <img src={ImageLinkedin} alt={""} /> */}
      </ContainerNetwork>

      <ContainerNetwork href="#">
        <i class="fab fa-instagram-square"></i>
      {/* <img src={ImageWhatsapp} alt={""} /> */}
      </ContainerNetwork>

      <ContainerNetwork href="https://www.linkedin.com/in/franciane-brito-7b2283189">
        <i class="fab fa-linkedin"></i>
      {/* <img src={ImageGithub} alt={""} /> */}
      </ContainerNetwork>

      <ContainerNetwork href="https://api.whatsapp.com/send?phone=5531992164866">
        <i class="fab fa-whatsapp-square"></i>
      {/* <img src={Image} alt={""} /> */}
      </ContainerNetwork>

    </ContainerNetworks>
  );
}

export default Network;