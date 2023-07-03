import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1BdyhxeMrA0srC_NK_XmBEUt1-FUWKloq/view",
      "_blank"
    );
  };
  const onViewSamples = () => {
    window.open(
      "https://drive.google.com/drive/folders/1_WJ1gzgylolGWgut1PSDIK5H5URkjaKJ?usp=sharing",
      "_blank"
    );
  }
  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, my name is</h3>
      <h1 className="name lazy-load">Venkata Prasanna Chowdam</h1>
      <h2 className="desg lazy-load">
        {"<>"} Assistant Manager - SEO {"</>"}
      </h2>
      <p className="description lazy-load">
      Expert in web content creation with 6+ years in writing academic & web content with excellent skills in creation and optimizing content to increase visibility in web results and also increase SERP - organic search rankings.
        <br />
        <span className="cur-cmp">
          Currently, I'm working at{" "}
          <a href="https://byjus.com/" target="_blank" rel="noreferrer">
            BYJU's
          </a>
          .
        </span>
      </p>
      <div style={{display:"flex", gap: "1rem"}}> <Button
        className="lazy-load"
        css={BtnStyle}
        text={"View Resume"}
        onClick={onViewResume}
      />
       <Button
        className="lazy-load"
        css={BtnStyle}
        text={"Work Samples"}
        onClick={onViewSamples}
      /></div>
     
    </IntroComp>
  );
}

export default Introduction;
