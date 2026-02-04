import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #090808ff; // preto como na imagem
  color: #aaa; // cor do texto
  text-align: center;
  padding: 2rem 1rem;
`;

export const Name = styled.h2`
  color: #1e90ff; // azul como na imagem
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const IconLink = styled.a`
  background-color: #111;
  padding: 0.5rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1e90ff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background-color: #222;
  }
`;

export const CopyRight = styled.p`
  font-size: 0.8rem;
  color: #888;
`;
