import styled from "styled-components";

export const DivRepository = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  column-gap: 0.5rem;
  row-gap: 0.7rem;
  background: #0f0d26;
  padding: 1rem;

  border-radius: 4px;

  h2 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    font-style: italic;
  }

  p {
    max-width: 100%;

    color: #fff;
    font-weight: 500;
    font-style: italic;

    text-align: center;

    background: red;
  }

  @media (max-width: 429px) {
    width: 350px;
  }

  p {
    font-size: 0.9rem;
  }

  @media (max-width: 390px) {
    width: 320px;
  }

  p {
    font-size: 0.8rem;
  }

  @media (max-width: 350px) {
    width: 300px;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 0.7rem;

  a {
    max-width: 190px;
    width: 100%;
    padding: 0.4rem;

    color: #fff;
    font-weight: bold;
    background: transparent;
    border: 1px solid #fff;

    cursor: pointer;
    transition: 0.6s;

    &:hover {
      background: #aaa;
      color: #000;
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  column-gap: 0.5rem;

  color: #fff;

  span {
    font-weight: 600;
  }
`;

export const TecInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 0.3rem;

  p {
    font-size: 1.1rem;
  }

  span {
    color: #fff;
    max-width: 300px;
  }
`;
