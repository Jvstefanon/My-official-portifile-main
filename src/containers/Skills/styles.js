import styled from "styled-components";

//* TÍTULOS DOS TÓPICOS *//
export const TituloTopicos = styled.h1`
  display: block;
  margin: 0 auto;
  font-weight: bold;
  font-size: 3rem;
  color: #fff;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 15rem; /* largura da barrinha */
    height: 5px; /* espessura da barrinha */
    background-color: #3d87ff; /* cor da barrinha */
    margin: 4px auto 0; /* espaço entre o texto e a barrinha */
    border-radius: 8px;
    margin-bottom: 4.5rem; /* espaço extra abaixo */
  }
`;

//* SECTION DE SKILLS *//
export const SkillSection = styled.section`
  min-height: 60vh; /* ocupa pelo menos a altura total da tela */
  background-color: #080808ff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* centraliza verticalmente */
  align-items: center; /* centraliza horizontalmente */
  padding: 7rem 2rem; /* espaço interno */
  box-sizing: border-box;
`;

// ======== CARD SKILLS ===========//
export const Card_Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem; /* espaço entre os cards */
  justify-content: center; /* centraliza na horizontal */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131212ff;
  padding: 2.5rem;
  border-radius: 16px;
  width:250px;
  height: 300px;
  color: white;
  gap: 1rem;
`;

// Ícone no topo do card
export const Icon = styled.div`
  font-size: 3.3rem;
  color: #3d87ff;
`;

// Nome da skill
export const SkillName = styled.p`
position: relative;
top: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 3rem;
`;

// Barra de progresso
export const ProgressContainer = styled.div`
  width: 100%;
  background-color: #222;
  border-radius: 10px;
  height: 8px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.percentage || 0}%;
  background-color: #3d87ff;
  transition: width 0.4s ease-in-out;
`;

// Porcentagem
export const Percentage = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;
export const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;      /* permite quebrar linha se não couber */
  gap: 10px;            /* espaço entre os itens */
  justify-content: flex-start; /* alinha à esquerda */
`;

export const SubTitle = styled.h3`
  color: #fffffffe;
  padding: 2.5rem 0;   /* só cima/baixo */
`;

export const SubSkills = styled.a`
  color: #3d87ff;
  font-size: 109%;
  font-family: 'SF Pro Rounded', Helvetica, sans-serif;
  background-color: #042f3f32;
  padding: 6px 20px;
  border-radius: 16px;
  border: 1px solid #3d87ff67;
  text-decoration: none; /* remove sublinhado do link */
  display: inline-block; /* garante que o padding funcione */
  transition: 0.3s;      /* efeito suave se quiser hover */
  
  &:hover {
    background-color: #3d87ff33; /* efeito visual ao passar o mouse */
  }
`;