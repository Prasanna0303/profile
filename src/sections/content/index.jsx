import { ContentComp } from "./styles";
import Introduction from "../Introduction";
import AboutMe from "../About";
import Experience from "../Experience";
import Skills from "../Skills";
import Contact from "../Contact";
import Education from "../Education";

function Content() {
  return (
    <ContentComp>
      <Introduction />
      <AboutMe />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </ContentComp>
  );
}

export default Content;
