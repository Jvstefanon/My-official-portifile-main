import * as S from "./styles";
import fotoPerfil from "../../img/foto.jpg";
import { FaCode, FaLightbulb, FaMugHot } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className='Menu' id="home">
        <S.Header>
          <S.Title>Stefanon</S.Title>
          <S.ButtonsContainer>
            <S.Button><S.a href="#home">Home</S.a></S.Button>
            <S.Button><S.a href="#about">About</S.a></S.Button>
            <S.Button><S.a href="#skills">Skills</S.a></S.Button>
            <S.Button><S.a href="#projects">Projects</S.a></S.Button>
            <S.Button><S.a href="#contact"></S.a></S.Button>
          </S.ButtonsContainer>
        </S.Header>
      </section>

      <S.HomeMeSection className='home_me' id="me">
        <S.img src={fotoPerfil} alt="foto de perfil" />
        <S.NomeTitle>João Stefanon</S.NomeTitle>
        <S.NomeSubtitle>Junior Full-Stack Developer</S.NomeSubtitle>
        <S.Descricao_A>
          Apaixonado por criar experiências web bonitas e funcionais com tecnologias modernas. Sempre disposto a aprender e crescer no mundo em constante evolução do desenvolvimento web.
        </S.Descricao_A>
        <S.ButtonCV>
          <S.aCV href="/files/curriculo.pdf" download="CV_Joao_Stefanon.pdf">Download CV</S.aCV>

        </S.ButtonCV>

        <S.SocialContainer>
          <S.Icon href="https://www.instagram.com/stefanonn.dev/" target="_blank">
            <S.InstagramIcon />
          </S.Icon>
          <S.Icon href="www.linkedin.com/in/joão-vitor-stefanon-lopes-98a1a730b" target="_blank">
            <S.LinkedinIcon />
          </S.Icon>
          <S.Icon href="https://github.com/Jvstefanon" target="_blank">
            <S.GithubIcon />
          </S.Icon>
        </S.SocialContainer>
      </S.HomeMeSection>
    </>
  );

}

export default Home;