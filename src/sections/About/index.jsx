import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import { Header } from "../Experience/styles";
import { AboutMeCont, AboutCont } from "./styles";
import me from "../../assets/pngs/ppic.png";

function AboutMe() {
  const aboutRef = useRef(null);
  const show = useOnIntersect(aboutRef, 0.2);
  return (
    <AboutMeCont
      ref={aboutRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="about-me"
    >
      <Header>About Me</Header>
      <AboutCont>
        <div className="prf-pic">
          <img src={me} alt="my profile pic" className="dp" />
          <span className="border-anim"></span>
        </div>
        <div className="prf-det">
          <p>
            Hello, my name is <b>Venkata Prasanna C</b>, You can simply call me{" "}
            <b>Prasanna</b>. Professionally I'm Expert in SEO content creation and have in-depth knowledge of SEO tools & techniques.
            I would like to develop and implement SEO strategies to improve the visibility of web pages in SERP results.
          </p>
          <p>
            I like to learn/try new technologies and implement them in daily
            work. I like to take responsibility for my work.
          </p>
          {/* <p>I like to play Cricket, listen to Music, watching Movies.</p> */}
        </div>
      </AboutCont>
    </AboutMeCont>
  );
}

export default AboutMe;
