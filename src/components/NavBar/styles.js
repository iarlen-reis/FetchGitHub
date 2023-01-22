import styled from "styled-components";

export const Aside = styled.aside`
  width: 100%;

  background: teal;
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

    color: #000;

    transition: 0.6s;
  }

  nav > a:hover {
    color: #aaa;
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  column-gap: 1rem;

  li a {
    font-weight: 500;
    font-style: italic;
    font-size: 1.3rem;
    color: #000;

    transition: 0.4s;

    &:hover {
      color: #aaa;
    }

    &.active {
      padding: 0.3rem;
      background: black;
      color: white;
    }
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

    background: #aaa;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const MenuIconContainerStyled = styled.div`
  display: none;

  svg {
    color: #fff;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
