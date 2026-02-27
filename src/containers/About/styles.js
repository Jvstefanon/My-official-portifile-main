import styled from "styled-components";


export const TituloTopicos = styled.h1`
    position: relative;
    display: inline-block;
    margin: 0 auto;
    font-weight: bold;
    font-size: 3rem;
    color: #fff;
    text-align: center;
    &::after {
        content: "";
        display: block;
        width: 2.5em;
        height: 5px;
        background-color: #3d87ff;
        margin: 6px auto 0;
        border-radius: 8px;
    }
`;

export const AboutMeContainer = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 6rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const AboutText = styled.p`
  color: #676767ff;
  text-align: justify;
  max-width: 100%;
  line-height: 1.6;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 1rem;

  @media (min-width: 900px) {
    max-width: 90%;
  }
`;

export const Card = styled.div`
  background-color: #040404ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  margin: 0 0 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  gap: 1.2em;
  width: 100%;
  max-width: 750px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #027fe5ff;
    font-size: 1.9rem;
    size: 50px;
    background-color: #051c43ff;
    padding: 12px 12px;
    border-radius: 12px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
`;

export const TitleCard = styled.a`
    margin: 0;
    padding: 0;
    font-size: 110%;
    font-weight: 0.5rem;
`;

export const Description = styled.a`
    margin: 0;
    font-size: 100%;
    padding-top: 0.8rem;
    color: #c0c0c0;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  @media (min-width: 900px) {
    padding-left: 2rem;
  }
`;