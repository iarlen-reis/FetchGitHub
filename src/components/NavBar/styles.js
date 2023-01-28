import styled from "styled-components";

export const Aside = styled.aside`
  width: 100%;

  background: #0f0d26;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  nav {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem 1rem;

    margin: 0 auto;
  }

  nav > a {
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;

    color: #fff;

    transition: 0.6s;
  }

  nav > a:hover {
    color: #a52422;
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  li a {
    font-weight: 500;
    font-style: italic;
    font-size: 1.3rem;
    color: #fff;

    transition: 0.4s;

    &:hover {
      color: #a52422;
    }

    &.active {
      padding: 0.4rem;
      background: #a52422;
      color: #fff;
    }
  }

  li a svg {
    transform: scale(1);
    transition: 0.4s;
  }

  li a svg:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};

    width: 100%;
    height: 20%;

    position: absolute;
    justify-content: center;
    align-items: center;

    top: 5.3rem;
    left: 0;

    background: #2d4a8a;
  }
`;

export const MenuIconContainerStyled = styled.div`
  display: none;

  svg {
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const BackToTopStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  bottom: 2rem;
  right: 1rem;

  svg {
    transition: 0.4s;

    &:hover {
      color: #aaa;
      transform: scale(1.1);
    }
  }
`;
