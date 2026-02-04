import React from "react";
import { FooterContainer, Name, Description, SocialIcons, IconLink, CopyRight } from "./styles";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <IconLink href="#"><FaGithub/></IconLink>
        <IconLink href="#"><FaInstagram/></IconLink>
        <IconLink href="#"><FaLinkedin/></IconLink>
      </SocialIcons>
      <CopyRight>© 2025 Stefanon | Feito com amor e muito código</CopyRight>
    </FooterContainer>
  );
}
