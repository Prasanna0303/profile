import styled, { keyframes } from "styled-components";

const dashAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const FixedNavbar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: var(--nav-height);
  display: flex;
  padding: 0 3rem;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px -10px var(--navy-shadow);
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  align-items: center;
  &.without-shadow {
    box-shadow: none;
  }
  &.hide {
    transform: translateY(calc(var(--nav-height) * -1));
  }
  @media only screen and (max-width: 530px) {
    padding: 0 1.5rem;
  }
`;

export const LeftLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  animation-delay: 0.1s;
  .letter-v {
    cursor: pointer;
    svg {
      height: 2.5rem;
      width: auto;
      #v-svg {
        stroke-dasharray: 462;
        stroke-dashoffset: 462;
        animation: ${dashAnim} 3s ease infinite alternate;
      }
    }
  }
`;

export const RightLinks = styled.div`
  display: flex;
  align-items: center;
  .links {
    display: flex;
    li {
      list-style: none;
      margin: 0.25rem 1rem;
    }
    li:nth-child(1) {
      .anchor {
        animation-delay: 0.4s;
      }
    }
    li:nth-child(2) {
      .anchor {
        animation-delay: 0.6s;
      }
    }
    li:nth-child(3) {
      .anchor {
        animation-delay: 0.8s;
      }
    }
    li:nth-child(4) {
      .anchor {
        animation-delay: 1s;
      }
    }
    li:nth-child(5) {
      .anchor {
        animation-delay: 1.2s;
      }
    }
    .anchor {
      cursor: pointer;
      color: var(--white);
      text-decoration: none;
      position: relative;
      font-size: 0.9rem;
      display: inline-block;
      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 1px;
        left: 0;
        bottom: -1.5px;
        background-color: var(--green);
        transition: width 0.2s ease-in-out;
      }
      span {
        color: var(--green);
        font-size: 0.85rem;
      }
      &:hover {
        color: var(--green);
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
`;
