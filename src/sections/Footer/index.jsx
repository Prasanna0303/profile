import styled from "styled-components";

import { MediaContent } from "../Socials";

function Footer() {
  return (
    <FooterCont>
      <MediaContent />
      <p className="owner">
        Designed & built by <br /> <b>Prasanna</b>
      </p>
    </FooterCont>
  );
}

export default Footer;

const FooterCont = styled.footer`
  padding: 1.5rem;
  background-color: var(--dark-navy);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  ul {
    display: flex;
    justify-content: center;
    li .social-link {
      margin: 0 0.5rem;
    }
  }
  .owner {
    text-align: center;
    margin-top: 0.3rem;
    b {
      color: var(--green);
    }
  }
`;
