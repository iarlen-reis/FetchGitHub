import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0f0d26;

  address {
    font-weight: 500;
    font-style: italic;

    color: #fff;
  }

  a {
    color: #fff;
    margin-left: 0.2rem;

    transition: all 0.4s;

    &:hover {
      color: crimson;
    }
  }
`;
