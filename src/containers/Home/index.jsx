import { useState } from "react";
import * as S from "./styles";
import fotoPerfil from "../../img/foto.jpg";
import { FaCode, FaLightbulb, FaMugHot } from "react-icons/fa";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <section className="Menu" id="home">
        <S.Header>
          <S.Title>Stefanon</S.Title>

          <S.MenuToggle
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </S.MenuToggle>

          <S.ButtonsContainer isOpen={isMenuOpen}>
            <S.Button onClick={handleCloseMenu}>
              <S.a href="#home">Home</S.a>
            </S.Button>
            <S.Button onClick={handleCloseMenu}>
              <S.a href="#about">Sobre</S.a>
            </S.Button>
            <S.Button onClick={handleCloseMenu}>
              <S.a href="#skills">Skills</S.a>
            </S.Button>
            <S.Button onClick={handleCloseMenu}>
              <S.a href="#projects">Formações</S.a>
            </S.Button>
            <S.Button onClick={handleCloseMenu}>
              <S.a href="#contact">Contato</S.a>
            </S.Button>
          </S.ButtonsContainer>
        </S.Header>
      </section>

      <S.HomeMeSection className="home_me" id="me">
        <S.img src={fotoPerfil} alt="foto de perfil" />
        <S.NomeTitle>João Stefanon</S.NomeTitle>
        <S.NomeSubtitle>Junior Front-End Developer</S.NomeSubtitle>
        <S.Descricao_A>
          Apaixonado por criar experiências web bonitas e funcionais com tecnologias
          modernas. Sempre disposto a aprender e crescer no mundo em constante
          evolução do desenvolvimento web.
        </S.Descricao_A>
        <S.ButtonCV>
          <S.aCV
            href="/files/curriculo.pdf.pdf"
            download="CV_Joao_Stefanon.pdf"
          >
            Download CV
          </S.aCV>
        </S.ButtonCV>

        <S.SocialContainer>
          <S.Icon
            href="https://www.instagram.com/stefanonn.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <S.InstagramIcon />
          </S.Icon>
          <S.Icon
            href="www.linkedin.com/in/joão-vitor-stefanon-lopes-98a1a730b"
            target="_blank"
            rel="noreferrer"
          >
            <S.LinkedinIcon />
          </S.Icon>
          <S.Icon
            href="https://github.com/Jvstefanon"
            target="_blank"
            rel="noreferrer"
          >
            <S.GithubIcon />
          </S.Icon>
        </S.SocialContainer>
      </S.HomeMeSection>
    </>
  );
}

export default Home;