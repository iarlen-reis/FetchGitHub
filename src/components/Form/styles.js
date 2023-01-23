import styled from "styled-components";

export const FormStyled = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 1.5rem;

  row-gap: 0.7rem;

  margin: 1rem auto;

  border-radius: 4px;
  background: #0f0d26;

  label {
    display: flex;
    flex-direction: column;

    row-gap: 0.4rem;
  }

  span {
    text-align: start;
    font-weight: 600;
    font-style: italic;
    color: #fff;
  }

  input[type="text"] {
    padding: 0.5rem 0.7rem;

    font-size: 1.2rem;
    font-style: italic;

    border: none;
    border-radius: 4px;

    background: #a4bab7;

    outline: none;
  }

  button {
    padding: 0.5rem;
    width: 160px;
    align-self: flex-end;

    font-weight: 600;
    font-style: italic;

    background: #898a2d;
    border: 1px solid #000;

    outline: none;

    cursor: pointer;
    transition: 0.6s;

    &:hover {
      color: #fff;
      background: #1b1b09;
    }
  }

  @media (max-width: 530px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 400px;
  }

  @media (max-width: 430px) {
    width: 380px;
  }

  @media (max-width: 398px) {
    width: 330px;
  }

  @media (max-width: 358px) {
    width: 300px;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;

  row-gap: 0.3rem;

  margin-top: 2rem;

  h1 {
    color: #fff;
    font-style: italic;
  }

  p {
    color: #aaa;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 700;
  color: #fff;
`;
