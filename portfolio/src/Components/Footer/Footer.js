import React from 'react';
import { ContainerNetworks, ContainerNetwork, ContainerFooter, Text, Image } from './styled'
import imageFooter from '../../images/footer.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


const Footer = () => {
  return (
    <ContainerFooter>
    {/*   <Image src={imageFooter} alt='' /> */}
      <ContainerNetworks>
      <ContainerNetwork href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRmVXGTjLKbdsTdDZrZqlvkgBkhgPHKpQpFPVcrfDpVwjBBxSBrHSDjcsSRDzqhsVxVGtxv">
      <EmailIcon fontSize={"large"}/>
      </ContainerNetwork>

      <ContainerNetwork href="https://github.com/franciane-brito">
        <GitHubIcon fontSize={"large"}/>
      </ContainerNetwork>

      <ContainerNetwork href="https://www.instagram.com/francianebrito4/">
      <InstagramIcon fontSize={"large"}/>
      </ContainerNetwork>

      <ContainerNetwork href="https://www.linkedin.com/in/franciane-brito-7b2283189">
      <LinkedInIcon fontSize={"large"}/>
      </ContainerNetwork>

      <ContainerNetwork href="https://api.whatsapp.com/send?phone=5531992164866">
      <WhatsAppIcon fontSize={"large"}/>
      </ContainerNetwork>
      </ContainerNetworks>
      <Text>2021 © Todos os direitos reservados.</Text>
    </ContainerFooter>
  );
}

export default Footer;