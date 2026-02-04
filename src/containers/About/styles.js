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
  min-height: 90vh; /* altura mínima de uma tela inteira */
  display: flex;
  align-items: flex-start;
  padding: 6rem;
  flex-wrap: wrap;
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
`;

export const AboutText = styled.p`
    color: #676767ff;
    display: grid;
    justify-content: start;
    text-align: justify;
    max-width: 90%;
    max-height: auto;
    padding-left: 13rem;
    font-weight: 700px;
    margin-top: 1.5rem;
    line-height: 1.6;
    font-size: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: normal;
`;

export const Card = styled.div`
    background-color: #040404ff;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    margin: 0 2px;
    padding: 1rem;
    border-radius: 10px;
    padding-right: 4rem;
    gap: 1.2em;
    width: 750px;
    margin-top: 1.5rem;
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
    padding-right: 5rem;

    :hover {
        background-color: #13131aff;
        ;
    }
 `;