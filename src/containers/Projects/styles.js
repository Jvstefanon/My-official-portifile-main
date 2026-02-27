import styled from "styled-components";

export const ProjectSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 6rem;
  }
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
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2.5rem;
    justify-content: center;
    align-items: stretch;
  }
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131212ff;
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 350px;
  min-height: 420px;
  color: white;
  gap: 1rem;
  border-color: #000000;
  box-sizing: border-box;
`;

export const FormName = styled.p`
  top: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
`

export const FormImg = styled.img`
  width: 80%;
  max-width: 180px;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  display: block;
  margin: 15px auto;
`;

export const FormImg2 = styled.img`
  width: 80%;
  max-width: 180px;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  display: block;
  margin: 15px auto;
`;

export const LogoWrapper = styled.div`
  position: relative;
  bottom: 32px;
  width: 100%;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
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
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;


