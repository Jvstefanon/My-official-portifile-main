import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaGithub, FaCode, FaLightbulb, FaMugHot } from "react-icons/fa";

// Header sem responsividade
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #000000ff;
`;

// Title sem responsividade
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #3d87ffff;
  background-color: #000000ff;
  position: relative;
  padding: 10px;
  margin-left: 10rem;
`;

// Botões sem responsividade
export const Button = styled.button`
  background-color: #000000ff;
  position: relative;
  right: 6rem;
  margin: 0;
  font-size: 2em;
  border: none;
  border-radius: 8px;
  padding: 10px 12px 0 0.4rem;
  transition: background 0.2s, color 0.2s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 80%;
    background: #3d87ffff;
    transform: scaleX(0);
    transform-origin: start;
    transition: transform 0.4s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export const a = styled.a`
    color: #ffffffff;
    position: relative;
    text-decoration: none;
    padding: 5px;
    font-size: 1rem;

    &:hover{
       color: #3d87ffff;    
    }
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-right: 1rem;
  gap: 15px;
`;

// Imagem sem responsividade
export const img = styled.img`
  display: flex;
  margin: 0 auto;
  width: 350px;
  height: auto;
  border-radius: 17rem;
  border-color: #1c4382ff;
  border-style: solid;
  border-width: 4px;
  margin-top: 8rem;
`;

// HomeMeSection sem responsividade
export const HomeMeSection = styled.section`
  margin-top: 9rem;
`;
export const Descricao_A = styled.a`
  color: #676767ff;
  text-align: center;
  display: block; 
  flex-direction: column;
  font-size: 109%;
  padding: 15px;
  margin: 0 auto;
  width: 35%;
`;
export const NomeTitle = styled.h1`
    font-size: 1rem;
    color: #aacbffff;
    background-color: #000000ff;
    position: relative;
    text-align: center;
    padding: 1rem;
    font-size: 4rem;
`;
export const NomeSubtitle = styled.h3`
    font-size: 2rem;
    color: rgba(0, 100, 207, 1);
    background-color: #000000ff;
    position: relative;
    text-align: center;
    font-size: 155%;
    `
export const ButtonCV = styled.button`
    display: flex;
    margin: 0 auto;
    font-family: 'SF Pro Rounded', Helvetica, sans-serif;
    justify-content: center;
    background-color: #000000ff;
    border-color: #0062ffff;
    border-radius: 12px;
    border-style: solid;
    border-width: 1px;
    margin-top: 1rem;
    &:hover{
       background-color: #001441ff;  
    }
    `
export const aCV = styled.a`
    color: #3d87ffff; 
    padding: 15px;
    font-size: 120%;
    text-decoration: none;
        &:hover{
           color: #ffffffff;
        }
    `
export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 8rem;
`;

// Ícone genérico
export const Icon = styled.a`
  font-size: 2rem;
  transition: transform 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

// Ícones específicos com cores diferentes
export const InstagramIcon = styled(FaInstagram)`
  color: #333;

  ${Icon}:hover & {
    color: #e1306c;
  }
`;

export const LinkedinIcon = styled(FaLinkedin)`
  color: #333;

  ${Icon}:hover & {
    color: #0077b5;
  }
`;

export const GithubIcon = styled(FaGithub)`
  color: #333;

  ${Icon}:hover & {
    color: #6e5494;
  }
`
//* TITULOS DOS TOPICOS//
export const TituloTopicos = styled.h1`
    position: relative;
  display: inline-block; /* ajusta o tamanho ao texto */
  margin: 0 auto;
  font-weight: bold;
  font-size: 3rem;
  color: #fff;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 7rem; /* largura da barrinha */
    height: 5px; /* espessura da barrinha */
    background-color: #3d87ff; /* cor da barrinha */
    margin: 4px auto 0; /* espaço entre o texto e a barrinha */
    border-radius: 8px; /* bordas arredondadas da barrinha */
  }
`;

