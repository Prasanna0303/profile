import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Links } from "../Desktop/index";
import { MediaContent } from "../../Socials";

function MobileSidebar({ setShowMenu }) {
  const [animate, setAnimate] = useState(false);
  const contentRef = useRef(null);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => {
      setShowMenu(false);
    }, 750);
  };
  const handleClick = (event) => {
    if (contentRef.current.contains(event.target)) return;
    closeModal();
  };
  return (
    <Modal onClick={handleClick}>
      <ModalContent ref={contentRef} className={animate ? "animate-hor" : ""}>
        <CloseModal onClick={closeModal} className={animate ? "animate" : ""}>
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
        </CloseModal>
        <MobileLinks>
          <Links onClick={closeModal} mobile={true} />
        </MobileLinks>
        <MediaContent mobile={true} />
      </ModalContent>
    </Modal>
  );
}

export default MobileSidebar;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: flex-end;
  z-index: 100;
`;

const ModalContent = styled.div`
  width: 75%;
  height: 100%;
  background-color: var(--navy);
  box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
  position: relative;
  padding: 3rem 1.5rem 4rem;
  transition: 0.5s ease-in-out;
  transform: translateX(100%);
  &.animate-hor {
    transform: translateX(0);
  }
`;

const CloseModal = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  .bar {
    width: 100%;
    position: absolute;
    height: 2px;
    top: calc(50% - 1px);
    left: 0;
    background-color: var(--white);
    transition: 0.5s ease-in-out 0.5s;
    transform-origin: center;
  }
  &.animate {
    .bar-1 {
      transform: rotate(45deg);
    }
    .bar-2 {
      transform: rotate(-45deg);
    }
  }
  @media only screen and (max-width: 530px) {
    right: 1.5rem;
  }
`;

const MobileLinks = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  .links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      list-style: none;
      margin: 0.25rem 1rem;
      text-align: center;
    }
    li:nth-child(1) {
      .anchor {
        animation-delay: 0.2s;
      }
    }
    li:nth-child(2) {
      .anchor {
        animation-delay: 0.4s;
      }
    }
    li:nth-child(3) {
      .anchor {
        animation-delay: 0.6s;
      }
    }
    li:nth-child(4) {
      .anchor {
        animation-delay: 0.8s;
      }
    }
    li:nth-child(5) {
      .anchor {
        animation-delay: 1s;
      }
    }
    .anchor {
      cursor: pointer;
      color: var(--white);
      text-decoration: none;
      position: relative;
      font-size: 1.5rem;
      display: inline-block;
      padding: 1rem;
      border-radius: 0.4rem;
      width: 100%;
      font-weight: 700;
      span {
        color: var(--green);
        font-size: 1rem;
      }
      &:hover {
        background-color: var(--dark-navy);
      }
    }
  }
`;
