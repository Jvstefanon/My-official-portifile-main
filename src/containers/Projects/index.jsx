import * as S from "./styles";
import Fortec from "../../img/fortec.jpg";
import Unisanta from "../../img/unisanta.png";


function Projects() {
  return (
    <>
    

      <S.ProjectSection className="Formacao_section" id="projects">
        <S.TituloTopicos>Formações</S.TituloTopicos>
          <S.Card_Porjects>
            <S.Card>
                <S.FormImg src={Fortec} alt="foto de perfil" />
                <S.FormName>Ensino Médio Técnico em TI - Completo</S.FormName>
                
                <S.SubContainer>
                  <S.SubSkills>C#</S.SubSkills>
                  <S.SubSkills>HTML</S.SubSkills>
                  <S.SubSkills>Pyhton</S.SubSkills>
                  <S.SubSkills>React</S.SubSkills>
                  <S.SubSkills>MongoDB</S.SubSkills>
                  <S.SubSkills>PHP</S.SubSkills>
                  <S.SubSkills>MySQL</S.SubSkills>
                  <S.SubSkills>Java</S.SubSkills>
                  <S.SubSkills>Java Script</S.SubSkills>
              </S.SubContainer>
            </S.Card>

          <S.Card>
            <S.FormImg2 src={Unisanta} alt="foto de perfil" />
            <S.FormName>Bacharelado em Sistemas da Informação - Cursando</S.FormName>
              <S.SubContainer>
                <S.SubSkills>C#</S.SubSkills>
                <S.SubSkills>HTML</S.SubSkills>
                <S.SubSkills>CSS</S.SubSkills>
                <S.SubSkills>Java Script</S.SubSkills>
              </S.SubContainer>
            
          </S.Card>
        </S.Card_Porjects>

      </S.ProjectSection>
    </>
  );
}

export default Projects;