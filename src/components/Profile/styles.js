import styled from "styled-components";

export const UserContainer = styled.div`
  max-width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 400px;
  row-gap: 0.5rem;
  margin: 0 auto;

  padding: 1rem;

  border-radius: 4px;

  background: #191948;

  h2 {
    color: #fff;
    font-style: italic;

    margin-bottom: 0.3rem;
  }

  div > img {
    max-width: 100%;

    border-radius: 4px;
    border: 1px solid #0e091b;
  }

  button {
    font-weight: 600;
    width: 100%;

    padding: 0.5rem;
    margin-top: 0.4rem;

    cursor: pointer;

    border: none;

    color: #fff;
    background: #988f33;

    &:hover {
      background: #454118;
    }
  }

  @media (max-width: 430px) {
    width: 300px;
  }

  @media (max-width: 358px) {
    width: 280px;
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.3rem;

  p {
    color: #fff;
    font-style: italic;
    font-weight: 600;

    flex-wrap: wrap;
  }

  p + div {
    width: 100%;
    display: flex;
    justify-content: center;

    column-gap: 0.8rem;
  }

  p + div span {
    font-style: italic;
    color: #fff;
  }

  div + div {
    font-style: italic;
    font-weight: 500;

    color: #fff;
  }
`;
