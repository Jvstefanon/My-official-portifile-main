import * as S from "../About/styles";
import { FaCode, FaLightbulb, FaMugHot } from "react-icons/fa";

function About() {
  return (
    <>
      <S.AboutMeContainer className='about_me' id="about">
        <S.TituloTopicos>
          Sobre Mim
        </S.TituloTopicos>
        <S.AboutContent>
          <div>
            <S.AboutText>
              Sou um Desenvolvedor Full Stack Júnior apaixonado por criar aplicações web eficientes, intuitivas e visualmente atraentes. Minha jornada na programação começou com curiosidade e evoluiu para uma busca dedicada à excelência tanto no frontend quanto no backend.
            </S.AboutText>
            <S.AboutText>
              Especializo-me em frameworks modernos de JavaScript, particularmente React no frontend e Node.js no backend, e gosto de construir soluções que sejam tecnicamente robustas e de fácil manutenção. Valorizo escrever código limpo, seguir as melhores práticas e me manter atualizado com as últimas tendências e tecnologias do setor.
            </S.AboutText>
            <S.AboutText>
              Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open-source ou aprimorando minhas habilidades com desafios que me fazem crescer profissionalmente, sempre de olho em oportunidades internacionais na área de tecnologia.
            </S.AboutText>
          </div>
          <S.CardsContainer>
            <S.Card>
              <S.IconWrapper>
                <FaCode />
              </S.IconWrapper>
              <S.Content>
                <S.TitleCard>Código limpo</S.TitleCard>
                <S.Description>
                  Escrever código sustentável e eficiente seguindo as melhores práticas
                </S.Description>
              </S.Content>
            </S.Card>
            <S.Card>
              <S.IconWrapper>
                <FaLightbulb />
              </S.IconWrapper>
              <S.Content>
                <S.TitleCard>Resolução de problemas</S.TitleCard>
                <S.Description>
                  Soluções criativas para desafios complexos no desenvolvimento
                </S.Description>
              </S.Content>
            </S.Card>
            <S.Card>
              <S.IconWrapper>
                <FaMugHot />
              </S.IconWrapper>
              <S.Content>
                <S.TitleCard>Aprendizagem Contínua</S.TitleCard>
                <S.Description>
                  Sempre aprendendo novas tecnologias e aprimorando minhas habilidades
                </S.Description>
              </S.Content>
            </S.Card>
          </S.CardsContainer>
        </S.AboutContent>
      </S.AboutMeContainer>
    </>
  );
}

export default About;