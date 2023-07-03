import { FixedNavbar, LeftLogo, RightLinks } from "./styles";
import Vsvg from "../../../assets/svgs/v-svg";

function DesktopNavbar({ activeCls, showLoaderAnimation }) {
  // 0 --> show without shadow
  // 1 --> show with shadow
  // 2 --> hide
  return (
    <FixedNavbar className={activeCls}>
      <LeftLogo>
        <button onClick={showLoaderAnimation} className="letter-v lazy-load">
          <Vsvg />
        </button>
      </LeftLogo>
      <RightLinks>
        <Links />
      </RightLinks>
    </FixedNavbar>
  );
}

export const Links = ({ mobile = false, onClick }) => {
  const onAnchorClick = onClick ? onClick : () => "";
  return (
    <ul className="links">
      <li>
        <a
          onClick={onAnchorClick}
          className="anchor lazy-load"
          href="#about-me"
        >
          <span>01.</span> {mobile && <br />} About Me
        </a>
      </li>
      <li>
        <a
          onClick={onAnchorClick}
          className="anchor lazy-load"
          href="#experience"
        >
          <span>02.</span> {mobile && <br />} Experience
        </a>
      </li>
      <li>
        <a onClick={onAnchorClick} className="anchor lazy-load" href="#skills">
          <span>03.</span> {mobile && <br />} Skills
        </a>
      </li>
      <li>
        <a
          onClick={onAnchorClick}
          className="anchor lazy-load"
          href="#education"
        >
          <span>04.</span> {mobile && <br />} Education
        </a>
      </li>
      <li>
        <a
          onClick={onAnchorClick}
          className="anchor lazy-load"
          href="#contact-me"
        >
          <span>05.</span> {mobile && <br />} Get In Touch
        </a>
      </li>
    </ul>
  );
};

export default DesktopNavbar;
