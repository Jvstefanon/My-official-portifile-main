import styled from "styled-components";

export const ProjectSection = styled.section`
min-height: 90vh; /* altura mínima de uma tela inteira */
  display: flex;
  flex-direction: column;
  padding: 6rem;
  flex-wrap: wrap;
`;

export const TituloTopicos = styled.h1`
  display: block;
  font-weight: bold;
  font-size: 3rem;
  color: #fff;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 10rem;
    height: 5px;
    background-color: #3d87ff;
    margin: 4px auto 4.5rem; /* espaço entre o texto e a barrinha e abaixo dela */
    border-radius: 8px;
  }
`;


export const Card_Porjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131212ff;
  padding: 2.5rem;
  border-radius: 16px;
  width: 350px;
  height: 450px;
  color: white;
  gap: 1rem;
  border-color: #000000;
`;

export const FormName = styled.p`
  top: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
`

export const FormImg = styled.img`
  position: relative;
  bottom: 40px;
  height: 200px;
  width: 350px;
  border-radius: 16px 10px 0px 0px;
`;

export const FormImg2 = styled.img`
  position: relative;
  bottom: 40px;
  height: 200px;
  width: 350px;
  border-radius: 16px 10px 0px 0px;
`;

export const SubSkills = styled.a`
  color: #f4f4f5ff;
  font-size: 80%;
  font-family: 'SF Pro Rounded', Helvetica, sans-serif;
  background-color: #05171e32;
  padding: 3px 10px;
  border-radius: 16px;
  border: 1px solid #e8e8e867;
  text-decoration: none; /* remove sublinhado do link */
  display: inline-block; /* garante que o padding funcione */
  transition: 0.3s;      /* efeito suave se quiser hover */
  
  &:hover {
    background-color: #01050bbd; /* efeito visual ao passar o mouse */
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;      /* permite quebrar linha se não couber */
  gap: 5px;            /* espaço entre os itens */
`;


