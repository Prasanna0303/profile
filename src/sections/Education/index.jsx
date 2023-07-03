import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import {
  ExperienceSection,
  Header,
  ExpContent,
  ExpCard,
  CompanyDetails,
  SkillCont,
  Description,
} from "../Experience/styles";
import Work from "../../assets/svgs/work";
import Date from "../../assets/svgs/date";
import { EducationData } from "../../data";

function Education() {
  const expRef = useRef(null);
  const show = useOnIntersect(expRef, 0.2);
  return (
    <ExperienceSection
      ref={expRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="education"
    >
      <Header>Education</Header>
      <ExpContent>
        {EducationData.map((exp, index1) => (
          <ExpCard key={"company-" + exp.name}>
            <div className="company-logo">
              <img src={exp.logo} alt={exp.name} />
            </div>
            <CompanyDetails>
              <h2 className="cmp-name">
                <Work />
                {exp.name}
              </h2>
              <h3 className="duration">
                <Date />
                {exp.duration}
              </h3>
              {
                exp.skills?.length ?  <h4 className="skill-cont">
                <span className="head">Skills:</span>
                <br />
                {exp.skills?.map((skil, index2) => (
                  <SkillCont key={"skill-" + index1 + index2}>{skil}</SkillCont>
                ))}
              </h4> : null
              }
            </CompanyDetails>
            <Description>
              {exp.desc?.map((des, index2) => (
                <li key={"li-" + index1 + index2}>{des}</li>
              ))}
            </Description>
          </ExpCard>
        ))}
      </ExpContent>
    </ExperienceSection>
  );
}

export default Education;
