import * as S from "./styles";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Skills() {
  return (
    <>
      <S.SkillSection id="skills">
        <S.TituloTopicos>Skills & Tecnologias</S.TituloTopicos>

        <S.Card_Skills>
          <S.Card>
            <S.Icon><FaHtml5 /></S.Icon>
            <S.SkillName>HTML</S.SkillName>
            <S.ProgressContainer>
              <S.ProgressFill percentage={90} />
            </S.ProgressContainer>
            <S.Percentage>90%</S.Percentage>
          </S.Card>

          <S.Card>
            <S.Icon><FaCss3Alt /></S.Icon>
            <S.SkillName>CSS</S.SkillName>
            <S.ProgressContainer>
              <S.ProgressFill percentage={85} />
            </S.ProgressContainer>
            <S.Percentage>85%</S.Percentage>
          </S.Card>

          <S.Card>
            <S.Icon><SiJavascript /></S.Icon>
            <S.SkillName>JavaScript</S.SkillName>
            <S.ProgressContainer>
              <S.ProgressFill percentage={75} />
            </S.ProgressContainer>
            <S.Percentage>75%</S.Percentage>
          </S.Card>

          <S.Card>
            <S.Icon><FaReact /></S.Icon>
            <S.SkillName>React</S.SkillName>
            <S.ProgressContainer>
              <S.ProgressFill percentage={70} />
            </S.ProgressContainer>
            <S.Percentage>70%</S.Percentage>
          </S.Card>
        </S.Card_Skills>
        <S.SubTitle>
          Tecnologias adicionais
        </S.SubTitle>
        <S.SubContainer>
          <S.SubSkills>Git</S.SubSkills>
          <S.SubSkills>Node.js</S.SubSkills>
          <S.SubSkills>MySQL</S.SubSkills>
          <S.SubSkills>Python</S.SubSkills>
          <S.SubSkills>C#</S.SubSkills>
          <S.SubSkills>C++</S.SubSkills>
        </S.SubContainer>

      </S.SkillSection>
    </>
  );
}

export default Skills;
