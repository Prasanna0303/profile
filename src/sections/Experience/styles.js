import styled from "styled-components";

export const ExperienceSection = styled.section`
  padding: 2rem 0;
`;

export const Header = styled.h1`
  font-size: 2rem;
  padding: 1rem 0;
  text-transform: uppercase;
  text-decoration: underline;
  span {
    color: var(--green);
  }
`;

export const ExpContent = styled.div`
  background-color: var(--light-navy);
  padding: 2.5rem;
  border-radius: 0.25rem;
  @media only screen and (max-width: 530px) {
    padding: 2rem 1.5rem 1.5rem;
  }
`;

// export const

export const ExpCard = styled.div`
  padding: 2rem;
  border: 1px solid #6d758f;
  background-color: var(--navy);
  border-radius: 0.25rem;
  position: relative;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  .top-bar {
    display: flex;
  }
  .achievements {
    margin-top: 10px;
    ul {
      padding-left: 1.5rem;
    }
  }
  .company-logo {
    transition: 0.5s ease-in-out;
    position: absolute;
    left: 2rem;
    top: -1.5rem;
    width: 3rem;
    height: 3rem;
    border: 1px solid #6d758f;
    background-color: var(--navy);
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:first-child {
    img {
      position: relative;
      top: -0.08rem;
      left: -0.2rem;
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    /* transform: translateY(-0.5rem); */
    border: 1px solid var(--white);
    background-color: var(--skill-navy);
    .company-logo {
      border: 1px solid var(--white);
      background-color: var(--skill-navy);
    }
  }
  @media only screen and (max-width: 530px)  {
    flex-direction: column;
    padding: 2rem 1.5rem 1.5rem;
  }
`;

export const CompanyDetails = styled.div`
  flex: 0.4;
  .cmp-name,
  .duration {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    svg {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 0.4rem;
    }
  }
  .duration {
    font-size: 1rem;
    svg {
      min-width: 1.5rem;
      height: 1rem;
      width: auto;
    }
  }
  .skill-cont {
    span.head {
      display: inline-block;
      margin-bottom: 0.2rem;
    }
  }
`;

export const SkillCont = styled.span`
  display: inline-block;
  padding: 0.3rem 0.4rem;
  margin: 0 0.2rem 0.25rem;
  background-color: var(--dark-navy);
  color: var(--white);
  border-radius: 0.2rem;
  border: 1px solid var(--white);
  transition: 0.5s ease-in-out;
  font-weight: 500;
  &:hover {
    color: var(--green);
    border-color: var(--green);
    scale: 1.05;
  }
`;

export const Description = styled.ul`
  flex: 0.6;
  padding-left: 1.5rem;
  li {
    margin: 0.1rem 0;
  }
`;
