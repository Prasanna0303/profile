import { SocialsComp, MediaCont } from "./styles";
import LinkedInSvg from "../../assets/svgs/linked-in";
import EmailSvg from "../../assets/svgs/email";
import Github from "../../assets/svgs/github";

function Socials() {
  return (
    <SocialsComp className="lazy-load">
      <MediaContent />
      <div className="bar"></div>
    </SocialsComp>
  );
}

export const MediaContent = ({ mobile }) => (
  <MediaCont className={mobile ? "mobile lazy-load" : ""}>
    <li>
      <a
        className="social-link"
        href="https://www.linkedin.com/in/venkata-prasanna-c/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInSvg />
      </a>
    </li>
    <li>
      <a className="social-link" href="mailto:prasannasai54@gmail.com">
        <EmailSvg />
      </a>
    </li>
    <li>
      <a
        className="social-link"
        href="https://github.com/Prasanna0303/profile/"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
    </li>
  </MediaCont>
);

export default Socials;
