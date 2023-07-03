import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import { Header } from "../Experience/styles";
import { ContectMeCon, ContctMe } from "./styles";

function Contact() {
  const contactRef = useRef(null);
  const show = useOnIntersect(contactRef);

  return (
    <ContectMeCon
      ref={contactRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="contact-me"
    >
      <Header>Get In Touch</Header>
      <ContctMe>
        <p>I'm always open to new exciting opportunities and challenges.</p>
        <p>
          If you have any, please try to contact me with any one of the below
        </p>
        <div className="contact-wrp">
          <div className="contact">
            <span className="type">Mobile: </span>
            <a
              className="value"
              href="tel:+919494919091"
              target="_blank"
              rel="noreferrer"
            >
              +91 9494919091
            </a>
          </div>
          <div className="contact">
            <span className="type">Email: </span>
            <a
              className="value"
              href="mailto:prasannasai54@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              prasannasai54@gmail.com
            </a>
          </div>
          <div className="contact">
            <span className="type">LinkedIn: </span>
            <a
              className="value"
              href="https://www.linkedin.com/in/venkata-prasanna-c/"
              target="_blank"
              rel="noreferrer"
            >
              venkata-prasanna-c
            </a>
          </div>
        </div>
      </ContctMe>
    </ContectMeCon>
  );
}

export default Contact;
