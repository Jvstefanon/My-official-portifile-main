import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaGithub, FaCode, FaLightbulb, FaMugHot } from "react-icons/fa";

// Header responsivo
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: #000000ff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

// Title responsivo
export const Title = styled.h1`
  font-size: 2rem;
  color: #3d87ffff;
  background-color: #000000ff;
  position: relative;
  padding: 0.5rem 0;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

// Toggle do menu (hambúrguer)
export const MenuToggle = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid #3d87ffff;
  background-color: transparent;
  cursor: pointer;

  span {
    width: 22px;
    height: 2px;
    border-radius: 999px;
    background-color: #ffffffff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Botões responsivos
export const Button = styled.button`
  background-color: transparent;
  position: relative;
  margin: 0;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 8px 0.4rem;
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
`;

export const a = styled.a`
    color: #ffffffff;
    position: relative;
    text-decoration: none;
    padding: 5px;
    font-size: 1rem;

    &:hover{
       color: #3d87ffff;    
    }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem 1rem 1rem;
    background-color: #000000ff;
    gap: 8px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    border-bottom: 1px solid #1c4382ff;
  }

  @media (min-width: 769px) {
    margin-right: 1rem;
  }
`;

// Imagem responsiva
export const img = styled.img`
  display: block;
  margin: 0 auto;
  width: min(350px, 70vw);
  height: auto;
  border-radius: 17rem;
  border-color: #1c4382ff;
  border-style: solid;
  border-width: 4px;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin-top: 7rem;
  }
`;

// HomeMeSection responsiva
export const HomeMeSection = styled.section`
  margin-top: 9rem;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0;
  }
`;
export const Descricao_A = styled.a`
  color: #676767ff;
  text-align: center;
  display: block; 
  flex-direction: column;
  font-size: 1rem;
  padding: 15px;
  margin: 0 auto;
  width: 90%;
  max-width: 600px;

  @media (min-width: 768px) {
    width: 60%;
    font-size: 1.09rem;
  }

  @media (min-width: 1024px) {
    width: 35%;
  }
`;

export const NomeTitle = styled.h1`
  color: #aacbffff;
  background-color: #000000ff;
  position: relative;
  text-align: center;
  padding: 1rem;
  font-size: 2.5rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const NomeSubtitle = styled.h3`
  color: rgba(0, 100, 207, 1);
  background-color: #000000ff;
  position: relative;
  text-align: center;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const ButtonCV = styled.button`
    display: flex;
    margin: 1rem auto 0;
    font-family: 'SF Pro Rounded', Helvetica, sans-serif;
    justify-content: center;
    background-color: #000000ff;
    border-color: #0062ffff;
    border-radius: 12px;
    border-style: solid;
    border-width: 1px;
    &:hover{
       background-color: #001441ff;  
    }
    `;
export const aCV = styled.a`
    color: #3d87ffff; 
    padding: 12px 18px;
    font-size: 1rem;
    text-decoration: none;
        &:hover{
           color: #ffffffff;
        }
    `;
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

